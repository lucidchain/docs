"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[3945],{7904:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var o=i(5893),t=i(1151),s=i(6905),a=i(3839);const r={sidebar_position:2},l="Local installation",c={id:"Installation/Local installation/Local installation",title:"Local installation",description:"In this section you will learn how to run Lucid chain locally. There are 3 ways and each one is usefull for something different.",source:"@site/versioned_docs/version-1.0/Installation/Local installation/Local installation.md",sourceDirName:"Installation/Local installation",slug:"/Installation/Local installation/",permalink:"/docs/docs/1.0/Installation/Local installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Installation/Local installation/Local installation.md",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/docs/docs/1.0/Installation/Installation-introduction"},next:{title:"Deployment",permalink:"/docs/docs/1.0/Installation/Deployment/"}},d={},h=[{value:"Installation with Docker (Recommended)",id:"installation-with-docker-recommended",level:2},{value:"Installation from repository",id:"installation-from-repository",level:2},{value:"Custom Docker installation (Only recommended for developers)",id:"custom-docker-installation-only-recommended-for-developers",level:2}];function u(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"local-installation",children:"Local installation"}),"\n","\n","\n",(0,o.jsx)(n.p,{children:"In this section you will learn how to run Lucid chain locally. There are 3 ways and each one is usefull for something different."}),"\n",(0,o.jsx)(n.h2,{id:"installation-with-docker-recommended",children:"Installation with Docker (Recommended)"}),"\n",(0,o.jsx)(n.p,{children:"If you want to install just Lucid chain because you already have Redmine or ITop available and deployed, you just have to run the following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:"docker pull lucidchain/lucidchain_wizard:latest\ndocker run -d --name lucid-chain lucidchain/lucidchain_wizard:latest\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will pull Lucid chain image and run a container named ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"lucid-chain"})})," in your docker."]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["Take into account that you need to have ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"your port 3000 available"})})," in order to make it work. Please make sure you use ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"latest"})})," version because there are not other stable versions yet."]})}),"\n",(0,o.jsx)(n.p,{children:"If you want to install locally ITop and Redmine too, you can do it all in one following these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone infrastructure repository."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:"git clone https://github.com/lucidchain/infrastructure\ncd infrastructure\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use docker-compose-test or docker-compose-local for installing Redmine, ITop and Lucid chain at the same time"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:'cd docker-lucidchain\ndocker-compose -f "docker-compose-test.yaml" up -d\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["Take into account that you need to have ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"your ports 3000, 3306, 8080, 8081 and 8000 available"})})," in order to make it work. Please make sure you use ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"latest"})})," version in Lucid chain because there are not other stable versions yet."]})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"Installing in docker",src:i(3094).Z+"",width:"1310",height:"521"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.strong,{children:"Figure 1:"})," ",(0,o.jsx)(n.em,{children:"Lucid chain installed with ITop and Redmine using Docker."})]})}),"\n",(0,o.jsx)(a.Z,{children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In ITop it is only tested up to version 3.2.0. Choosing a greater version can cause unknown problems"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Redmine versions greater than 5.1.4 ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"are not supported"})}),". We are very sorry about that but there is nothing that we can do with it because we suspect that this is due to Gem internal configurations. In future versions we will try to support greater Redmine versions."]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"You can use this command to remove all the containers with its volumes."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:'cd docker-lucidchain\ndocker-compose -f "docker-compose-test.yaml" down -v\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"installation-from-repository",children:"Installation from repository"}),"\n",(0,o.jsx)(n.p,{children:"If you are interested in having your own Lucid chain in local, and have access to make modifications, you should choose this option and follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone lucid chain repository."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:"git clone https://github.com/lucidchain/wizard\ncd wizard\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Now you have to prepare the enviroment and install the dependencies. You are going to run it locally, so you can leave the env variables as they are."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:"cd front\ncp .env.example .env\nnpm install\nnpm run build\ncd ..\ncd back\ncp .env.example .env\nnpm install\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the application with ",(0,o.jsx)(n.em,{children:"npm start"})," or ",(0,o.jsx)(n.em,{children:"node app.js"})]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["Take into account that you need to have ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"your port 3000 available"})})," in order to make it work."]})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"Run in local",src:i(4071).Z+"",width:"1492",height:"590"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.strong,{children:"Figure 2:"})," ",(0,o.jsx)(n.em,{children:"Lucid chain installed running locally."})]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsx)(n.p,{children:"If you are going to work in this repository, you will need to check contributing section for a better understanding a some additional installation details. You will also learn about enviroment variables so do not forget to check that."})}),"\n",(0,o.jsx)(n.h2,{id:"custom-docker-installation-only-recommended-for-developers",children:"Custom Docker installation (Only recommended for developers)"}),"\n",(0,o.jsx)(n.p,{children:"If you already have installed Lucid chain with its repository and you have modified it, you can use its Dockerfile in order to apply your changes and have them in your Lucid chain container. This is usually made to test how Lucid chain behaves in a deployment enviroment. Please ensure that your application works properly before updating Lucid chain image or opening an issue in Github or something similar such as a pull request."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bin/bash",children:"docker build -t my-modded-lucid-chain .\ndocker run -d --name my-modded-lucid-chain-container -p 3000:3000 my-modded-lucid-chain\n"})}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsxs)(n.p,{children:["Do not forget to run these commands in the ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"main directory"})}),". If you are in ",(0,o.jsx)(n.em,{children:'"/back"'})," or ",(0,o.jsx)(n.em,{children:'"/front"'})," do not forget to return to it by using ",(0,o.jsx)(n.em,{children:'"cd .."'}),". Also take into account that your modified lucid chain may not work because your port ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"3000 could be in use"})})," and/or your ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"modifications could be incorrect"})}),"."]})}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsx)(n.p,{children:"Be aware that important structure modifications can lead to a need of Dockerfile update. Please change things with caution and remember to test everything before updating."})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3839:(e,n,i)=>{i.d(n,{Z:()=>t});var o=i(5893);function t(e){let{children:n}=e;return(0,o.jsxs)("div",{style:{padding:"12px",backgroundColor:"#ffe6e6",borderLeft:"5px solid #d9534f",color:"#a94442",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},6905:(e,n,i)=>{i.d(n,{Z:()=>t});var o=i(5893);function t(e){let{children:n}=e;return(0,o.jsxs)("div",{style:{padding:"10px",backgroundColor:"#fffae6",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,o.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},3094:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/dockerLucidChainResult-266fa2429bf94d80d268766ddd92c0fe.png"},4071:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/runningLocally-dcaad52fd959df67681e1ebc1d102d16.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var o=i(7294);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);