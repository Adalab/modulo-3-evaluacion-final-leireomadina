(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(16),i=c.n(r),o=c(8),l=(c(23),c(14)),d=c(2),j=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.log("Ha sucedido un error:",e)}))},m=c.p+"static/media/neon-logo.6eb4f643.png",h=(c(24),function(){return Object(a.jsx)("header",{className:"main-header",children:Object(a.jsx)("div",{className:"main-header__container",children:Object(a.jsx)("img",{src:m,alt:"Rick and Morty tv series logo",title:"Rick and Morty tv series logo",className:"main-header__image"})})})}),u=(c(25),function(e){return Object(a.jsx)(o.b,{to:"/character-detail/".concat(e.id),title:"See this character's details",children:Object(a.jsxs)("article",{className:"card",children:[Object(a.jsx)("img",{src:e.image,alt:"".concat(e.name),title:"".concat(e.name),className:"card__image"}),Object(a.jsx)("h2",{className:"card__name",children:e.name}),Object(a.jsxs)("p",{className:"card__species",children:[e.species,Object(a.jsxs)("span",{className:"card__species--icon",children:[" ","Human"===e.species?"\ud83c\udf0e":"\ud83d\udc7d"]})]})]})})}),x=(c(31),c.p+"static/media/morty-gif.9e946522.gif"),b=function(e){return Object(a.jsxs)("div",{className:"not-found-container",children:[Object(a.jsxs)("p",{className:"not-found-container__text",children:["There isn't any character that matches the word ",e.filterText," !"]}),Object(a.jsx)("img",{src:x,className:"not-found-container__gif",alt:"Surprised Morty gif",title:"Surprised Morty gif"})]})},f=(c(32),function(e){var t=e.characters.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"cards-container__item",children:Object(a.jsx)(u,{id:e.id,name:e.name,image:e.image,species:e.species})},e.id)})}));return Object(a.jsxs)("section",{className:"cards-section",children:[Object(a.jsx)("ul",{className:"cards-container",children:t}),function(){if(0===t.length)return Object(a.jsx)(b,{filterText:e.filterText})}()]})}),O=(c(33),function(e){return Object(a.jsx)("main",{className:"detail-page",children:Object(a.jsxs)("article",{className:"detail-card",children:[Object(a.jsx)("div",{className:"detail-card__image-container",children:Object(a.jsx)("img",{src:e.image,alt:"".concat(e.name),title:"".concat(e.name),className:"detail-card__image"})}),Object(a.jsx)("h2",{className:"detail-card__name",children:e.name}),Object(a.jsxs)("p",{className:"detail-card__text",children:[Object(a.jsx)("strong",{children:"Status:"})," ",e.status,Object(a.jsxs)("span",{className:"detail-card__icon",children:[" ",function(){if("Dead"===e.status)return"\ud83d\udc80"}()]})]}),Object(a.jsxs)("p",{className:"detail-card__text",children:[Object(a.jsx)("strong",{children:"Species:"})," ",e.species]}),Object(a.jsxs)("p",{className:"detail-card__text",children:[Object(a.jsx)("strong",{children:"Origin:"})," ",e.origin]}),Object(a.jsxs)("p",{className:"detail-card__text",children:[Object(a.jsx)("strong",{children:"Episodes:"})," ",e.episode]})]})})}),p=(c(34),c(35),function(e){return Object(a.jsx)("section",{className:"form-section",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("label",{htmlFor:"character"}),Object(a.jsx)("input",{type:"text",id:"character",name:"character",placeholder:"Search you favorite character",onChange:function(t){var c=t.target.value;e.handleFilter(c)},value:e.filterText,className:"form-section__input"})]})})}),g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],m=i[1];Object(n.useEffect)((function(){j().then((function(e){s(e)}))}),[]);return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(d.c,{children:[Object(a.jsxs)(d.a,{exact:!0,path:"/",children:[Object(a.jsx)(h,{}),Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)(p,{handleFilter:function(e){m(e)},filterText:o}),Object(a.jsx)(f,{characters:function(){var e=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return e}(),filterText:o})]})]}),Object(a.jsx)(d.a,{path:"/character-detail/:characterId",component:function(e){var t=parseInt(e.match.params.characterId),n=c.find((function(e){var c=e.id;return t===c}));return void 0!==n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(O,{image:n.image,name:n.name,status:n.status,species:n.species,origin:n.origin.name,episode:n.episode.length})]}):Object(a.jsx)("p",{children:"The character you are looking for doesn't exist."})}})]})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(g,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d00c10ed.chunk.js.map