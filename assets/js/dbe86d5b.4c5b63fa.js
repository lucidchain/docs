"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[1810],{6911:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=s(5893),i=s(1151),d=s(3839);const o={tags:["lucid-chain","api","service-chain","mermaid-diagram","upload","development","endpoints"],keywords:["Lucid Chain import routes","service chain importation","import data to Redmine","import data to ITop","file upload for service chain","JSON data import","SCModel import","API import routes","Lucid Chain API usage"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},l="Import Routes",c={id:"Lucid chain API/Import routes/Import routes",title:"Import Routes",description:"In this section, you will discover all the endpoints related to service chain importation.",source:"@site/docs/Lucid chain API/Import routes/Import routes.md",sourceDirName:"Lucid chain API/Import routes",slug:"/Lucid chain API/Import routes/",permalink:"/docs/docs/next/Lucid chain API/Import routes/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Lucid chain API/Import routes/Import routes.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/next/tags/lucid-chain"},{label:"api",permalink:"/docs/docs/next/tags/api"},{label:"service-chain",permalink:"/docs/docs/next/tags/service-chain"},{label:"mermaid-diagram",permalink:"/docs/docs/next/tags/mermaid-diagram"},{label:"upload",permalink:"/docs/docs/next/tags/upload"},{label:"development",permalink:"/docs/docs/next/tags/development"},{label:"endpoints",permalink:"/docs/docs/next/tags/endpoints"}],version:"current",frontMatter:{tags:["lucid-chain","api","service-chain","mermaid-diagram","upload","development","endpoints"],keywords:["Lucid Chain import routes","service chain importation","import data to Redmine","import data to ITop","file upload for service chain","JSON data import","SCModel import","API import routes","Lucid Chain API usage"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Configuration routes",permalink:"/docs/docs/next/Lucid chain API/Configuration routes/"},next:{title:"Export routes",permalink:"/docs/docs/next/Lucid chain API/Export routes/"}},t={},h=[{value:"POST <code>/import/upload</code>",id:"post-importupload",level:2},{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"\u2705 200 - File uploaded and processed successfully",id:"-200---file-uploaded-and-processed-successfully",level:4},{value:"\u274c 400 - No file uploaded or invalid file",id:"-400---no-file-uploaded-or-invalid-file",level:4},{value:"\u274c 500 - Server error during file processing",id:"-500---server-error-during-file-processing",level:4},{value:"POST <code>/import/itop</code>",id:"post-importitop",level:2},{value:"Request Body",id:"request-body-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"\u2705 200 - Data imported successfully to iTop",id:"-200---data-imported-successfully-to-itop",level:4},{value:"\u274c 500 - Error encountered during import to iTop",id:"-500---error-encountered-during-import-to-itop",level:4},{value:"POST <code>/import/redmine</code>",id:"post-importredmine",level:2},{value:"Request Body",id:"request-body-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"\u2705 200 - Data imported successfully to Redmine",id:"-200---data-imported-successfully-to-redmine",level:4},{value:"\u274c 500 - Error encountered during import to Redmine",id:"-500---error-encountered-during-import-to-redmine",level:4}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"import-routes",children:"Import Routes"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"In this section, you will discover all the endpoints related to service chain importation."}),"\n",(0,r.jsx)(d.Z,{children:(0,r.jsx)(n.p,{children:"Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding."})}),"\n",(0,r.jsx)(d.Z,{children:(0,r.jsx)(n.p,{children:"Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed."})}),"\n",(0,r.jsxs)(n.h2,{id:"post-importupload",children:["POST ",(0,r.jsx)(n.code,{children:"/import/upload"})]}),"\n",(0,r.jsx)(n.p,{children:"This route is used when uploading a file for importing a service chain and generating a mermaid diagram. It also validates it following SCModel. Returns the file content, import information, and any validation errors."}),"\n",(0,r.jsx)(n.h3,{id:"request-body",children:"Request Body"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"multipart/form-data"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"file"})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.code,{children:"binary"}),"): The file to be uploaded for import."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"responses",children:"Responses"}),"\n",(0,r.jsx)(n.h4,{id:"-200---file-uploaded-and-processed-successfully",children:"\u2705 200 - File uploaded and processed successfully"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mermaidDiagram"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The generated mermaid diagram.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"mermaid graph TD; A--\x3eB;"'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fileContent"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The content of the uploaded file in JSON format.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'{"key": "value", "data": {...}}'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"importInfo"})," (",(0,r.jsx)(n.code,{children:"string"}),"): Information about the imported data."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"errors"})," (",(0,r.jsx)(n.code,{children:"array"})," of ",(0,r.jsx)(n.code,{children:"string"}),"): List of validation errors encountered during the import process.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"-400---no-file-uploaded-or-invalid-file",children:"\u274c 400 - No file uploaded or invalid file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"})," (",(0,r.jsx)(n.code,{children:"string"}),"): Error message when no file is uploaded.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"Please upload a file"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"-500---server-error-during-file-processing",children:"\u274c 500 - Server error during file processing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"})," (",(0,r.jsx)(n.code,{children:"string"}),"): Error message when an internal server error occurs.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"There was an error during the upload."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"post-importitop",children:["POST ",(0,r.jsx)(n.code,{children:"/import/itop"})]}),"\n",(0,r.jsx)(n.p,{children:"This route allows you to import service chains into ITop. It imports data to ITop from a JSON payload. Returns success or errors encountered during the importation."}),"\n",(0,r.jsx)(n.h3,{id:"request-body-1",children:"Request Body"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"server"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The server address of the iTop system.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"localhost"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"port"})," (",(0,r.jsx)(n.code,{children:"integer"}),"): The port of the iTop system.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"8080"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api_path"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The API path of the iTop system.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"/webservices/rest.php"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The username for authenticating with iTop.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"admin"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"password"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The password for authenticating with iTop.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"password123"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fileContent"})," (",(0,r.jsx)(n.code,{children:"object"}),"): The data to be imported into iTop."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"responses-1",children:"Responses"}),"\n",(0,r.jsx)(n.h4,{id:"-200---data-imported-successfully-to-itop",children:"\u2705 200 - Data imported successfully to iTop"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"Success"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"-500---error-encountered-during-import-to-itop",children:"\u274c 500 - Error encountered during import to iTop"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"error"})," (",(0,r.jsx)(n.code,{children:"string"}),"): Error message.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"Error importing on iTop: Invalid credentials."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"post-importredmine",children:["POST ",(0,r.jsx)(n.code,{children:"/import/redmine"})]}),"\n",(0,r.jsx)(n.p,{children:"This route allows you to import service chains into Redmine. It imports data to Redmine from a JSON payload. Returns success or errors encountered during the importation."}),"\n",(0,r.jsx)(n.h3,{id:"request-body-2",children:"Request Body"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"server"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The server address of the Redmine system.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"localhost"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"port"})," (",(0,r.jsx)(n.code,{children:"integer"}),"): The port of the Redmine system.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"8080"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api_path"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The API path of the Redmine system.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"/webservices/rest.php"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The username for authenticating with Redmine.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"admin"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"password"})," (",(0,r.jsx)(n.code,{children:"string"}),"): The password for authenticating with Redmine.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"password123"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fileContent"})," (",(0,r.jsx)(n.code,{children:"object"}),"): The data to be imported into Redmine."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"responses-2",children:"Responses"}),"\n",(0,r.jsx)(n.h4,{id:"-200---data-imported-successfully-to-redmine",children:"\u2705 200 - Data imported successfully to Redmine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"text/plain"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"Success"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"-500---error-encountered-during-import-to-redmine",children:"\u274c 500 - Error encountered during import to Redmine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type:"})," ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"error"})," (",(0,r.jsx)(n.code,{children:"string"}),"): Error message.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'"Error importing on Redmine: Invalid credentials."'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3839:(e,n,s)=>{s.d(n,{Z:()=>d});var r=s(2949),i=s(5893);function d(e){let{children:n}=e;const{colorMode:s}=(0,r.I)();return(0,i.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==s?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==s?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var r=s(7294);const i={},d=r.createContext(i);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);