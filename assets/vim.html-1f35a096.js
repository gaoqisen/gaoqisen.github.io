import{_ as t,X as d,Y as r,Z as e}from"./framework-6b2b1681.js";const n={},a=e(`<h2 id="vim键盘图" tabindex="-1"><a class="header-anchor" href="#vim键盘图" aria-hidden="true">#</a> vim键盘图</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看当前文件夹下面的文件数量
ls -l |grep &quot;^-&quot;|wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gaoqisen.github.io/GraphBed/201902/20190224171921.png" alt="vim键盘"></p><h2 id="vi小抄" tabindex="-1"><a class="header-anchor" href="#vi小抄" aria-hidden="true">#</a> vi小抄</h2><p><img src="https://gaoqisen.github.io/GraphBed/201902/20190224172118.png" alt="vim小抄"></p><h2 id="vi-常用" tabindex="-1"><a class="header-anchor" href="#vi-常用" aria-hidden="true">#</a> vi 常用</h2><table><thead><tr><th>进入vi</th><th></th></tr></thead><tbody><tr><td>vi filename</td><td>打开或新建文件，并将光标置于第一行首</td></tr><tr><td>vi +n filename</td><td>打开文件，并将光标置于第n行首</td></tr><tr><td>vi + filename</td><td>打开文件，并将光标置于最后一行首</td></tr><tr><td>vi +/pattern filename</td><td>打开文件，并将光标置于第一个与pattern匹配的串处</td></tr><tr><td>vi -r filename</td><td>在上次正用vi编辑时发生系统崩溃，恢复filename</td></tr><tr><td>vi filename....filename</td><td>打开多个文件，依次进行编辑</td></tr></tbody></table><table><thead><tr><th>退出vi</th><th></th></tr></thead><tbody><tr><td>w /tmp1</td><td>另存为/tmp1</td></tr><tr><td>20,59w /tmp1</td><td>仅将20-59行之间的内存另存为/tmp1</td></tr><tr><td>!command</td><td>执行shell命令command</td></tr><tr><td>wq</td><td>保存退出</td></tr><tr><td>n1,n2 w !command</td><td>将文件中n1行至n2行的内容作为command的输入并执行之，若不指定n1，n2，则表示将整个文件内容作为command的输入</td></tr><tr><td>r !command</td><td>将命令command的输出结果放到当前行</td></tr><tr><td>w !sudo tee %</td><td>保存没权限时，可获取权限再保存</td></tr></tbody></table><table><thead><tr><th>光标移动</th><th></th></tr></thead><tbody><tr><td>k、j、h、l</td><td>上、下、左、右</td></tr><tr><td>space</td><td>光标右移一个字符</td></tr><tr><td>Backspace</td><td>光标左移一个字符</td></tr><tr><td>Enter</td><td>光标下移一行</td></tr><tr><td>w(W)、b(B)</td><td>光标右、左移一个字至字首</td></tr><tr><td>e(E)</td><td>光标右移一个字至字尾</td></tr><tr><td>(、)</td><td>光标移至句首、尾</td></tr><tr><td>{、}</td><td>光标移至段落开头、结尾</td></tr><tr><td>nG</td><td>光标移至第n行首</td></tr><tr><td>n+、n-</td><td>光标下、上移n行</td></tr><tr><td>n$</td><td>光标移至第n行尾</td></tr><tr><td>H</td><td>光标移至屏幕顶行</td></tr><tr><td>M</td><td>光标移至屏幕中间行</td></tr><tr><td>L</td><td>光标移至屏幕最后行</td></tr><tr><td>0</td><td>（注意是数字零）光标移至当前行首</td></tr><tr><td>$</td><td>光标移至当前行尾</td></tr></tbody></table><table><thead><tr><th>搜索（查找）</th><th></th></tr></thead><tbody><tr><td>/abc</td><td>从光标开始处向文件尾搜索abc</td></tr><tr><td>?abc</td><td>从光标开始处向文件首搜索abc</td></tr><tr><td>//abc</td><td>从光标开始处向文件尾搜索/abc，其中/是转义</td></tr><tr><td>n</td><td>在同一方向重复上一次搜索命令</td></tr><tr><td>N</td><td>在反方向上重复上一次搜索命令</td></tr></tbody></table><table><thead><tr><th>替换</th><th></th></tr></thead><tbody><tr><td>s/vivian/sky/</td><td>替换当前行第一个 vivian 为 sky</td></tr><tr><td>s/vivian/sky/g</td><td>替换当前行所有 vivian 为 sky</td></tr><tr><td>n,$s/vivian/sky/</td><td>替换第 n 行开始到最后一行中每一行的第一个 vivian 为 sky</td></tr><tr><td>n,$s/vivian/sky/g</td><td>替换第 n 行开始到最后一行中每一行所有 vivian 为sky</td></tr><tr><td>%s/vivian/sky/g</td><td>（等同于 g/vivian/s//sky/） 替换每一行的每一个 vivian 为 sky</td></tr><tr><td>s#vivian/#sky/#</td><td>替换当前行第一个 vivian/ 为 sky/（可以使用 #或+作为分隔符，此时中间出现的 / 不会作为分隔符）</td></tr><tr><td>s/p1/p2/g</td><td>将当前行中所有p1均用p2替代</td></tr><tr><td>n1,n2s/p1/p2/g</td><td>将第n1至n2行中所有p1均用p2替代</td></tr><tr><td>g/p1/s//p2/g</td><td>将文件中所有p1均用p2替换</td></tr><tr><td>%s/^/123</td><td>把123添加到每行的行首</td></tr><tr><td>%s/$/123</td><td>把123添加到每行的行尾</td></tr><tr><td>g/^\\s*$/d</td><td>去除所有空白行</td></tr><tr><td>%s/\\n//g</td><td>删除换行符</td></tr></tbody></table><table><thead><tr><th>屏幕翻滚</th><th></th></tr></thead><tbody><tr><td>Ctrl+u</td><td>向文件首翻半屏</td></tr><tr><td>Ctrl+d</td><td>向文件尾翻半屏</td></tr><tr><td>Ctrl+f</td><td>向文件尾翻一屏</td></tr><tr><td>Ctrl＋b</td><td>向文件首翻一屏</td></tr><tr><td>nz</td><td>将第n行滚至屏幕顶部，不指定n时将当前行滚至屏幕顶部插入</td></tr><tr><td>i、a</td><td>在光标前 、后</td></tr><tr><td>I、A</td><td>在当前行首、尾</td></tr><tr><td>o</td><td>在当前行之下新开一行</td></tr><tr><td>O</td><td>在当前行之上新开一行</td></tr><tr><td>r</td><td>替换当前字符</td></tr><tr><td>s</td><td>从当前光标位置处开始，以输入的文本替代指定数目的字符</td></tr><tr><td>S</td><td>删除指定数目的行，并以所输入文本代替之</td></tr><tr><td>R</td><td>替换当前字符及其后的字符，直至按ESC键</td></tr><tr><td>ncw或 nCW</td><td>修改指定数目的字</td></tr><tr><td>nCC</td><td>修改指定数目的行</td></tr></tbody></table><table><thead><tr><th>删除</th><th></th></tr></thead><tbody><tr><td>ndw 或 ndW</td><td>删除光标处开始及其后的n-1个字</td></tr><tr><td>do 、d$</td><td>删至行首、行尾</td></tr><tr><td>x 或 X</td><td>删除一个字符，x删除光标后的，而X删除光标前的</td></tr><tr><td>ndd</td><td>删除当前行及其后n-1行</td></tr><tr><td>Ctrl+u</td><td>删除输入方式下所输入的文本</td></tr><tr><td>n1,n2 d</td><td>将n1行到n2行之间的内容删除</td></tr><tr><td>%d</td><td>删除全部内容</td></tr><tr><td>1,$d</td><td>删除全部内容</td></tr></tbody></table><table><thead><tr><th>复制粘贴、剪切、移动</th><th></th></tr></thead><tbody><tr><td>yy</td><td>复制当前行</td></tr><tr><td>nyy</td><td>复制当前行开始的n行</td></tr><tr><td>先按 v 然后方向键选择区域，按 y</td><td>复制选中行</td></tr><tr><td>dd</td><td>剪切当前行</td></tr><tr><td>p（小）</td><td>在当前光标处下面粘贴内容。</td></tr><tr><td>P（大）</td><td>在当前光标处上面粘贴内容</td></tr><tr><td>n1,n2 co n3</td><td>将n1行到n2行之间的内容拷贝到第n3行下</td></tr><tr><td>n1,n2 m n3</td><td>将n1行到n2行之间的内容移至到第n3行下</td></tr></tbody></table><table><thead><tr><th>选项设置</th><th></th></tr></thead><tbody><tr><td>set number</td><td>显示行号</td></tr><tr><td>set number!</td><td>不显示行号，其它选项同理加！号</td></tr><tr><td>set all</td><td>列出所有选项设置情况</td></tr><tr><td>set term</td><td>设置终端类型</td></tr><tr><td>set ignorance</td><td>在搜索中忽略大小写</td></tr><tr><td>set list</td><td>显示制表位(Ctrl+I)和行尾标志（$)</td></tr><tr><td>set report</td><td>显示由面向行的命令修改过的数目</td></tr><tr><td>set terse</td><td>显示简短的警告信息</td></tr><tr><td>set warn</td><td>在转到别的文件时若没保存当前文件则显示NO write信息</td></tr><tr><td>set nomagic</td><td>允许在搜索模式中，使用前面不带“”的特殊字符</td></tr><tr><td>set nowrapscan</td><td>禁止vi在搜索到达文件两端时，又从另一端开始</td></tr><tr><td>set mesg</td><td>允许vi显示其他用户用write写到自己终端上的信息</td></tr></tbody></table><table><thead><tr><th>寄存器</th><th></th></tr></thead><tbody><tr><td>&quot;?nyy</td><td>将当前行及其下n行的内容保存到寄存器？中，其中?为一个字母，n为一个数字</td></tr><tr><td>&quot;?nyw</td><td>将当前行及其下n个字保存到寄存器？中，其中?为一个字母，n为一个数字</td></tr><tr><td>&quot;?nyl</td><td>将当前行及其下n个字符保存到寄存器？中，其中?为一个字母，n为一个数字</td></tr><tr><td>&quot;?p</td><td>取出寄存器？中的内容并将其放到光标位置处。这里？可以是一个字母，也可以是一个数字</td></tr><tr><td>ndd</td><td>将当前行及其下共n行文本删除，并将所删内容放到1号删除寄存器中</td></tr></tbody></table>`,16),i=[a];function h(s,l){return d(),r("div",null,i)}const v=t(n,[["render",h],["__file","vim.html.vue"]]);export{v as default};