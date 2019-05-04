
## 1. 无限轮播 
代码地址(https://github.com/gao182/plugin-test/blob/master/carousel.html)
预览地址(https://gao182.github.io/plugin-test/carousel.html)

### 无限轮播原理
分别克隆首个轮播节点和最后的轮播节点，将克隆的最后的轮播节点通过prepend加到页面轮播的最前面，同理，将克隆的首个节点通过append加到页面轮播的最后。
css设置轮播节点的浮动，js设置轮播节点的父容器总宽，并让页面显示时显示的是正常的首个轮播节点
在左右轮播时，让包裹容器偏移，并使用animate动画。最重要的是，当轮播滚动到克隆后加入的首个/最后一个时，立即设置父容器的偏移量，让父容器处于正常的首个/最后一个，就实现了无线轮播


## 2. 正反两面切换
代码地址(https://github.com/gao182/plugin-test/blob/master/Login-transform.html)
预览地址(https://gao182.github.io/plugin-test/Login-transform.html)

### 原理
通过定位，让两个元素重叠，通过transform的rotateY让元素平移翻转,backface-visibility即隐藏该元素的背面
`transform: translate(-50%, -50%) rotateY(180deg);`   沿着Y轴翻转180度
`transition: all 2s;`        所有效果过渡时间2s
`backface-visibility: hidden;`  隐藏被旋转的 div 元素的背面


## 3. 标签jQuery插件
代码地址(https://github.com/gao182/plugin-test/blob/master/tab_jquery.html)
预览地址(https://gao182.github.io/plugin-test/tab_jquery.html)

### 原理
通过 `$.fn.exampleName = exampleFunction` 来创建插件的方法 ,通过 `$('').exampleName()` 来调用方法


## 4. waterfall 
代码地址(https://github.com/gao182/plugin-test/blob/master/waterfall.html)
预览地址(https://gao182.github.io/plugin-test/waterfall.html)

### 懒加载原理
先将 img 标签中的 src 链接设为示例图片（例如空白图片），并将其真正的图片地址存在img标签的自定义的属性中(例如 data-src)。
当 js 监听到该图片进入到视窗( $(window).scrollTop() + $(window).height = $('img').offset().top )，便将 src 的地址换成 data-src 中的正常地址，达到懒加载的效果。
这样做能防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题。

### 瀑布流原理
瀑布流需要对进行布局的元素做等宽处理，然后计算元素的宽度与容器宽度（例如浏览器）之比，得到需要布置的列数。
然后创建一个数组，长度为列数，里面的值为每列已布置元素的总高度（最开始为0）
然后将未布置的元素依次布置到高度最小的那一列，就得到了瀑布流布局。

### 实现原理
$.ajax 通过 JSONP 向网址发送请求，得到数据，创建节点将得到的数据遍历追加到容器内，在图片加载完成后，按照懒加载或瀑布流布局的原理，对页面进行懒加载或瀑布流布局。
