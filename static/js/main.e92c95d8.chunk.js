(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={body:"allArticles_body__1cktI",loadingpage:"allArticles_loadingpage__1um5-",NoNetworkimage:"allArticles_NoNetworkimage__38_gi"}},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),l=(a(49),a(3)),o=a(4),s=a(6),u=a(5),m=a(7),h=(a(50),a(39)),d=a.n(h),p=a(9),g=a.n(p),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=t.getFullYear(),n=t.getDate(),r=t.getHours(),i=t.getMinutes();return n+"/"+(t.getMonth()+1)+"/"+a+" | "+r+":"+(i<10?"0"+i:i)}},{key:"render",value:function(){return r.a.createElement("a",{className:g.a.a,href:this.props.articles.url},r.a.createElement("div",{className:g.a.Article},r.a.createElement("div",null,this.props.articles.urlToImage?r.a.createElement("img",{className:g.a.image,src:this.props.articles.urlToImage,alt:" ",title:this.props.articles.title}):null),r.a.createElement("div",null,this.props.articles.title?r.a.createElement("div",{className:g.a.Header},this.props.articles.title):null,this.props.articles.author?r.a.createElement("div",{className:g.a.author},this.props.articles.author):null,this.props.articles.description?r.a.createElement("div",{className:g.a.description},this.props.articles.description):null,this.props.articles.publishedAt?r.a.createElement("div",{className:g.a.publishedAt},this.formatDate(this.props.articles.publishedAt)):null)))}}]),t}(n.Component),v=a(40),_=a.n(v),b=a(10),w=a.n(b),E=a(41),N=a.n(E),y=a(42),A=a.n(y),k=a(14),j=a.n(k),O=a(43),S=a.n(O),C=a(20),x=a.n(C),I=function(e){return r.a.createElement("div",{className:x.a.SearchingInput},r.a.createElement("input",{value:e.value,onChange:e.handleChange,className:x.a.textbox,maxLength:"2048",type:"text",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",title:"Search",placeholder:"Search"}))},q=a(2),B=a.n(q),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:B.a.rows},r.a.createElement("div",null,r.a.createElement("div",{className:B.a.circle1}),r.a.createElement("div",{className:B.a.circle1}),r.a.createElement("div",{className:B.a.circle1})),r.a.createElement("div",null,r.a.createElement("div",{className:B.a.circle2}),r.a.createElement("div",{className:B.a.circle2}),r.a.createElement("div",{className:B.a.circle2})),r.a.createElement("div",null,r.a.createElement("div",{className:B.a.circle2}),r.a.createElement("div",{className:B.a.circle2}),r.a.createElement("div",{className:B.a.circle2})))}}]),t}(r.a.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:j.a.header},r.a.createElement("img",{className:j.a.image,src:S.a,alt:"Summarize"}),r.a.createElement("div",{className:j.a.logoname},"SUMMARIZE"),r.a.createElement(I,{value:this.props.value,handleChange:this.props.handleChange}),r.a.createElement(L,null))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],error:!1,query:"",url:"https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328"},a.getNews=function(e){d.a.get(e).then(function(e){var t=e.data.articles;console.log(t),a.setState({articles:t})}).catch(function(e){console.log(e),a.setState({error:e})})},a.handleChange=function(e){console.log(e.target.value),a.setState({query:e.target.value},function(){console.log(a.state.query),a.setState({url:"https://newsapi.org/v2/everything?q=".concat(a.state.query,"&language=en&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328")},function(){console.log(a.state.url),a.getNews(a.state.url)})}),""===e.target.value&&a.setState({url:"https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=7de4507ef58c4118be7684e320da6328"},function(){console.log(a.state.url),a.getNews(a.state.url)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getNews(this.state.url)}},{key:"render",value:function(){var e=this.state.articles,t=this.state.error?r.a.createElement("p",{className:w.a.loadingpage},r.a.createElement("img",{className:w.a.NoNetworkimage,src:A.a,alt:"Summerize"}),"News can't be loaded"):r.a.createElement("div",{className:w.a.loadingpage},"Loading...",r.a.createElement("br",null),r.a.createElement(N.a,{type:"bubbles",color:"#777"}));return e&&e.length>1?t=r.a.createElement(_.a,{columnWidth:300,monitorImagesLoaded:!0},this.state.articles.map(function(e,t){return r.a.createElement(f,{key:t,articles:e})})):0===e.length&&""!==this.state.query&&(t=r.a.createElement("p",{className:w.a.loadingpage},"No Search Result Found")),r.a.createElement("div",null,r.a.createElement(W,{clicked:this.Query,value:this.state.query,handleChange:this.handleChange}),r.a.createElement("div",{className:w.a.body},t))}}]),t}(r.a.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))}}]),t}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/News-Bucket",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/News-Bucket","/service-worker.js");T?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(t,e)})}}()},14:function(e,t,a){e.exports={header:"header_header__1rL5x",image:"header_image__Ih9c8",logoname:"header_logoname__2SdBa"}},2:function(e,t,a){e.exports={circle1:"menulogo_circle1__2Mcxh",circle2:"menulogo_circle2__2qVBA",rows:"menulogo_rows__sTGg9",cube:"menulogo_cube__2BqST"}},20:function(e,t,a){e.exports={SearchingInput:"searchingInput_SearchingInput__32Z-H",textbox:"searchingInput_textbox__2K8L7"}},42:function(e,t,a){e.exports=a.p+"static/media/NoNetwork.1673aea3.png"},43:function(e,t,a){e.exports=a.p+"static/media/SummarizeLogo.92357bf4.png"},44:function(e,t,a){e.exports=a(135)},49:function(e,t,a){},50:function(e,t,a){},9:function(e,t,a){e.exports={Article:"singleArticle_Article__3C-Pq",a:"singleArticle_a__3tIIJ",image:"singleArticle_image__19kAA",Header:"singleArticle_Header__1oeVB",author:"singleArticle_author__vltGK",description:"singleArticle_description__pnJBh",publishedAt:"singleArticle_publishedAt__C1QO1"}}},[[44,1,2]]]);
//# sourceMappingURL=main.e92c95d8.chunk.js.map