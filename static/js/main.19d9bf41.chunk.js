(this["webpackJsonpmemorama-rick"]=this["webpackJsonpmemorama-rick"]||[]).push([[0],{23:function(n,e,t){},24:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t.n(i),a=t(13),c=t.n(a),o=(t(23),t(5)),s=t(2),l=(t(24),t(10)),d=t.n(l),b=t(14),m="https://rickandmortyapi.com/api/character";function j(){return(j=Object(b.a)(d.a.mark((function n(e,t,i,r,a,c,o,s){var l,b;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(m,"/[").concat(e,",").concat(t,",").concat(i,",").concat(r,",").concat(a,",").concat(c,",").concat(o,",").concat(s,"]"));case 2:if((l=n.sent).ok){n.next=5;break}throw new Error("no se pudieron optener los caracteres solicitados");case 5:return n.next=7,l.json();case 7:return b=n.sent,n.abrupt("return",b);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u,x=function(n,e,t,i,r,a,c,o){return j.apply(this,arguments)},p=t(3),f=t(0),g=p.a.button(u||(u=Object(s.a)(["\n  padding: 1rem 2rem;\n  color: var(--primary);\n  background: #a7dc50;\n  border: none;\n  font: var(--button);\n  text-transform: uppercase;\n  border-radius: 2rem;\n  cursor: pointer;\n  :active {\n    transform: scale(0.9);\n  }\n"])));var O,h=p.a.div(O||(O=Object(s.a)(["\n  dialog {\n    block-size: 24.37rem;\n    inline-size: 36.87rem;\n    position: absolute;\n    top: calc(50% - (24.37rem / 2));\n    object-fit: cover;\n    box-sizing: border-box;\n    border: none;\n    border-radius: 2rem;\n    padding-top: 1.5rem;\n    z-index: 20;\n    opacity: 1;\n    background-image: url(","/images/start.jpg);\n  }\n  dialog button {\n    position: absolute;\n    right: 1rem;\n  }\n  @media (max-width: 600px) {\n    dialog {\n      box-sizing: border-box;\n      margin: 0 2rem;\n      inline-size: calc(100% - 4rem);\n    }\n  }\n"])),"/Memorama-rick-and-Morty");var v,y=function(n){var e=n.setPlay;return Object(f.jsx)(h,{children:Object(f.jsxs)("dialog",{className:"modal animate__animated animate__fadeInDown",open:!0,children:[Object(f.jsx)("img",{src:"".concat("/Memorama-rick-and-Morty","/images/logo.png"),alt:"logo"}),Object(f.jsx)(g,{onClick:function(){e(!0)},children:" jugar"})]})})},k=p.a.header(v||(v=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  inline-size: 100%;\n  i {\n    color: #f4ed1f;\n    font-size: 2.5rem;\n  }\n  .header {\n  }\n  div {\n    display: flex;\n    color: var(--white);\n    align-items: center;\n  }\n  p {\n    font: var(--headline1);\n    margin: 0;\n  }\n  .points {\n    display: flex;\n    gap: 5rem;\n  }\n  @media (max-width: 600px) {\n    display: block;\n    .points {\n      justify-content: space-between;\n      gap: 0;\n    }\n    .logo {\n      display: block;\n      margin: auto;\n    }\n  }\n"])));var z,w=function(){var n=Object(i.useContext)(tn),e=Object(i.useRef)(null),t=Object(i.useRef)(null);return Object(i.useEffect)((function(){n.ref={points:t.current,lives:e.current}})),Object(f.jsxs)(k,{children:[Object(f.jsx)("img",{className:"logo",src:"".concat("/Memorama-rick-and-Morty","/images/logo.png"),alt:"logo"}),Object(f.jsxs)("div",{className:"points",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"icon-money"}),Object(f.jsxs)("p",{className:"animate__animated animate__heartBeat",children:["$",Object(f.jsx)("b",{ref:t,children:"300"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"icon-heart"}),Object(f.jsxs)("p",{className:"animate__animated animate__heartBeat",children:["x",Object(f.jsx)("b",{ref:e,children:"3"})]})]})]})]})},C=t(18),A=t(4),N=p.a.div(z||(z=Object(s.a)(["\n  position: fixed;\n  inline-size: 36.87rem;\n  block-size: 26.25rem;\n  border-radius: 3rem;\n  text-align: center;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  top: calc(50% - (26.25rem / 2));\n  left: calc(50% - (36.87rem / 2));\n  z-index: 5;\n  box-sizing: border-box;\n  display: none;\n\n  h2 {\n    font: var(--subtitle1);\n  }\n  @media (max-width: 600px) {\n    position: fixed;\n    margin: 0 1rem;\n    block-size: 20rem;\n    inline-size: calc(100% - 2rem);\n    top: calc(50% - 10rem);\n    left: 0;\n    padding: 2rem;\n    box-sizing: border-box;\n  }\n"])));var _,P=function(n){var e=n.setActiveCart,t=Object(i.useContext)(tn),r=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.modal=Object(A.a)(Object(A.a)({},t.modal),{},{incorrect:r})}),[r]),Object(f.jsxs)(N,{onClick:function(){document.getElementById("incorrect"),Number(t.ref.lives.textContent&&Number(t.ref.points.textContent))>=1&&(t.ref.lives.textContent=Number(t.ref.lives.textContent)-1,t.ref.points.textContent=Number(t.ref.points.textContent)-100,e(!1))},id:"incorrect",ref:r,children:[Object(f.jsx)("img",{src:"".concat("/Memorama-rick-and-Morty","/images/logo.png"),alt:"logo"}),Object(f.jsx)("h2",{children:"\xa1Cuidado!, ese no es el par correcto. Perdiste 100 puntos y una vida."}),Object(f.jsx)(g,{children:"continuar"})]})},M=p.a.div(_||(_=Object(s.a)(["\n  position: fixed;\n  inline-size: 36.87rem;\n  block-size: 26.25rem;\n  border-radius: 3rem;\n  text-align: center;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  top: calc(50% - (26.25rem / 2));\n  left: calc(50% - (36.87rem / 2));\n  z-index: 5;\n  box-sizing: border-box;\n  display: none;\n  h2 {\n    font: var(--subtitle1);\n  }\n  @media (max-width: 600px) {\n    position: fixed;\n    margin: 0 1rem;\n    block-size: 20rem;\n    inline-size: calc(100% - 2rem);\n    top: calc(50% - 10rem);\n    left: 0;\n    padding: 2rem;\n    box-sizing: border-box;\n  }\n"])));var E,R=function(n){n.setActiveCart;var e=Object(i.useContext)(tn),t=Object(i.useRef)(null);return Object(i.useEffect)((function(){e.modal=Object(A.a)(Object(A.a)({},e.modal),{},{correct:t})}),[t]),Object(f.jsxs)(M,{ref:t,children:[Object(f.jsx)("img",{src:"".concat("/Memorama-rick-and-Morty","/images/logo.png"),alt:"logo"}),Object(f.jsx)("h2",{children:"\xa1Felicidades!, has encontrado un par. Ganaste 100 puntos."}),Object(f.jsx)(g,{onClick:function(){e.ref.points.textContent=Number(e.ref.points.textContent)+100,t.current.style.display="none"},children:"continuar"})]})},S=p.a.div(E||(E=Object(s.a)(["\n  inline-size: 17.5rem;\n  block-size: 25rem;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  > * {\n    height: 50%;\n    box-sizing: border-box;\n  }\n  .image-personage {\n    object-fit: cover;\n    vertical-align: middle;\n    width: 100%;\n  }\n  .information {\n    background: white;\n    padding: 1rem;\n  }\n  .information > * {\n    margin: 0;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n  .information div {\n    margin: 0.8rem 0;\n  }\n  .information div i {\n    font-size: 1.4rem;\n  }\n  .information div p {\n    margin: 0;\n    font: var(--body1-regular);\n  }\n  .information h3 {\n    font: 700 normal 24px/28px var(--Roboto);\n    white-space: nowrap;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .user {\n    background: #f4ed1f;\n    border-radius: 50%;\n    padding: 5px;\n  }\n  .status {\n    background: #3fcd65;\n    border-radius: 50%;\n    padding: 5px;\n  }\n  .point {\n    background: #00afc7;\n    border-radius: 50%;\n    padding: 5px;\n  }\n  button {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    height: 25px;\n    background: #202020;\n    color: white;\n    border-radius: 0.5rem;\n    border: none;\n    text-transform: uppercase;\n    font-family: var(--Roboto);\n  }\n"])));var F,I=function(n){var e=n.character,t=n.setActiveCart,r=n.setPlayActions,a=n.playActions,c=Object(i.useContext)(tn),s=Object(i.useState)(),l=Object(o.a)(s,2),d=(l[0],l[1],c.modal.lose.current),b=c.modal.correct.current,m=c.modal.incorrect.current;return 0===Number(c.ref.lives.textContent)&&(t(!1),r([]),d.style.display="flex"),2===a.length&&(a[0]===a[1]?(console.log("ganaste"),r([]),b.style.display="flex"):(m.style.display="flex",a.shift(),console.log("perdiste"))),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R,{setActiveCart:t}),Object(f.jsx)(P,{setActiveCart:t}),Object(f.jsxs)(S,{className:"animate__animated animate__flipInY",onClick:function(){},children:[Object(f.jsx)("button",{children:e.species}),Object(f.jsx)("img",{className:"image-personage",src:e.image,alt:""}),Object(f.jsxs)("div",{className:"information",children:[Object(f.jsx)("h3",{children:e.name}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"icon-user user"}),Object(f.jsx)("p",{children:e.gender})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"icon-status status"}),Object(f.jsx)("p",{children:e.status})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"icon-point point"}),Object(f.jsx)("p",{children:e.origin.name})]})]})]})]})},B=p.a.div(F||(F=Object(s.a)(["\n  inline-size: 17.5rem;\n  block-size: 25rem;\n  border-radius: 0.5rem;\n  background-image: url(","/images/card.png);\n  cursor: pointer;\n"])),"/Memorama-rick-and-Morty");var T,D=function(n){var e=n.character,t=n.setActiveCart,i=n.setPlayActions,r=n.playActions;return Object(f.jsx)(B,{onClick:function(){i([].concat(Object(C.a)(r),[e.name])),t(!0)},className:"animate__animated animate__flipInY"})},J=p.a.div(T||(T=Object(s.a)([""])));var L,Y=function(n){var e=n.character,t=n.playActions,r=n.setPlayActions,a=Object(i.useState)(!1),c=Object(o.a)(a,2),s=c[0],l=c[1];return Object(f.jsx)(J,{children:s?Object(f.jsx)(I,{setActiveCart:l,character:e,setPlayActions:r,playActions:t}):Object(f.jsx)(D,{setActiveCart:l,character:e,setPlayActions:r,playActions:t})})},q=p.a.main(L||(L=Object(s.a)(["\n  margin: 50px 0;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  justify-content: space-between;\n  row-gap: 50px;\n  flex: 1;\n  @media (max-width: 900px) {\n    justify-content: space-evenly;\n  }\n  @media (max-width: 600px) {\n    justify-content: center;\n  }\n"])));var G,V=function(){var n=Object(i.useContext)(tn),e=Object(i.useState)([]),t=Object(o.a)(e,2),r=t[0],a=t[1],c=n.value;return console.log(r),Object(f.jsxs)(q,{children:[c.map((function(n){return Object(f.jsx)(Y,{character:n,setPlayActions:a,playActions:r},n.id)})),c.map((function(n){return Object(f.jsx)(Y,{character:n,setPlayActions:a,playActions:r},n.id)}))]})},$=p.a.div(G||(G=Object(s.a)(["\n  position: fixed;\n  inline-size: 36.87rem;\n  block-size: 26.25rem;\n  border-radius: 3rem;\n  text-align: center;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  top: calc(50% - (26.25rem / 2));\n  left: calc(50% - (36.87rem / 2));\n  z-index: 5;\n  box-sizing: border-box;\n  display: none;\n\n  h2 {\n    font: var(--subtitle1);\n  }\n  @media (max-width: 600px) {\n    position: fixed;\n    margin: 0 1rem;\n    block-size: 20rem;\n    inline-size: calc(100% - 2rem);\n    top: calc(50% - 10rem);\n    left: 0;\n    padding: 2rem;\n    box-sizing: border-box;\n  }\n"])));var H,K=function(){var n=Object(i.useContext)(tn),e=Object(i.useRef)(null);return Object(i.useEffect)((function(){n.modal=Object(A.a)(Object(A.a)({},n.modal),{},{win:e})}),[e]),Object(f.jsxs)($,{ref:e,children:[Object(f.jsx)("img",{src:"".concat("/Memorama-rick-and-Morty","/images/logo.png"),alt:"logo"}),Object(f.jsx)("h2",{children:"\xa1Felicidades!, has completado el juego."}),Object(f.jsx)(g,{children:"siguiente nivel"})]})},Q=p.a.div(H||(H=Object(s.a)(["\n  position: fixed;\n  inline-size: 36.87rem;\n  block-size: 26.25rem;\n  border-radius: 3rem;\n  text-align: center;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  top: calc(50% - (26.25rem / 2));\n  left: calc(50% - (36.87rem / 2));\n  z-index: 5;\n  box-sizing: border-box;\n  display: none;\n  h2 {\n    font: var(--subtitle1);\n  }\n  @media (max-width: 600px) {\n    position: fixed;\n    margin: 0 1rem;\n    block-size: 20rem;\n    inline-size: calc(100% - 2rem);\n    top: calc(50% - 10rem);\n    left: 0;\n    padding: 2rem;\n    box-sizing: border-box;\n  }\n"])));var U,W=function(){var n=Object(i.useContext)(tn),e=Object(i.useRef)(null);return Object(i.useEffect)((function(){n.modal=Object(A.a)(Object(A.a)({},n.modal),{},{lose:e})}),[e]),Object(f.jsxs)(Q,{ref:e,children:[Object(f.jsx)("img",{src:"".concat("/Memorama-rick-and-Morty","/images/logo.png"),alt:"logo"}),Object(f.jsx)("h2",{children:"Te has quedado sin vidas."}),Object(f.jsx)(g,{onClick:function(){n.ref.lives.textContent=3,n.ref.points.textContent=300,e.current.style.display="none"},children:"Volver a jugar"})]})},X=p.a.div(U||(U=Object(s.a)(["\n  padding: 20px;\n  width: inherit;\n  height: inherit;\n  box-sizing: border-box;\n"])));var Z,nn=function(){var n=Object(i.useRef)(null),e=Object(i.useState)(),t=Object(o.a)(e,2),r=t[0],a=t[1];return Object(i.useEffect)((function(){a(n.current)}),[r]),Object(f.jsxs)(X,{children:[Object(f.jsx)(R,{containerPage:r}),Object(f.jsx)(P,{containerPage:r}),Object(f.jsx)(K,{containerPage:r}),Object(f.jsx)(W,{containerPage:r}),Object(f.jsxs)("div",{className:"wrapper",ref:n,children:[Object(f.jsx)(w,{}),Object(f.jsx)(V,{containerPage:r})]})]})},en=p.a.div(Z||(Z=Object(s.a)(["\n  .wrapper {\n    max-width: 1366px;\n    margin: auto;\n  }\n"]))),tn=Object(i.createContext)();var rn=function(){var n=Object(i.useState)(),e=Object(o.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(!1),c=Object(o.a)(a,2),s=c[0],l=c[1],d=x(1,2,3,4,5,6,7,8);return Object(i.useEffect)((function(){d.then((function(n){r(n)})).catch((function(n){console.log(n)}))}),[]),Object(f.jsxs)(tn.Provider,{value:{value:t,ref:{},setCharacters:r},children:[" ",Object(f.jsx)(R,{}),Object(f.jsx)(en,{id:"page",children:s?Object(f.jsx)(nn,{}):Object(f.jsx)(y,{setPlay:l})})]})},an=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),a(n),c(n)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(rn,{})}),document.getElementById("root")),an()}},[[29,1,2]]]);
//# sourceMappingURL=main.19d9bf41.chunk.js.map