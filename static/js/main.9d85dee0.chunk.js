(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={header:"header_header__1rL5x",logo:"header_logo__1JEBf",image:"header_image__Ih9c8",logoname:"header_logoname__2SdBa",topheader:"header_topheader__bwGZX",bottomheader:"header_bottomheader__1WeL2",topheaderFilter:"header_topheaderFilter__328kF"}},11:function(e,t,a){e.exports={footer:"footer_footer__2TOL8",name:"footer_name__jlqrL",text:"footer_text__NSYvW",githublink:"footer_githublink__1AjU8",githublogo:"footer_githublogo__jJOsf"}},12:function(e,t,a){e.exports={body:"allArticles_body__1cktI",loadingpage:"allArticles_loadingpage__1um5-",NoNetworkimage:"allArticles_NoNetworkimage__38_gi"}},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=(a(54),a(3)),i=a(4),s=a(6),u=a(5),h=a(7),E=(a(55),a(42)),d=a.n(E),g=a(9),p=a.n(g),C=a(43),m=a.n(C),Q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=t.getFullYear(),n=t.getDate(),r=t.getHours(),o=t.getMinutes();return n+"/"+(t.getMonth()+1)+"/"+a+" | "+r+":"+(o<10?"0"+o:o)}},{key:"share",value:function(){navigator.share&&navigator.share({title:"Summarize: The News App",text:"Shared News: ".concat(this.props.articles.title," Url: ").concat(this.props.articles.url),url:"https://souravdey777.github.io/News-Bucket/"}).then(function(){return console.log("Successful share")}).catch(function(e){return console.log("Error sharing",e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:p.a.Article},r.a.createElement("a",{className:p.a.a,href:this.props.articles.url},r.a.createElement("div",null,this.props.articles.urlToImage?r.a.createElement("img",{className:p.a.image,src:this.props.articles.urlToImage,alt:this.props.articles.title,title:this.props.articles.title}):null),r.a.createElement("div",null,this.props.articles.title?r.a.createElement("div",{className:p.a.Header},this.props.articles.title):null,this.props.articles.author?r.a.createElement("div",{className:p.a.author},this.props.articles.author):null,this.props.articles.description?r.a.createElement("div",{className:p.a.description},this.props.articles.description):null)),r.a.createElement("div",null,this.props.articles.publishedAt?r.a.createElement("div",{className:p.a.publishedAt},r.a.createElement("img",{onClick:this.share,src:m.a}),this.formatDate(this.props.articles.publishedAt)):null))}}]),t}(n.Component),f=a(44),A=a.n(f),B=a(12),v=a.n(B),y=a(45),P=a.n(y),b=a(46),N=a.n(b),I=a(10),V=a.n(I),k=a(47),w=a.n(k),q=a(23),F=a.n(q),G=function(e){return r.a.createElement("div",{className:F.a.SearchingInput},r.a.createElement("input",{value:e.value,onChange:e.handleChange,className:F.a.textbox,maxLength:"2048",type:"text",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",title:"Search",placeholder:"Search"}))},D=a(16),j=a.n(D),S=function(e){return r.a.createElement("div",{className:j.a.filters},r.a.createElement("div",{className:j.a.custom_dropdown},r.a.createElement("select",{name:"Category",id:"Category",value:e.selectedValueCategory,onChange:e.handleChangeCategory},[{value:"business",name:"Business"},{value:"entertainment",name:"Entertainment"},{value:"general",name:"General"},{value:"health",name:"Health"},{value:"science",name:"Science"},{value:"sports",name:"Sports"},{value:"technology",name:"Technology"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))),r.a.createElement("div",{className:j.a.custom_dropdown},r.a.createElement("select",{name:"Country",id:"Country",value:e.selectedValueCountry,onChange:e.handleChangeCountry},[{value:"in",name:"India"},{value:"us",name:"Usa"},{value:"au",name:"Australia"},{value:"ca",name:"Canada"},{value:"ch",name:"China"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))))},J=a(17),K=a.n(J),R=function(e){return r.a.createElement("div",{className:K.a.filters},r.a.createElement("div",{className:K.a.custom_dropdown},r.a.createElement("select",{name:"Category",id:"Category",value:e.selectedValueCategory,onChange:e.handleChangeCategory},[{value:"business",name:"Business"},{value:"entertainment",name:"Entertainment"},{value:"general",name:"General"},{value:"health",name:"Health"},{value:"science",name:"Science"},{value:"sports",name:"Sports"},{value:"technology",name:"Technology"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))),r.a.createElement("div",{className:K.a.custom_dropdown},r.a.createElement("select",{name:"Country",id:"Country",value:e.selectedValueCountry,onChange:e.handleChangeCountry},[{value:"in",name:"India"},{value:"us",name:"Usa"},{value:"au",name:"Australia"},{value:"ca",name:"Canada"},{value:"ch",name:"China"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))))},U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).header=r.a.createRef(),a.filter=r.a.createRef(),a.filterMobile=r.a.createRef(),a.handleResize=function(){window.innerWidth<630?(a.filter.current.style.display="none",a.filterMobile.current.style.display="unset"):(a.filter.current.style.display="unset",a.filterMobile.current.style.display="none")},a.handleScroll=function(){window.scrollY>80&&window.innerWidth<630?(a.header.current.style.transform="translateY(-110%)",a.header.current.style.opacity="0"):(a.header.current.style.transform="translateY(0%)",a.header.current.style.opacity="1")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("header",{ref:this.header,className:V.a.header},r.a.createElement("div",{className:V.a.topheader},r.a.createElement("div",{className:V.a.logo},r.a.createElement("img",{className:V.a.image,src:w.a,alt:"Summarize"}),r.a.createElement("div",{className:V.a.logoname},"SUMMARIZE")),r.a.createElement(G,{value:this.props.value,handleChange:this.props.handleChange}),r.a.createElement("div",{ref:this.filter,className:V.a.topheaderFilter},r.a.createElement(S,{selectedValueCountry:this.props.selectedValueCountry,handleChangeCountry:this.props.handleChangeCountry,selectedValueCategory:this.props.selectedValueCategory,handleChangeCategory:this.props.handleCategoryChange}))),r.a.createElement("div",{ref:this.filterMobile,className:V.a.bottomheader},r.a.createElement(R,{selectedValueCountry:this.props.selectedValueCountry,handleChangeCountry:this.props.handleChangeCountry,selectedValueCategory:this.props.selectedValueCategory,handleChangeCategory:this.props.handleCategoryChange})))}}]),t}(n.Component),T=a(1),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],error:!1,toquery:"",forCategory:"",forCountry:"country=in",query:"",CategoryValue:"general",CountryValue:"",loadingcheck:!0,API_KEY:"7de4507ef58c4118be7684e320da6328"},a.getNews=function(){d.a.get("https://newsapi.org/v2/top-headlines?".concat(a.state.forCountry).concat(a.state.toquery).concat(a.state.forCategory,"&pageSize=40&apiKey=").concat(a.state.API_KEY)).then(function(e){var t=e.data.articles;a.setState({articles:t,loadingcheck:!0},function(){T.reactLocalStorage.remove("backupdata"),T.reactLocalStorage.remove("forCountry"),T.reactLocalStorage.remove("forCountry"),T.reactLocalStorage.remove("toquery"),T.reactLocalStorage.remove("CountryValue"),T.reactLocalStorage.remove("CategoryValue"),T.reactLocalStorage.remove("query"),T.reactLocalStorage.setObject("backupdata",t),T.reactLocalStorage.setObject("forCountry",a.state.forCountry),T.reactLocalStorage.setObject("forCountry",a.state.forCategory),T.reactLocalStorage.setObject("toquery",a.state.toquery),T.reactLocalStorage.setObject("CountryValue",a.state.CountryValue),T.reactLocalStorage.setObject("CategoryValue",a.state.CategoryValue),T.reactLocalStorage.setObject("query",a.state.query)})}).catch(function(e){a.setState({error:e,loadingcheck:!0,articles:T.reactLocalStorage.getObject("backupdata"),forCountry:T.reactLocalStorage.getObject("forCountry"),forCategory:T.reactLocalStorage.getObject("forCategory"),toquery:T.reactLocalStorage.getObject("toquery"),CategoryValue:T.reactLocalStorage.getObject("CategoryValue"),CountryValue:T.reactLocalStorage.getObject("CountryValue"),query:T.reactLocalStorage.getObject("query")})})},a.handleChange=function(e){a.state.error?alert("Connect to the Network"):(a.setState({loadingcheck:!1}),a.setState({query:e.target.value},function(){a.setState({toquery:"&q=".concat(a.state.query)},function(){a.getNews()})}),""===a.state.query&&a.setState({toquery:""},function(){a.getNews()}))},a.handleCategoryDropdownChange=function(e){a.state.error?alert("Connect to the Network"):(a.setState({loadingcheck:!1}),a.setState({CategoryValue:e.target.value},function(){a.setState({forCategory:"&category=".concat(a.state.CategoryValue)},function(){a.getNews()})}))},a.handleCountryDropdownChange=function(e){a.state.error?alert("Connect to the Network"):(a.setState({loadingcheck:!1}),a.setState({CountryValue:e.target.value},function(){a.setState({forCountry:"country=".concat(a.state.CountryValue)},function(){a.getNews()})}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){var e=this.state.articles,t=this.state.error?r.a.createElement("p",{className:v.a.loadingpage},r.a.createElement("img",{className:v.a.NoNetworkimage,src:N.a,alt:"Summerize"}),"News can't be loaded"):r.a.createElement("div",{className:v.a.loadingpage},"Loading...",r.a.createElement("br",null),r.a.createElement(P.a,{type:"bubbles",color:"#777"}));return e&&e.length>1&&this.state.loadingcheck?t=r.a.createElement(A.a,{columnWidth:300,monitorImagesLoaded:!0},this.state.articles.map(function(e,t){return r.a.createElement(Q,{key:t,articles:e})})):0===e.length&&""!==this.state.query&&(t=r.a.createElement("p",{className:v.a.loadingpage},"No Search Result Found")),r.a.createElement("div",{className:v.a.body},r.a.createElement(U,{selectedValueCountry:this.state.CountryValue,handleChangeCountry:this.handleCountryDropdownChange,selectedValueCategory:this.state.CategoryValue,handleCategoryChange:this.handleCategoryDropdownChange,value:this.state.query,handleChange:this.handleChange}),t)}}]),t}(r.a.Component),M=a(11),x=a.n(M),O=a(48),L=a.n(O),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:x.a.footer},r.a.createElement("div",{className:x.a.name},"SUMMARIZE : THE NEWS WEBSITE"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Souravdey777/News-Bucket/tree/master",style:{textDecoration:"none",color:"black"}},r.a.createElement("div",{className:x.a.githublink},r.a.createElement("img",{className:x.a.githublogo,src:L.a,alt:"Source code"}))),r.a.createElement("div",null,r.a.createElement("div",{className:x.a.text},"Developed by ",r.a.createElement("a",{href:"/#"},"Sourav Dey")),r.a.createElement("div",{className:x.a.text},"Powered by ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://newsapi.org/"},"Newsapi.org"))))}}]),t}(n.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement(X,null))}}]),t}(n.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/News-Bucket",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/News-Bucket","/service-worker.js");W?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(t,e)})}}()},16:function(e,t,a){e.exports={filters:"filterModal_filters__2u7i3",custom_dropdown:"filterModal_custom_dropdown__Jqycm"}},17:function(e,t,a){e.exports={filters:"filterModalMobile_filters__1sWjj",custom_dropdown:"filterModalMobile_custom_dropdown__2ASJ1"}},23:function(e,t,a){e.exports={SearchingInput:"searchingInput_SearchingInput__32Z-H",textbox:"searchingInput_textbox__2K8L7"}},43:function(e,t){e.exports="data:image/png;base64,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"},46:function(e,t,a){e.exports=a.p+"static/media/NoNetwork.1673aea3.png"},47:function(e,t,a){e.exports=a.p+"static/media/SummarizeLogo.92357bf4.png"},48:function(e,t,a){e.exports=a.p+"static/media/githublogo.1b221b88.png"},49:function(e,t,a){e.exports=a(140)},54:function(e,t,a){},55:function(e,t,a){},9:function(e,t,a){e.exports={Article:"singleArticle_Article__3C-Pq",a:"singleArticle_a__3tIIJ",image:"singleArticle_image__19kAA",Header:"singleArticle_Header__1oeVB",author:"singleArticle_author__vltGK",description:"singleArticle_description__pnJBh",publishedAt:"singleArticle_publishedAt__C1QO1"}}},[[49,1,2]]]);
//# sourceMappingURL=main.9d85dee0.chunk.js.map