(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={header:"header_header__1rL5x",logo:"header_logo__1JEBf",image:"header_image__Ih9c8",logoname:"header_logoname__2SdBa",topheader:"header_topheader__bwGZX",bottomheader:"header_bottomheader__1WeL2",topheaderFilter:"header_topheaderFilter__328kF"}},11:function(e,t,a){e.exports={footer:"footer_footer__2TOL8",name:"footer_name__jlqrL",text:"footer_text__NSYvW",githublink:"footer_githublink__1AjU8",githublogo:"footer_githublogo__jJOsf"}},12:function(e,t,a){e.exports={body:"allArticles_body__1cktI",loadingpage:"allArticles_loadingpage__1um5-",NoNetworkimage:"allArticles_NoNetworkimage__38_gi"}},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=(a(53),a(3)),i=a(4),s=a(6),u=a(5),h=a(7),d=(a(54),a(42)),g=a.n(d),m=a(9),p=a.n(m),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"formatDate",value:function(e){var t=new Date(e),a=t.getFullYear(),n=t.getDate(),r=t.getHours(),o=t.getMinutes();return n+"/"+(t.getMonth()+1)+"/"+a+" | "+r+":"+(o<10?"0"+o:o)}},{key:"render",value:function(){return r.a.createElement("a",{className:p.a.a,href:this.props.articles.url},r.a.createElement("div",{className:p.a.Article},r.a.createElement("div",null,this.props.articles.urlToImage?r.a.createElement("img",{className:p.a.image,src:this.props.articles.urlToImage,alt:this.props.articles.title,title:this.props.articles.title}):null),r.a.createElement("div",null,this.props.articles.title?r.a.createElement("div",{className:p.a.Header},this.props.articles.title):null,this.props.articles.author?r.a.createElement("div",{className:p.a.author},this.props.articles.author):null,this.props.articles.description?r.a.createElement("div",{className:p.a.description},this.props.articles.description):null,this.props.articles.publishedAt?r.a.createElement("div",{className:p.a.publishedAt},this.formatDate(this.props.articles.publishedAt)):null)))}}]),t}(n.Component),y=a(43),v=a.n(y),C=a(12),b=a.n(C),_=a(44),w=a.n(_),E=a(45),S=a.n(E),N=a(10),k=a.n(N),j=a(46),O=a.n(j),A=a(23),L=a.n(A),V=function(e){return r.a.createElement("div",{className:L.a.SearchingInput},r.a.createElement("input",{value:e.value,onChange:e.handleChange,className:L.a.textbox,maxLength:"2048",type:"text",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:"false",title:"Search",placeholder:"Search"}))},x=a(16),q=a.n(x),I=function(e){return r.a.createElement("div",{className:q.a.filters},r.a.createElement("div",{className:q.a.custom_dropdown},r.a.createElement("select",{name:"Category",id:"Category",value:e.selectedValueCategory,onChange:e.handleChangeCategory},[{value:"business",name:"Business"},{value:"entertainment",name:"Entertainment"},{value:"general",name:"General"},{value:"health",name:"Health"},{value:"science",name:"Science"},{value:"sports",name:"Sports"},{value:"technology",name:"Technology"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))),r.a.createElement("div",{className:q.a.custom_dropdown},r.a.createElement("select",{name:"Country",id:"Country",value:e.selectedValueCountry,onChange:e.handleChangeCountry},[{value:"in",name:"India"},{value:"us",name:"Usa"},{value:"au",name:"Australia"},{value:"ca",name:"Canada"},{value:"ch",name:"China"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))))},M=a(17),W=a.n(M),D=function(e){return r.a.createElement("div",{className:W.a.filters},r.a.createElement("div",{className:W.a.custom_dropdown},r.a.createElement("select",{name:"Category",id:"Category",value:e.selectedValueCategory,onChange:e.handleChangeCategory},[{value:"business",name:"Business"},{value:"entertainment",name:"Entertainment"},{value:"general",name:"General"},{value:"health",name:"Health"},{value:"science",name:"Science"},{value:"sports",name:"Sports"},{value:"technology",name:"Technology"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))),r.a.createElement("div",{className:W.a.custom_dropdown},r.a.createElement("select",{name:"Country",id:"Country",value:e.selectedValueCountry,onChange:e.handleChangeCountry},[{value:"in",name:"India"},{value:"us",name:"Usa"},{value:"au",name:"Australia"},{value:"ca",name:"Canada"},{value:"ch",name:"China"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))))},B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).header=r.a.createRef(),a.filter=r.a.createRef(),a.filterMobile=r.a.createRef(),a.handleResize=function(){window.innerWidth<630?(a.filter.current.style.display="none",a.filterMobile.current.style.display="unset"):(a.filter.current.style.display="unset",a.filterMobile.current.style.display="none")},a.handleScroll=function(){window.scrollY>80&&window.innerWidth<630?(a.header.current.style.transform="translateY(-110%)",a.header.current.style.opacity="0"):(a.header.current.style.transform="translateY(0%)",a.header.current.style.opacity="1")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("header",{ref:this.header,className:k.a.header},r.a.createElement("div",{className:k.a.topheader},r.a.createElement("div",{className:k.a.logo},r.a.createElement("img",{className:k.a.image,src:O.a,alt:"Summarize"}),r.a.createElement("div",{className:k.a.logoname},"SUMMARIZE")),r.a.createElement(V,{value:this.props.value,handleChange:this.props.handleChange}),r.a.createElement("div",{ref:this.filter,className:k.a.topheaderFilter},r.a.createElement(I,{selectedValueCountry:this.props.selectedValueCountry,handleChangeCountry:this.props.handleChangeCountry,selectedValueCategory:this.props.selectedValueCategory,handleChangeCategory:this.props.handleCategoryChange}))),r.a.createElement("div",{ref:this.filterMobile,className:k.a.bottomheader},r.a.createElement(D,{selectedValueCountry:this.props.selectedValueCountry,handleChangeCountry:this.props.handleChangeCountry,selectedValueCategory:this.props.selectedValueCategory,handleChangeCategory:this.props.handleCategoryChange})))}}]),t}(n.Component),R=a(1),z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],error:!1,toquery:"",forCategory:"",forCountry:"country=in",query:"",CategoryValue:"general",CountryValue:"",loadingcheck:!0,API_KEY:"7de4507ef58c4118be7684e320da6328"},a.getNews=function(){g.a.get("https://newsapi.org/v2/top-headlines?".concat(a.state.forCountry).concat(a.state.toquery).concat(a.state.forCategory,"&pageSize=40&apiKey=").concat(a.state.API_KEY)).then(function(e){var t=e.data.articles;a.setState({articles:t,loadingcheck:!0},function(){R.reactLocalStorage.remove("backupdata"),R.reactLocalStorage.remove("forCountry"),R.reactLocalStorage.remove("forCountry"),R.reactLocalStorage.remove("toquery"),R.reactLocalStorage.remove("CategoryValue"),R.reactLocalStorage.remove("CountryValue"),R.reactLocalStorage.remove("query"),R.reactLocalStorage.setObject("backupdata",t),R.reactLocalStorage.setObject("forCountry",a.state.forCountry),R.reactLocalStorage.setObject("forCountry",a.state.forCategory),R.reactLocalStorage.setObject("toquery",a.state.toquery),R.reactLocalStorage.setObject("CountryValue",a.state.CountryValue),R.reactLocalStorage.setObject("CategoryValue",a.state.CategoryValue),R.reactLocalStorage.setObject("query",a.state.query)})}).catch(function(e){a.setState({error:e,loadingcheck:!0,articles:R.reactLocalStorage.getObject("backupdata"),forCountry:R.reactLocalStorage.getObject("forCountry"),forCategory:R.reactLocalStorage.getObject("forCategory"),toquery:R.reactLocalStorage.getObject("toquery"),CategoryValue:R.reactLocalStorage.getObject("CategoryValue"),CountryValue:R.reactLocalStorage.getObject("CountryValue"),query:R.reactLocalStorage.getObject("query")})})},a.handleChange=function(e){a.state.error?alert("Connect to the Network"):(a.setState({loadingcheck:!1}),a.setState({query:e.target.value},function(){a.setState({toquery:"&q=".concat(a.state.query)},function(){a.getNews()})}),""===a.state.query&&a.setState({toquery:""},function(){a.getNews()}))},a.handleCategoryDropdownChange=function(e){a.state.error?alert("Connect to the Network"):(a.setState({loadingcheck:!1}),a.setState({CategoryValue:e.target.value},function(){a.setState({forCategory:"&category=".concat(a.state.CategoryValue)},function(){a.getNews()})}))},a.handleCountryDropdownChange=function(e){a.state.error?alert("Connect to the Network"):(a.setState({loadingcheck:!1}),a.setState({CountryValue:e.target.value},function(){a.setState({forCountry:"country=".concat(a.state.CountryValue)},function(){a.getNews()})}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){var e=this.state.articles,t=this.state.error?r.a.createElement("p",{className:b.a.loadingpage},r.a.createElement("img",{className:b.a.NoNetworkimage,src:S.a,alt:"Summerize"}),"News can't be loaded"):r.a.createElement("div",{className:b.a.loadingpage},"Loading...",r.a.createElement("br",null),r.a.createElement(w.a,{type:"bubbles",color:"#777"}));return e&&e.length>1&&this.state.loadingcheck?t=r.a.createElement(v.a,{columnWidth:300,monitorImagesLoaded:!0},this.state.articles.map(function(e,t){return r.a.createElement(f,{key:t,articles:e})})):0===e.length&&""!==this.state.query&&(t=r.a.createElement("p",{className:b.a.loadingpage},"No Search Result Found")),r.a.createElement("div",{className:b.a.body},r.a.createElement(B,{selectedValueCountry:this.state.CountryValue,handleChangeCountry:this.handleCountryDropdownChange,selectedValueCategory:this.state.CategoryValue,handleCategoryChange:this.handleCategoryDropdownChange,value:this.state.query,handleChange:this.handleChange}),t)}}]),t}(r.a.Component),T=a(11),U=a.n(T),H=a(47),J=a.n(H),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:U.a.footer},r.a.createElement("div",{className:U.a.name},"SUMMARIZE : THE NEWS WEBSITE"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Souravdey777/News-Bucket/tree/master",style:{textDecoration:"none",color:"black"}},r.a.createElement("div",{className:U.a.githublink},r.a.createElement("img",{className:U.a.githublogo,src:J.a,alt:"Source code"}))),r.a.createElement("div",null,r.a.createElement("div",{className:U.a.text},"Developed by ",r.a.createElement("a",{href:"/#"},"Sourav Dey")),r.a.createElement("div",{className:U.a.text},"Powered by ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://newsapi.org/"},"Newsapi.org"))))}}]),t}(n.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(Y,null))}}]),t}(n.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/News-Bucket",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/News-Bucket","/service-worker.js");P?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(t,e)})}}()},16:function(e,t,a){e.exports={filters:"filterModal_filters__2u7i3",custom_dropdown:"filterModal_custom_dropdown__Jqycm"}},17:function(e,t,a){e.exports={filters:"filterModalMobile_filters__1sWjj",custom_dropdown:"filterModalMobile_custom_dropdown__2ASJ1"}},23:function(e,t,a){e.exports={SearchingInput:"searchingInput_SearchingInput__32Z-H",textbox:"searchingInput_textbox__2K8L7"}},45:function(e,t,a){e.exports=a.p+"static/media/NoNetwork.1673aea3.png"},46:function(e,t,a){e.exports=a.p+"static/media/SummarizeLogo.92357bf4.png"},47:function(e,t,a){e.exports=a.p+"static/media/githublogo.1b221b88.png"},48:function(e,t,a){e.exports=a(139)},53:function(e,t,a){},54:function(e,t,a){},9:function(e,t,a){e.exports={Article:"singleArticle_Article__3C-Pq",a:"singleArticle_a__3tIIJ",image:"singleArticle_image__19kAA",Header:"singleArticle_Header__1oeVB",author:"singleArticle_author__vltGK",description:"singleArticle_description__pnJBh",publishedAt:"singleArticle_publishedAt__C1QO1"}}},[[48,1,2]]]);
//# sourceMappingURL=main.d0574cc7.chunk.js.map