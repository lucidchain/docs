"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[1304],{6954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var A=t(5893),a=t(1151),i=(t(6905),t(3839));const s={},r="Creating my service chain",d={id:"Features/Creating my service chain/Creating my service chain",title:"Creating my service chain",description:"In this section you will learn how to create your own service chains and where to find some examples.",source:"@site/versioned_docs/version-1.1/Features/Creating my service chain/Creating my service chain.md",sourceDirName:"Features/Creating my service chain",slug:"/Features/Creating my service chain/",permalink:"/docs/docs/Features/Creating my service chain/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.1/Features/Creating my service chain/Creating my service chain.md",tags:[],version:"1.1",lastUpdatedBy:"dangalcan",lastUpdatedAt:1742231082,formattedLastUpdatedAt:"Mar 17, 2025",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Synchronizating a service chain",permalink:"/docs/docs/Features/Synchronizating a service chain/"},next:{title:"Purging database",permalink:"/docs/docs/Features/Purging database/"}},l={},o=[{value:"Yaml editor",id:"yaml-editor",level:2},{value:"Validate my yaml button",id:"validate-my-yaml-button",level:2},{value:"Import an existing yaml button",id:"import-an-existing-yaml-button",level:2},{value:"Load from sample data button",id:"load-from-sample-data-button",level:2},{value:"Download my service chain yaml button",id:"download-my-service-chain-yaml-button",level:2}];function c(e){const n={br:"br",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.h1,{id:"creating-my-service-chain",children:"Creating my service chain"}),"\n","\n","\n",(0,A.jsx)(n.p,{children:"In this section you will learn how to create your own service chains and where to find some examples."}),"\n",(0,A.jsxs)(n.p,{children:["You can see in ",(0,A.jsx)(n.em,{children:"Import"})," and ",(0,A.jsx)(n.em,{children:"Synchronization"})," views a component offering some help in case you are a bit lost."]}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Helper component",src:t(9183).Z+"",width:"942",height:"111"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 1:"})," ",(0,A.jsx)(n.em,{children:"Import and synchronization helper."})]})}),"\n",(0,A.jsxs)(n.p,{children:["If you click there, you can see one service type faceted sample chain, one service type state sample chain, and a third option. You can see these chains and go to your service chain creation page by clicking in ",(0,A.jsx)(n.em,{children:(0,A.jsx)(n.strong,{children:"Make my own yaml"})})," option."]}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Helper options",src:t(9920).Z+"",width:"937",height:"441"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 2:"})," ",(0,A.jsx)(n.em,{children:"Helper options."})]})}),"\n",(0,A.jsx)(n.h2,{id:"yaml-editor",children:"Yaml editor"}),"\n",(0,A.jsxs)(n.p,{children:["You will be redirected to a yaml editor page. Here you will see more blue buttons with options and a green button that says ",(0,A.jsx)(n.em,{children:"validate my yaml"}),". You can write your sercive chain from scratch and using a template. This editor works as any IDE or file editing software but adding SCModel validations on the fly."]}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Yaml editor view",src:t(567).Z+"",width:"1080",height:"772"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 3:"})," ",(0,A.jsx)(n.em,{children:"Yaml editor."})]})}),"\n",(0,A.jsx)(n.h2,{id:"validate-my-yaml-button",children:"Validate my yaml button"}),"\n",(0,A.jsx)(n.p,{children:"This green button analyses the yaml editor content following SCModel rules. If the service chain is valid, a mermaid diagram of it will be displayed."}),"\n",(0,A.jsx)(i.Z,{children:(0,A.jsxs)(n.p,{children:["If you see something in the mermaid graph like ",(0,A.jsx)(n.em,{children:(0,A.jsx)(n.strong,{children:'"Max size exceeded"'})})," do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation."]})}),"\n",(0,A.jsx)(n.h2,{id:"import-an-existing-yaml-button",children:"Import an existing yaml button"}),"\n",(0,A.jsxs)(n.p,{children:["When you click this button, you can import a yaml with a service chain and it will be displayed in the yaml editor. It will also be validated following SCModel notation. Once it is imported, you can edit it and click ",(0,A.jsx)(n.em,{children:(0,A.jsx)(n.strong,{children:"Validate my yaml"})})," for checking if it is well indented and follows SCModel. You can also see a mermaid diagram representation of your chain."]}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Yaml validation errors 1",src:t(6558).Z+"",width:"1547",height:"435"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 4:"})," ",(0,A.jsx)(n.em,{children:"Indentation errors."})]})}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Yaml validation errors 2",src:t(4867).Z+"",width:"1470",height:"416"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 5:"})," ",(0,A.jsx)(n.em,{children:"SCModel validation errors."})]})}),"\n",(0,A.jsx)(n.h2,{id:"load-from-sample-data-button",children:"Load from sample data button"}),"\n",(0,A.jsx)(n.p,{children:"This button is similar to the previous one. When you click it, you can select a sample chain yaml to be displayed and edited. You can also see its representation in mermaid."}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Sample chains options",src:t(5669).Z+"",width:"1046",height:"311"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 6:"})," ",(0,A.jsx)(n.em,{children:"Sample service chain options."})]})}),"\n",(0,A.jsx)(n.h2,{id:"download-my-service-chain-yaml-button",children:"Download my service chain yaml button"}),"\n",(0,A.jsxs)(n.p,{children:["This option downloads whatever is in the yaml editor as a yaml file. It will be downloaded instantly in your ",(0,A.jsx)(n.em,{children:(0,A.jsx)(n.strong,{children:'"Downloads"'})})," folder and named ",(0,A.jsx)(n.em,{children:(0,A.jsx)(n.strong,{children:"service-chain.yaml"})})]}),"\n",(0,A.jsx)("div",{align:"center",children:(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.img,{alt:"Custom chain",src:t(7695).Z+"",width:"1126",height:"886"}),(0,A.jsx)(n.br,{}),"\n",(0,A.jsx)(n.strong,{children:"Figure 7:"})," ",(0,A.jsx)(n.em,{children:"Custom service chain created with yaml editor."})]})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,A.jsx)(n,{...e,children:(0,A.jsx)(c,{...e})}):c(e)}},3839:(e,n,t)=>{t.d(n,{Z:()=>i});var A=t(2949),a=t(5893);function i(e){let{children:n}=e;const{colorMode:t}=(0,A.I)();return(0,a.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==t?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==t?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},6905:(e,n,t)=>{t.d(n,{Z:()=>i});var A=t(2949),a=t(5893);function i(e){let{children:n}=e;const{colorMode:t}=(0,A.I)();return(0,a.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==t?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,a.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},7695:(e,n,t)=>{t.d(n,{Z:()=>A});const A=t.p+"assets/images/customServiceChain-130f934319571f98c6abcb06d21cbb92.png"},5669:(e,n,t)=>{t.d(n,{Z:()=>A});const A=t.p+"assets/images/sampleChainPicker-7ae56b27dc1b7504ebd56df4ae899e15.png"},9920:(e,n,t)=>{t.d(n,{Z:()=>A});const A=t.p+"assets/images/sampleYamlOptions-8817c8fa8ffb636b2adfb0c8e158da8f.png"},6558:(e,n,t)=>{t.d(n,{Z:()=>A});const A=t.p+"assets/images/validationErrors1-1da56dd85d05dbacae0b3fcfb2aa5d9b.png"},4867:(e,n,t)=>{t.d(n,{Z:()=>A});const A=t.p+"assets/images/validationErrors2-1f1e7c68d56ae4f4abd530317db50637.png"},567:(e,n,t)=>{t.d(n,{Z:()=>A});const A=t.p+"assets/images/yamlEditor-0f398fa271bb8c36b131341136bc6734.png"},9183:(e,n,t)=>{t.d(n,{Z:()=>A});const A="data:image/png;base64,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"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var A=t(7294);const a={},i=A.createContext(a);function s(e){const n=A.useContext(i);return A.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),A.createElement(i.Provider,{value:n},e.children)}}}]);