(this["webpackJsonpnews-app-using-react"]=this["webpackJsonpnews-app-using-react"]||[]).push([[0],{32:function(e,a,t){e.exports=t(61)},37:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(28),l=t.n(c),i=(t(37),t(12)),o=t(29),s=t.n(o),u="613f72f600de4589af950cd248ec0809",p=t(8),m=t.n(p),_=t(11),d=Object(r.createContext)(),f=function(){var e=Object(r.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(r.useContext)(d).setData;return Object(r.useEffect)((function(){return s.a.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(u)).then((function(e){c(e.data.articles),l(e.data.articles)})),function(){}}),[]),n.a.createElement("div",null,t.map((function(e,a){return n.a.createElement("div",{key:a,className:m.a.card_wrapper},n.a.createElement("article",{className:m.a.card,style:g(e.urlToImage)},n.a.createElement("div",{className:m.a.source},e.source.name),n.a.createElement("figcaption",{className:m.a.title_wrapper},n.a.createElement(_.b,{className:m.a.link,to:{pathname:"/article/".concat(a),article:e}},n.a.createElement("div",{className:m.a.title},e.title)))))})))},g=function(e){return null===e?{}:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}},w=t(9),E=t.n(w),h=function(e){var a=Object(r.useContext)(d).data;console.log(a),console.log(e.match.params.id);var t=a[e.match.params.id];return n.a.createElement("div",{className:E.a.newspaper_article_wrapper},t&&n.a.createElement("div",{className:E.a.newspaper_article},n.a.createElement("header",null,n.a.createElement("h2",null,t.title),n.a.createElement("div",{className:E.a.author},"From ",t.author)),n.a.createElement("div",{className:E.a.image_wrapper},n.a.createElement("div",null,n.a.createElement("img",{className:E.a.full_article_image,src:t.urlToImage,alt:t.description}),n.a.createElement("figcaption",null,t.description))),n.a.createElement("div",{className:"content"},t.content),n.a.createElement("div",{className:"url"},"More Information: \xa0",n.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url))))},v=t(1),b=t(16),A=t.n(b),N=t(31),j=t(17),k=function(e,a){switch(a.type){case"SET_DATA":return sessionStorage.setItem("data",JSON.stringify(a.payload)),Object(j.a)(Object(j.a)({},e),a.payload);default:return e}},y=function(e){var a=e.children,t=Object(r.useReducer)(k,{data:[]}),c=Object(i.a)(t,2),l=c[0],o=c[1],s=function(){var e=Object(N.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({type:"SET_DATA",payload:a});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(d.Provider,{value:{data:l,setData:s}},a)};var O=function(){return n.a.createElement(y,null,n.a.createElement(_.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(v.c,null,n.a.createElement(v.a,{path:"/",exact:!0,component:f}),n.a.createElement(v.a,{path:"/article/:id",component:h})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports={card_wrapper:"ArticleList_card_wrapper__jLiuT",card:"ArticleList_card__2Pkvj",source:"ArticleList_source__1sY97",title_wrapper:"ArticleList_title_wrapper__2gaz6",title:"ArticleList_title__1lQnx",link:"ArticleList_link__1f6Ny"}},9:function(e,a,t){e.exports={newspaper_article_wrapper:"SingleArticle_newspaper_article_wrapper__1FD0P",newspaper_article:"SingleArticle_newspaper_article__2gscA",image_wrapper:"SingleArticle_image_wrapper__2bM3j",full_article_image:"SingleArticle_full_article_image__3rBjA",author:"SingleArticle_author__NyZPj"}}},[[32,1,2]]]);
//# sourceMappingURL=main.bc131730.chunk.js.map