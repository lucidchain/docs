"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[9964],{55184:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=i(85893),s=i(11151),r=i(16905),c=i(73839);const o={tags:["lucid-chain","api","endpoints","service-chain","restrictions","api-documentation","development"],keywords:["Lucid Chain documentation","API documentation routes","README retrieval","service chain constraints","Lucid Chain API endpoints","backend README","retrieve README HTML","API readme routes","Lucid Chain API usage"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},d="Documentation routes",a={id:"Lucid chain API/Documentation routes/Documentation routes",title:"Documentation routes",description:"In this section you are going to learn about Lucid chain documentation endpoints.",source:"@site/docs/Lucid chain API/Documentation routes/Documentation routes.md",sourceDirName:"Lucid chain API/Documentation routes",slug:"/Lucid chain API/Documentation routes/",permalink:"/docs/docs/next/Lucid chain API/Documentation routes/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Lucid chain API/Documentation routes/Documentation routes.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/next/tags/lucid-chain"},{label:"api",permalink:"/docs/docs/next/tags/api"},{label:"endpoints",permalink:"/docs/docs/next/tags/endpoints"},{label:"service-chain",permalink:"/docs/docs/next/tags/service-chain"},{label:"restrictions",permalink:"/docs/docs/next/tags/restrictions"},{label:"api-documentation",permalink:"/docs/docs/next/tags/api-documentation"},{label:"development",permalink:"/docs/docs/next/tags/development"}],version:"current",lastUpdatedBy:"dangalcan",lastUpdatedAt:1743427486,formattedLastUpdatedAt:"Mar 31, 2025",frontMatter:{tags:["lucid-chain","api","endpoints","service-chain","restrictions","api-documentation","development"],keywords:["Lucid Chain documentation","API documentation routes","README retrieval","service chain constraints","Lucid Chain API endpoints","backend README","retrieve README HTML","API readme routes","Lucid Chain API usage"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Metrics Routes",permalink:"/docs/docs/next/Lucid chain API/Metrics routes/"},next:{title:"Contributing",permalink:"/docs/docs/next/category/contributing"}},l={},h=[{value:"GET <code>/about</code>",id:"get-about",level:2},{value:"Responses",id:"responses",level:3},{value:"\u2705 200 - Successfully retrieved the README file content as HTML",id:"-200---successfully-retrieved-the-readme-file-content-as-html",level:4},{value:"\u274c 500 - Error reading the README file",id:"-500---error-reading-the-readme-file",level:4},{value:"GET <code>/info/restrictions</code>",id:"get-inforestrictions",level:2},{value:"Responses",id:"responses-1",level:3},{value:"\u2705 200 - Successfully retrieved the service chain constraints section as HTML",id:"-200---successfully-retrieved-the-service-chain-constraints-section-as-html",level:4},{value:"\u274c 500 - Error reading the README file",id:"-500---error-reading-the-readme-file-1",level:4}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"documentation-routes",children:"Documentation routes"}),"\n","\n","\n",(0,t.jsx)(n.p,{children:"In this section you are going to learn about Lucid chain documentation endpoints."}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(n.p,{children:["These endpoints described here are ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"NOT"})})," part of this docusaurus project. They are routes in Lucid chain repository that retrieve information related to Lucid chain's documentation."]})}),"\n",(0,t.jsx)(c.Z,{children:(0,t.jsx)(n.p,{children:"Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding."})}),"\n",(0,t.jsxs)(n.h2,{id:"get-about",children:["GET ",(0,t.jsx)(n.code,{children:"/about"})]}),"\n",(0,t.jsx)(n.p,{children:"This route retrieve the entire backend`s README file as HTML. It Rrads the entire README file and returns its content as an HTML response."}),"\n",(0,t.jsx)(n.h3,{id:"responses",children:"Responses"}),"\n",(0,t.jsx)(n.h4,{id:"-200---successfully-retrieved-the-readme-file-content-as-html",children:"\u2705 200 - Successfully retrieved the README file content as HTML"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Content-Type:"})," ",(0,t.jsx)(n.code,{children:"text/html"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Schema:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The HTML content of the README file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"-500---error-reading-the-readme-file",children:"\u274c 500 - Error reading the README file"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Content-Type:"})," ",(0,t.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Schema:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Error message when the file cannot be read."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"Error reading the file: ..."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"get-inforestrictions",children:["GET ",(0,t.jsx)(n.code,{children:"/info/restrictions"})]}),"\n",(0,t.jsx)(n.p,{children:'This route retrieves service chain constraints section from backend\'s README file. It reads the README file, extracts the section titled "Service Chain Constraints," and returns it as HTML.'}),"\n",(0,t.jsx)(n.h3,{id:"responses-1",children:"Responses"}),"\n",(0,t.jsx)(n.h4,{id:"-200---successfully-retrieved-the-service-chain-constraints-section-as-html",children:"\u2705 200 - Successfully retrieved the service chain constraints section as HTML"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Content-Type:"})," ",(0,t.jsx)(n.code,{children:"text/html"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Schema:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description:"}),' The HTML content of the "Service Chain Constraints" section from the README file.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<h2>Service Chain Constraints</h2>\n<p>Details about constraints...</p>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"-500---error-reading-the-readme-file-1",children:"\u274c 500 - Error reading the README file"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Content-Type:"})," ",(0,t.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Schema:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Error message when the file cannot be read."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Example:"})," ",(0,t.jsx)(n.code,{children:'"Error reading the file: ..."'})]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},73839:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(92949),s=i(85893);function r(e){let{children:n}=e;const{colorMode:i}=(0,t.I)();return(0,s.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==i?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==i?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},16905:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(92949),s=i(85893);function r(e){let{children:n}=e;const{colorMode:i}=(0,t.I)();return(0,s.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==i?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,s.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var t=i(67294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);