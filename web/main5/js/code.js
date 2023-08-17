!function () {
    var cssCode = window.cssCode = `
/*扒拉扒拉网简介
简介可能有点长，请耐心等候
请允许我做一个简单的介绍，但是纯文字太单调，所以我想来点特别的。
首先我准备一下样式。*/
*{
	transition: all .5s;
}
/*白色伤眼睛，来点暗色系的背景吧！*/
html{
	background: #333034;
}
/*让我们给它加一个边框吧*/
#code{
    border: 2px solid #00FF1B;
    padding: 25px;
}
/*代码看不清楚？来点高亮吧！*/
.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.punctuation{
    color: #f8f8f2;
}
.token.function{
    color: red;
}
#code{
    color: #f8f8f2;
}
/*来点动画吧*/
#code{
    animation: breath 4s linear infinite;
}
/*现在开始写简介吧*/
/*首先我需要一张纸*/
`
    var htmlCode = window.htmlCode = `
#code{
    display: inline-block;
    position: fixed;
    right: 0;
    width: 50%;
    height: 80%;
    margin-right: 20px;
}
#paper{
    position: fixed;
    left: 0;
    width: 45%;
    height: 80%;
    background: linear-gradient(to bottom, #f4f39e, #f5da41); 
    padding: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    margin-top: 30%;
}
/*掉下去了！怎么办？*/
/*没关系，再用胶带粘住它*/
#paper:after {
    width: 25%;
    height: 5%;
    content: " ";
    margin-left: -90px;
    border: 1px solid rgba(200, 200, 200, .8);
    background: rgba(254, 254, 254, .6);
    box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    transform: rotate(-5deg);
    position: absolute;
    left: 50%;
    top:-15px;
}
#paper{
    margin-top: 50px;
}
`
    var markdown = window.markdown = `
# 人物介绍
## 基本资料
**姓名：扒拉扒拉网**
**年龄：快一个月啦**
**坐标：火星未命名坑洞**
**QQ: 761810885**
**微信：I-love-you__forever**
****
## 技能介绍
一技能 追漫画 cd：2s
二技能 追小说 cd:0.2s
三技能 打游戏 cd:0s
四技能 睡大觉 cd:1s 
五技能 立刻刷新技能cd cd:0s
`
    var changeCode = window.changeCode = `
/*这样看起来很不舒服？让我们把markdown转换成更易读的显示方式吧*/
`
    var conclusion = window.conclusion = `
/*好了，这个就是扒拉扒拉网的初步简历了。感谢您花费壹分钟零贰拾伍秒来阅读我的介绍，点击左上角回到主页。*/
/*资源来自互联网*/
`
}.call()
