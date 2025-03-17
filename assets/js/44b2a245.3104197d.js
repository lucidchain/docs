"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[384],{5589:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=n(5893),a=n(1151),r=n(6905),i=n(3839);const s={sidebar_position:4,tags:["lucid-chain","troubleshooting","set up","development",413,"payload too large"],keywords:["lucid-chain","troubleshooting","development","API","HTTP error","413 error","payload too large","max file size","json size limit","yaml size limit","file upload error","request limit","bodyParser","backend configuration","server settings","nginx","proxy","environment variables","API request","large file support"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},l="Payload too large",c={id:"Troubleshooting/Payload too large/payload too large",title:"Payload too large",description:"In this section you will learn how to solve problems related with max file size in Lucid chain.",source:"@site/docs/Troubleshooting/Payload too large/payload too large.md",sourceDirName:"Troubleshooting/Payload too large",slug:"/Troubleshooting/Payload too large/",permalink:"/docs/docs/next/Troubleshooting/Payload too large/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Troubleshooting/Payload too large/payload too large.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/next/tags/lucid-chain"},{label:"troubleshooting",permalink:"/docs/docs/next/tags/troubleshooting"},{label:"set up",permalink:"/docs/docs/next/tags/set-up"},{label:"development",permalink:"/docs/docs/next/tags/development"},{label:"413",permalink:"/docs/docs/next/tags/413"},{label:"payload too large",permalink:"/docs/docs/next/tags/payload-too-large"}],version:"current",lastUpdatedBy:"dangalcan",lastUpdatedAt:1742231082,formattedLastUpdatedAt:"Mar 17, 2025",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["lucid-chain","troubleshooting","set up","development","413","payload too large"],keywords:["lucid-chain","troubleshooting","development","API","HTTP error","413 error","payload too large","max file size","json size limit","yaml size limit","file upload error","request limit","bodyParser","backend configuration","server settings","nginx","proxy","environment variables","API request","large file support"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Authentication errors",permalink:"/docs/docs/next/Troubleshooting/Authentication errors/"},next:{title:"Port already in use",permalink:"/docs/docs/next/Troubleshooting/Port already in use/"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"413 (Payload too large)",id:"413-payload-too-large",level:2},{value:"External Lucid chain instance",id:"external-lucid-chain-instance",level:3},{value:"Own Lucid chain instance",id:"own-lucid-chain-instance",level:3}];function h(e){const o={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"payload-too-large",children:"Payload too large"}),"\n","\n","\n",(0,t.jsx)(o.p,{children:"In this section you will learn how to solve problems related with max file size in Lucid chain."}),"\n",(0,t.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(o.p,{children:"If you are having problems for uploading your yaml with your service chain and both your credentials and service chain are correct, you should check HTTP responses because it can mean that your file is too large to be processed. This can also happen to you if you are using Lucid chain API and you are sending either a large json or a large YAML."}),"\n",(0,t.jsx)(o.h2,{id:"413-payload-too-large",children:"413 (Payload too large)"}),"\n",(0,t.jsxs)(o.p,{children:["Check your browser console to see your HTTP Responses. If you see something like: ",(0,t.jsx)(o.em,{children:(0,t.jsx)(o.strong,{children:'"413 (Payload too large)"'})})," it is because of the max sized allowed in your server. Here you have 2 options."]}),"\n",(0,t.jsx)("div",{align:"center",children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.img,{alt:"413 error in browser",src:n(1797).Z+"",width:"825",height:"618"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.strong,{children:"Figure 1:"})," ",(0,t.jsx)(o.em,{children:"Payload too large error in browser."})]})}),"\n",(0,t.jsx)(o.h3,{id:"external-lucid-chain-instance",children:"External Lucid chain instance"}),"\n",(0,t.jsx)(o.p,{children:"If the Lucid chain instance you are using is not yours, you should contact your Lucid chain administrator and ask for a change in the max sixe allowed. Other solution can be reduce your YAML or JSON size in order to adapt it to your Lucid chain instance."}),"\n",(0,t.jsx)(o.h3,{id:"own-lucid-chain-instance",children:"Own Lucid chain instance"}),"\n",(0,t.jsx)(o.p,{children:"If the Lucid chain instance you are using is hosted by yourself or is running in your local machine, you should go to your backend terminal where Lucid chain is being executed and you will see the error."}),"\n",(0,t.jsx)("div",{align:"center",children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.img,{alt:"413 error in terminal",src:n(5949).Z+"",width:"1567",height:"615"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.strong,{children:"Figure 1:"})," ",(0,t.jsx)(o.em,{children:"Payload too large error in backend terminal."})]})}),"\n",(0,t.jsxs)(o.p,{children:["In this cases you have to go to ",(0,t.jsx)(o.em,{children:(0,t.jsx)(o.strong,{children:"back\\app.js"})})," file and look for the max size configuration. Once you have located the configuration, change it to a value adapted to your needs."]}),"\n",(0,t.jsx)(o.admonition,{type:"important",children:(0,t.jsx)(o.p,{children:"By default limits are 500mb for both json and YAML files."})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"app.use(bodyParser.json({ limit: '500mb' }));  // Adjust size as needed\napp.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));\n"})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsx)(o.p,{children:"In future versions we want to improve this so it can be an enviroment variable. Until then,you have to solve it manually."})}),"\n",(0,t.jsx)(o.p,{children:"Once it is change it, restart the app and the problem should be solved."}),"\n",(0,t.jsx)(i.Z,{children:(0,t.jsx)(o.p,{children:"Take into account that this may not work in a server due to nginx and proxy configurations. There are situtions where your requests can be handled by your Lucid chain instance but your server rejects them. In other cases, such as an hierarchically nginx proxy structure, your nginx streamer can split the requests in two, making Lucid chain process your request 2 times. This can lead to double importations or synchronizations, which are very annoying, so be very careful."})})]})}function g(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3839:(e,o,n)=>{n.d(o,{Z:()=>r});var t=n(2949),a=n(5893);function r(e){let{children:o}=e;const{colorMode:n}=(0,t.I)();return(0,a.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==n?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==n?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",o]})}},6905:(e,o,n)=>{n.d(o,{Z:()=>r});var t=n(2949),a=n(5893);function r(e){let{children:o}=e;const{colorMode:n}=(0,t.I)();return(0,a.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==n?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,a.jsx)("strong",{children:"Disclaimer:"})," ",o]})}},1797:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/413-PAYLOAD-TOO-LARGE-BROWSER-35c76b9ef77c6f456d8a9c04cac03352.png"},5949:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/413-PAYLOAD-TOO-LARGE-daf5e403b23f4a3e227a2dc910f57364.png"},1151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>i});var t=n(7294);const a={},r=t.createContext(a);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);