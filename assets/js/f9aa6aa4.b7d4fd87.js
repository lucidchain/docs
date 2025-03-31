"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[5095],{63116:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=i(85893),r=i(11151),t=i(16905);const d={},o="Lucid chain backend",a={id:"Contributing/Lucid Chain backend/Lucid Chain backend",title:"Lucid chain backend",description:"In this section we are going to learn how Lucid chain backend is structured. The first thing you can see when you enter the project, is that there are 2 parts very different from each other. The first one is back. This folder contains all backend logic and the integrations with Redmine and ITop. The other one is front, which contains all the frontend. Here you are about to explore back folder in order to understand its content. This is the most complex part of the application. It has a relatively well distributed system that integrates Redmine and ITop tools with an API in order to make them understand and support SCModel and other features. In the following sections we will describe each part.",source:"@site/versioned_docs/version-1.0/Contributing/Lucid Chain backend/Lucid Chain backend.md",sourceDirName:"Contributing/Lucid Chain backend",slug:"/Contributing/Lucid Chain backend/",permalink:"/docs/docs/1.0/Contributing/Lucid Chain backend/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Contributing/Lucid Chain backend/Lucid Chain backend.md",tags:[],version:"1.0",lastUpdatedBy:"dangalcan",lastUpdatedAt:1743427486,formattedLastUpdatedAt:"Mar 31, 2025",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/docs/docs/1.0/Contributing/Contributing-introduction"},next:{title:"Lucid chain frontend",permalink:"/docs/docs/1.0/Contributing/Lucid Chain frontend/"}},l={},c=[{value:"Main folder files",id:"main-folder-files",level:2},{value:"lucid-chain-tools directory",id:"lucid-chain-tools-directory",level:2},{value:"sc-itop directory",id:"sc-itop-directory",level:3},{value:"sc-redmine directory",id:"sc-redmine-directory",level:3},{value:"shared directory",id:"shared-directory",level:3},{value:"src directory",id:"src-directory",level:2},{value:"testing-material directory",id:"testing-material-directory",level:2},{value:"tests directory",id:"tests-directory",level:2},{value:"uploads directory",id:"uploads-directory",level:2},{value:"Enviroment variables",id:"enviroment-variables",level:2}];function h(e){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lucid-chain-backend",children:"Lucid chain backend"}),"\n","\n","\n",(0,s.jsxs)(n.p,{children:["In this section we are going to learn how Lucid chain backend is structured. The first thing you can see when you enter the project, is that there are 2 parts very different from each other. The first one is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"back"})}),". This folder contains all backend logic and the integrations with Redmine and ITop. The other one is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"front"})}),", which contains all the frontend. Here you are about to explore ",(0,s.jsx)(n.em,{children:"back"})," folder in order to understand its content. This is the most complex part of the application. It has a relatively well distributed system that integrates Redmine and ITop tools with an API in order to make them understand and support SCModel and other features. In the following sections we will describe each part."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Backend structure",src:i(91723).Z+"",width:"545",height:"687"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 1:"})," ",(0,s.jsx)(n.em,{children:"Lucid chain backend structure."})]})}),"\n",(0,s.jsx)(n.h2,{id:"main-folder-files",children:"Main folder files"}),"\n",(0,s.jsxs)(n.p,{children:["As you can see in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Figure 1"})})," there are some files that are not in any of the directories. Here we are going to explain all of them."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:".env:"})})," This is a special configuration file. In case you have just cloned the repo you will not have it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:".env.example:"})})," This is a example of how your .env file should look like. We will cover enviroment variables later."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:".gitignore:"})})," In this file we specify the files that we do not want git to track."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"app.js:"})})," This is the main file. Here we have all the application logic an the connection to the frontend. It is very important to manipulate it with caution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"encripter.js:"})})," Here you can find all the encryption logic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"logger.js:"})})," This the application logger."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"package.json:"})})," This file contains all the dependencies. There are some custom scripts in it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"package-lock.json:"})})," This file contains all the project dependencies with its exact versions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"readme.md:"})})," This file contains some information about Lucid chain and it contains some SCModel contraints and a tiny tutorial."]}),"\n"]}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:'"node-modules"'})})," directory is generated automatically and you do not have to worry about it."]})}),"\n",(0,s.jsx)(n.h2,{id:"lucid-chain-tools-directory",children:"lucid-chain-tools directory"}),"\n",(0,s.jsxs)(n.p,{children:["This directory contains all integration logic. The main file is called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"index.js"})}),", and it makes it possible to manage logic from ITop and Redmine. There is also another folder called src next to it. This directory has another 3 folders inside."]}),"\n",(0,s.jsx)(n.p,{children:"Each sc-tool folder is designed with an object structure. Depending on the service_type we take functions from different files. There is a file called indexToolName.js, which groups up every feature and defines the methods in order to be usefull for index.js."}),"\n",(0,s.jsx)(n.h3,{id:"sc-itop-directory",children:"sc-itop directory"}),"\n",(0,s.jsx)(n.p,{children:"Here we find all ITop logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for ITop configuration and another one for ImportModel. The second one is almost deprecated."}),"\n",(0,s.jsx)(n.h3,{id:"sc-redmine-directory",children:"sc-redmine directory"}),"\n",(0,s.jsx)(n.p,{children:"Here we find all Redmine logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for Redmine configuration and another one for ImportModel. The second one is almost deprecated."}),"\n",(0,s.jsx)(n.h3,{id:"shared-directory",children:"shared directory"}),"\n",(0,s.jsx)(n.p,{children:"Here we can find SCModel validations and some common functions used in Redmine and ITop logic."}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"lucid-chain-tools structure",src:i(17846).Z+"",width:"318",height:"628"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 2:"})," ",(0,s.jsx)(n.em,{children:"lucid-chain-tools directory structure."})]})}),"\n",(0,s.jsx)(n.h2,{id:"src-directory",children:"src directory"}),"\n",(0,s.jsxs)(n.p,{children:["This directory contains services and routes. In ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"routes folder"})})," we can find all app routes with it's ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Open API Specifications"})}),"."]}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.p,{children:"Please do not forget to include Open API specifications in case you implement a new feature or change an existing one."})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"services folder"})})," we have all the functions that use index.js from lucid-chain-tools. There is one service for each feature."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"src structure",src:i(9056).Z+"",width:"352",height:"671"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 3:"})," ",(0,s.jsx)(n.em,{children:"src directory structure."})]})}),"\n",(0,s.jsx)(n.h2,{id:"testing-material-directory",children:"testing-material directory"}),"\n",(0,s.jsx)(n.p,{children:"Here we can find some examples of service chains. There are invalid yamls so we can test validations, and correct ones so we can test Redmine and ITop features. We can distinct the following folders:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"sample_yaml:"})})," This folder contains a lot of examples of valid (in ",(0,s.jsx)(n.em,{children:"valid_yaml"}),") and invalid (in ",(0,s.jsx)(n.em,{children:"invalid_yaml"}),") folders. Invalid yamls are made to test SCModel validations, and they are divided in subdirectories for a better classification."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"sql:"})})," This folder contains sql files for seeding Redmine database. They are not usefull at all because they must be updated. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"It is deprecated."})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"testing_metrics_material:"})})," This folder has the same purpose but it used sample data in csv for seeding Redmine database. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"It is also deprecated."})})]}),"\n"]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"testing-material structure",src:i(57991).Z+"",width:"297",height:"423"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 4:"})," ",(0,s.jsx)(n.em,{children:"testing-material directory structure."})]})}),"\n",(0,s.jsx)(n.h2,{id:"tests-directory",children:"tests directory"}),"\n",(0,s.jsxs)(n.p,{children:["This part of the project is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"currently empty"})}),". Here we will find all lucid chain tests in the future."]}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.p,{children:"This section is always open to contributions because it is very important and until now no formal testing has been added. In future Lucid chain versions we will include tests, as it is an essential feature for preserve reliability when adding changes."})}),"\n",(0,s.jsx)(n.h2,{id:"uploads-directory",children:"uploads directory"}),"\n",(0,s.jsx)(n.p,{children:"This directory is not usefull and serves as a folder where the app stores uploaded files."}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.p,{children:"In future versinos Lucid chain will delete files when it finish working with them, so this folder can be empty mostly all the time."})}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"test and uploads structure",src:i(89082).Z+"",width:"327",height:"296"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 5:"})," ",(0,s.jsx)(n.em,{children:"tests and uploads structure."})]})}),"\n",(0,s.jsx)(n.h2,{id:"enviroment-variables",children:"Enviroment variables"}),"\n",(0,s.jsx)(n.p,{children:"Now let's cover enviroment variables. If you see what is inside .env.example, you will see the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-.env",children:"LUCID_USERNAME=admin\nLUCID_PASSWORD=admin\nLOG_LEVEL=silly  ## LOG_LEVEL CAN BE: error > warn >  info > verbose > debug > silly\nNUM_DECIMALS=2  ## 2 is the recomended. The maximum is 5. More than that doesn't make sense\nAPP_MODE=prd    ## APP_MODE can be dev or prd. In dev you dont need authentication, but in prod u do!\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lets talk about them and see what they do."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"LUCID_USERNAME:"})})," This is the username needed in order to have access to Lucid chain wizard. Its default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"admin"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"LUCID_PASSWORD:"})})," This is the password of the user needed in order to have access to Lucid chain wizard. Its default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"admin"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"LOG_LEVEL:"})})," This variable specifies log level. Logs are distributed in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"layers"})}),", so you when you assign a layer, only logs in that layer or in higher ones will be shown. There are six layers, hierchally represented like this: ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"error > warn >  info > verbose > debug > silly"})}),". ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"By default LOG_LEVEL is silly"})}),", so all logs will be shown. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Recommended value is info"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"NUM_DECIMALS:"})})," This value represents the number of decimals that you want to be shown ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"in the frontend"})}),". By default its value is 2, and it is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"recommended to not change it"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.strong,{children:"APP_MODE:"})})," This variable defines the application mode. There are two modes: production (prd) and develoment (dev). ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"In prodcution mode authentication is required"})}),". This authentication must be done with ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"LUCID_USERNAME and LUCID_PASSWORD credentials"})}),". In developement mode we disable it for being able to run Vite dev mode. We will talk about that in frontend section."]}),"\n"]}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsxs)(n.p,{children:["LUCID_USERNAME and LUCID_PASSWORD are mostly required in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"production enviroment"})}),". Please make sure to change the default values for your safety."]})}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsxs)(n.p,{children:["Please take into account that if you are using Lucid chain in a server that already has a LOG_LEVEL defined, ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Lucid chain LOG_LEVEL enviroment variable can be ignored and substituted by the server's one"})}),". This can also happen with the max request body size allowed."]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16905:(e,n,i)=>{i.d(n,{Z:()=>t});var s=i(92949),r=i(85893);function t(e){let{children:n}=e;const{colorMode:i}=(0,s.I)();return(0,r.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==i?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,r.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},91723:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/backendStructure-50c0869521696b2a5023c129fa8db901.png"},17846:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/lucid-chain-toolsStructure-da18fc102ef97b1d7d353278e43df045.png"},9056:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/srcStructure-3b827548da4182f5c09519f6c3176700.png"},57991:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/testing-materialStructure-a763b3b4a5fff940dd5a0577c15f4efc.png"},89082:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/uploadsAndTestStructure-a8889d60e2e6d2d44889d4f8aa38e352.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var s=i(67294);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);