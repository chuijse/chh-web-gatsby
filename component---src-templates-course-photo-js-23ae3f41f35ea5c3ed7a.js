"use strict";(self.webpackChunkchh_web_gatsby=self.webpackChunkchh_web_gatsby||[]).push([[534],{9361:function(I,g,e){e.r(g),e.d(g,{default:function(){return M}});var t=e(7294),i=e(6125),a=e(5444),l=e(8557),C=e(7920),n=e(1633),c=e(9236),A=e(729),m=e(8093),o=e(7186),r=e(6867),Z=function(){return Z=Object.assign||function(I){for(var g,e=1,t=arguments.length;e<t;e++)for(var i in g=arguments[e])Object.prototype.hasOwnProperty.call(g,i)&&(I[i]=g[i]);return I},Z.apply(this,arguments)},s=function(I,g){var e={};for(var t in I)Object.prototype.hasOwnProperty.call(I,t)&&g.indexOf(t)<0&&(e[t]=I[t]);if(null!=I&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(I);i<t.length;i++)g.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(I,t[i])&&(e[t[i]]=I[t[i]])}return e},b=!1,d=(0,t.forwardRef)((function(I,g){var e=I.style,i=s(I,["style"]),a=function(){var I=(0,t.useState)(j),g=I[0],e=I[1],i=function(){var I=(0,t.useState)(!1),g=I[0],e=I[1];return(0,t.useEffect)((function(){y()&&e(!0)}),[]),g}();return(0,t.useEffect)((function(){if(i)return window.addEventListener("resize",I),function(){return window.removeEventListener("resize",I)};function I(){var I=j();e(I)}}),[i]),i?g:null}();!b&&(null==e?void 0:e.height)&&(b=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var l=Z(Z({},e),{height:a?a+"px":"100vh"});return t.createElement("div",Z({ref:g,style:l},i))}));d.displayName="Div100vh";var u=d;function j(){return y()?window.innerHeight:null}function y(){return"undefined"!=typeof window&&"undefined"!=typeof document}function M(I){var g,e=(0,t.useState)(!1),c=e[0],A=e[1],Z=null===(g=I.data)||void 0===g?void 0:g.sanityCourses,s=I.pageContext,b=s.index,d=s.totalLenghtIndex,j=(0,t.useContext)(C.g),y=(j.s,j.setNavView),M=(0,m.useMediaQuery)({maxWidth:992});function N(){b<d-1?(0,a.navigate)("/teaching/"+Z.slug.current+"/"+(b+1)+"/"+Z.imageGallery[b+1].slug.current,{state:-500}):(0,a.navigate)("/teaching/"+Z.slug.current+"/0/"+Z.imageGallery[0].slug.current,{state:-500})}function G(){0!==b?(0,a.navigate)("/teaching/"+Z.slug.current+"/"+(b-1)+"/"+Z.imageGallery[b-1].slug.current,{state:500}):(0,a.navigate)("/teaching/"+Z.slug.current+"/"+(d-1)+"/"+Z.imageGallery[d-1].slug.current,{state:500})}return(0,t.useEffect)((function(){return y(!1),A(!0!==M),function(){y(!0)}}),[]),t.createElement(u,null,t.createElement(n.Z,{title:Z.title+", galeria de imágenes",description:Z.abstract+" | Descripción Foto: "+Z.imageGallery[b].caption,image:Z.imageGallery[b].photo.asset.url}),t.createElement("div",{className:"single-image-root"},c&&t.createElement(p,{title:Z.title,slug:Z.slug,index:b,id:Z.id,caption:Z.imageGallery[b].caption,totalLenghtIndex:d,location:I.location,abstract:Z.abstract,isMobilorTablet:M}),t.createElement("div",{className:"single-image-body"},M&&t.createElement("span",{className:"single-image-body-Mobil-title"},c?t.createElement("div",null,""):t.createElement(l.Z,{path:"/teaching/"+Z.slug.current,text:"",id:"gallery-item"+Z.id+"-"+b}),t.createElement("button",{onClick:function(){return A(!c)}},t.createElement("span",{className:"info-indicator"},c?"-":"+"),"info")),!M&&t.createElement("button",{onClick:function(){return G()},className:"single-image-arrow-button-left"},t.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaGVpZ2h0PSIyNHB4IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHdpZHRoPSIyNHB4IgogICBmaWxsPSIjMDAwMDAwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc2IgogICBzb2RpcG9kaTpkb2NuYW1lPSJhcnJvd0JhY2suc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSwgY3VzdG9tKSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMCI+CiAgICA8ZmlsdGVyCiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBzdHlsZT0iY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOnNSR0IiCiAgICAgICBpZD0iZmlsdGVyMTI0MyIKICAgICAgIHg9Ii0wLjE5ODYyOTE0IgogICAgICAgd2lkdGg9IjEuMzk3MjU4MyIKICAgICAgIHk9Ii0wLjExNzA3MDgyIgogICAgICAgaGVpZ2h0PSIxLjIzNDE0MTYiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIKICAgICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgICBzdGREZXZpYXRpb249IjAuOTY1ODM0MjIiCiAgICAgICAgIGlkPSJmZUdhdXNzaWFuQmx1cjEyNDUiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDA4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgyOSIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMjIuNjkxNzg3IgogICAgIGlua3NjYXBlOmN4PSIxMiIKICAgICBpbmtzY2FwZTpjeT0iMTIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjI0MzAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjE0MiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzYiIC8+CiAgPHBhdGgKICAgICBkPSJNMCAwaDI0djI0SDBWMHoiCiAgICAgZmlsbD0ibm9uZSIKICAgICBvcGFjaXR5PSIuODciCiAgICAgaWQ9InBhdGgyIiAvPgogIDxwYXRoCiAgICAgZD0iTSAxNy44MzUsMy44NzAwMDAzIDE2LjA1NSwyLjEwMDAwMDIgNi4xNjQ5OTk3LDEyIDE2LjA2NSwyMS45IDE3LjgzNSwyMC4xMyA5LjcwNDk5OTgsMTIgWiIKICAgICBpZD0icGF0aDgzNyIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZTpub25lO2ZpbHRlcjp1cmwoI2ZpbHRlcjEyNDMpIiAvPgogIDxwYXRoCiAgICAgZD0iTSAxNy44MzUsMy44NzAwMDAzIDE2LjA1NSwyLjEwMDAwMDIgNi4xNjQ5OTk3LDEyIDE2LjA2NSwyMS45IDE3LjgzNSwyMC4xMyA5LjcwNDk5OTgsMTIgWiIKICAgICBpZD0icGF0aDg0MSIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K",width:60,alt:"back Arrow gallery, CHH | Portfolio"})),t.createElement(o.E.span,{drag:"x",className:"single-image-content",dragConstraints:{left:0,right:0},onDragEnd:function(I,g){return M&&((e=g.point.x)>=r.u9.innerWidth-60&&0!==e&&(console.log(e),G()),void(e<=60&&0!==e&&(console.log(e),N())));var e}},t.createElement(o.E.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.1}},transition:{duration:1}},t.createElement(i.G,{image:Z.imageGallery[b].photo.asset.gatsbyImageData,alt:Z.imageGallery[b].caption,objectFit:"scale-down",className:"fullsize-image"}))),!M&&t.createElement("button",{onClick:function(){return N()},className:"single-image-arrow-button-right"},t.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaGVpZ2h0PSIyNHB4IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHdpZHRoPSIyNHB4IgogICBmaWxsPSIjMDAwMDAwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc2IgogICBzb2RpcG9kaTpkb2NuYW1lPSJhcnJvd0ZvcndhcmQuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSwgY3VzdG9tKSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMCI+CiAgICA8ZmlsdGVyCiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBzdHlsZT0iY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOnNSR0IiCiAgICAgICBpZD0iZmlsdGVyMTI0MyIKICAgICAgIHg9Ii0wLjE5ODYyOTE0IgogICAgICAgd2lkdGg9IjEuMzk3MjU4MyIKICAgICAgIHk9Ii0wLjExNzA3MDgyIgogICAgICAgaGVpZ2h0PSIxLjIzNDE0MTYiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIKICAgICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgICBzdGREZXZpYXRpb249IjAuOTY1ODM0MjIiCiAgICAgICAgIGlkPSJmZUdhdXNzaWFuQmx1cjEyNDUiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDA4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgyOSIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuNTcxMTczIgogICAgIGlua3NjYXBlOmN4PSI0Ljk0ODU5NjUiCiAgICAgaW5rc2NhcGU6Y3k9IjE2LjAxMjA4NyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjM0NyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMTk1IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNiIKICAgICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KICA8cGF0aAogICAgIGQ9Ik0gMjQsMjMuOTk5OTk5IEggMCBWIC02Ljg1MTI4OTdlLTcgaCAyNCB6IgogICAgIGZpbGw9Im5vbmUiCiAgICAgb3BhY2l0eT0iMC44NyIKICAgICBpZD0icGF0aDIiIC8+CiAgPHBhdGgKICAgICBkPSJNIDE3LjgzNSwzLjg3MDAwMDMgMTYuMDU1LDIuMTAwMDAwMiA2LjE2NDk5OTcsMTIgMTYuMDY1LDIxLjkgMTcuODM1LDIwLjEzIDkuNzA0OTk5OCwxMiBaIgogICAgIGlkPSJwYXRoODM3IgogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7c3Ryb2tlOm5vbmU7ZmlsdGVyOnVybCgjZmlsdGVyMTI0MykiCiAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDEyLDEyKSIgLz4KICA8cGF0aAogICAgIGQ9Im0gNi4xNjUsMjAuMTI5OTk5IDEuNzgsMS43NyA5Ljg5LC05LjkgLTkuOSwtOS44OTk5OTk3IC0xLjc3LDEuNzcgOC4xMyw4LjEyOTk5OTcgeiIKICAgICBpZD0icGF0aDg0MSIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K",width:60,alt:"forward arrow gallery, CHH | Portfolio"})),M&&t.createElement("div",{className:"single-image-body-mabil-footer"},t.createElement("p",{className:"single-image-body-caption"},Z.imageGallery[b].caption),t.createElement("span",{className:"sinlge-image-number-caption"},t.createElement("p",{className:"white-caption"},t.createElement("span",{className:"textYellow"},""+(b+1))),t.createElement("p",{className:"white-caption"},"/"+d))))))}function p(I){var g=I.title,e=I.slug,i=I.id,a=I.index,C=I.caption,n=I.totalLenghtIndex,m=I.location,o=I.abstract;return t.createElement("div",{className:"single-image-header"},t.createElement("div",{className:"single-image-header-content"},t.createElement("h1",null,"Galeria de imágenes"),t.createElement(c.Z,{statClass:"Título de curso:",statName:g}),t.createElement("br",null),t.createElement(c.Z,{statClass:"Resumen del curos:",statName:o}),t.createElement("br",null),t.createElement(c.Z,{statClass:"Descripción de la foto:",statName:C}),t.createElement("br",null),t.createElement(c.Z,{statClass:"Número de foto:",statName:a+1+"/"+n}),t.createElement(l.Z,{path:"/teaching/"+e.current,text:"Docencia/"+e.current,id:"gallery-item"+i+"-"+a}),t.createElement(A.Z,{title:g+" | CHH Portafolio",url:m.href,twitterHandle:"CHH_Portafolio",tags:["CHH"]})))}}}]);
//# sourceMappingURL=component---src-templates-course-photo-js-23ae3f41f35ea5c3ed7a.js.map