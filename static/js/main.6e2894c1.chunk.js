(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports={body:"allArticles_body__1cktI",loadingpage:"allArticles_loadingpage__1um5-",NoNetworkimage:"allArticles_NoNetworkimage__38_gi"}},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),i=(t(49),t(3)),s=t(4),o=t(6),m=t(5),u=t(7),p=(t(50),t(39)),h=t.n(p),d=t(9),g=t.n(d),_=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{className:g.a.a,href:this.props.articles.url},r.a.createElement("div",{className:g.a.Article},r.a.createElement("div",null,this.props.articles.urlToImage?r.a.createElement("img",{className:g.a.image,src:this.props.articles.urlToImage,alt:" ",title:this.props.articles.title}):null),r.a.createElement("div",null,this.props.articles.title?r.a.createElement("div",{className:g.a.Header},this.props.articles.title):null,this.props.articles.author?r.a.createElement("div",{className:g.a.author},this.props.articles.author):null,this.props.articles.description?r.a.createElement("div",{className:g.a.description},this.props.articles.description):null)))}}]),a}(n.Component),f=t(40),b=t.n(f),E=t(11),v=t.n(E),N=t(41),j=t.n(N),w=t(42),O=t.n(w),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={articles:[],error:!1},t.getNews=function(e){t.setState({articles:e})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey=1fe94e1f7eb747b3a5879a48ba736409").then(function(a){var t=a.data.articles;console.log(t),e.getNews(t)}).catch(function(a){console.log(a),e.setState({error:a})})}},{key:"render",value:function(){var e=this.state.articles,a=this.state.error?r.a.createElement("p",{className:v.a.loadingpage},r.a.createElement("img",{className:v.a.NoNetworkimage,src:O.a,alt:"Summerize"}),"News can't be loaded",r.a.createElement("br",null),"Network Issue"):r.a.createElement("div",{className:v.a.loadingpage},"Loading...",r.a.createElement("br",null),r.a.createElement(j.a,{type:"bubbles",color:"#777"}));return e&&e.length>2&&(a=r.a.createElement(b.a,{columnWidth:300,monitorImagesLoaded:!0},this.state.articles.map(function(e,a){return r.a.createElement(_,{key:a,articles:e})}))),r.a.createElement("div",{className:v.a.body},a)}}]),a}(r.a.Component),k=t(20),x=t.n(k),A=t(43),I=t.n(A),S=t(14),C=t.n(S),B=function(){return r.a.createElement("div",{className:C.a.SearchingInput},r.a.createElement("input",{className:C.a.textbox,maxLength:"2048",type:"text",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",title:"Search",placeholder:"Search"}),r.a.createElement("img",{src:" ",className:C.a.searchlogo,alt:""}))},L=t(2),z=t.n(L),H=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:z.a.rows},r.a.createElement("div",null,r.a.createElement("div",{className:z.a.circle1}),r.a.createElement("div",{className:z.a.circle1}),r.a.createElement("div",{className:z.a.circle1})),r.a.createElement("div",null,r.a.createElement("div",{className:z.a.circle1}),r.a.createElement("div",{className:z.a.circle1}),r.a.createElement("div",{className:z.a.circle1})),r.a.createElement("div",null,r.a.createElement("div",{className:z.a.circle2}),r.a.createElement("div",{className:z.a.circle2}),r.a.createElement("div",{className:z.a.circle2})))}}]),a}(r.a.Component),J=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:x.a.header},r.a.createElement("img",{className:x.a.image,src:I.a,alt:"Summerize"}),r.a.createElement(B,null),r.a.createElement(H,null))}}]),a}(n.Component),T=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement(y,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},14:function(e,a,t){e.exports={SearchingInput:"searchingInput_SearchingInput__32Z-H",textbox:"searchingInput_textbox__2K8L7",searchlogo:"searchingInput_searchlogo__3kAWu"}},2:function(e,a,t){e.exports={circle1:"menulogo_circle1__2Mcxh",circle2:"menulogo_circle2__2qVBA",rows:"menulogo_rows__sTGg9",cube:"menulogo_cube__2BqST"}},20:function(e,a,t){e.exports={header:"header_header__1rL5x",image:"header_image__Ih9c8",headerpart:"header_headerpart__2BnhF"}},42:function(e,a,t){e.exports=t.p+"static/media/NoNetwork.1673aea3.png"},43:function(e,a,t){e.exports=t.p+"static/media/SummerizeLogo.206069f5.png"},44:function(e,a,t){e.exports=t(135)},49:function(e,a,t){},50:function(e,a,t){},9:function(e,a,t){e.exports={Article:"singleArticle_Article__3C-Pq",a:"singleArticle_a__3tIIJ",image:"singleArticle_image__19kAA",Header:"singleArticle_Header__1oeVB",author:"singleArticle_author__vltGK",description:"singleArticle_description__pnJBh"}}},[[44,1,2]]]);
//# sourceMappingURL=main.6e2894c1.chunk.js.map