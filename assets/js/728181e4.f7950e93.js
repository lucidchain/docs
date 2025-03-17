"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[1413],{9409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=t(5893),o=t(1151),r=t(6905),s=t(3839);const a={sidebar_position:3},l="Deployment",d={id:"Installation/Deployment/Deployment",title:"Deployment",description:"In this section you will learn how to deploy Lucid chain step by step.",source:"@site/versioned_docs/version-1.0/Installation/Deployment/Deployment.md",sourceDirName:"Installation/Deployment",slug:"/Installation/Deployment/",permalink:"/docs/docs/1.0/Installation/Deployment/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Installation/Deployment/Deployment.md",tags:[],version:"1.0",lastUpdatedBy:"dangalcan",lastUpdatedAt:1742231082,formattedLastUpdatedAt:"Mar 17, 2025",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Local installation",permalink:"/docs/docs/1.0/Installation/Local installation/"},next:{title:"Features",permalink:"/docs/docs/1.0/category/features"}},c={},h=[{value:"Alone deployment",id:"alone-deployment",level:2},{value:"Deployment with ITop and Redmine in a nginx enviroment",id:"deployment-with-itop-and-redmine-in-a-nginx-enviroment",level:2}];function u(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deployment",children:"Deployment"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"In this section you will learn how to deploy Lucid chain step by step."}),"\n",(0,i.jsx)(n.h2,{id:"alone-deployment",children:"Alone deployment"}),"\n",(0,i.jsx)(n.p,{children:"If you want to deploy just Lucid chain because you already have Redmine or ITop available and deployed, you just have to run the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bin/bash",children:"docker pull lucidchain/lucidchain_wizard:latest\ndocker run -d --name lucid-chain lucidchain/lucidchain_wizard:latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will pull Lucid chain image and run a container named ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"lucid-chain"})})," in your docker."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["Take into account that you need to have ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"your port 3000 available"})})," in order to make it work. Please make sure you use ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"latest"})})," version because there are not other stable versions yet."]})}),"\n",(0,i.jsx)(n.h2,{id:"deployment-with-itop-and-redmine-in-a-nginx-enviroment",children:"Deployment with ITop and Redmine in a nginx enviroment"}),"\n",(0,i.jsx)(n.p,{children:"In case you want to deploy Lucid chain with ITop and Redmine at the same time, you can do it installing and deploying each tool separately or through Lucid chain infrastructure."}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsx)(n.p,{children:"You will need to have a ningx streamer in order to deploy like this. For now Kubernetes has not been tested or supported. We are sorry for that and we will try to include that in future versions."})}),"\n",(0,i.jsx)(n.p,{children:"In order to use Lucid chain infrastructure, you have to follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone infrastructure repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bin/bash",children:"git clone https://github.com/lucidchain/infrastructure\ncd infrastructure\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you are using nginx you can use docker-compose.yaml to directly deploy all structure. But first you will have to create a .env file with some configuration variables."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-.env",children:"SERVICES_PREFIX=yourServicePrefix\nDNS_SUFFIX=yourDNSSuffix\nRM_DB_PASSWORD=yourRedmineDatabasePassword\nRM_SECRET_KEY_BASE=yourRedmineSecretKeyBase\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once you have your .env you can run the following command to run all the containers."}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["Take into account that you need to have ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"your ports 3000, 3306, 8080, 8081 and 8000 available"})})," in order to make it work. Please make sure you use ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"latest"})})," version in Lucid chain because there are not other stable versions yet."]})}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In ITop it is only tested up to version 3.2.0. Choosing a greater version can cause unknown problems"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Redmine versions greater than 5.1.4 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"are not supported"})}),". We are very sorry about that but there is nothing that we can do with it because we suspect that this is due to Gem internal configurations. In future versions we will try to support greater Redmine versions."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bin/bash",children:'docker-compose -f "docker-lucidchain/docker-compose.yaml" --env-file .env up -d\n'})}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Deploying with ngnx",src:t(3502).Z+"",width:"1603",height:"583"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Figure 1:"})," ",(0,i.jsx)(n.em,{children:"Deploy Lucid chain with ITop and Redmine."})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.Z,{children:(0,i.jsx)(n.p,{children:"Execute this command inside infrastructure directory and remember to have in that folder a .env file."})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3839:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(2949),o=t(5893);function r(e){let{children:n}=e;const{colorMode:t}=(0,i.I)();return(0,o.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==t?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==t?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},6905:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(2949),o=t(5893);function r(e){let{children:n}=e;const{colorMode:t}=(0,i.I)();return(0,o.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==t?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,o.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},3502:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/serverDeployMent-9aa480da38ce09a70fab1c51d5788d58.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);