"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a=t(5861),i=t(9439),o=t(4687),c=t.n(o),s=t(409),u=t(2791),p=t(7689),h=t(168),d=t(5706).Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n\n  padding: 0;\n  row-gap: 25px;\n  column-gap: 110px;\n  li {\n    display: flex;\n    flex-direction: column;\n\n    width: 200px;\n  }\n  img {\n    border: 2px solid black;\n    border-radius: 10px;\n    height: auto;\n    max-height: 350px;\n  }\n  p {\n    margin: 5px 0px;\n    font-size: 16px;\n  }\n"]))),l=t(4433),f=t(8924),m=t(184),g=function(){var e=(0,u.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],o=(0,u.useState)(!1),h=(0,i.Z)(o,2),g=h[0],x=h[1];console.log(t);var v=(0,p.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,s.y)(v);case 4:n=e.sent,r(n.data.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,u.useEffect)((function(){(0,l.run)("holder")})),(0,m.jsxs)(m.Fragment,{children:[g&&(0,m.jsx)(f.Z,{}),(0,m.jsx)(d,{children:t.map((function(e){var n=e.character,t=e.name,r=e.profile_path,a=e.id;return(0,m.jsxs)("li",{children:[r?(0,m.jsx)("img",{width:"200",height:"300",src:"https://image.tmdb.org/t/p/w200".concat(r),alt:t}):(0,m.jsx)("img",{className:"holder",width:"200",height:"300","data-src":"holder.js/200x300?bg=#483d8b&text=There is no image yet...",alt:"holder"}),(0,m.jsxs)("p",{children:["Name: ",t]}),(0,m.jsxs)("p",{children:["Character: ",n]})]},a)}))})]})}},409:function(e,n,t){t.d(n,{$S:function(){return s},DD:function(){return o},SU:function(){return a},oO:function(){return i},y:function(){return c}});var r=t(1243);r.Z.defaults.params={api_key:"64d37a07aa15dae3b8f14e8351f25936"};var a=function(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day")},i=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"))},o=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e))},c=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"))},s=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e))}}}]);
//# sourceMappingURL=387.f36f54f5.chunk.js.map