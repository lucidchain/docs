"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[2937],{37023:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=n(85893),i=n(11151),d=n(73839);const o={},t="Export routes",c={id:"Lucid chain API/Export routes/Export routes",title:"Export routes",description:"In this section, you will discover all the endpoints related to service chain exportation.",source:"@site/versioned_docs/version-1.0/Lucid chain API/Export routes/Export routes.md",sourceDirName:"Lucid chain API/Export routes",slug:"/Lucid chain API/Export routes/",permalink:"/docs/docs/1.0/Lucid chain API/Export routes/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Lucid chain API/Export routes/Export routes.md",tags:[],version:"1.0",lastUpdatedBy:"dangalcan",lastUpdatedAt:1743427486,formattedLastUpdatedAt:"Mar 31, 2025",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Import Routes",permalink:"/docs/docs/1.0/Lucid chain API/Import routes/"},next:{title:"Synchronization Routes",permalink:"/docs/docs/1.0/Lucid chain API/Synchronize routes/"}},l={},h=[{value:"POST <code>/export/:target/getChain</code>",id:"post-exporttargetgetchain",level:2},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"\u2705 200 - Successful export operation with mermaid diagram and chain content",id:"-200---successful-export-operation-with-mermaid-diagram-and-chain-content",level:4},{value:"\u274c 404 - Invalid target or no target provided",id:"-404---invalid-target-or-no-target-provided",level:4},{value:"\u274c 500 - Server error during the export process",id:"-500---server-error-during-the-export-process",level:4},{value:"POST <code>/export/itop</code>",id:"post-exportitop",level:2},{value:"Request Body",id:"request-body-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"\u2705 200 - Successful export from iTop, returns a YAML file",id:"-200---successful-export-from-itop-returns-a-yaml-file",level:4},{value:"\u274c 500 - Server error during export from iTop",id:"-500---server-error-during-export-from-itop",level:4},{value:"POST <code>/export/redmine</code>",id:"post-exportredmine",level:2},{value:"Request Body",id:"request-body-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"\u2705 200 - Successful export from Redmine, returns a YAML file",id:"-200---successful-export-from-redmine-returns-a-yaml-file",level:4},{value:"\u274c 500 - Server error during export from Redmine",id:"-500---server-error-during-export-from-redmine",level:4}];function x(e){const r={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"export-routes",children:"Export routes"}),"\n","\n","\n",(0,s.jsx)(r.p,{children:"In this section, you will discover all the endpoints related to service chain exportation."}),"\n",(0,s.jsx)(d.Z,{children:(0,s.jsx)(r.p,{children:"Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding."})}),"\n",(0,s.jsxs)(r.h2,{id:"post-exporttargetgetchain",children:["POST ",(0,s.jsx)(r.code,{children:"/export/:target/getChain"})]}),"\n",(0,s.jsx)(r.p,{children:"This route exports data from a target and generates a mermaid diagram that represents your service chain in the targeted tool. Target can be ITop or Redmine."}),"\n",(0,s.jsx)(r.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required/Optional"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"target"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Required"})}),(0,s.jsxs)(r.td,{children:["The target system from which to export. Allowed values: ",(0,s.jsx)(r.code,{children:'"itop"'}),", ",(0,s.jsx)(r.code,{children:'"redmine"'})]})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"request-body",children:"Request Body"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Required:"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"application/json"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Schema:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"object"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"server"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The server address of the target system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"localhost"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"port"})," (",(0,s.jsx)(r.code,{children:"integer"}),"): The port of the target system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:"8080"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"api_path"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The API path of the target system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"/api/v1"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"username"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The username for authentication.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"admin"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"password"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The password for authentication.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"password123"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"anonimized"})," (",(0,s.jsx)(r.code,{children:"boolean"}),"): Indicates if the exported data should be anonymized.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"service_type"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The type of service chain to export.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Allowed values:"})," ",(0,s.jsx)(r.code,{children:'"faceted"'}),", ",(0,s.jsx)(r.code,{children:'"state"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"responses",children:"Responses"}),"\n",(0,s.jsx)(r.h4,{id:"-200---successful-export-operation-with-mermaid-diagram-and-chain-content",children:"\u2705 200 - Successful export operation with mermaid diagram and chain content"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"application/json"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Schema:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"object"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"target"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The target system used for export.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"itop"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"mermaidDiagram"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The generated mermaid diagram in string format.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"graph TD; A--\x3eB; B--\x3eC;"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"chainContent"})," (",(0,s.jsx)(r.code,{children:"object"}),"): The content of the exported chain in JSON format."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"-404---invalid-target-or-no-target-provided",children:"\u274c 404 - Invalid target or no target provided"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"text/plain"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Example:"}),"  ",(0,s.jsx)(r.code,{children:'"Error: No target selected"'})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"-500---server-error-during-the-export-process",children:"\u274c 500 - Server error during the export process"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"text/plain"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Example:"}),"  ",(0,s.jsx)(r.code,{children:'"Error exporting on target: itop"'})]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"post-exportitop",children:["POST ",(0,s.jsx)(r.code,{children:"/export/itop"})]}),"\n",(0,s.jsx)(r.p,{children:"Exports your service chain data from iTop and returns the result as a YAML file following SCModel."}),"\n",(0,s.jsx)(r.h3,{id:"request-body-1",children:"Request Body"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Required:"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"application/json"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Schema:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"object"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"server"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The server address of the iTop system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"localhost"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"port"})," (",(0,s.jsx)(r.code,{children:"integer"}),"): The port of the iTop system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:"8080"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"api_path"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The API path of the iTop system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"/webservices/rest.php"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"username"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The username for authentication.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"admin"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"password"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The password for authentication.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"password123"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"anonimized"})," (",(0,s.jsx)(r.code,{children:"boolean"}),"): Indicates if the exported data should be anonymized.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"service_type"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The type of service chain to export from iTop.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Allowed values:"})," ",(0,s.jsx)(r.code,{children:'"faceted"'}),", ",(0,s.jsx)(r.code,{children:'"state"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"responses-1",children:"Responses"}),"\n",(0,s.jsx)(r.h4,{id:"-200---successful-export-from-itop-returns-a-yaml-file",children:"\u2705 200 - Successful export from iTop, returns a YAML file"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"text/plain"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Schema:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Format:"})," ",(0,s.jsx)(r.code,{children:"binary"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Description:"})," YAML file containing the exported service chain data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"-500---server-error-during-export-from-itop",children:"\u274c 500 - Server error during export from iTop"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"text/plain"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Example:"}),"  ",(0,s.jsx)(r.code,{children:'"Error exporting from iTop: ..."'})]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"post-exportredmine",children:["POST ",(0,s.jsx)(r.code,{children:"/export/redmine"})]}),"\n",(0,s.jsx)(r.p,{children:"Exports your service chain data from Redmine and returns the result as a YAML file following SCModel."}),"\n",(0,s.jsx)(r.h3,{id:"request-body-2",children:"Request Body"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Required:"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"application/json"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Schema:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"object"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Properties:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"server"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The server address of the Redmine system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"localhost"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"port"})," (",(0,s.jsx)(r.code,{children:"integer"}),"): The port of the Redmine system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:"8080"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"api_path"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The API path of the Redmine system.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"/webservices/rest.php"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"username"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The username for authentication.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"admin"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"password"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The password for authentication.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:'"password123"'})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"anonimized"})," (",(0,s.jsx)(r.code,{children:"boolean"}),"): Indicates if the exported data should be anonymized.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Example:"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"service_type"})," (",(0,s.jsx)(r.code,{children:"string"}),"): The type of service chain to export from Redmine.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Allowed values:"})," ",(0,s.jsx)(r.code,{children:'"faceted"'}),", ",(0,s.jsx)(r.code,{children:'"state"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"responses-2",children:"Responses"}),"\n",(0,s.jsx)(r.h4,{id:"-200---successful-export-from-redmine-returns-a-yaml-file",children:"\u2705 200 - Successful export from Redmine, returns a YAML file"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"text/plain"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Schema:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Type:"})," ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Format:"})," ",(0,s.jsx)(r.code,{children:"binary"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Description:"})," YAML file containing the exported service chain data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"-500---server-error-during-export-from-redmine",children:"\u274c 500 - Server error during export from Redmine"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type:"})," ",(0,s.jsx)(r.code,{children:"text/plain"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Example:"}),"  ",(0,s.jsx)(r.code,{children:'"Error exporting from Redmine: ..."'})]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},73839:(e,r,n)=>{n.d(r,{Z:()=>d});var s=n(92949),i=n(85893);function d(e){let{children:r}=e;const{colorMode:n}=(0,s.I)();return(0,i.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==n?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==n?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",r]})}},11151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>o});var s=n(67294);const i={},d=s.createContext(i);function o(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);