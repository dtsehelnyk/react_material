(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(26),r=n.n(i),s=(n(61),n(62),n(63),n(16)),o=n(53),j=n(90),l=n(87),b=n(88),u=n(86),m=n(47),d=n.n(m),x=n(48),h=n.n(x),O=n(49),p=n.n(O),v=n(50),f=n.n(v),g=n(51),N=n.n(g),k=n(3),y=Object(u.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},link:{display:"inline-flex",alignItems:"center",margin:"0 20px",color:"#fff",textDecoration:"none",transition:"color 0.3s"},activeLink:{color:"#aaa"},icon:{marginRight:"10px"}}})),C=function(){var e=y();return Object(k.jsx)(l.a,{container:!0,justify:"center",children:Object(k.jsxs)("ul",{children:[Object(k.jsxs)(s.b,{to:"/main",className:e.link,activeClassName:e.activeLink,children:[Object(k.jsx)(d.a,{className:e.icon}),Object(k.jsx)(b.a,{variant:"button",children:"Home"})]}),Object(k.jsxs)(s.b,{to:"/timer",className:e.link,activeClassName:e.activeLink,children:[Object(k.jsx)(h.a,{className:e.icon}),Object(k.jsx)(b.a,{variant:"button",children:"Timer"})]}),Object(k.jsxs)(s.b,{to:"/calendar",className:e.link,activeClassName:e.activeLink,children:[Object(k.jsx)(p.a,{className:e.icon}),Object(k.jsx)(b.a,{variant:"button",children:"Calendar"})]}),Object(k.jsxs)(s.b,{to:"/notes",className:e.link,activeClassName:e.activeLink,children:[Object(k.jsx)(f.a,{className:e.icon}),Object(k.jsx)(b.a,{variant:"button",children:"Notes"})]}),Object(k.jsxs)(s.b,{to:"/converter",className:e.link,activeClassName:e.activeLink,children:[Object(k.jsx)(N.a,{className:e.icon}),Object(k.jsx)(b.a,{variant:"button",children:"Converter"})]})]})})},w=n(93),L=n(89),S=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(w.a,{children:Object(k.jsx)(L.a,{variant:"dense",children:Object(k.jsx)(C,{})})})})},I=function(){return Object(k.jsx)("div",{children:"my sweet home"})},T=n(31),D=Object(u.a)((function(e){return{timer:{fontWeight:700,fontSize:"48px",color:"green",textShadow:"0 0 7px rgba(50, 255, 50, 0.7)"}}})),F=function(){var e=D(),t=Object(a.useState)((new Date).toLocaleTimeString()),n=Object(T.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){var e=setInterval((function(){i((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}})),Object(k.jsx)(b.a,{className:e.timer,align:"center",children:c})},z=n(52),B=(n(71),function(){var e=Object(a.useState)(new Date),t=Object(T.a)(e,2),n=t[0],c=t[1];return Object(k.jsx)("div",{children:Object(k.jsx)(z.a,{onChange:c,value:n})})}),E=function(){return Object(k.jsx)("div",{children:"my important notes"})},H=function(){return Object(k.jsx)("div",{children:"money-money :)"})},J=n(91),P=n(5),R=Object(u.a)((function(e){return{wrapper:{position:"relative",background:"radial-gradient(#063809, #000701)","&::before":{position:"absolute",zIndex:1,content:'""',top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",backgroundImage:"linear-gradient(transparent 0%, rgba(10, 16, 10, 0.5) 50%)",backgroundSize:"100% 4px"}},page:{minHeight:"100vh",justifyContent:"center",alignItems:"center"}}})),A=function(){var e=R("");return Object(k.jsx)(J.a,{className:e.wrapper,children:Object(k.jsx)(l.a,{container:!0,className:e.page,children:Object(k.jsxs)(P.c,{children:[Object(k.jsx)(P.a,{path:"/timer",component:F}),Object(k.jsx)(P.a,{path:"/calendar",component:B}),Object(k.jsx)(P.a,{path:"/notes",component:E}),Object(k.jsx)(P.a,{path:"/converter",component:H}),Object(k.jsx)(P.a,{path:"/",component:I})]})})})},M=Object(o.a)({palette:{primary:{light:"#757ce8",main:"#333",dark:"#002884",contrastText:"#fff"}},typography:{fontFamily:"monospace"}});var W=function(){return Object(k.jsx)(s.a,{children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(j.a,{theme:M,children:[Object(k.jsx)(S,{}),Object(k.jsx)(A,{})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(W,{})}),document.getElementById("root")),q()}},[[73,1,2]]]);
//# sourceMappingURL=main.54ae09ba.chunk.js.map