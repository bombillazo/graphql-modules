(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(9),a=(n(0),n(166)),c={id:"context",title:"Context",sidebar_label:"Context"},i={unversionedId:"essentials/context",id:"essentials/context",isDocsHomePage:!1,title:"Context",description:"In GraphQL, a context is an object shared by all the resolvers of a specific execution. It's useful for keeping data such as authentication info, the current user, database connection, data sources and other things you need for running your business logic.",source:"@site/docs/essentials/context.md",slug:"/essentials/context",permalink:"/docs/essentials/context",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/essentials/context.md",version:"current",sidebar_label:"Context",sidebar:"docs",previous:{title:"Resolvers",permalink:"/docs/essentials/resolvers"},next:{title:"Type-Safety",permalink:"/docs/essentials/type-safety"}},s=[{value:"Context in Dependency Injection",id:"context-in-dependency-injection",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In GraphQL, a ",Object(a.b)("inlineCode",{parentName:"p"},"context")," is an object shared by all the resolvers of a specific execution. It's useful for keeping data such as authentication info, the current user, database connection, data sources and other things you need for running your business logic."),Object(a.b)("p",null,"The context is available as the 3rd argument to each resolver:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const resolvers = {\n  Query: {\n    myQuery(root, args, context, info) {\n      // ...\n    },\n  },\n};\n")),Object(a.b)("p",null,"GraphQL Modules follow the same approach, so context is shared across modules. That's why there's no API for context building in GraphQL Modules, it's managed by GraphQL server implementation."),Object(a.b)("p",null,"You can manage your own ",Object(a.b)("inlineCode",{parentName:"p"},"context")," object based on your needs, usually it's done by the server implementation, since the ",Object(a.b)("inlineCode",{parentName:"p"},"context")," object is created and filled with the HTTP request information (",Object(a.b)("inlineCode",{parentName:"p"},"request"),"), which is a layer that comes before the actual GraphQL engine."),Object(a.b)("h2",{id:"context-in-dependency-injection"},"Context in Dependency Injection"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To get familiar with Dependency Injection, please read the ",Object(a.b)("a",{parentName:"p",href:"/docs/di/introduction"},'"Dependency Injection - Introduction"')," chapter.")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Context")," can be accessed directly in resolve function or within Dependency Injection using ",Object(a.b)("a",{parentName:"p",href:"/docs/api#context"},Object(a.b)("inlineCode",{parentName:"a"},"CONTEXT"))," token."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { CONTEXT, Inject, Injectable } from 'graphql-modules';\n\n@Injectable()\nexport class Data {\n  constructor(@Inject(CONTEXT) private context: GraphQLModules.GlobalContext) {}\n}\n")))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);