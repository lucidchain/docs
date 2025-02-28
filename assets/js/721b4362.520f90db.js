"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[5788],{658:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var i=s(5893),r=s(1151),c=s(3839);const o={},d="Synchronization Routes",l={id:"Lucid chain API/Synchronize routes/Synchronize routes",title:"Synchronization Routes",description:"In this section you will learn about synchronization endpoints.",source:"@site/versioned_docs/version-1.1/Lucid chain API/Synchronize routes/Synchronize routes.md",sourceDirName:"Lucid chain API/Synchronize routes",slug:"/Lucid chain API/Synchronize routes/",permalink:"/docs/docs/Lucid chain API/Synchronize routes/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.1/Lucid chain API/Synchronize routes/Synchronize routes.md",tags:[],version:"1.1",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Export routes",permalink:"/docs/docs/Lucid chain API/Export routes/"},next:{title:"Purge Routes",permalink:"/docs/docs/Lucid chain API/Purge routes/"}},h={},t=[{value:"POST <code>/sync/comparationInfo</code>",id:"post-synccomparationinfo",level:2},{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"\u2705 200 - Comparison completed successfully",id:"-200---comparison-completed-successfully",level:4},{value:"\u274c 500 - Error during the comparison process",id:"-500---error-during-the-comparison-process",level:4},{value:"POST <code>/sync/redmine</code>",id:"post-syncredmine",level:2},{value:"Request Body",id:"request-body-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"\u2705 200 - Synchronization to Redmine was successful",id:"-200---synchronization-to-redmine-was-successful",level:4},{value:"\u274c 500 - Error during synchronization to Redmine",id:"-500---error-during-synchronization-to-redmine",level:4},{value:"POST <code>/sync/iTop</code>",id:"post-syncitop",level:2},{value:"Request Body",id:"request-body-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"\u2705 200 - Synchronization to iTop was successful",id:"-200---synchronization-to-itop-was-successful",level:4},{value:"\u274c 500 - Error during synchronization to iTop",id:"-500---error-during-synchronization-to-itop",level:4}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"synchronization-routes",children:"Synchronization Routes"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"In this section you will learn about synchronization endpoints."}),"\n",(0,i.jsx)(c.Z,{children:(0,i.jsx)(n.p,{children:"Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding."})}),"\n",(0,i.jsx)(c.Z,{children:(0,i.jsx)(n.p,{children:"Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed."})}),"\n",(0,i.jsxs)(n.h2,{id:"post-synccomparationinfo",children:["POST ",(0,i.jsx)(n.code,{children:"/sync/comparationInfo"})]}),"\n",(0,i.jsx)(n.p,{children:"This route compares the new version of the current service chain imported in your tool and generates a comparison report. It compares the actual chain with an uploaded chain to identify differences, potential synchronization, and generates a mermaid diagram if there are no errors."}),"\n",(0,i.jsx)(n.h3,{id:"request-body",children:"Request Body"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Required:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"actualChain"})," (",(0,i.jsx)(n.code,{children:"object"}),"): The current service chain in json format."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uploadedChain"})," (",(0,i.jsx)(n.code,{children:"object"}),"): The uploaded service chain in json formar for comparison."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"responses",children:"Responses"}),"\n",(0,i.jsx)(n.h4,{id:"-200---comparison-completed-successfully",children:"\u2705 200 - Comparison completed successfully"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"differences"})," (",(0,i.jsx)(n.code,{children:"object"}),"): An object with the differences between the current and the uploaded chain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"errors"})," (",(0,i.jsx)(n.code,{children:"array"}),"): List of validation errors encountered during the comparison.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fusionedChainData"})," (",(0,i.jsx)(n.code,{children:"object"}),"): The merged/fusioned chain data after comparison."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"canSync"})," (",(0,i.jsx)(n.code,{children:"boolean"}),"): Indicates whether the chains can be synchronized or not.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mermaidDiagram"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The generated mermaid diagram based on the fusioned chain.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"mermaid graph TD; A[Service: Incident] --\x3e B[Status: Closed];"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-500---error-during-the-comparison-process",children:"\u274c 500 - Error during the comparison process"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"There was an error comparating info: Internal Server Error."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"post-syncredmine",children:["POST ",(0,i.jsx)(n.code,{children:"/sync/redmine"})]}),"\n",(0,i.jsx)(n.p,{children:"This route synchronizes the provided service chain data to Redmine using the specified service type."}),"\n",(0,i.jsx)(n.h3,{id:"request-body-1",children:"Request Body"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Required:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"server"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The Redmine server address.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"redmine.example.com"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"})," (",(0,i.jsx)(n.code,{children:"integer"}),"): The port of the Redmine server.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:"8080"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_path"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The API path of the Redmine server.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"/redmine/api"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"username"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The username for Redmine authentication.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"admin"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"password"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The password for Redmine authentication.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"password123"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uploadedChain"})," (",(0,i.jsx)(n.code,{children:"object"}),"): The chain data to be synchronized to Redmine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"serviceType"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The type of service chain to synchronize.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Allowed values:"})," ",(0,i.jsx)(n.code,{children:"faceted"}),", ",(0,i.jsx)(n.code,{children:"state"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"responses-1",children:"Responses"}),"\n",(0,i.jsx)(n.h4,{id:"-200---synchronization-to-redmine-was-successful",children:"\u2705 200 - Synchronization to Redmine was successful"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"Success"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-500---error-during-synchronization-to-redmine",children:"\u274c 500 - Error during synchronization to Redmine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"message"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The error message.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"There was an error while synchronizing in Redmine: Invalid credentials"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"post-syncitop",children:["POST ",(0,i.jsx)(n.code,{children:"/sync/iTop"})]}),"\n",(0,i.jsx)(n.p,{children:"This route synchronizes the provided service chain data to ITop using the specified service type."}),"\n",(0,i.jsx)(n.h3,{id:"request-body-2",children:"Request Body"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Required:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"server"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The iTop server address.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"iTop.example.com"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"})," (",(0,i.jsx)(n.code,{children:"integer"}),"): The port of the iTop server.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:"8080"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_path"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The API path of the iTop server.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"/iTop/api"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"username"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The username for iTop authentication.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"admin"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"password"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The password for iTop authentication.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"password123"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uploadedChain"})," (",(0,i.jsx)(n.code,{children:"object"}),"): The chain data to be synchronized to iTop."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"serviceType"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The type of service chain to synchronize.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Allowed values:"})," ",(0,i.jsx)(n.code,{children:"faceted"}),", ",(0,i.jsx)(n.code,{children:"state"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"responses-2",children:"Responses"}),"\n",(0,i.jsx)(n.h4,{id:"-200---synchronization-to-itop-was-successful",children:"\u2705 200 - Synchronization to iTop was successful"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"Success"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-500---error-during-synchronization-to-itop",children:"\u274c 500 - Error during synchronization to iTop"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type:"})," ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"message"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The error message.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Example:"})," ",(0,i.jsx)(n.code,{children:'"There was an error while synchronizing in iTop: Invalid credentials."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3839:(e,n,s)=>{s.d(n,{Z:()=>r});var i=s(5893);function r(e){let{children:n}=e;return(0,i.jsxs)("div",{style:{padding:"12px",backgroundColor:"#ffe6e6",borderLeft:"5px solid #d9534f",color:"#a94442",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var i=s(7294);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);