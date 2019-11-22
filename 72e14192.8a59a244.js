/*! For license information please see 72e14192.8a59a244.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},i=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),i=o(a),u=n,b=i[p+"."+u]||i[u]||l[u]||c;return a?r.a.createElement(b,Object.assign({},{ref:t},s,{components:a})):r.a.createElement(b,Object.assign({},{ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=i;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:n,o[1]=p;for(var u=2;u<c;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},110:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var p in n)a.call(n,p)&&n[p]&&e.push(p)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(110),o=a.n(c);t.a=function(e){const{block:t,children:a,defaultValue:c,values:p}=e,[s,l]=Object(n.useState)(c);return r.a.createElement("div",null,r.a.createElement("ul",{className:o()("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{className:o()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>l(e)},t))),r.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===s)[0]))}},114:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));a(0);var n=a(109),r=a(113),c=a(114);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const p={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"},s=[{value:"Create a new app",id:"create-a-new-app",children:[]},{value:"Create a global state with pure React",id:"create-a-global-state-with-pure-react",children:[]},{value:"Performance issue with pure React",id:"performance-issue-with-pure-react",children:[]},{value:"Install React Tracked",id:"install-react-tracked",children:[]},{value:"Use React Tracked instead of bare context",id:"use-react-tracked-instead-of-bare-context",children:[]}],l={rightToc:s},i="wrapper";function u({components:e,...t}){return Object(n.b)(i,o({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Let's try a minimal example from scratch."),Object(n.b)("h2",{id:"create-a-new-app"},"Create a new app"),Object(n.b)("p",null,"Use ",Object(n.b)("a",o({parentName:"p"},{href:"https://create-react-app.dev"}),"create-react-app")," to create a new app."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npx create-react-app my-app # Add --typescript for TypeScript\n")),Object(n.b)("p",null,"Run the app."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"cd my-app\nnpm start # Or yarn start\n")),Object(n.b)("h2",{id:"create-a-global-state-with-pure-react"},"Create a global state with pure React"),Object(n.b)("p",null,"Now, we create a global state that contains a number and a string."),Object(n.b)("p",null,"Create a new file ",Object(n.b)("inlineCode",{parentName:"p"},"./src/store.js"),". (",Object(n.b)("inlineCode",{parentName:"p"},"./src/store.tsx")," for TypeScript)"),Object(n.b)("p",null,Object(n.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"js",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React, { createContext, useState, useContext } from 'react';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nconst MyContext = createContext(null);\n\nexport const useSharedState = () => {\n  const value = useContext(MyContext);\n  if (value === null) throw new Error('Please add SharedStateProvider');\n  return value;\n};\n\nexport const SharedStateProvider = ({ children }) => (\n  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>\n);\n\n"))),Object(n.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React, { createContext, useState, useContext } from 'react';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nconst MyContext = createContext<ReturnType<typeof useMyState> | null>(null);\n\nexport const useSharedState = () => {\n  const value = useContext(MyContext);\n  if (value === null) throw new Error('Please add SharedStateProvider');\n  return value;\n};\n\nexport const SharedStateProvider: React.FC = ({ children }) => (\n  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>\n);\n\n"))))),Object(n.b)("p",null,"Create a new file ",Object(n.b)("inlineCode",{parentName:"p"},"./src/Counter.js"),". (",Object(n.b)("inlineCode",{parentName:"p"},"./src/Counter.tsx")," for TypeScript)"),Object(n.b)("p",null,Object(n.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"js",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst Counter = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n};\n\nexport default Counter;\n\n"))),Object(n.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst Counter: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n};\n\nexport default Counter;\n\n"))))),Object(n.b)("p",null,"Create a new file ",Object(n.b)("inlineCode",{parentName:"p"},"./src/TextBox.js"),". (",Object(n.b)("inlineCode",{parentName:"p"},"./src/TextBox.tsx")," for TypeScript)"),Object(n.b)("p",null,Object(n.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"js",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst TextBox = () => {\n  const [state, setState] = useSharedState();\n  const setText = text => {\n    setState(prev => ({ ...prev, text }));\n  };\n  return (\n    <div>\n      {state.text}\n      <input value={state.text} onChange={e => setText(e.target.value)} />\n    </div>\n  );\n};\n\nexport default TextBox;\n\n"))),Object(n.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst TextBox: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const setText = (text: string) => {\n    setState(prev => ({ ...prev, text }));\n  };\n  return (\n    <div>\n      {state.text}\n      <input value={state.text} onChange={e => setText(e.target.value)} />\n    </div>\n  );\n};\n\nexport default TextBox;\n\n"))))),Object(n.b)("p",null,"Finally, modify the file ",Object(n.b)("inlineCode",{parentName:"p"},"./src/App.js"),". (",Object(n.b)("inlineCode",{parentName:"p"},"./src/App.tsx")," for TypeScript)"),Object(n.b)("p",null,Object(n.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"js",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { SharedStateProvider } from './store';\nimport Counter from './Counter';\nimport TextBox from './TextBox';\n\nconst App = () => (\n  <SharedStateProvider>\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Counter />\n        <TextBox />\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      </header>\n    </div>\n  </SharedStateProvider>\n);\n\nexport default App;\n\n"))),Object(n.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { SharedStateProvider } from './store';\nimport Counter from './Counter';\nimport TextBox from './TextBox';\n\nconst App: React.FC = () => (\n  <SharedStateProvider>\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Counter />\n        <TextBox />\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      </header>\n    </div>\n  </SharedStateProvider>\n);\n\nexport default App;\n\n"))))),Object(n.b)("p",null,"Check the running app again and see how the counter and the text box work."),Object(n.b)("h2",{id:"performance-issue-with-pure-react"},"Performance issue with pure React"),Object(n.b)("p",null,"Our app works totally fine.\nBut if a shared state becomes very big,\nwe may experience a drop in performance.\nThis is because all components that use the shared state\nwill re-render even if only a small part of the shared state is changed."),Object(n.b)("p",null,"React Tracked solves this issue without efforts."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: In pure React, it's recommended to split context into pieces. Check out ",Object(n.b)("a",o({parentName:"p"},{href:"https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/"}),"this")," or ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.basefactor.com/global-state-with-react"}),"that")," for more information.")),Object(n.b)("h2",{id:"install-react-tracked"},"Install React Tracked"),Object(n.b)("p",null,"It's time to try React Tracked.\nLet's install the library."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install react-tracked # Or yarn add react-tracked\n")),Object(n.b)("h2",{id:"use-react-tracked-instead-of-bare-context"},"Use React Tracked instead of bare context"),Object(n.b)("p",null,"It's very simple.\nModify the file ",Object(n.b)("inlineCode",{parentName:"p"},"./src/store.js"),". (",Object(n.b)("inlineCode",{parentName:"p"},"./src/store.tsx")," for TypeScript)"),Object(n.b)("p",null,Object(n.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"js",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nexport const {\n  Provider: SharedStateProvider,\n  useTracked: useSharedState,\n} = createContainer(useMyState);\n\n"))),Object(n.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nexport const {\n  Provider: SharedStateProvider,\n  useTracked: useSharedState,\n} = createContainer(useMyState);\n\n"))))),Object(n.b)("p",null,"That's it. Check the running app and see it works as before."),Object(n.b)("p",null,"How can we see the difference?\nYou could add ",Object(n.b)("inlineCode",{parentName:"p"},"console.log")," in render (which is technically a side effect),\nor add ",Object(n.b)("inlineCode",{parentName:"p"},"{Math.random()}")," in JSX which is easier."),Object(n.b)("p",null,"For example, modify the Counter component like this."),Object(n.b)("p",null,Object(n.b)(r.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(n.b)(c.a,{value:"js",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const Counter = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n      {Math.random()}\n    </div>\n  );\n};\n\n"))),Object(n.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"p"},Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const Counter: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState(prev => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n      {Math.random()}\n    </div>\n  );\n};\n\n"))))),Object(n.b)("p",null,"With this, try both pure React version and React Tracked version."),Object(n.b)("p",null,"In the React Tracked version,\nthe random number only changes when clicking the increment button.\nIt won't change when typing in the text box."))}u.isMDXComponent=!0}}]);