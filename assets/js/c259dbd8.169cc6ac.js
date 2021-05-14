(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var a=t(3),o=t(9),r=(t(0),t(166)),l=t(171),c=t(172),i={id:"migration",title:"Migration from v0.X"},s={unversionedId:"recipes/migration",id:"recipes/migration",isDocsHomePage:!1,title:"Migration from v0.X",description:"Note: this page is still in progress!",source:"@site/docs/recipes/migration.md",slug:"/recipes/migration",permalink:"/docs/recipes/migration",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/recipes/migration.md",version:"current",sidebar:"docs",previous:{title:"Solve N+1 Using DataLoader",permalink:"/docs/recipes/dataloader"},next:{title:"API Reference",permalink:"/docs/api"}},d=[{value:"Package name",id:"package-name",children:[]},{value:"<code>DocumentNode</code> for <code>typeDefs</code>",id:"documentnode-for-typedefs",children:[]},{value:"Classes to Utility Functions",id:"classes-to-utility-functions",children:[]},{value:"Resolvers Composition =&gt; Middleware",id:"resolvers-composition--middleware",children:[]},{value:"Module/Application Structure",id:"moduleapplication-structure",children:[]},{value:"Shared Injectables",id:"shared-injectables",children:[]},{value:"Module Config",id:"module-config",children:[]},{value:"Session",id:"session",children:[]},{value:"Context",id:"context",children:[]},{value:"Dependency Injection Scopes",id:"dependency-injection-scopes",children:[]},{value:"Dependency Injection Hierarchy",id:"dependency-injection-hierarchy",children:[]}],p={toc:d};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this page is still in progress!")),Object(r.b)("h2",{id:"package-name"},"Package name"),Object(r.b)("p",null,"We decided to merge two existing packages ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-modules/core")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-modules/di")," into a single package ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-modules"),".\nThere's no regression in terms of bundle size, because ",Object(r.b)("inlineCode",{parentName:"p"},"core")," was importing ",Object(r.b)("inlineCode",{parentName:"p"},"di")," anyway."),Object(r.b)("p",null,"Making GraphQL Modules a single package should improve the developer experience."),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { gql, createModule, Injectable } from 'graphql-modules';\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core`;\nimport { Injectable } from '@graphql-modules/di`;\nimport gql from 'graphql-tag';\n")))),Object(r.b)("h2",{id:"documentnode-for-typedefs"},Object(r.b)("inlineCode",{parentName:"h2"},"DocumentNode")," for ",Object(r.b)("inlineCode",{parentName:"h2"},"typeDefs")),Object(r.b)("p",null,"v0 accepted ",Object(r.b)("inlineCode",{parentName:"p"},"string")," as ",Object(r.b)("inlineCode",{parentName:"p"},"typeDefs"),", while v1 doesn't."),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { gql, createModule } from 'graphql-modules';\n\nconst myModule = createModule({\n  /// ...\n  typeDefs: gql`\n    type Query {\n      foo: String\n    }\n  `,\n});\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myModule = GraphQLModule({\n  // ...\n  typeDefs: `type Query { foo: String }`,\n});\n")))),Object(r.b)("h2",{id:"classes-to-utility-functions"},"Classes to Utility Functions"),Object(r.b)("p",null,"You no longer need to create ",Object(r.b)("inlineCode",{parentName:"p"},"new GraphQLModule()"),", you can use ",Object(r.b)("inlineCode",{parentName:"p"},"createModule")," instead:"),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myModule = createModule({ ... });\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myModule = new GraphQLModule({ ... });\n")))),Object(r.b)("h2",{id:"resolvers-composition--middleware"},"Resolvers Composition => Middleware"),Object(r.b)("p",null,"With version ",Object(r.b)("inlineCode",{parentName:"p"},"0.x")," we had resolvers-composition, which was our way to define wrappers for resolvers."),Object(r.b)("p",null,"In v1, we changed the name to Middlewares, and changed the API a bit, to make it more flexible and more compatible with similar middlewares implementations:"),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("p",null,"To define:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"function yourMiddleware({ root, args, context, info }, next) {\n  /* code */\n\n  return next();\n}\n")),Object(r.b)("p",null,"To use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myModule = createModule({\n  // ...\n  middlwares: {\n    Query: {\n      me: [yourMiddleware],\n    },\n  },\n});\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("p",null,"To define:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"export const yourMiddleware = () => (next) => async (\n  root,\n  args,\n  context,\n  info\n) => {\n  /* code */\n\n  return next(root, args, context, info);\n};\n")),Object(r.b)("p",null,"To use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myModule = new GraphQLModule({\n  /*...*/\n  resolversComposition: {\n    'Query.me': [yourMiddleware],\n  },\n});\n")))),Object(r.b)("h2",{id:"moduleapplication-structure"},"Module/Application Structure"),Object(r.b)("p",null,"With version ",Object(r.b)("inlineCode",{parentName:"p"},"0.x")," of GraphQL Modules, we were trying to make modules more dynamic, and build a hierarchy tree of dependencies between modules. This wasn't a great solution for all use-cases, and made things complicated."),Object(r.b)("p",null,"In v1, we changed behavior modules to be flat, and added ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," to define the root of injection."),Object(r.b)("p",null,"You no longer need to define ",Object(r.b)("inlineCode",{parentName:"p"},"imports")," and define strict dependencies between modules, since they are all flatten and merged together by the ",Object(r.b)("inlineCode",{parentName:"p"},"Application"),"."),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const moduleOne = createModule({ ... });\nconst moduleTwo = createModule({ ... });\n\nconst application = createApplication({\n  modules: [moduleOne, moduleTwo]\n})\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const moduleOne = new GraphQLModule({ ... });\nconst moduleTwo = new GraphQLModule({ imports: [moduleOne], ...})\n\nconst rootModule = new GraphQLModule({\n  imports: [moduleTwo],\n})\n")))),Object(r.b)("h2",{id:"shared-injectables"},"Shared Injectables"),Object(r.b)("p",null,"In V0, you needed to create an ",Object(r.b)("inlineCode",{parentName:"p"},"Injectable"),", add it to a module, and then in order to consume it in another module, you needed to make sure you have a dependency (with ",Object(r.b)("inlineCode",{parentName:"p"},"imports"),") between your modules. This was very strict and made development harder."),Object(r.b)("p",null,"Since we moved to a flatten structure of ",Object(r.b)("inlineCode",{parentName:"p"},"Application"),", all you need to do in order to share an ",Object(r.b)("inlineCode",{parentName:"p"},"Injectable"),", is just to add ",Object(r.b)("inlineCode",{parentName:"p"},"global: true"),":"),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// Module 1\n\n@Injectable({\n  global: true\n})\nclass MyProvider {\n  // ...\n}\n\nconst moduleOne = createModule({ providers: [MyProvider] });\n\n// Module 2\n@Injectable()\nclass MyOtherProvider {\n  constructor(myProvider: MyProvider) {\n\n  }\n}\n\nconst moduleTwo = createModule({ ... });\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// Module 1\n\n@Injectable()\nclass MyProvider {\n  // ...\n}\n\nconst moduleOne = new GraphQLModule({\n  providers: [MyProvider],\n});\n\n// Module 2\n@Injectable()\nclass MyOtherProvider {\n  constructor(myProvider: MyProvider) {}\n}\nconst moduleTwo = new GraphQLModule({ imports: [moduleOne] });\n\nconst rootModule = new GraphQLModule({\n  imports: [moduleTwo],\n});\n")))),Object(r.b)("h2",{id:"module-config"},"Module Config"),Object(r.b)("p",null,"In V0, we had the concept of ",Object(r.b)("inlineCode",{parentName:"p"},"ModuleConfig")," which was a very specific way to instantiate a module with configuration."),Object(r.b)("p",null,"In V1, it's no longer exists, and we believe there are simpler way to do that, with custom tokens."),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { createModule, InjectionToken } from '@graphql-modules/core';\n\nexport interface MyModuleConfig {\n  secretKey: string;\n  remoteEndpoint: string;\n  someDbInstance: SomeDBInstance;\n}\n\nexport const MyConfig = new InjectionToken<MyModuleConfig>();\n\nexport const createMyModule = (config: MyModuleConfig) =>\n  createModule({\n    // ...\n    providers: [\n      {\n        provide: MyConfig,\n        useValue: config,\n      },\n    ],\n  });\n\nconst application = createApplication({\n  modules: [\n    createMyModule({\n      secretKey: '123',\n      remoteEndpoint: 'http://...',\n      someDbInstance: db,\n    }),\n  ],\n});\n")),Object(r.b)("p",null,"And to consume, that same way as in V0:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class MyProvider {\n  constructor(@Inject(MyConfig) private config: MyModuleConfig) {\n    // ...\n  }\n}\n"))),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\n\nexport interface MyModuleConfig {\n  secretKey: string;\n  remoteEndpoint: string;\n  someDbInstance: SomeDBInstance;\n}\n\n// You can access the config object like below inside the module declaration\nexport const MyModule = new GraphQLModule<MyModuleConfig>({\n  providers: ({ config: { someDbInstance } }) => [\n    MyProvider,\n    {\n      provide: SomeDbInstance,\n      useValue: someDbInstance,\n    },\n  ],\n});\n")),Object(r.b)("p",null,"And to consume:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class MyProvider {\n  constructor(@Inject(ModuleConfig) private config: MyModuleConfig) {\n    // ...\n  }\n}\n")))),Object(r.b)("h2",{id:"session"},"Session"),Object(r.b)("p",null,"In v0, we had a concept of Session to manage the execution of each operation. In v1, we dropped it, in favor of a simpler solution."),Object(r.b)("p",null,"Internally, we are using Node's ",Object(r.b)("inlineCode",{parentName:"p"},"async_hooks")," to manage a context of an execution, which allow us to share Injectables between Singleton and Operation scope."),Object(r.b)("h2",{id:"context"},"Context"),Object(r.b)("p",null,"In v0, you could create a ",Object(r.b)("inlineCode",{parentName:"p"},"context")," per each module. In v1, ",Object(r.b)("inlineCode",{parentName:"p"},"context")," is external for GraphQL-Modules and it's not directly in use. You can do whatever you want with that, and just access it in GraphQL-Modules if you need, but we no longer require you to do specific things with your ",Object(r.b)("inlineCode",{parentName:"p"},"context"),"."),Object(r.b)(l.a,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"1",mdxType:"TabItem"},Object(r.b)("p",null,"With v1, you can manage your own ",Object(r.b)("inlineCode",{parentName:"p"},"context")," without anything special that needs to be done in order to GraphQL-Modules to work."),Object(r.b)("p",null,"You can inject ",Object(r.b)("inlineCode",{parentName:"p"},"CONTEXT")," in order to get access to the global execution context, and Modules you create doesn't take part in building that object.")),Object(r.b)(c.a,{value:"0",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const MyModule = new GraphQLModule({\n  context(session: MyModuleSession) {\n    session.res.on('finish', () => {\n      // Some cleanup\n    });\n    return {\n      authToken: session.req.headers.authorization,\n    };\n  },\n});\n")))),Object(r.b)("h2",{id:"dependency-injection-scopes"},"Dependency Injection Scopes"),Object(r.b)("p",null,"We decided to reduce the number of Scopes (from 3 to only 2) and change the names. The ",Object(r.b)("inlineCode",{parentName:"p"},"Session")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Request")," scopes are a bit misleading and hard to understand at first glimpse. "),Object(r.b)("p",null,"In v1 it's much simpler, there are two Scopes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Singleton")," - Injectable is instantiated once, at bootstrap phase (",Object(r.b)("inlineCode",{parentName:"li"},"createApplication"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Operation")," - Injectable is instantiated once per GraphQL Operation.")),Object(r.b)("p",null,"In our opinion, it's much easier to reason about."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ProviderScope")," was renamed to just ",Object(r.b)("inlineCode",{parentName:"p"},"Scope"),"."),Object(r.b)("h2",{id:"dependency-injection-hierarchy"},"Dependency Injection Hierarchy"),Object(r.b)("p",null,"With v1, the structure of your application is now flat, meaning there's an application level on top of a module level (many)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Application -> [ Module, Module, Module ]\n")),Object(r.b)("p",null,"This change enables an abstraction that was not possible in v0. Your modules can depend on Injectables or InjectionTokens provided by Application."),Object(r.b)("p",null,"We recommend to read ",Object(r.b)("a",{parentName:"p",href:"../di/introduction/#hierarchical-injectors"},'"Hierarchical Injectors"')," chapter."))}u.isMDXComponent=!0},166:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(t),b=a,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},167:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}},169:function(e,n,t){"use strict";var a=t(0),o=t(170);n.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,n,t){"use strict";var a=t(0),o=Object(a.createContext)(void 0);n.a=o},171:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(169),l=t(167),c=t(93),i=t.n(c);var s=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,u=e.groupId,b=e.className,m=Object(r.a)(),j=m.tabGroupChoices,O=m.setTabGroupChoices,y=Object(a.useState)(c),h=y[0],f=y[1],g=a.Children.toArray(e.children),v=[];if(null!=u){var w=j[u];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&f(w)}var M=function(e){var n=e.target,t=v.indexOf(n),a=g[t].props.value;f(a),null!=u&&(O(u,a),setTimeout((function(){var e,t,a,o,r,l,c,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,o=e.bottom,r=e.right,l=window,c=l.innerHeight,s=l.innerWidth,t>=0&&r<=s&&o<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i.a.tabItemActive),setTimeout((function(){return n.classList.remove(i.a.tabItemActive)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case d:var a=v.indexOf(e.target)+1;t=v[a]||v[0];break;case s:var o=v.indexOf(e.target)-1;t=v[o]||v[v.length-1]}null===(n=t)||void 0===n||n.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return v.push(e)},onKeyDown:N,onFocus:M,onClick:M},t)}))),n?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},172:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);