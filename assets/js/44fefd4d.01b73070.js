"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[948],{8040:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=s(5893),r=s(1151),t=s(6905),c=s(3839);const o={},d="Documentation routes",l={id:"Lucid chain API/Documentation routes/Documentation routes",title:"Documentation routes",description:"In this section you are going to learn about Lucid chain documentation endpoints.",source:"@site/versioned_docs/version-1.0/Lucid chain API/Documentation routes/Documentation routes.md",sourceDirName:"Lucid chain API/Documentation routes",slug:"/Lucid chain API/Documentation routes/",permalink:"/docs/docs/1.0/Lucid chain API/Documentation routes/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Lucid chain API/Documentation routes/Documentation routes.md",tags:[],version:"1.0",lastUpdatedBy:"dangalcan",lastUpdatedAt:1742231082,formattedLastUpdatedAt:"Mar 17, 2025",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Metrics Routes",permalink:"/docs/docs/1.0/Lucid chain API/Metrics routes/"},next:{title:"Tutorial Intro",permalink:"/docs/docs/1.0/intro"}},a={},h=[{value:"GET <code>/about</code>",id:"get-about",level:2},{value:"Responses",id:"responses",level:3},{value:"\u2705 200 - Successfully retrieved the README file content as HTML",id:"-200---successfully-retrieved-the-readme-file-content-as-html",level:4},{value:"\u274c 500 - Error reading the README file",id:"-500---error-reading-the-readme-file",level:4},{value:"GET <code>/info/restrictions</code>",id:"get-inforestrictions",level:2},{value:"Responses",id:"responses-1",level:3},{value:"\u2705 200 - Successfully retrieved the service chain constraints section as HTML",id:"-200---successfully-retrieved-the-service-chain-constraints-section-as-html",level:4},{value:"\u274c 500 - Error reading the README file",id:"-500---error-reading-the-readme-file-1",level:4}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"documentation-routes",children:"Documentation routes"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"In this section you are going to learn about Lucid chain documentation endpoints."}),"\n",(0,i.jsx)(t.Z,{children:(0,i.jsxs)(n.p,{children:["These endpoints described here are ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"NOT"})})," part of this docusaurus project. They are routes in Lucid chain repository that retrieve information related to Lucid chain's documentation."]})}),"\n",(0,i.jsx)(c.Z,{children:(0,i.jsx)(n.p,{children:"Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding."})}),"\n",(0,i.jsxs)(n.h2,{id:"get-about",children:["GET ",(0,i.jsx)(n.code,{children:"/about"})]}),"\n",(0,i.jsx)(n.p,{children:"This route retrieve the entire backend`s README file as HTML. It Rrads the entire README file and returns its content as an HTML response."}),"\n",(0,i.jsx)(n.h3,{id:"responses",children:"Responses"}),"\n",(0,i.jsx)(n.h4,{id:"-200---successfully-retrieved-the-readme-file-content-as-html",children:"\u2705 200 - Successfully retrieved the README file content as HTML"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/html"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," The HTML content of the README file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-500---error-reading-the-readme-file",children:"\u274c 500 - Error reading the README file"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," Error message when the file cannot be read."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"Error reading the file: ..."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"get-inforestrictions",children:["GET ",(0,i.jsx)(n.code,{children:"/info/restrictions"})]}),"\n",(0,i.jsx)(n.p,{children:'This route retrieves service chain constraints section from backend\'s README file. It reads the README file, extracts the section titled "Service Chain Constraints," and returns it as HTML.'}),"\n",(0,i.jsx)(n.h3,{id:"responses-1",children:"Responses"}),"\n",(0,i.jsx)(n.h4,{id:"-200---successfully-retrieved-the-service-chain-constraints-section-as-html",children:"\u2705 200 - Successfully retrieved the service chain constraints section as HTML"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/html"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),' The HTML content of the "Service Chain Constraints" section from the README file.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<h2>Service Chain Constraints</h2>\n<p>Details about constraints...</p>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-500---error-reading-the-readme-file-1",children:"\u274c 500 - Error reading the README file"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"})," Error message when the file cannot be read."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"Error reading the file: ..."'})]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3839:(e,n,s)=>{s.d(n,{Z:()=>t});var i=s(2949),r=s(5893);function t(e){let{children:n}=e;const{colorMode:s}=(0,i.I)();return(0,r.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==s?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==s?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},6905:(e,n,s)=>{s.d(n,{Z:()=>t});var i=s(2949),r=s(5893);function t(e){let{children:n}=e;const{colorMode:s}=(0,i.I)();return(0,r.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==s?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,r.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var i=s(7294);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);