"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[3040],{7642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),i=n(1151);const r={sidebar_position:2},o="Backend",d={id:"structure/backend",title:"Backend",description:"This is the more complex part of the application. It has a relatively well distributed system that integrates Redmine and ITop tools with an API in order to make them understand and support SCModel and other features. In the following sections we will describe each part.",source:"@site/docs/structure/backend.md",sourceDirName:"structure",slug:"/structure/backend",permalink:"/docs/docs/structure/backend",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/structure/backend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lucid chain structure",permalink:"/docs/docs/structure/structure-introduction"},next:{title:"Frontend",permalink:"/docs/docs/structure/frontend"}},a={},c=[{value:"lucid-chain-tools",id:"lucid-chain-tools",level:2},{value:"sc-itop",id:"sc-itop",level:3},{value:"sc-redmine",id:"sc-redmine",level:3},{value:"shared",id:"shared",level:3},{value:"src",id:"src",level:2},{value:"testing-material",id:"testing-material",level:2},{value:"tests",id:"tests",level:2},{value:"uploads",id:"uploads",level:2}];function l(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"backend",children:"Backend"}),"\n",(0,s.jsx)(t.p,{children:"This is the more complex part of the application. It has a relatively well distributed system that integrates Redmine and ITop tools with an API in order to make them understand and support SCModel and other features. In the following sections we will describe each part."}),"\n",(0,s.jsx)(t.h2,{id:"lucid-chain-tools",children:"lucid-chain-tools"}),"\n",(0,s.jsxs)(t.p,{children:["This directory contains all integration logic. The main file is called ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"index.js"})}),", and it makes it possible to manage logic from ITop and Redmine. There is also another folder called src next to it. This directory has another 3 folders inside."]}),"\n",(0,s.jsx)(t.p,{children:"Each sc-tool folder is designed with an object structure. Depending on the service_type we take functions from different files. There is a file called inxedToolName.js, which groups up every feature and defines the methods in order to be usefull for index.js."}),"\n",(0,s.jsx)(t.h3,{id:"sc-itop",children:"sc-itop"}),"\n",(0,s.jsx)(t.p,{children:"Here we find all ITop logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for ITop configuration and another one for ImportModel. The second one is almost deprecated."}),"\n",(0,s.jsx)(t.h3,{id:"sc-redmine",children:"sc-redmine"}),"\n",(0,s.jsx)(t.p,{children:"Here we find all Redmine logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for Redmine configuration and another one for ImportModel. The second one is almost deprecated."}),"\n",(0,s.jsx)(t.h3,{id:"shared",children:"shared"}),"\n",(0,s.jsx)(t.p,{children:"Here we can find SCModel validations and some common functions used in Redmine and ITop logic."}),"\n",(0,s.jsx)(t.h2,{id:"src",children:"src"}),"\n",(0,s.jsxs)(t.p,{children:["This directory contains services and routes. In ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"routes folder"})})," we can find all app routes with it's Open API Specifications."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"services folder"})})," we hace the functions that use index.js from lucid-chain-tools. There is one service for each feature."]}),"\n",(0,s.jsx)(t.h2,{id:"testing-material",children:"testing-material"}),"\n",(0,s.jsx)(t.p,{children:"Here we can find some examples of service chains. There are invalid yamls so we can test validations, and correct ones so we can test Redmine and ITop features."}),"\n",(0,s.jsx)(t.h2,{id:"tests",children:"tests"}),"\n",(0,s.jsx)(t.p,{children:"This part of the project is currently empty. Here we will find all lucid chain tests in the future."}),"\n",(0,s.jsx)(t.h2,{id:"uploads",children:"uploads"}),"\n",(0,s.jsx)(t.p,{children:"This directory is not usefull and serves as a folder where the app store uploaded files."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);