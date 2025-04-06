import{_ as l,X as s,Y as i,a0 as e,a1 as n,$ as t,Z as r,G as d}from"./framework-6b2b1681.js";const c={},o={href:"https://tech.meituan.com/2019/03/07/open-source-project-leaf.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Meituan-Dianping/Leaf",target:"_blank",rel:"noopener noreferrer"},h=r(`<h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 克隆
git clone https://github.com/funtl/Leaf.git
cd Leaf
mvn clean install -DskipTests

// 构建
cd leaf-docker
chmod +x build.sh
./build.sh

// 运行
docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#segment号段模式。需要建立DB表，并配置leaf.jdbc.url, leaf.jdbc.username, leaf.jdbc.password如果不想使用该模式配置leaf.segment.enable=false即可
curl http://localhost:8080/api/segment/get/leaf-segment-test
#snowflake雪花模式。算法取自twitter开源的snowflake算法。如果不想使用该模式配置leaf.snowflake.enable=false即可
curl http://localhost:8080/api/snowflake/get/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(f,p){const a=d("ExternalLinkIcon");return s(),i("div",null,[e("p",null,[n("官方服务开源: "),e("a",o,[n("https://tech.meituan.com/2019/03/07/open-source-project-leaf.html"),t(a)])]),e("p",null,[n("官方ID生成: "),e("a",u,[n("https://tech.meituan.com/2017/04/21/mt-leaf.html"),t(a)])]),e("p",null,[n("GitHub: "),e("a",m,[n("https://github.com/Meituan-Dianping/Leaf"),t(a)])]),h])}const _=l(c,[["render",v],["__file","leaf.html.vue"]]);export{_ as default};
