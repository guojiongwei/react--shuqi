webpackJsonp([1,19],{gZ8O:function(e,t){},lPq5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(a("Yarq")),n=f(a("AA3o")),r=f(a("xSur")),i=f(a("UzKs")),u=f(a("Y7Ml")),d=f(a("gRVt")),o=f(a("SXXC")),s=a("BXMe");a("yTLP");var c=a("Z11M");function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,n.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={list:[],lists:[],pages:1},a}return(0,u.default)(t,e),(0,r.default)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.split("/")[2],a=1;o.default.ajax({url:"http://shuqi.guojiongwei.top/novel/i.php?do=is_caterank&p=1&page="+a+"&words=&shuqi_h5=&onlyCpBooks=1&secondCate="+t+"&sort=monthHot&_=1510843580965",success:function(l){0!=l.data.length?e.setState({list:l.data}):o.default.ajax({url:"http://shuqi.guojiongwei.top/novel/i.php?do=is_caterank&p=1&page="+a+"&words=&shuqi_h5=&onlyCpBooks=1&tag="+t+"&sort=monthHot&_=1511417327097",success:function(t){e.setState({list:t.data})}})}});document.getElementById("content");(0,o.default)("#listContent").on("scroll",function(){(0,o.default)("#listContent").scrollTop()+(0,o.default)(".container")[0].clientHeight>(0,o.default)("#listContent")[0].scrollHeight+43.5&&(a++,o.default.ajax({url:"http://shuqi.guojiongwei.top/novel/i.php?do=is_caterank&p=1&page="+a+"&words=&shuqi_h5=&onlyCpBooks=1&secondCate="+t+"&sort=monthHot&_=1510843580965",success:function(t){var l=t.data;e.setState({lists:l,pages:a})}}),c.Toast.info("加载中。。。"))})}},{key:"render",value:function(){for(var e=[],t=this.state.lists,a=this.state.list,l=this.state.pages,n=0;n<t.length;n++)a.push(t[n]);for(var r=0;r<a.length;r++){var i=a[r];i.index=r,e.push(d.default.createElement(s.NavLink,{to:"/details/"+i.category+"/"+r+"/"+i.authorid+"/"+i.bookid+"/"+l,key:r},d.default.createElement("li",null,d.default.createElement("img",{src:i.cover}),d.default.createElement("span",null,i.title),d.default.createElement("br",null),d.default.createElement("em",null,i.author),d.default.createElement("p",{className:"pp"},i.desc),d.default.createElement("time",null,i.tags))))}return d.default.createElement("div",{id:"listContent",style:{width:"100%",height:"100%",overflow:"auto"}},d.default.createElement("ul",null,e))}}]),t}(d.default.Component);t.default=m},tvVM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(a("HzJ8")),n=f(a("Yarq")),r=f(a("AA3o")),i=f(a("xSur")),u=f(a("UzKs")),d=f(a("Y7Ml")),o=f(a("gRVt")),s=(f(a("ZGBb")),a("BXMe"));a("gZ8O");var c=f(a("lPq5"));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={body:[],girl:[]},a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse('{"state":"200","message":"success","data":{"girl":[{"cid":21,"relatedName":"现代言情","list":["豪门总裁","高干","婚姻","都市情感","宝宝","军婚"]},{"cid":20,"relatedName":"古代言情","list":["穿越","架空","宫斗宅斗","情仇爱恨","女尊","种田"]},{"cid":224,"relatedName":"幻想言情","list":["仙侣奇缘","江湖奇缘"]},{"cid":18,"relatedName":"校园青春","list":["青春年华","校园魔幻","青春校园","学生"]}],"boy":[{"cid":51,"relatedName":"都市小说","list":["生活","异能","重生","热血","人生","美女","极道江湖"]},{"cid":1,"relatedName":"玄幻小说","list":["东方玄幻","异界大陆","转世重生","远古神话"]},{"cid":133,"relatedName":"仙侠小说","list":["现代修真","奇幻修真","洪荒封神","凡人","丹药"]},{"cid":41,"relatedName":"灵异推理","list":["灵异鬼怪","恐怖惊悚","悬疑探险","侦探推理"]},{"cid":125,"relatedName":"历史架空","list":["架空历史","两宋元明","秦汉三国","权谋","乱世"]},{"cid":32,"relatedName":"军事小说","list":["战争幻想","军旅生活","军事战争","抗日烽火"]},{"cid":40,"relatedName":"游戏竞技","list":["虚拟网游","游戏异界","游戏人生","系统"]},{"cid":62,"relatedName":"科幻小说","list":["未来","进化变异","末世","星际","机甲","时空穿梭"]},{"cid":8,"relatedName":"武侠小说","list":["传统武侠","新派武侠","幻武异侠","江湖风波"]},{"cid":135,"relatedName":"奇幻小说","list":["领主贵族","亡灵异族","西方奇幻","魔法","召唤"]},{"cid":12,"relatedName":"竞技体育","list":["电子竞技","体坛风云","球类运动"]},{"cid":263,"relatedName":"其他","list":["动漫","影视","武侠","小说"]}]}}').data;this.setState({boy:e.boy,girl:e.girl})}},{key:"render",value:function(){var e=[],t=[],a=!0,n=!1,r=void 0;try{for(var i,u=(0,l.default)(this.state.girl);!(a=(i=u.next()).done);a=!0){var d=i.value;e.push(o.default.createElement("h3",{key:d.cid},d.relatedName));var f=!0,m=!1,h=void 0;try{for(var v,p=(0,l.default)(d.list);!(f=(v=p.next()).done);f=!0){var y=v.value;e.push(o.default.createElement("span",{key:y},o.default.createElement(s.NavLink,{to:"/list/"+y},y,"  |")))}}catch(e){m=!0,h=e}finally{try{!f&&p.return&&p.return()}finally{if(m)throw h}}}}catch(e){n=!0,r=e}finally{try{!a&&u.return&&u.return()}finally{if(n)throw r}}var g=!0,N=!1,_=void 0;try{for(var E,k=(0,l.default)(this.state.boy);!(g=(E=k.next()).done);g=!0){var w=E.value;t.push(o.default.createElement("h3",{key:w.cid},w.relatedName));var C=!0,M=!1,b=void 0;try{for(var q,x=(0,l.default)(w.list);!(C=(q=x.next()).done);C=!0){var j=q.value;t.push(o.default.createElement("span",{key:j},o.default.createElement(s.NavLink,{to:"/list/"+j},j,"  |")))}}catch(e){M=!0,b=e}finally{try{!C&&x.return&&x.return()}finally{if(M)throw b}}}}catch(e){N=!0,_=e}finally{try{!g&&k.return&&k.return()}finally{if(N)throw _}}return o.default.createElement("div",{id:"kindContent"},o.default.createElement("div",{className:"girlKind"},"女生分类"),o.default.createElement("div",{className:"girl"},e),o.default.createElement("div",{className:"girlKind"},"男生分类"),o.default.createElement("div",{className:"boy"},t),o.default.createElement(s.Route,{path:"/list",component:c.default}))}}]),t}(o.default.Component);t.default=m}});