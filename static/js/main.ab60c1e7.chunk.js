(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={body:"allArticles_body__1cktI",loadingpage:"allArticles_loadingpage__1um5-",NoNetworkimage:"allArticles_NoNetworkimage__38_gi"}},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(50),a(3)),s=a(4),o=a(6),u=a(5),m=a(7),p=(a(51),a(39)),h=a.n(p),d=a(9),g=a.n(d),_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=t.getFullYear(),n=t.getDate(),r=t.getHours(),c=t.getMinutes();return n+"/"+(t.getMonth()+1)+"/"+a+" | "+r+":"+(c<10?"0"+c:c)}},{key:"render",value:function(){return r.a.createElement("a",{className:g.a.a,href:this.props.articles.url},r.a.createElement("div",{className:g.a.Article},r.a.createElement("div",null,this.props.articles.urlToImage?r.a.createElement("img",{className:g.a.image,src:this.props.articles.urlToImage,alt:" ",title:this.props.articles.title}):null),r.a.createElement("div",null,this.props.articles.title?r.a.createElement("div",{className:g.a.Header},this.props.articles.title):null,this.props.articles.author?r.a.createElement("div",{className:g.a.author},this.props.articles.author):null,this.props.articles.description?r.a.createElement("div",{className:g.a.description},this.props.articles.description):null,this.props.articles.publishedAt?r.a.createElement("div",{className:g.a.publishedAt},this.formatDate(this.props.articles.publishedAt)):null)))}}]),t}(n.Component),f=a(40),b=a.n(f),v=a(11),E=a.n(v),N=a(41),w=a.n(N),O=a(42),j=a.n(O),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],error:!1,query:null},a.getNews=function(e){a.setState({articles:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://newsapi.org/v2/top-headlines?country=us&pageSize=60&apiKey=1fe94e1f7eb747b3a5879a48ba736409").then(function(t){var a=t.data.articles;console.log(a),e.getNews(a)}).catch(function(t){console.log(t),e.setState({error:t})})}},{key:"render",value:function(){var e=this.state.articles,t=this.state.error?r.a.createElement("p",{className:E.a.loadingpage},r.a.createElement("img",{className:E.a.NoNetworkimage,src:j.a,alt:"Summerize"}),"News can't be loaded",r.a.createElement("br",null),"Network Issue"):r.a.createElement("div",{className:E.a.loadingpage},"Loading...",r.a.createElement("br",null),r.a.createElement(w.a,{type:"bubbles",color:"#777"}));return e&&e.length>1&&(t=r.a.createElement(b.a,{columnWidth:300,monitorImagesLoaded:!0},this.state.articles.map(function(e,t){return r.a.createElement(_,{key:t,articles:e})}))),r.a.createElement("div",{className:E.a.body},t)}}]),t}(r.a.Component),A=a(20),k=a.n(A),x=a(43),I=a.n(x),C=a(14),S=a.n(C),B=a(44),L=a.n(B),z=function(e){return r.a.createElement("div",{className:S.a.SearchingInput},r.a.createElement("input",{className:S.a.textbox,maxLength:"2048",type:"text",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",title:"Search",placeholder:"Search"}),r.a.createElement("img",{onClick:e.clicked,src:L.a,className:S.a.searchlogo,alt:""}))},D=a(2),H=a.n(D),q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:H.a.rows},r.a.createElement("div",null,r.a.createElement("div",{className:H.a.circle1}),r.a.createElement("div",{className:H.a.circle1}),r.a.createElement("div",{className:H.a.circle1})),r.a.createElement("div",null,r.a.createElement("div",{className:H.a.circle2}),r.a.createElement("div",{className:H.a.circle2}),r.a.createElement("div",{className:H.a.circle2})),r.a.createElement("div",null,r.a.createElement("div",{className:H.a.circle2}),r.a.createElement("div",{className:H.a.circle2}),r.a.createElement("div",{className:H.a.circle2})))}}]),t}(r.a.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:k.a.header},r.a.createElement("img",{className:k.a.image,src:I.a,alt:"Summerize"}),r.a.createElement(z,null),r.a.createElement(q,null))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},14:function(e,t,a){e.exports={SearchingInput:"searchingInput_SearchingInput__32Z-H",textbox:"searchingInput_textbox__2K8L7",searchlogo:"searchingInput_searchlogo__3kAWu"}},2:function(e,t,a){e.exports={circle1:"menulogo_circle1__2Mcxh",circle2:"menulogo_circle2__2qVBA",rows:"menulogo_rows__sTGg9",cube:"menulogo_cube__2BqST"}},20:function(e,t,a){e.exports={header:"header_header__1rL5x",image:"header_image__Ih9c8"}},42:function(e,t,a){e.exports=a.p+"static/media/NoNetwork.1673aea3.png"},43:function(e,t,a){e.exports=a.p+"static/media/SummerizeLogo.206069f5.png"},44:function(e,t,a){e.exports=a.p+"static/media/searchicon.445f2174.png"},45:function(e,t,a){e.exports=a(136)},50:function(e,t,a){},51:function(e,t,a){},9:function(e,t,a){e.exports={Article:"singleArticle_Article__3C-Pq",a:"singleArticle_a__3tIIJ",image:"singleArticle_image__19kAA",Header:"singleArticle_Header__1oeVB",author:"singleArticle_author__vltGK",description:"singleArticle_description__pnJBh",publishedAt:"singleArticle_publishedAt__C1QO1"}}},[[45,1,2]]]);
//# sourceMappingURL=main.ab60c1e7.chunk.js.map