(self.webpackChunkdqlx_docs=self.webpackChunkdqlx_docs||[]).push([[965],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_position:2},l={unversionedId:"mutations/delete",id:"mutations/delete",isDocsHomePage:!1,title:"Delete",description:"In this section we'll learn how to delete records",source:"@site/docs/mutations/delete.md",sourceDirName:"mutations",slug:"/mutations/delete",permalink:"/dqlx/docs/mutations/delete",editUrl:"https://github.com/fenos/dqlx-docs/edit/master/docs/mutations/delete.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/dqlx/docs/mutations/set"},next:{title:"Management",permalink:"/dqlx/docs/schema/create-schema"}},c=[{value:"Delete attributes",id:"delete-attributes",children:[{value:"Delete the whole node",id:"delete-the-whole-node",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we'll learn how to delete records"),(0,a.kt)("h2",{id:"delete-attributes"},"Delete attributes"),(0,a.kt)("p",null,"When using delete mutations, an existing node always has to be referenced.\nSo the ",(0,a.kt)("inlineCode",{parentName:"p"},"uid")," field for each object must be present. Predicates that should be deleted should be set to the JSON value ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'data := []map[string]interface{}{\n    {\n        "uid": "0x1",\n        "rating": nil,\n    },\n}\n\ndb.Mutation().Delete(data).Execute(ctx)\n')),(0,a.kt)("h3",{id:"delete-the-whole-node"},"Delete the whole node"),(0,a.kt)("p",null,"If you don't provide any attributes the whole node will be deleted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'data := []map[string]interface{}{\n    {\n        "uid": "0x1",\n    },\n}\n\ndb.Mutation().Delete(data).Execute(ctx)\n')))}s.isMDXComponent=!0}}]);