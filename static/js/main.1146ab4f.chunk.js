(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={footer:"footer_footer__2TOL8",name:"footer_name__jlqrL",text:"footer_text__NSYvW",githublink:"footer_githublink__1AjU8",githublogo:"footer_githublogo__jJOsf"}},11:function(e,t,a){e.exports={body:"allArticles_body__1cktI",loadingpage:"allArticles_loadingpage__1um5-",NoNetworkimage:"allArticles_NoNetworkimage__38_gi"}},139:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),l=a.n(r),c=(a(53),a(2)),i=a(3),s=a(5),u=a(4),h=a(6),d=(a(54),a(41)),m=a.n(d),p=a(9),g=a.n(p),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=t.getFullYear(),n=t.getDate(),o=t.getHours(),r=t.getMinutes();return n+"/"+(t.getMonth()+1)+"/"+a+" | "+o+":"+(r<10?"0"+r:r)}},{key:"render",value:function(){return o.a.createElement("a",{className:g.a.a,href:this.props.articles.url},o.a.createElement("div",{className:g.a.Article},o.a.createElement("div",null,this.props.articles.urlToImage?o.a.createElement("img",{className:g.a.image,src:this.props.articles.urlToImage,alt:" ",title:this.props.articles.title}):null),o.a.createElement("div",null,this.props.articles.title?o.a.createElement("div",{className:g.a.Header},this.props.articles.title):null,this.props.articles.author?o.a.createElement("div",{className:g.a.author},this.props.articles.author):null,this.props.articles.description?o.a.createElement("div",{className:g.a.description},this.props.articles.description):null,this.props.articles.publishedAt?o.a.createElement("div",{className:g.a.publishedAt},this.formatDate(this.props.articles.publishedAt)):null)))}}]),t}(n.Component),v=a(42),E=a.n(v),_=a(11),b=a.n(_),w=a(43),y=a.n(w),N=a(44),k=a.n(N),C=a(15),S=a.n(C),j=a(45),O=a.n(j),A=a(22),x=a.n(A),I=function(e){return o.a.createElement("div",{className:x.a.SearchingInput},o.a.createElement("input",{value:e.value,onChange:e.handleChange,className:x.a.textbox,maxLength:"2048",type:"text",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",title:"Search",placeholder:"Search"}))},q=a(7),B=a.n(q),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:B.a.rows},o.a.createElement("div",null,o.a.createElement("div",{className:B.a.circle1}),o.a.createElement("div",{className:B.a.circle1}),o.a.createElement("div",{className:B.a.circle1})),o.a.createElement("div",null,o.a.createElement("div",{className:B.a.circle2}),o.a.createElement("div",{className:B.a.circle2}),o.a.createElement("div",{className:B.a.circle2})),o.a.createElement("div",null,o.a.createElement("div",{className:B.a.circle2}),o.a.createElement("div",{className:B.a.circle2}),o.a.createElement("div",{className:B.a.circle2})))}}]),t}(o.a.Component),D=a(16),W=a.n(D),L=a(46),M=a.n(L),z=function(e){return e.show?o.a.createElement("div",{onClick:e.clicked,className:M.a.Backdrop}):null},T=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:W.a.modal},o.a.createElement("div",{className:W.a.custom_dropdown},o.a.createElement("select",{name:"Category",id:"Category",value:e.selectedValue,onChange:e.handleChange},o.a.createElement("option",{value:"business"},"business"),o.a.createElement("option",{value:"entertainment"},"entertainment"),o.a.createElement("option",{value:"general"},"general"),o.a.createElement("option",{value:"health"},"health"),o.a.createElement("option",{value:"science"},"science"),o.a.createElement("option",{value:"sports"},"sports"),o.a.createElement("option",{value:"technology"},"technology"))),o.a.createElement("div",{className:W.a.custom_dropdown},o.a.createElement("select",{name:"Country",id:"Country",value:e.selectedValueCountry,onChange:e.handleChangeCountry},o.a.createElement("option",{value:"in"},"India"),o.a.createElement("option",{value:"us"},"USA"),o.a.createElement("option",{value:"general"},"general"),o.a.createElement("option",{value:"health"},"health"),o.a.createElement("option",{value:"science"},"science"),o.a.createElement("option",{value:"sports"},"sports"),o.a.createElement("option",{value:"technology"},"technology")))),o.a.createElement(z,{clicked:e.backdropClicked,show:e.show}))},K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1},a.handleShow=function(){a.setState(function(e){return{show:!e.show}})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",{className:S.a.header},o.a.createElement("img",{className:S.a.image,src:O.a,alt:"Summarize"}),o.a.createElement("div",{className:S.a.logoname},"SUMMARIZE"),o.a.createElement(I,{value:this.props.value,handleChange:this.props.handleChange}),o.a.createElement("div",{onClick:this.handleShow},o.a.createElement(V,null))),this.state.show?o.a.createElement(T,{selectedValue:this.props.selectedValue,handleChange:this.props.handleDropdownChange,show:this.state.show,backdropClicked:this.handleShow}):null)}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={articles:[],error:!1,query:"",loadingcheck:!0,CategoryValue:"general",url:"https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328"},a.getNews=function(e){m.a.get(e).then(function(e){var t=e.data.articles;console.log(t),a.setState({articles:t}),a.setState({loadingcheck:!0})}).catch(function(e){console.log(e),a.setState({error:e})})},a.handleChange=function(e){a.setState({loadingcheck:!1}),console.log(e.target.value),a.setState({query:e.target.value},function(){console.log(a.state.query),a.setState({url:"https://newsapi.org/v2/top-headlines?country=in&q=".concat(a.state.query,"&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328")},function(){console.log(a.state.url),a.getNews(a.state.url)})}),""===a.state.query&&a.setState({url:"https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328"},function(){console.log(a.state.url),a.getNews(a.state.url)})},a.handleDropdownChange=function(e){a.setState({loadingcheck:!1}),console.log(e.target.value),a.setState({CategoryValue:e.target.value},function(){console.log(a.state.CategoryValue),a.setState({url:"https://newsapi.org/v2/top-headlines?country=in&q=".concat(a.state.query,"&category=").concat(a.state.CategoryValue,"&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328")},function(){console.log(a.state.url),a.getNews(a.state.url)})}),""===a.state.query&&a.setState({url:"https://newsapi.org/v2/top-headlines?country=in&category=".concat(a.state.CategoryValue,"&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328")},function(){console.log(a.state.url),a.getNews(a.state.url)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNews(this.state.url)}},{key:"render",value:function(){var e=this.state.articles,t=this.state.error?o.a.createElement("p",{className:b.a.loadingpage},o.a.createElement("img",{className:b.a.NoNetworkimage,src:k.a,alt:"Summerize"}),"News can't be loaded"):o.a.createElement("div",{className:b.a.loadingpage},"Loading...",o.a.createElement("br",null),o.a.createElement(y.a,{type:"bubbles",color:"#777"}));return e&&e.length>1&&this.state.loadingcheck?t=o.a.createElement(E.a,{columnWidth:300,monitorImagesLoaded:!0},this.state.articles.map(function(e,t){return o.a.createElement(f,{key:t,articles:e})})):0===e.length&&""!==this.state.query&&(t=o.a.createElement("p",{className:b.a.loadingpage},"No Search Result Found")),o.a.createElement("div",{className:b.a.body},o.a.createElement(K,{selectedValue:this.state.CategoryValue,handleDropdownChange:this.handleDropdownChange,value:this.state.query,handleChange:this.handleChange}),t)}}]),t}(o.a.Component),H=a(10),J=a.n(H),R=a(47),P=a.n(R),G=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:J.a.footer},o.a.createElement("div",{className:J.a.name},"SUMMARIZE : THE NEWS WEBSITE"),o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Souravdey777/News-Bucket/tree/master",style:{textDecoration:"none",color:"black"}},o.a.createElement("div",{className:J.a.githublink},o.a.createElement("img",{className:J.a.githublogo,src:P.a,alt:"Source code"}))),o.a.createElement("div",null,o.a.createElement("div",{className:J.a.text},"Developed by ",o.a.createElement("a",{href:"/#"},"Sourav Dey")),o.a.createElement("div",{className:J.a.text},"Powered by ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://newsapi.org/"},"Newsapi.org"))))}}]),t}(n.Component),Z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(U,null),o.a.createElement(G,null))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/News-Bucket",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/News-Bucket","/service-worker.js");F?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Y(t,e)})}}()},15:function(e,t,a){e.exports={header:"header_header__1rL5x",image:"header_image__Ih9c8",logoname:"header_logoname__2SdBa"}},16:function(e,t,a){e.exports={modal:"filterModal_modal__2BEE9",custom_dropdown:"filterModal_custom_dropdown__Jqycm"}},22:function(e,t,a){e.exports={SearchingInput:"searchingInput_SearchingInput__32Z-H",textbox:"searchingInput_textbox__2K8L7"}},44:function(e,t,a){e.exports=a.p+"static/media/NoNetwork.1673aea3.png"},45:function(e,t,a){e.exports=a.p+"static/media/SummarizeLogo.92357bf4.png"},46:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2IowG"}},47:function(e,t,a){e.exports=a.p+"static/media/githublogo.1b221b88.png"},48:function(e,t,a){e.exports=a(139)},53:function(e,t,a){},54:function(e,t,a){},7:function(e,t,a){e.exports={circle1:"menulogo_circle1__2Mcxh",circle2:"menulogo_circle2__2qVBA",rows:"menulogo_rows__sTGg9",cube:"menulogo_cube__2BqST"}},9:function(e,t,a){e.exports={Article:"singleArticle_Article__3C-Pq",a:"singleArticle_a__3tIIJ",image:"singleArticle_image__19kAA",Header:"singleArticle_Header__1oeVB",author:"singleArticle_author__vltGK",description:"singleArticle_description__pnJBh",publishedAt:"singleArticle_publishedAt__C1QO1"}}},[[48,1,2]]]);
//# sourceMappingURL=main.1146ab4f.chunk.js.map