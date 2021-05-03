(self.webpackChunkdqlx_docs=self.webpackChunkdqlx_docs||[]).push([[653],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3741:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={sidebar_position:5},o={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security",description:"In this section we'll learn all about security and helping to understand how to prevent common DQL injection",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/dqlx/docs/security",editUrl:"https://github.com/fenos/dqlx-docs/edit/master/docs/security.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Type Generation",permalink:"/dqlx/docs/schema/type-generation"}},s=[{value:"DQL Injection",id:"dql-injection",children:[{value:"dqlx at rescue",id:"dqlx-at-rescue",children:[]},{value:"Be Careful!",id:"be-careful",children:[]},{value:"What shall I do?",id:"what-shall-i-do",children:[]}]},{value:"Reporting Vulnerabilities",id:"reporting-vulnerabilities",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this section we'll learn all about security and helping to understand how to prevent common ",(0,l.kt)("inlineCode",{parentName:"p"},"DQL injection"),"\nexploit."),(0,l.kt)("h2",{id:"dql-injection"},"DQL Injection"),(0,l.kt)("p",null,"If you come from a SQL world you might be familiar with the term ",(0,l.kt)("inlineCode",{parentName:"p"},"SQL Injection"),"."),(0,l.kt)("p",null,"DQL Injection is a similar beast (",(0,l.kt)("a",{parentName:"p",href:"https://discuss.dgraph.io/t/dgraph-dql-injection-prevention/13406"},"somewhat less dangerous"),"). Every time a query is dynamically generated (",(0,l.kt)("strong",{parentName:"p"},"with dqlx or not"),") strings gets concatenated together to create the final query."),(0,l.kt)("p",null,"The problem arise when your queries are generated based on ",(0,l.kt)("inlineCode",{parentName:"p"},"User Inputs"),". If you are accepting user inputs that gets ",(0,l.kt)("strong",{parentName:"p"},"directly mapped"),' into a query,\nthe "Exploiter" might figure out a way to send an input which might alter the original query that you originally meant to run. '),(0,l.kt)("p",null,'This mean that the "Exploiter" might be able to request more data than he supposed to, or even worst it could delete or alter important information.'),(0,l.kt)("p",null,"At this time of writing I'm not aware of any escaping mechanism given by the DQL language, things might change."),(0,l.kt)("h3",{id:"dqlx-at-rescue"},"dqlx at rescue"),(0,l.kt)("p",null,"dqlx takes security as one of the reasons for this library to also exists. ",(0,l.kt)("br",null),"\nBy default ",(0,l.kt)("strong",{parentName:"p"},"dqlx")," will use ",(0,l.kt)("a",{parentName:"p",href:"https://dgraph.io/docs/query-language/graphql-variables/"},"GraphQL Query Variables")," for every filters that accept a value and wherever it is allowed to from the DQL language."),(0,l.kt)("p",null,"For instance when you write a query that looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'query, variables, err := db.Query(dqlx.HasFn("name")).\n    Fields(`\n        uid\n        name\n        animal\n    `).\n    Filter(\n        dql.Or{\n            dql.And{\n                dqlx.Eq{"name": "Ollie", "animal": "Cat"},\n                dqlx.Gt{"age": 2},\n             },\n            dql.And{\n                dqlx.Eq{"name": "Leo", "animal": "Cat"},\n                dqlx.Gt{"age": 3},\n            },\n        },\n    )\n    .ToDQL()\n')),(0,l.kt)("p",null,"All the ",(0,l.kt)("strong",{parentName:"p"},"values")," that are assigned to those filters will be replaced by a variable, thus making it ",(0,l.kt)("inlineCode",{parentName:"p"},"DQL Injection free")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query RootQuery($0: string,$1: string,$3: int, $4: string, $5: string, $6: int) {\n    rootQuery(func: has(name)) @filter( (eq(name,$0) AND eq(animal,$1) AND gt(age, $3)) OR (eq(name,$4) AND eq(animal,$5) AND gt(age, $6))) {\n        uid\n        name\n        animal\n    }\n}\n")),(0,l.kt)("h3",{id:"be-careful"},"Be Careful!"),(0,l.kt)("p",null,"As mentioned above ",(0,l.kt)("strong",{parentName:"p"},"dqlx")," will automatically escape ",(0,l.kt)("strong",{parentName:"p"},"everything it can"),". ",(0,l.kt)("br",null),"\nUnfortunately we cannot replace ",(0,l.kt)("strong",{parentName:"p"},"every part")," of the query that might receive a user input, as it will be syntactically incorrect to execute."),(0,l.kt)("p",null,"For instance, if we do like below, it works! But, we are not in a good place."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'fieldsFromUser := strings.Split(req.Params("fields"), ",")\n\ndb.Query(dqlx.HasFn("name")).\n    Fields(fieldsFromUser...)\n\n// or don\'t do this\n\nfieldName := req.Params("fieldName")\ndb.Query(dqlx.HasFn(fieldName))\n\n// or don\'t do this\nfield := req.Params("fieldName")\nvalue := req.Params("value")\n\ndb.Query(dqlx.HasFn("name")).\n    Filter(dqxl.EqFn(field, value))\n')),(0,l.kt)("p",null,"This could all seem pretty legitimate use cases, and indeed they are;\nHowever, we cannot escape the predicates part of the query for it to be syntactically correct. ",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Those example above will expose ",(0,l.kt)("inlineCode",{parentName:"p"},"DQL Injection")),(0,l.kt)("h3",{id:"what-shall-i-do"},"What shall I do?"),(0,l.kt)("p",null,"If you need to make the above example secure and ",(0,l.kt)("inlineCode",{parentName:"p"},"DQL Injection free")," "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"YOU MUST VALIDATE USER INPUTS")," before any use")),(0,l.kt)("p",null,"As an example, imagine we allow users to request what fields our query should select. ",(0,l.kt)("br",null),"\nWe must validate that each of the field requested it's an OK value to be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'fieldsFromUser := strings.Split(req.Params("fields"), ",")\n\nallowedFields := []string{"uid", "name", "animal"}\n\nfor _, field := range fieldsFromUser {\n    isAllowed := false\n    for _, allowedField := range allowedFields {\n        if field == allowedField {\n            isAllowed = true\n            break\n        }   \n    }\n\n    if !isAllowed {\n        panic("You shall not pass!")    \n    }\n}\n\ndb.Query(dqlx.HasFn("name")).\n    Fields(fieldsFromUser...)\n')),(0,l.kt)("br",null),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"UNDERSTAND IF THE VALUE WILL BE ESCAPED"))),(0,l.kt)("p",null,"Only ",(0,l.kt)("strong",{parentName:"p"},"values")," on ",(0,l.kt)("strong",{parentName:"p"},"filters")," will be escaped with variables. ",(0,l.kt)("br",null),"\nWhen you use a filter function check the documentation, it usually accepts 2 parameters, ",(0,l.kt)("inlineCode",{parentName:"p"},"predicate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),".\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," will be escaped but ",(0,l.kt)("strong",{parentName:"p"},"not")," the ",(0,l.kt)("inlineCode",{parentName:"p"},"predicate")),(0,l.kt)("p",null,"To know for certain if the value will be automatically escaped,\nyou can call the ",(0,l.kt)("inlineCode",{parentName:"p"},"ToDQL()")," method on a query and print the result."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'query, variables, err := db.Query(dqlx.HasFn("name")).\n    Fields(fieldsFromUser...).\n    ToDQL()\n\nprint(query)\n')),(0,l.kt)("br",null),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SECURITY CHECKLIST"))),(0,l.kt)("p",null,"This checklist helps to make sure to be on the right track on security, if all your answers are ",(0,l.kt)("strong",{parentName:"p"},"YES"),", your probability of being safe are extraordinary high."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I'm not trusting the user"),(0,l.kt)("li",{parentName:"ul"},"I run validation on the user input"),(0,l.kt)("li",{parentName:"ul"},"I am not using ",(0,l.kt)("strong",{parentName:"li"},"unvalidated")," data coming from an external system (ex: database)"),(0,l.kt)("li",{parentName:"ul"},"I have not used the function ",(0,l.kt)("inlineCode",{parentName:"li"},"Expr")," without validating the user input"),(0,l.kt)("li",{parentName:"ul"},"I printed the statement using ",(0,l.kt)("inlineCode",{parentName:"li"},"ToDQL()")," when I'm uncertain what values are escaped")),(0,l.kt)("h4",{id:"extremely-safe-scenarios"},"Extremely safe scenarios"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I'm hard coding parameters / predicates"),(0,l.kt)("li",{parentName:"ul"},"I'm conditionally building a query"),(0,l.kt)("li",{parentName:"ul"},"Parameters are only coming from the program internal data structures (no external data involved)")),(0,l.kt)("h2",{id:"reporting-vulnerabilities"},"Reporting Vulnerabilities"),(0,l.kt)("p",null,"In case of a security vulnerability contact me directly via email at: ",(0,l.kt)("a",{parentName:"p",href:"mailto:fabri.feno@gmail.com"},"fabri.feno@gmail.com")),(0,l.kt)("p",null,"All security vulnerabilities will be promptly addressed"))}p.isMDXComponent=!0}}]);