(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(93)),i={sidebar_position:1},l={unversionedId:"schema/create-schema",id:"schema/create-schema",isDocsHomePage:!1,title:"Management",description:"In this section we'll learn how to create and manage a DGraph Schema",source:"@site/docs/schema/create-schema.md",sourceDirName:"schema",slug:"/schema/create-schema",permalink:"/dqlx/docs/schema/create-schema",editUrl:"https://github.com/fenos/dqlx-docs/edit/master/docs/schema/create-schema.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Delete",permalink:"/dqlx/docs/mutations/delete"},next:{title:"Type Generation",permalink:"/dqlx/docs/schema/type-generation"}},o=[{value:"Create a schema",id:"create-a-schema",children:[{value:"Predicates",id:"predicates",children:[]},{value:"Types",id:"types",children:[]},{value:"Global predicate on a Type",id:"global-predicate-on-a-type",children:[]},{value:"Relations",id:"relations",children:[]},{value:"Indexes",id:"indexes",children:[]},{value:"Altering the schema",id:"altering-the-schema",children:[]}]}],s={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this section we'll learn how to create and manage a DGraph ",Object(c.b)("inlineCode",{parentName:"p"},"Schema")),Object(c.b)("h2",{id:"create-a-schema"},"Create a schema"),Object(c.b)("p",null,"The schema builder allows you to define ",Object(c.b)("inlineCode",{parentName:"p"},"Types")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Predicates")," in an  easier way.",Object(c.b)("br",null),"\nIt will handle all the syntax complexities to define direct and reverse relations."),Object(c.b)("h3",{id:"predicates"},"Predicates"),Object(c.b)("p",null,"Let's start adding some predicates to our schema"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'schema := db.Schema()\n\nschema.Predicate("name", dqlx.ScalarString)\nschema.Predicate("age", dqlx.ScalarInt)\nschema.Predicate("birthday", dqlx.ScalarDateTime)\n\nerr := schame.Alter(ctx)\n')),Object(c.b)("h3",{id:"types"},"Types"),Object(c.b)("p",null,"When you create a type with ",Object(c.b)("strong",{parentName:"p"},"dqlx")," all the predicates will be automatically prefixed with ",Object(c.b)("inlineCode",{parentName:"p"},"{Type}.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'schema := db.Schema()\n\nschema.Type("User", func(user *TypeBuilder) {\n    user.String("name")\n    user.Password("password")\n    user.Int("age")\n    user.DateTime("birthday")\n    user.Float("score")\n    user.Bool("verified")\n    user.UID("some_id")\n})\n')),Object(c.b)("h3",{id:"global-predicate-on-a-type"},"Global predicate on a Type"),Object(c.b)("p",null,"If you want to reference a predicate that is globally available, you'll need to use the ",Object(c.b)("inlineCode",{parentName:"p"},"Predicate")," method\non a type"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'schema := db.Schema()\n\nname := schema.Predicate("name", dqlx.ScalarString)\n\nschema.Type("User", func(user *TypeBuilder) {\n    user.Predicate(name)\n    user.String("surname")\n})\n')),Object(c.b)("h3",{id:"relations"},"Relations"),Object(c.b)("p",null,"Defining relations with the Schema Builder have never been easier. "),Object(c.b)("p",null,"Imagine the scenario of ",Object(c.b)("inlineCode",{parentName:"p"},"User")," have many ",Object(c.b)("inlineCode",{parentName:"p"},"Posts")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Posts")," have many ",Object(c.b)("inlineCode",{parentName:"p"},"Comments"),", here is how the schema might look like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'schema := db.Schema()\n\nschema.Type("User", func(user *TypeBuilder) {\n    user.String("name")\n    user.Password("password")\n    user.Int("age")\n    \n    user.Type("posts", "Post").List()\n})\n\nschema.Type("Post", func(post *TypeBuilder) {\n    post.String("title")\n    post.String("description")\n    post.Int("age")\n    \n    post.Type("user", "User").Reverse()\n    post.Type("comments", "Comment").List()\n})\n\nschema.Type("Comment", func(comment *TypeBuilder) {\n    post.String("content")\n    \n    post.Type("user", "User")\n    post.Type("post", "Post").Reverse()\n})\n')),Object(c.b)("h3",{id:"indexes"},"Indexes"),Object(c.b)("p",null,"You can set specific index by chaining the ",Object(c.b)("inlineCode",{parentName:"p"},"Index{Type}")," method on the predicate"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'schema.Type("User", func(user *TypeBuilder) {\n    user.String("name").IndexTerm().IndexFullTerm()\n    user.Password("password").Index()\n})\n')),Object(c.b)("h4",{id:"available-indexes"},"Available indexes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"exact"),Object(c.b)("li",{parentName:"ul"},"hash"),Object(c.b)("li",{parentName:"ul"},"term"),Object(c.b)("li",{parentName:"ul"},"fulltext"),Object(c.b)("li",{parentName:"ul"},"trigram"),Object(c.b)("li",{parentName:"ul"},"year"),Object(c.b)("li",{parentName:"ul"},"month"),Object(c.b)("li",{parentName:"ul"},"day"),Object(c.b)("li",{parentName:"ul"},"hour")),Object(c.b)("h3",{id:"altering-the-schema"},"Altering the schema"),Object(c.b)("p",null,"In order to alter the schema you must call the ",Object(c.b)("inlineCode",{parentName:"p"},"Alter")," method.\nThis method will not drop any fields by default. You can specify ",Object(c.b)("inlineCode",{parentName:"p"},"WithDropAll")," to force recreating\nthe schema from scratch"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"schema := db.Schema()\n\n// ...\n\nerr := schame.Alter(ctx, dqlx.WithDropAll(false))\n")),Object(c.b)("p",null,"By default, indexing is set to run ",Object(c.b)("strong",{parentName:"p"},"In the background")," if you prefer it on the main process you can disable it\nwith the ",Object(c.b)("inlineCode",{parentName:"p"},"WithRunInBackground(false)")," method"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"schema := db.Schema()\n\n// ...\n\nerr := schame.Alter(ctx, dqlx.WithRunInBackground(false))\n")))}p.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||c;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);