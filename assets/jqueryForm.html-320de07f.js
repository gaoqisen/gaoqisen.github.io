import{_ as n,X as s,Y as a,Z as t}from"./framework-6b2b1681.js";const p={},o=t(`<h2 id="一、实现方式" tabindex="-1"><a class="header-anchor" href="#一、实现方式" aria-hidden="true">#</a> 一、实现方式</h2><ul><li><p>导入jquery</p></li><li><p>将以下代码复制到html页面中</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用此方法获取表单是否合法</span>
    <span class="token keyword">function</span> <span class="token function">checkInputPostData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.validInputs&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j <span class="token operator">=</span> j<span class="token operator">+</span><span class="token function">inputDataValid</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 自定义表单效验 gqs</span>
    <span class="token keyword">function</span> <span class="token function">inputDataValid</span><span class="token punctuation">(</span><span class="token parameter">then</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> th<span class="token punctuation">,</span> promt<span class="token punctuation">,</span> value<span class="token punctuation">,</span> reg
        th <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>then<span class="token punctuation">)</span>
        promt <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.Validform_info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        value <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> value <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color:red&quot;&gt;&#39;</span><span class="token operator">+</span>th<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;nullmsg&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_right&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_wrong&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        reg <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;datatype&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">eval</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color:red&quot;&gt;&#39;</span><span class="token operator">+</span>th<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;errormsg&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_right&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_wrong&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color:red&quot;&gt;&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
        <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_right&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>input框写入自定义属性</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> 
    onblur<span class="token operator">=</span><span class="token string">&quot;inputDataValid(this)&quot;</span> 
    name<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> 
    type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> 
    <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;span3 validInputs&quot;</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 必须要validInputs的<span class="token keyword">class</span><span class="token punctuation">,</span>或者和checkInputPostData函数中的validInputs一致 <span class="token operator">--</span><span class="token operator">&gt;</span>
    datatype<span class="token operator">=</span><span class="token string">&quot;/^[a-zA-Z\\u4E00-\\u9FA5]{1,20}$/&quot;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 正则：用于效验表单 <span class="token operator">--</span><span class="token operator">&gt;</span>
    value<span class="token operator">=</span><span class="token string">&quot;123&quot;</span> 
    nullmsg<span class="token operator">=</span><span class="token string">&quot;此项不能为空&quot;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 表单为空时的提示 <span class="token operator">--</span><span class="token operator">&gt;</span>
    errormsg<span class="token operator">=</span><span class="token string">&quot;请填写字母或汉字&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 正则效验失败时的提示 <span class="token operator">--</span><span class="token operator">&gt;</span>
                        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在input下创建</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;Validform_info&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注：需要和下面的代码层级一致，如果不一致要注意层级查找（ th.parent().find(&quot;.Validform_info&quot;) ）的更换</p></blockquote><h2 id="二、全部代码" tabindex="-1"><a class="header-anchor" href="#二、全部代码" aria-hidden="true">#</a> 二、全部代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>简单的表单验证器<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.bootcss.com/jquery/3.3.1/core.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>Validform_right<span class="token punctuation">{</span>
        正确提示的css
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>Validform_wrong<span class="token punctuation">{</span>
        错误提示的css
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>table <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;gritter-with-table&quot;</span> cellspacing<span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>tbody id<span class="token operator">=</span><span class="token string">&quot;tbody&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>tr name<span class="token operator">=</span><span class="token string">&quot;posts&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>th<span class="token operator">&gt;</span>姓名：<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>input 
                        id<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> 
                        onblur<span class="token operator">=</span><span class="token string">&quot;inputDataValid(this)&quot;</span> 
                        name<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> 
                        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> 
                        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;span3 validInputs&quot;</span> 
                        datatype<span class="token operator">=</span><span class="token string">&quot;/^[a-zA-Z\\u4E00-\\u9FA5]{1,20}$/&quot;</span>
                        value<span class="token operator">=</span><span class="token string">&quot;123&quot;</span> 
                        nullmsg<span class="token operator">=</span><span class="token string">&quot;此项不能为空&quot;</span> 
                        errormsg<span class="token operator">=</span><span class="token string">&quot;请填写字母或汉字&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;Validform_info&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">&gt;</span>    
            <span class="token operator">&lt;</span>tr name<span class="token operator">=</span><span class="token string">&quot;posts&quot;</span><span class="token operator">&gt;</span>						
                <span class="token operator">&lt;</span>th<span class="token operator">&gt;</span>电话：<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>input 
                        onblur<span class="token operator">=</span><span class="token string">&quot;inputDataValid(this)&quot;</span> 
                        nullmsg<span class="token operator">=</span><span class="token string">&quot;此项不能为空&quot;</span> 
                        value<span class="token operator">=</span><span class="token string">&quot;1234&quot;</span> 
                        datatype<span class="token operator">=</span><span class="token string">&quot;/^[a-zA-Z\\u4E00-\\u9FA5]{1,40}$/&quot;</span> 
                        placeholder<span class="token operator">=</span><span class="token string">&quot;例：*********&quot;</span>  
                        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;span3 validInputs&quot;</span> 
                        id<span class="token operator">=</span><span class="token string">&quot;phone&quot;</span> 
                        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
                        name<span class="token operator">=</span><span class="token string">&quot;phone&quot;</span> <span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;Validform_info&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">&gt;</span>	
        <span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用此方法获取表单是否合法</span>
    <span class="token keyword">function</span> <span class="token function">checkInputPostData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.validInputs&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j <span class="token operator">=</span> j<span class="token operator">+</span><span class="token function">inputDataValid</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 自定义表单效验 gqs</span>
    <span class="token keyword">function</span> <span class="token function">inputDataValid</span><span class="token punctuation">(</span><span class="token parameter">then</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> th<span class="token punctuation">,</span> promt<span class="token punctuation">,</span> value<span class="token punctuation">,</span> reg
        th <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>then<span class="token punctuation">)</span>
        promt <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.Validform_info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        value <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> value <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color:red&quot;&gt;&#39;</span><span class="token operator">+</span>th<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;nullmsg&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_right&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_wrong&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        reg <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;datatype&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">eval</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color:red&quot;&gt;&#39;</span><span class="token operator">+</span>th<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;errormsg&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_right&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_wrong&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color:red&quot;&gt;&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
        <span class="token function">$</span><span class="token punctuation">(</span>promt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;Validform_right&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),e=[o];function l(c,i){return s(),a("div",null,e)}const u=n(p,[["render",l],["__file","jqueryForm.html.vue"]]);export{u as default};