(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),i=n(45),s=n.n(i),o=(n(89),n(141)),u=n(83);n(90);function j(){return Object(c.jsx)("div",{id:"app-bar",children:Object(c.jsx)("h1",{children:Object(c.jsx)("b",{children:"The Shoppies"})})})}var l=n(39),b=n.n(l),d=n(46),h=n(4),f=Object(r.createContext)(),O=function(){return Object(r.useContext)(f)},m=function(e){var t=e.children,n=Object(r.useState)([]),a=Object(h.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)([]),u=Object(h.a)(o,2),j=u[0],l=u[1],b=Object(r.useState)(""),d=Object(h.a)(b,2),O=d[0],m=d[1];Object(r.useEffect)((function(){var e=localStorage.getItem("saveState");console.log(e),e&&s(JSON.parse(e))}),[]),Object(r.useEffect)((function(){localStorage.setItem("saveState",JSON.stringify(i))}),[i]);var v={searchStore:{search:O,setSearch:m,results:j,setResults:l},nominationStore:{nominations:i,setNominations:s}};return Object(c.jsx)(f.Provider,{value:v,children:t})},v=n(140),p=n(9),x=n(138),S=n(80),N=n.n(S),g="1ae68295";function y(e){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://www.omdbapi.com/?s=".concat(t,"&apikey=").concat(g));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("error retreiving info ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}n(110);function w(){var e=O().searchStore,t=Object(r.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1],s=Object(r.useCallback)((function(e){i(e)}),[]),o=function(){var t=Object(d.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,c=n.data.Search.filter((function(e){return"movie"===e.Type})),e.setSearch(a),e.setResults(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=Object(c.jsx)(v.a,{onChange:s,value:a,prefix:Object(c.jsx)(p.a,{source:x.a,color:"inkLighter"}),placeholder:"Search",helpText:"Type in a movie and click enter to search"});return Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("div",{className:"search-bar",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),o())},children:[Object(c.jsx)("h1",{className:"search-title",children:"Search for and Nominate your favorite movies!"}),u]})})}var C=n(6),D=n(20),I=n(139),T=n(142);n(131);function F(e){var t=e.movie,n=e.button,r=t.Title,a=t.Year,i=t.Poster;return Object(c.jsx)(T.a,{children:Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:i,alt:"Movie Poster"})}),Object(c.jsxs)("div",{className:"card-text",children:[Object(c.jsx)("h1",{className:"card-title",children:r}),Object(c.jsx)("p",{children:a})]}),n]})})}function P(){var e=O(),t=e.searchStore,n=e.nominationStore,r=t.search,a=t.results,i=n.nominations,s=n.setNominations,o=function(e){return i.find((function(t){return t.imdbID==e}))},u=function(e,t){return Object(c.jsx)(D.a,{disabled:o(e),primary:!0,onClick:function(){return function(e){s([].concat(Object(C.a)(i),[e]))}(t)},children:"Nominate"})};return Object(c.jsx)("div",{className:"movie-list",children:Object(c.jsx)(I.a,{title:'Results for "'.concat(r,'"'),separator:!0,children:a&&a.map((function(e){return Object(c.jsx)(F,{movie:e,button:u(e.imdbID,e)},e.imdbID)}))})})}var E=n(143);n(132);function J(){var e=O().nominationStore,t=e.nominations,n=e.setNominations,a=Object(r.useState)(!1),i=Object(h.a)(a,2),s=i[0],o=i[1];Object(r.useEffect)((function(){s&&t.length<5&&o(!1)}),[t]);var u=function(e){return Object(c.jsx)(D.a,{destructive:!0,onClick:function(){return function(e){var c=t.filter((function(t){return!(t.imdbID===e)}));n(Object(C.a)(c))}(e)},children:"Remove"})};return Object(c.jsx)("div",{className:"movie-list",children:Object(c.jsxs)(I.a,{title:"Your Nominations",separator:!0,children:[!s&&t.length>4&&Object(c.jsx)("div",{className:"nomination-banner",children:Object(c.jsx)(E.a,{title:"You have Five Movies Nominated!",status:"success",onDismiss:function(){o(!0)}})}),t&&t.map((function(e){return Object(c.jsx)(F,{movie:e,button:u(e.imdbID)},e.imdbDI)}))]})})}n(133),n(134);var R=function(){return Object(c.jsx)(m,{children:Object(c.jsx)(o.a,{i18n:u,children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsxs)("div",{className:"app-body",children:[Object(c.jsx)(w,{}),Object(c.jsx)(P,{}),Object(c.jsx)(J,{})]})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),L()},89:function(e,t,n){},90:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.26cbdd0e.chunk.js.map