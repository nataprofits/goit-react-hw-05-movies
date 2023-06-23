"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[130],{1149:function(n,e,t){t.d(e,{W:function(){return o}});var r,i=t(168),o=t(5706).Z.div(r||(r=(0,i.Z)(["\n  padding-right: 30px;\n  /* padding-left: 15px; */\n  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(128,109,113,1) 100%);\n"])))},9956:function(n,e,t){t.d(e,{Fg:function(){return p},H2:function(){return d},aV:function(){return s}});var r,i,o,a=t(168),c=t(5706),l=t(1087),s=c.Z.ul(r||(r=(0,a.Z)(["\n/* display: flex;\nflex-direction: column;\ngap: 10px;\nmargin-right:auto;\nmargin-left:auto; */\ndisplay: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: 16px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  height: 100vh;\n  max-width: calc(100vw - 48px);\n  list-style: none;\n\n"]))),d=c.Z.li(i||(i=(0,a.Z)(["\n  position: relative;\n  width: calc((1214px - 90px) / 4);\n  text-align: center;\n  border: 1px solid #ffffff;\nborder-radius: 3px;\n  box-shadow: 0px 10px 2px 2px var(--primary-color);\n  background-color: antiquewhite;\n  transition: transform var(--animation), box-shadow var(--animation);\n\n  &:hover {\n    transform: translateY(10px);\n    box-shadow: none;\n  }\n"]))),p=(0,c.Z)(l.rU)(o||(o=(0,a.Z)(["\n  font-weight: 500;\n  transition: all 250ms linear;\n  text-decoration: none;\ncolor: black;\n  &:hover {\n    color: rgba(41, 123, 213, 0.71);\n    text-decoration: underline;\n  }\n"])))},4130:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,a=t(5861),c=t(9439),l=t(4687),s=t.n(l),d=t(1149),p=t(409),u=t(2791),x=t(7689),f=t(8924),h=t(7692),g=t(168),v=t(5706),m=t(1087),b=v.Z.div(r||(r=(0,g.Z)(["\nmargin: 30px 0px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\nul {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n  p {\n    font-size: 20px;\n    font-weight:500;\n    padding-left: 10px;\n  }\n"]))),j=(0,v.Z)(m.rU)(i||(i=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #483d8b;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 15px;\n  padding: 5px 10px;\n  cursor: pointer;\n  transition: all 250ms linear;\n\n  &:hover {\n    background-color: #bc8f8f;\n    color: black;\n  }\n"]))),Z=t(9956),w=v.Z.div(o||(o=(0,g.Z)(["\ndisplay:flex;\ngap:50px;"]))),k=t(184),y=function(n){var e,t,r,i=n.details,o=n.location,a=i.title,c=i.vote_average,l=i.overview,s=i.poster_path,d=i.release_date,p=null!==(e=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return console.log(p),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(j,{to:p,children:[(0,k.jsx)(h.YiX,{}),"Go back"]}),(0,k.jsxs)(w,{children:[(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(s),alt:"title"}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h1",{children:[a,"(",null===d||void 0===d?void 0:d.slice(0,4),")"]}),(0,k.jsxs)("p",{children:["User Score: ",(10*c).toFixed(),"%"]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("p",{children:l}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:null===(r=i.genres)||void 0===r?void 0:r.map((function(n){return n.name})).join(" ")})]})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(Z.Fg,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(Z.Fg,{to:"reviews",children:"Reviews"})})]})]})]})},_=function(){var n=(0,u.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,u.useState)(!1),o=(0,c.Z)(i,2),l=o[0],h=o[1],g=(0,x.UO)().movieId,v=(0,x.TH)();return(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,p.DD)(g);case 4:e=n.sent,r(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]),(0,k.jsx)("section",{style:{padding:"30px 0px"},children:(0,k.jsxs)(d.W,{children:[l&&(0,k.jsx)(f.Z,{}),t&&(0,k.jsx)(y,{details:t,location:v}),(0,k.jsx)(u.Suspense,{fallback:(0,k.jsx)(f.Z,{}),children:(0,k.jsx)(x.j3,{})})]})})}},409:function(n,e,t){t.d(e,{$S:function(){return l},DD:function(){return a},SU:function(){return i},oO:function(){return o},y:function(){return c}});var r=t(1243);r.Z.defaults.params={api_key:"64d37a07aa15dae3b8f14e8351f25936"};var i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day")},o=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"))},a=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n))},c=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"))},l=function(n){return r.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n))}}}]);
//# sourceMappingURL=130.819894d1.chunk.js.map