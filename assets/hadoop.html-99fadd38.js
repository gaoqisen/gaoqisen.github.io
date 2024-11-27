import{_ as l,X as a,Y as d,a0 as e,a1 as n,$ as t,Z as s,G as r}from"./framework-6b2b1681.js";const v={},o=e("h1",{id:"安装hadoop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装hadoop","aria-hidden":"true"},"#"),n(" 安装hadoop")],-1),u={href:"https://hadoop.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},c=e("li",null,[e("p",null,"找到发布版本通过wget下载.gz的安装包。")],-1),m=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://mirror.bit.edu.cn/apache/hadoop/common/hadoop-3.1.1/hadoop-3.1.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>解压安装包</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar zxvf hadoop-3.1.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>hadoop环境变量</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vi ~/.bashrc  //  编辑环境变量的文件，并在最后追加如下内容。

#HADOOP VARIABLES START
export HADOOP_INSTALL=/usr/hadoop/hadoop-3.1.1   // hadoop解压路径
export PATH=$PATH:$HADOOP_INSTALL/bin
export PATH=$PATH:$HADOOP_INSTALL/sbin
export HADOOP_MAPRED_HOME=$HADOOP_INSTALL
export HADOOP_COMMON_HOME=$HADOOP_INSTALL
export HADOOP_HDFS_HOME=$HADOOP_INSTALL
export YARN_HOME=$HADOOP_INSTALL
export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_INSTALL/lib/native
export HADOOP_OPTS=&quot;-Djava.library.path=$HADOOP_INSTALL/lib&quot;
#HADOOP VARIABLES END

source ~/.bashrc  //生效

hadoop version   // 验证是否生效，查看版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编辑/etc/hadoop/hadoop-env.sh的默认jdk路径</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JAVA_HOME=/usr/java-jdk   //添加JAVA_HOME路径。不知道路径可以用echo $JAVA_HOME查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置hadoop/etc/hadoop/core-site.xml文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
    &lt;property&gt;
        &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;
        &lt;!-- hadoop数据存储路径 --&gt;
        &lt;value&gt;file:/usr/hadoop/hadoop-3.1.1/tmp&lt;/value&gt;  
        &lt;description&gt;Abase for other temporary directories.&lt;/description&gt;
    &lt;/property&gt;
    &lt;property&gt;
        &lt;name&gt;fs.defaultFS&lt;/name&gt;
        &lt;!-- hadoop访问路径 --&gt;
        &lt;value&gt;hdfs://localhost:9000&lt;/value&gt;
    &lt;/property&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置hadoop/etc/hadoop/hdfs-site.xml文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
    &lt;property&gt;
        &lt;name&gt;dfs.replication&lt;/name&gt;
        &lt;!-- 副本份数 --&gt;
        &lt;value&gt;1&lt;/value&gt;
    &lt;/property&gt;
    &lt;property&gt;
        &lt;name&gt;dfs.namenode.name.dir&lt;/name&gt;
         &lt;!-- namenode路径 --&gt;
        &lt;value&gt;file:/usr/hadoop/hadoop-3.1.1/tmp/dfs/name&lt;/value&gt;
    &lt;/property&gt;
    &lt;property&gt;
        &lt;name&gt;dfs.datanode.data.dir&lt;/name&gt;
         &lt;!-- datanode路径 --&gt;
        &lt;value&gt;file:/usr/hadoop/hadoop-3.1.1/tmp/dfs/data&lt;/value&gt;
    &lt;/property&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置hadoop/etc/hadoop/yarn-site.xml文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
  &lt;property&gt;
  &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;
  &lt;value&gt;mapreduce_shuffle&lt;/value&gt;
  &lt;/property&gt;
  &lt;property&gt;
  &lt;name&gt;yarn.nodemanager.aux-services.mapreduce.shuffle.class&lt;/name&gt;
  &lt;value&gt;org.apache.hadoop.mapred.ShuffleHandler&lt;/value&gt;
  &lt;/property&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置hadoop/etc/hadoop/mapred-site.xml文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv mapred-queues.xml.template mapred-queues.xml  // 重命名mapred-queues.xml.template文件

&lt;configuration&gt;
 &lt;property&gt;
 &lt;name&gt;mapred.job.tracker&lt;/name&gt;
 &lt;value&gt;localhost:9001&lt;/value&gt;
 &lt;/property&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>格式化hadoop</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd hadoop/bin  ./hadoop  // 应该2.8版本前需要初始化，3.1.1直接格式化一下   
hadoop namenode -format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动hadoop</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在sbin文件夹下依次执行：
start-dfs.sh 
start-yarn.sh 

如果报错：ERROR: Attempting to launch hdfs namenode as root 需要在start-dfs.sh和sbin/stop-dfs.sh 顶部空白处添加内容：

HDFS_DATANODE_USER=root  
HDFS_DATANODE_SECURE_USER=hdfs  
HDFS_NAMENODE_USER=root  
HDFS_SECONDARYNAMENODE_USER=root 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function p(g,b){const i=r("ExternalLinkIcon");return a(),d("div",null,[o,e("ul",null,[e("li",null,[e("p",null,[n("在"),e("a",u,[n("apache官网"),t(i)]),n("下载.")])]),c]),m])}const x=l(v,[["render",p],["__file","hadoop.html.vue"]]);export{x as default};
