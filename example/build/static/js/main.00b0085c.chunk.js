(this["webpackJsonpreact-google-map-picker-example"]=this["webpackJsonpreact-google-map-picker-example"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(8),n(1)),o=n.n(r),c=n(5),i=n.n(c),s=n(4),u=n(2);function l(e,t){if(function(e){for(var t=document.head.getElementsByTagName("script"),n=0;n<t.length;n++)if(t[n].getAttribute("id")===e)return!0;return!1}(t))return Promise.resolve();var n=document.createElement("script");return n.setAttribute("async",""),n.setAttribute("id",t),n.src=e,document.querySelector("head").appendChild(n),new Promise((function(e){n.onload=function(){e()}}))}var d="google-map-view-"+Math.random().toString(36).substr(2,9),g=function(e){var t=e.apiKey,n=e.defaultLocation,a=e.zoom,r=void 0===a?7:a,c=e.onChangeLocation,i=e.onChangeZoom,s=e.style,u=e.className,g=o.a.useRef(null),m=o.a.useRef(null);function p(){if(c){var e=m.current.getPosition();c(e.lat(),e.lng())}}function b(){i&&i(g.current.getZoom())}function j(){var e,t=window.google,a=(e=n)&&Math.abs(e.lat)<=90&&Math.abs(e.lng)<=180?n:{lat:0,lng:0};g.current=new t.maps.Map(document.getElementById(d),{center:a,zoom:r}),m.current?m.current.setPosition(a):(m.current=new t.maps.Marker({position:a,map:g.current,draggable:!0}),t.maps.event.addListener(m.current,"dragend",p)),g.current.addListener("click",(function(e){var t=e.latLng;m.current.setPosition(t),p()})),g.current.addListener("zoom_changed",b)}o.a.useEffect((function(){l("https://maps.googleapis.com/maps/api/js?libraries=places&key="+t,"google-maps").then(j)}),[]),o.a.useEffect((function(){m.current&&(g.current.setCenter(n),m.current.setPosition(n))}),[n]),o.a.useEffect((function(){g.current&&g.current.setZoom(r)}),[r]);var f=Object.assign({width:"100%",height:"600px"},s||{});return o.a.createElement("div",{id:d,style:f,className:u})},m={lat:10,lng:106},p=function(){var e=Object(r.useState)(m),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(n),i=Object(u.a)(c,2),l=i[0],d=i[1],p=Object(r.useState)(10),b=Object(u.a)(p,2),j=b[0],f=b[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){o(Object(s.a)({},m)),d(Object(s.a)({},m)),f(10)},children:"Reset Location"}),Object(a.jsx)("label",{children:"Latitute:"}),Object(a.jsx)("input",{type:"text",value:l.lat,disabled:!0}),Object(a.jsx)("label",{children:"Longitute:"}),Object(a.jsx)("input",{type:"text",value:l.lng,disabled:!0}),Object(a.jsx)("label",{children:"Zoom:"}),Object(a.jsx)("input",{type:"text",value:j,disabled:!0}),Object(a.jsx)(g,{defaultLocation:n,zoom:j,style:{height:"700px"},onChangeLocation:function(e,t){d({lat:e,lng:t})},onChangeZoom:function(e){f(e)},apiKey:"AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"})]})};i.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))},8:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.00b0085c.chunk.js.map