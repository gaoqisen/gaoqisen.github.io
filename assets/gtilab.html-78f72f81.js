import{_ as e,X as i,Y as n,Z as a}from"./framework-6b2b1681.js";const s={},d=a(`<h2 id="gitlab私有代码存储仓库" tabindex="-1"><a class="header-anchor" href="#gitlab私有代码存储仓库" aria-hidden="true">#</a> Gitlab私有代码存储仓库</h2><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
    web:
      image: &#39;twang2218/gitlab-ce-zh:10.5&#39;
      restart: always
      hostname: &#39;192.168.75.145&#39;
      environment:
        TZ: &#39;Asia/Shanghai&#39;
        GITLAB_OMNIBUS_CONFIG: |
          external_url &#39;http://192.168.75.145:8080&#39;
          gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222
          unicorn[&#39;port&#39;] = 8888
          nginx[&#39;listen_port&#39;] = 8080
      ports:
        - &#39;8080:8080&#39;
        - &#39;8443:443&#39;
        - &#39;2222:22&#39;
      volumes:
        - /usr/local/docker/gitlab/config:/etc/gitlab
        - /usr/local/docker/gitlab/data:/var/opt/gitlab
        - /usr/local/docker/gitlab/logs:/var/log/gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://ip:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="maven私有仓库" tabindex="-1"><a class="header-anchor" href="#maven私有仓库" aria-hidden="true">#</a> Maven私有仓库</h2><h4 id="创建-1" tabindex="-1"><a class="header-anchor" href="#创建-1" aria-hidden="true">#</a> 创建</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
  nexus:
    restart: always
    image: sonatype/nexus3
    container_name: nexus
    ports:
      - 8081:8081
    volumes:
      - /usr/local/docker/nexus/data:/nexus-data
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问-1" tabindex="-1"><a class="header-anchor" href="#访问-1" aria-hidden="true">#</a> 访问</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://ip:port/ 用户名：admin 密码：admin123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker私有镜像仓库" tabindex="-1"><a class="header-anchor" href="#docker私有镜像仓库" aria-hidden="true">#</a> Docker私有镜像仓库</h2><h4 id="创建-2" tabindex="-1"><a class="header-anchor" href="#创建-2" aria-hidden="true">#</a> 创建</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
  registry:
    image: registry
    restart: always
    container_name: registry
    ports:
      - 5000:5000
    volumes:
      - /usr/local/docker/registry/data:/var/lib/registry
# Registry WebUI 工具      
version: &#39;3.1&#39;
services:
  frontend:
    image: konradkleine/docker-registry-frontend:v2
    ports:
      - 8080:80
    volumes:
      - ./certs/frontend.crt:/etc/apache2/server.crt:ro
      - ./certs/frontend.key:/etc/apache2/server.key:ro
    environment:
      - ENV_DOCKER_REGISTRY_HOST=192.168.75.133
      - ENV_DOCKER_REGISTRY_PORT=5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问-2" tabindex="-1"><a class="header-anchor" href="#访问-2" aria-hidden="true">#</a> 访问</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 访问http://ip:5000/v2/，http://ip:5000
// 在/etc/docker/daemon.json中新增
{
  &quot;registry-mirrors&quot;: [
    &quot;https://registry.docker-cn.com&quot;
  ],
  &quot;insecure-registries&quot;: [
    &quot;ip:5000&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问-重启" tabindex="-1"><a class="header-anchor" href="#访问-重启" aria-hidden="true">#</a> 访问 重启</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),r=[d];function l(t,v){return i(),n("div",null,r)}const u=e(s,[["render",l],["__file","gtilab.html.vue"]]);export{u as default};
