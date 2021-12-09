"use strict";(self.webpackChunkchh_web_gatsby=self.webpackChunkchh_web_gatsby||[]).push([[534],{6726:function(I,g,e){e.r(g),e.d(g,{default:function(){return b}});var i=e(7294),a=e(6125),t=e(5444),C=e(8557),l=e(7920),A=e(1633),c=e(9236),m=e(729),n=e(8093),Z=e(7186),o=e(6867);function b(I){var g,e=(0,i.useState)(!1),c=e[0],m=e[1],b=null===(g=I.data)||void 0===g?void 0:g.sanityCourses,d=I.pageContext,r=d.index,j=d.totalLenghtIndex,M=(0,i.useContext)(l.g),u=(M.s,M.setNavView),N=(0,n.useMediaQuery)({maxWidth:992});function y(){r<j-1?(0,t.navigate)("/teaching/"+b.slug.current+"/"+(r+1)+"/"+b.imageGallery[r+1].slug.current,{state:-500}):(0,t.navigate)("/teaching/"+b.slug.current+"/0/"+b.imageGallery[0].slug.current,{state:-500})}function G(){0!==r?(0,t.navigate)("/teaching/"+b.slug.current+"/"+(r-1)+"/"+b.imageGallery[r-1].slug.current,{state:500}):(0,t.navigate)("/teaching/"+b.slug.current+"/"+(j-1)+"/"+b.imageGallery[j-1].slug.current,{state:500})}return(0,i.useEffect)((function(){return u(!1),m(!0!==N),function(){u(!0)}}),[]),i.createElement(i.Fragment,null,i.createElement(A.Z,{title:b.title+", galeria de imágenes",description:b.abstract+" | Descripción Foto: "+b.imageGallery[r].caption,image:b.imageGallery[r].photo.asset.url}),i.createElement("div",{className:"single-image-root"},c&&i.createElement(s,{title:b.title,slug:b.slug,index:r,id:b.id,caption:b.imageGallery[r].caption,totalLenghtIndex:j,location:I.location,abstract:b.abstract,isMobilorTablet:N}),i.createElement("div",{className:"single-image-body"},N&&i.createElement("span",{className:"single-image-body-Mobil-title"},c?i.createElement("div",null,""):i.createElement(C.Z,{path:"/teaching/"+b.slug.current,text:"",id:"gallery-item"+b.id+"-"+r}),i.createElement("button",{onClick:function(){return m(!c)}},i.createElement("span",{className:"info-indicator"},c?"-":"+"),"info")),!N&&i.createElement("button",{onClick:function(){return G()},className:"single-image-arrow-button-left"},i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaGVpZ2h0PSIyNHB4IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHdpZHRoPSIyNHB4IgogICBmaWxsPSIjMDAwMDAwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc2IgogICBzb2RpcG9kaTpkb2NuYW1lPSJhcnJvd0JhY2suc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSwgY3VzdG9tKSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMCI+CiAgICA8ZmlsdGVyCiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBzdHlsZT0iY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOnNSR0IiCiAgICAgICBpZD0iZmlsdGVyMTI0MyIKICAgICAgIHg9Ii0wLjE5ODYyOTE0IgogICAgICAgd2lkdGg9IjEuMzk3MjU4MyIKICAgICAgIHk9Ii0wLjExNzA3MDgyIgogICAgICAgaGVpZ2h0PSIxLjIzNDE0MTYiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIKICAgICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgICBzdGREZXZpYXRpb249IjAuOTY1ODM0MjIiCiAgICAgICAgIGlkPSJmZUdhdXNzaWFuQmx1cjEyNDUiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDA4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgyOSIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMjIuNjkxNzg3IgogICAgIGlua3NjYXBlOmN4PSIxMiIKICAgICBpbmtzY2FwZTpjeT0iMTIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjI0MzAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjE0MiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzYiIC8+CiAgPHBhdGgKICAgICBkPSJNMCAwaDI0djI0SDBWMHoiCiAgICAgZmlsbD0ibm9uZSIKICAgICBvcGFjaXR5PSIuODciCiAgICAgaWQ9InBhdGgyIiAvPgogIDxwYXRoCiAgICAgZD0iTSAxNy44MzUsMy44NzAwMDAzIDE2LjA1NSwyLjEwMDAwMDIgNi4xNjQ5OTk3LDEyIDE2LjA2NSwyMS45IDE3LjgzNSwyMC4xMyA5LjcwNDk5OTgsMTIgWiIKICAgICBpZD0icGF0aDgzNyIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZTpub25lO2ZpbHRlcjp1cmwoI2ZpbHRlcjEyNDMpIiAvPgogIDxwYXRoCiAgICAgZD0iTSAxNy44MzUsMy44NzAwMDAzIDE2LjA1NSwyLjEwMDAwMDIgNi4xNjQ5OTk3LDEyIDE2LjA2NSwyMS45IDE3LjgzNSwyMC4xMyA5LjcwNDk5OTgsMTIgWiIKICAgICBpZD0icGF0aDg0MSIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K",width:60,alt:"back Arrow gallery, CHH | Portfolio"})),i.createElement(Z.E.span,{drag:"x",className:"single-image-content",dragConstraints:{left:0,right:0},onDragEnd:function(I,g){return N&&((e=g.point.x)>=o.u9.innerWidth-40&&(console.log(e),G()),void(e<=40&&y()));var e}},i.createElement(Z.E.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.1}},transition:{duration:1}},i.createElement(a.G,{image:b.imageGallery[r].photo.asset.gatsbyImageData,alt:b.imageGallery[r].caption,objectFit:"scale-down",className:"fullsize-image"}))),!N&&i.createElement("button",{onClick:function(){return y()},className:"single-image-arrow-button-right"},i.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaGVpZ2h0PSIyNHB4IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHdpZHRoPSIyNHB4IgogICBmaWxsPSIjMDAwMDAwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc2IgogICBzb2RpcG9kaTpkb2NuYW1lPSJhcnJvd0ZvcndhcmQuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSwgY3VzdG9tKSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTIiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMCI+CiAgICA8ZmlsdGVyCiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBzdHlsZT0iY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOnNSR0IiCiAgICAgICBpZD0iZmlsdGVyMTI0MyIKICAgICAgIHg9Ii0wLjE5ODYyOTE0IgogICAgICAgd2lkdGg9IjEuMzk3MjU4MyIKICAgICAgIHk9Ii0wLjExNzA3MDgyIgogICAgICAgaGVpZ2h0PSIxLjIzNDE0MTYiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIKICAgICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgICBzdGREZXZpYXRpb249IjAuOTY1ODM0MjIiCiAgICAgICAgIGlkPSJmZUdhdXNzaWFuQmx1cjEyNDUiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDA4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgyOSIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuNTcxMTczIgogICAgIGlua3NjYXBlOmN4PSI0Ljk0ODU5NjUiCiAgICAgaW5rc2NhcGU6Y3k9IjE2LjAxMjA4NyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjM0NyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMTk1IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNiIKICAgICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KICA8cGF0aAogICAgIGQ9Ik0gMjQsMjMuOTk5OTk5IEggMCBWIC02Ljg1MTI4OTdlLTcgaCAyNCB6IgogICAgIGZpbGw9Im5vbmUiCiAgICAgb3BhY2l0eT0iMC44NyIKICAgICBpZD0icGF0aDIiIC8+CiAgPHBhdGgKICAgICBkPSJNIDE3LjgzNSwzLjg3MDAwMDMgMTYuMDU1LDIuMTAwMDAwMiA2LjE2NDk5OTcsMTIgMTYuMDY1LDIxLjkgMTcuODM1LDIwLjEzIDkuNzA0OTk5OCwxMiBaIgogICAgIGlkPSJwYXRoODM3IgogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7c3Ryb2tlOm5vbmU7ZmlsdGVyOnVybCgjZmlsdGVyMTI0MykiCiAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDEyLDEyKSIgLz4KICA8cGF0aAogICAgIGQ9Im0gNi4xNjUsMjAuMTI5OTk5IDEuNzgsMS43NyA5Ljg5LC05LjkgLTkuOSwtOS44OTk5OTk3IC0xLjc3LDEuNzcgOC4xMyw4LjEyOTk5OTcgeiIKICAgICBpZD0icGF0aDg0MSIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K",width:60,alt:"forward arrow gallery, CHH | Portfolio"})),N&&i.createElement("div",{className:"single-image-body-mabil-footer"},i.createElement("p",{className:"single-image-body-caption"},b.imageGallery[r].caption),i.createElement("span",{className:"sinlge-image-number-caption"},i.createElement("p",{className:"white-caption"},i.createElement("span",{className:"textYellow"},""+(r+1))),i.createElement("p",{className:"white-caption"},"/"+j))))))}function s(I){var g=I.title,e=I.slug,a=I.id,t=I.index,l=I.caption,A=I.totalLenghtIndex,n=I.location,Z=I.abstract;return i.createElement("div",{className:"single-image-header"},i.createElement("div",{className:"single-image-header-content"},i.createElement("h1",null,"Galeria de imágenes"),i.createElement(c.Z,{statClass:"Título de curso:",statName:g}),i.createElement("br",null),i.createElement(c.Z,{statClass:"Resumen del curos:",statName:Z}),i.createElement("br",null),i.createElement(c.Z,{statClass:"Descripción de la foto:",statName:l}),i.createElement("br",null),i.createElement(c.Z,{statClass:"Número de foto:",statName:t+1+"/"+A}),i.createElement(C.Z,{path:"/teaching/"+e.current,text:"Docencia/"+e.current,id:"gallery-item"+a+"-"+t}),i.createElement(m.Z,{title:g+" | CHH Portafolio",url:n.href,twitterHandle:"CHH_Portafolio",tags:["CHH"]})))}}}]);
//# sourceMappingURL=component---src-templates-course-photo-js-05f1e6d9a03c80ae9634.js.map