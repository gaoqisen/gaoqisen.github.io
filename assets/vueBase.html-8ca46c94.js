import{_ as s,X as r,Y as a,a0 as e,a1 as n,$ as t,Z as l,G as u}from"./framework-6b2b1681.js";const o={},d=l('<blockquote><p>目标：了解Vue, 了解常用的Vue的一些工具，用vue cli搭建一个测试用例，在浏览器上面运行起来。</p></blockquote><h2 id="了解vue" tabindex="-1"><a class="header-anchor" href="#了解vue" aria-hidden="true">#</a> 了解Vue</h2><h3 id="百科定义" tabindex="-1"><a class="header-anchor" href="#百科定义" aria-hidden="true">#</a> 百科定义</h3><p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。</p><h3 id="同类的技术" tabindex="-1"><a class="header-anchor" href="#同类的技术" aria-hidden="true">#</a> 同类的技术</h3>',5),v={href:"https://www.angularjs.net.cn/tutorial/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://zh-hans.reactjs.org/",target:"_blank",rel:"noopener noreferrer"},p=l('<blockquote><p>AngularJS、React、Vue.js并称前端3大框架。</p></blockquote><h3 id="同类技术优缺点" tabindex="-1"><a class="header-anchor" href="#同类技术优缺点" aria-hidden="true">#</a> 同类技术优缺点</h3><p><img src="https://gaoqisen.github.io/GraphBed/201908/20190810153240.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190810153240.png"></p><table><thead><tr><th></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>Vue.js</td><td>轻量级,学习成本低</td><td>生态不太成熟</td></tr><tr><td>angularJS</td><td>有优秀的组件系统</td><td>学习曲线是非常陡峭</td></tr><tr><td>React</td><td>丰富的生态系统</td><td>学习曲线陡峭</td></tr></tbody></table>',4),m={href:"https://cn.vuejs.org/v2/guide/comparison.html#AngularJS-Angular-1",target:"_blank",rel:"noopener noreferrer"},b=l('<ul><li><p>vue vs React :合严格的 Flux 架构，适合超大规模多人协作的复杂项目。理论上 Vue 配合类似架构也可以胜任这样的用例，但缺少类似 Flux 这样的官方架构。小快灵的项目上，Vue 和 React 的选择更多是开发风格的偏好。对于需要对 DOM 进行很多自定义操作的项目，Vue 的灵活性优于 React。</p></li><li><p>vue vs Angular：Angular的学习曲线是非常陡峭的——作为一个框架，它的 API 面积比起 Vue 要大得多，你也因此需要理解更多的概念才能开始有效率地工作。当然，Angular 本身的复杂度是因为它的设计目标就是只针对大型的复杂应用；但不可否认的是，这也使得它对于经验不甚丰富的开发者相当的不友好。</p></li></ul><h3 id="渐进式javascript框架" tabindex="-1"><a class="header-anchor" href="#渐进式javascript框架" aria-hidden="true">#</a> 渐进式JavaScript框架</h3><p>vue官网的第一句话就是渐进式JavaScript框架，我的理解就是循序渐进可以自底向上逐层应用开发的框架，可以单独一个页面用来做表单，也可以整个项目用来做框架，可以一步一步引入vue，模块化需要那个就引入那个。</p><h2 id="vue时间轴" tabindex="-1"><a class="header-anchor" href="#vue时间轴" aria-hidden="true">#</a> Vue时间轴</h2><p><img src="https://gaoqisen.github.io/GraphBed/201908/20190810165334.png" alt="尤雨溪"></p><ul><li><p>2013: 在Google工作的尤雨溪，受到Angular的启发，从中提取自己所喜欢的部分，开发出了一款轻量框架，最初命名为Seed。</p></li><li><p>2013.12：这粒种子发芽了，更名为Vue，版本号是0.6.0。</p></li><li><p>2014.01.24：Vue正式对外发布，版本号是0.8.0。</p></li><li><p>2014.02.25：vue版本0.9.0发布（代号Animatrix动画版的骇客帝国），此后重要的版本都会有自己的代号。</p></li><li><p>2015.06.13：vue版本0.12.0发布（代号Dragon Ball龙珠），这一年Vue大爆发，Laravel 社区（一款流行的 PHP 框架的社区）首次使用 Vue，Vue在JS社区也打响了知名度。</p></li><li><p>2015.08.18：vue里程碑-新世纪福音战士发布。vue-router（2015-08-18）、vuex（2015-11-28）、vue-cli（2015-12-27）相继发布，标志着 Vue从一个视图层库发展为一个渐进式框架。</p></li><li><p>2016.9.3：尤雨溪正式宣布加盟阿里巴巴Weex团队，尤雨溪称他将以技术顾问的身份加入 Weex 团队来做 Vue 和 Weex 的 JavaScript runtime 整合，目标是让大家能用 Vue 的语法跨三端</p></li><li><p>2016.9.30: vue版本2.0.0 （Ghost in the Shell 攻壳机动队）发布，这是第二个重要的里程碑，它吸收了React的Virtual Dom方案，还支持服务端渲染。</p></li><li><p>2018.9.30： 发布了 Vue 3.0 的开发路线，会保持与 2.x 的兼容并表示将从头开始重写 3.0</p></li><li><p>2019.2.4：vue版本2.6.0 （Macross超时空要塞）发布了。新增了Scoped slots(作用域插槽)的新语法、 动态参数指令、响应对象等新特性。</p></li></ul><h2 id="一点小知识" tabindex="-1"><a class="header-anchor" href="#一点小知识" aria-hidden="true">#</a> 一点小知识</h2><h3 id="vue学习之前需要了解" tabindex="-1"><a class="header-anchor" href="#vue学习之前需要了解" aria-hidden="true">#</a> Vue学习之前需要了解:</h3>',8),h={href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.npmjs.cn/getting-started/what-is-npm/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://npm.taobao.org",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.webpackjs.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://caibaojian.com/es6/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.w3school.com.cn/html5/index.asp",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.w3school.com.cn/css/index.asp",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.w3school.com.cn/js/index.asp",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.kancloud.cn/dataoedu/vue/327238",target:"_blank",rel:"noopener noreferrer"},j={href:"https://vscode.en.softonic.com/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},y={href:"https://iviewui.com/docs/guide/install",target:"_blank",rel:"noopener noreferrer"},B={href:"https://segmentfault.com/u/aresn",target:"_blank",rel:"noopener noreferrer"},J=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 在main.js中全局引入element
  import ElementUI from &#39;element-ui&#39;
  import &#39;element-ui/lib/theme-chalk/index.css&#39;
  Vue.use(ElementUI)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),G={href:"https://doc.vux.li/zh-CN/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://didi.github.io/cube-ui/#/zh-CN/example",target:"_blank",rel:"noopener noreferrer"},A={href:"https://vuepress.vuejs.org/zh/guide/#todo",target:"_blank",rel:"noopener noreferrer"},I=l('<h3 id="vue组成方式-mvvm模式以及两个核心点" tabindex="-1"><a class="header-anchor" href="#vue组成方式-mvvm模式以及两个核心点" aria-hidden="true">#</a> Vue组成方式(MVVM模式以及两个核心点)</h3><ul><li><p>MVVM模式</p><p><img src="https://gaoqisen.github.io/GraphBed/201908/20190810191221.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190810191221.png"></p><p><img src="https://gaoqisen.github.io/GraphBed/201908/20190811121954.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190811121954.png"> Model(数据层)-View(视图层)-ViewModel(视图和数据的链接层)，ViewModel层连接Model和View。View层和Model层并没有直接联系，而是通过ViewModel层进行交互。ViewModel层通过双向数据绑定将View层和Model层连接了起来，使得View层和Model层的同步工作完全是自动的。因此开发者只需关注业务逻辑，无需手动操作DOM，复杂的数据状态维护交给MVVM统一来管理 <img src="https://gaoqisen.github.io/GraphBed/201908/20190810191714.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190810191714.png"></p></li><li><p>数据驱动</p><blockquote><p>所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。它相比我们传统的前端开发，如使用 jQuery 等前端库直接修改 DOM，大大简化了代码量。特别是当交互复杂的时候，只关心数据的修改会让代码的逻辑变的非常清晰，因为 DOM 变成了数据的映射，我们所有的逻辑都是对数据的修改，而不用碰触 DOM，这样的代码非常利于维护。</p></blockquote></li><li><p>组件化</p></li></ul><blockquote><p>所谓组件化，就是把页面拆分成多个组件 (component)，每个组件依赖的 CSS、JavaScript、模板、图片等资源放在一起开发和维护。组件是资源独立的，组件在系统内部可复用，组件和组件之间可以嵌套。</p></blockquote><ul><li>代码结构</li></ul><p><img src="https://gaoqisen.github.io/GraphBed/201908/20190810152605.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190810152605.png"></p>',5),C={href:"https://segmentfault.com/a/1190000011381906",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[e("img",{src:"https://gaoqisen.github.io/GraphBed/201902/vue.png",alt:"https://gaoqisen.github.io/GraphBed/201902/vue.png"})],-1),N={href:"https://ustbhuangyi.github.io/vue-analysis/data-driven/",target:"_blank",rel:"noopener noreferrer"},R=l(`<h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><h3 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式" aria-hidden="true">#</a> 安装方式</h3><ul><li>在官网下载Node.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node -v  // 查看node版本
npm -v  // 查看npm版本
npm install cnpm -g  // 全局安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org    // 指定地址安装cnpm
cnpm install vue  // 安装最新稳定版本的vue
vue --version   // 查看vue版本
cnpm install --global vue-cli  // cnpm 全局安装vue脚手架，
npm install -g @vue/cli   // npm 全局安装vue脚手架
vue init webpack my-project  // 创建一个基于 webpack 模板的新项目
cd my-project  // 到达项目根目录
cnpm install  // 安装依赖
cnpm run dev  // 启动项目，或者npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>vue脚手架安装时的选项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❯   vue build 构建方式,两个选择（上下箭头选择，回车即为选定）
    Runtime + Compiler:recommended for most users (译：运行+编译：被推荐给大多数用户)
    Runtime-only:about 6KB lighter min+gzip,but templates (or any Vue-specific HTML) are ONLY allowed in .vue files-render functions are required elsewhere(译：只运行大约6KB比较轻量的压缩文件，但只允许模板（或任何VUE特定HTML）。VUE文件需要在其他地方呈现函数。(意思大概是选择该构建方式对文件大小有要求, 这里推荐使用1选项，适合大多数用户的)
    Standard (https://github.com/standard/standard)  js的标准风格
    Airbnb (https://github.com/airbnb/javascript) JavaScript最合理的方法，这个github地址说是JavaScript最合理的方法
    none (configure it yourself) 自己配置
    Setup unit tests?  是否安装单元测试
    Setup e2e tests with Nightwatch(Y/n)?是否安装E2E测试框架NightWatch（E2E，也就是End To End，就是所谓的“用户真实场景”。）
    yes,use npm(使用npm)
    yes,use yarn(使用yarn)
    no,I will handle that myself(自己操作)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果报以下的错误，就安装缺少依赖(cnpm install)，全部安装完成之后就可以通过链接访问了。 <img src="https://gaoqisen.github.io/GraphBed/201908/20190810192702.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190810192702.png"></p></li><li><p>访问http://localhost:8080出现vue标识表示安装成功</p></li></ul><p><img src="https://gaoqisen.github.io/GraphBed/201908/20190810163742.png" alt="https://gaoqisen.github.io/GraphBed/201908/20190810163742.png"></p>`,6),z={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},D=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>routes: [
{
 // 路由路径，浏览器网址输入栏的路径
  path: &#39;/&#39;,   
  // 通过name属性，为一个页面中不同的router-view渲染不同的组件,如：将上面代码的Hello渲染在 name为Hello的router-view中，将text渲染在name为text的router-view中。不设置name的将为默认的渲染组件。&lt;router-view  name=&quot;test&quot;&gt;12345645645&lt;/router-view&gt;
  name: &#39;HelloWorld&#39;,  
  // 导入的组件import HelloWorld from &#39;@/components/HelloWorld&#39;
  component:  HelloWorld
},
]
// 页面跳转方式
&lt;router-link to=&quot;/test&quot;&gt;测试1&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=l(`<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><ul><li>package.json</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
 &quot;name&quot;: &quot;ffdd-fast-vue&quot;,    // 项目名称
 &quot;version&quot;: &quot;1.2.2&quot;,  // 版本
 &quot;description&quot;: &quot;...&quot;,  // 描述
 &quot;author&quot;: &quot;&quot;,   // 作者
 &quot;private&quot;: true,   // 是否私有
 &quot;scripts&quot;: {
   &quot;dev&quot;: &quot;webpack-dev-server --inline --progress --config build/webpack.dev.conf.js&quot;,  // npm run dev 执行的语句
   &quot;start&quot;: &quot;npm run dev&quot;,  // 项目启动
   &quot;unit&quot;: &quot;jest --config test/unit/jest.conf.js --coverage&quot;,  // 单元测试
   &quot;e2e&quot;: &quot;node test/e2e/runner.js&quot;,  // 前端到后端整个过程的测试
   &quot;test&quot;: &quot;npm run unit &amp;&amp; npm run e2e&quot;,  // 测试
   &quot;lint&quot;: &quot;eslint --ext .js,.vue src test/unit/specs test/e2e/specs&quot;,  // 修改代码样式,  运行之后就不报ESLint的错误
   &quot;build&quot;: &quot;gulp&quot;  // 构建
 },
 &quot;dependencies&quot;: {   // 生产环境所有的第三方依赖
   &quot;axios&quot;: &quot;0.17.1&quot;,  // 代替ajax
   &quot;babel-plugin-component&quot;: &quot;0.10.1&quot;,  // 按需加载插件
   &quot;babel-polyfill&quot;: &quot;6.26.0&quot;,  // 按需加载进行性能优化插件
   &quot;element-ui&quot;: &quot;2.8.2&quot;,   // 饿了么提供UI框架
   &quot;gulp&quot;: &quot;3.9.1&quot;,  // 自动化构建工具
   &quot;gulp-concat&quot;: &quot;2.6.1&quot;,  // 文件合并插件
   &quot;gulp-load-plugins&quot;: &quot;1.5.0&quot;,  // 自动加载插件
   &quot;gulp-replace&quot;: &quot;0.6.1&quot;,  // 文件替换插件
   &quot;gulp-shell&quot;: &quot;0.6.5&quot;,  // 命令行插件
   &quot;lodash&quot;: &quot;4.17.5&quot;,  // JavaScript 实用工具库。
   &quot;node-sass&quot;: &quot;4.9.0&quot;,  // sass编译成css
   &quot;npm&quot;: &quot;^6.9.0&quot;,
   &quot;sass-loader&quot;: &quot;6.0.6&quot;,  // 是webpack的一个loader, 
   &quot;svg-sprite-loader&quot;: &quot;3.7.3&quot;,  // 实现自己的Icon组件
   &quot;vue&quot;: &quot;2.5.2&quot;,
   &quot;vue-cookie&quot;: &quot;1.1.4&quot;,  // cookie插件
   &quot;vue-router&quot;: &quot;3.0.1&quot;,   // vue 路由
   &quot;vuex&quot;: &quot;3.0.1&quot;  // vue状态管理
 },
 &quot;devDependencies&quot;: {  // 开发环境所有的第三方依赖
   &quot;autoprefixer&quot;: &quot;7.1.2&quot;,  // 自动补全css前缀
   &quot;babel-core&quot;: &quot;6.22.1&quot;,  // 把 js 代码分析成 ast ,方便各个插件分析语法进行相应的处理
   &quot;babel-eslint&quot;: &quot;7.1.1&quot;,  // 语法检查
   &quot;babel-jest&quot;: &quot;21.0.2&quot;,  // 单元测试
   ...
 },
 &quot;engines&quot;: {   // 引擎
   &quot;node&quot;: &quot;&gt;= 8.11.1&quot;,
   &quot;npm&quot;: &quot;&gt;= 5.6.0&quot;
 },
 &quot;browserslist&quot;: [  // 浏览器列表
   &quot;&gt; 1%&quot;,    // 全球超过1%人使用的浏览器
   &quot;last 2 versions&quot;,  // 所有浏览器兼容到最后两个版本根据CanIUse.com追踪的版本
   &quot;not ie &lt;= 8&quot;   // 方向排除部分版本
 ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>config/index.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;use strict&#39;
 // 模版版本号: 1.3.1
 // see http://vuejs-templates.github.io/webpack for documentation.
 
 const path = require(&#39;path&#39;)
 
 module.exports = {
   dev: {    // npm run dev 执行参数
     // 路径
     assetsSubDirectory: &#39;static&#39;, // 静态文件路径
     assetsPublicPath: &#39;/&#39;,  
     // 代理列表
     proxyTable : {
       &#39;/proxyApi&#39;: {
         target: &#39;http://localhost:8887/&#39;,  // 代理地址
         changeOrigin: true,   // 变化源
         pathRewrite: {    // 路径重写
           &#39;^/proxyApi&#39;: &#39;/&#39;
         }
       }
     },
     // 各种开发服务器设置
     host: &#39;localhost&#39;, // 可以被p<wbr>rocess.env.HOST覆盖
     port: 8080, // 可以被p<wbr>rocess.env.PORT覆盖，如果端口正在使用，将换一个端口
     autoOpenBrowser: false,  // 自动打开浏览器
     errorOverlay: true,  // 异常覆盖
     notifyOnErrors: true,  // 异常通知
     poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
 
     // 如果为true，则在捆绑期间将对您的代码进行处理，linting错误和警告将显示在控制台中
     useEslint: true,
     // 如果为true, 错误和警告也将显示在错误覆盖中
     showEslintErrorsInOverlay: false,
 
     /**
      * Source Maps
      */
 
     // 开发环境工具
     devtool: &#39;cheap-module-eval-source-map&#39;,
 
     // 缓存破坏
     // https://vue-loader.vuejs.org/en/options.html#cachebusting
     cacheBusting: true,
     cssSourceMap: true
   },
 
   build: {  // npm run build 执行参数
     // index.html文件路径指定
     index: path.resolve(__dirname, &#39;../dist/index.html&#39;),
     // 构建后路径指定、资源文件夹名、公开路径
     assetsRoot: path.resolve(__dirname, &#39;../dist&#39;),
     assetsSubDirectory: &#39;static&#39;,
     assetsPublicPath: &#39;/&#39;,
 
     /**
      * 生产环境的Source Maps
      */
 
     productionSourceMap: true,
     // https://webpack.js.org/configuration/devtool/#production
     devtool: &#39;#source-map&#39;,
 
      //默认情况下Gzip关闭许多流行的静态主机，例如Surge或Netlify已经为您准备了所有静态资源。
      //在设置为“true”之前，请确保：npm install --save-dev compression-webpack-plugin
     productionGzip: false,
     productionGzipExtensions: [&#39;js&#39;, &#39;css&#39;],
 
     //运行带有额外参数的build命令
      //在构建完成后查看捆绑分析器报告：\`npm run build --report\`
     bundleAnalyzerReport: p<wbr>rocess.env.npm_config_report
   }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4);function T(U,P){const i=u("ExternalLinkIcon");return r(),a("div",null,[d,e("p",null,[e("a",v,[n("AngularJS"),t(i)]),n(": 诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVC（Model–view–controller）、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。")]),e("p",null,[e("a",c,[n("React"),t(i)]),n(": 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。")]),p,e("p",null,[n("vue对比链接："),e("a",m,[n("https://cn.vuejs.org/v2/guide/comparison.html#AngularJS-Angular-1"),t(i)])]),b,e("ul",null,[e("li",null,[e("p",null,[e("a",h,[n("Node.js"),t(i)]),n("：运行在服务端的 JavaScript，是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。")])]),e("li",null,[e("p",null,[e("a",g,[n("npm"),t(i)]),n("、"),e("a",q,[n("cnpm"),t(i)]),n(" : npm是nodejs的包管理器，cnpm是淘宝 NPM 镜像，用来加速。")])]),e("li",null,[e("p",null,[e("a",_,[n("webpack"),t(i)]),n(": 基于node的一个现代 JavaScript 应用程序的静态模块打包器")])]),e("li",null,[e("p",null,[e("a",f,[n("ECMAScript 6"),t(i)]),n(": ECMAScript 6.0（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。")])]),e("li",null,[e("p",null,[e("a",x,[n("html"),t(i)]),n("、"),e("a",w,[n("css"),t(i)]),n("、"),e("a",V,[n("JavaScript"),t(i)]),n("的基础")])]),e("li",null,[e("p",null,[e("a",k,[n("vue官网"),t(i)]),n(": 官方文档")])]),e("li",null,[e("p",null,[e("a",S,[n("看云Vue文档"),t(i)]),n(": 二手文档")])]),e("li",null,[e("p",null,[e("a",j,[n("VSCode"),t(i)]),n("：速度较快，对超大文件读写速度飞快(打开10M代码不到1s)，插件数量相对少，有一些增强功能比如调试器， 终端，原生支持语言语法高亮较少(C# JS TypeScript是第一位)，内置JS/TS调试器…可以基于不同项目(文件夹)设置偏好，写C#和JS/TS专用")])]),e("li",null,[e("p",null,[e("a",M,[n("Element-UI"),t(i)]),n(": 饿了么提供的UI框架。"),e("a",y,[n("iView"),t(i)]),n("："),e("a",B,[n("一个团队"),t(i)])]),J]),e("li",null,[e("p",null,[e("a",G,[n("维护靠个人的vux"),t(i)]),n(": 基于webpack+vue-loader+vux可以快速开发移动端页面，配合vux-loader方便你在WeUI的基础上定制需要的样式。"),e("a",E,[n("滴滴的cube-ui"),t(i)])])]),e("li",null,[e("p",null,[e("a",A,[n("vuepress"),t(i)]),n(": Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")])])]),I,e("ul",null,[e("li",null,[n("Vue的生命周期图(当遇到页面初始化的时候需要处理一下逻辑的时候，在什么时候触发函数) 。详细的生命周期解释："),e("a",C,[n("https://segmentfault.com/a/1190000011381906"),t(i)])])]),O,e("ul",null,[e("li",null,[n("技术揭秘"),e("a",N,[n("https://ustbhuangyi.github.io/vue-analysis/data-driven/"),t(i)])])]),R,e("ul",null,[e("li",null,[e("a",z,[n("vue路由"),t(i)]),D])]),H])}const L=s(o,[["render",T],["__file","vueBase.html.vue"]]);export{L as default};
