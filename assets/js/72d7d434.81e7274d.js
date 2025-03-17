"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[3536],{2325:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=t(5893),i=t(1151),s=t(3839),r=t(6905);const o={tags:["lucid-chain","transactional","data-management","features"],keywords:["database purging","redmine cleanup","itop cleanup","transactional purge","database management","Lucid chain purge","data deletion","system cleanup","irreversible action"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},c="Purging database",d={id:"Features/Purging database/Purging database",title:"Purging database",description:"In this section you will learn how to clean your ITop and/or Redmine's database using Lucid chain.",source:"@site/docs/Features/Purging database/Purging database.md",sourceDirName:"Features/Purging database",slug:"/Features/Purging database/",permalink:"/docs/docs/next/Features/Purging database/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Features/Purging database/Purging database.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/next/tags/lucid-chain"},{label:"transactional",permalink:"/docs/docs/next/tags/transactional"},{label:"data-management",permalink:"/docs/docs/next/tags/data-management"},{label:"features",permalink:"/docs/docs/next/tags/features"}],version:"current",lastUpdatedBy:"dangalcan",lastUpdatedAt:1742231082,formattedLastUpdatedAt:"Mar 17, 2025",frontMatter:{tags:["lucid-chain","transactional","data-management","features"],keywords:["database purging","redmine cleanup","itop cleanup","transactional purge","database management","Lucid chain purge","data deletion","system cleanup","irreversible action"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Creating my service chain",permalink:"/docs/docs/next/Features/Creating my service chain/"},next:{title:"Metrics",permalink:"/docs/docs/next/Features/Metrics/"}},l={},u=[{value:"Choosing the target and selecting purgation",id:"choosing-the-target-and-selecting-purgation",level:2},{value:"Database purgation",id:"database-purgation",level:2}];function g(e){const a={br:"br",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"purging-database",children:"Purging database"}),"\n","\n","\n",(0,n.jsx)(a.p,{children:"In this section you will learn how to clean your ITop and/or Redmine's database using Lucid chain."}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(a.p,{children:"In future versions we will have a transactional purge in ITop. This means that if any errors occur during removal, purgation will not continue and database will stay as in the begining."})}),"\n",(0,n.jsx)(a.h2,{id:"choosing-the-target-and-selecting-purgation",children:"Choosing the target and selecting purgation"}),"\n",(0,n.jsxs)(a.p,{children:["If you want to purge your Redmine or Itop database, you can do it by clicking on Redmine or ITop logo and selecting ",(0,n.jsx)(a.em,{children:(0,n.jsx)(a.strong,{children:"Purge database"})})," option in the modal."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"Features modal",src:t(1112).Z+"",width:"668",height:"357"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Figure 1:"})," ",(0,n.jsx)(a.em,{children:"Lucid chain available features modal."})]})}),"\n",(0,n.jsx)(a.h2,{id:"database-purgation",children:"Database purgation"}),"\n",(0,n.jsxs)(a.p,{children:["You will be redirected to a very basic screen where you will have to fill a checkbox assuming the responsability of this action. After that, you have to click in the red button that says ",(0,n.jsx)(a.em,{children:(0,n.jsx)(a.strong,{children:"Purge redmine/itop database"})}),". Please be patient because this process can be very slow, specially in ITop. ",(0,n.jsx)(a.em,{children:(0,n.jsx)(a.strong,{children:"Database purgation is transactional"})}),", which means that if any errors occur during the process, the database will stay as in the begining."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"Purge modal",src:t(7022).Z+"",width:"826",height:"645"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Figure 2:"})," ",(0,n.jsx)(a.em,{children:"Accepting purge conditions modal."})]})}),"\n",(0,n.jsx)(s.Z,{children:(0,n.jsx)(a.p,{children:"Please make sure that your connection is correct and that you are going to remove all data. This is very dangerous because it will not be reversible."})}),"\n",(0,n.jsx)(a.p,{children:"Once the process is completed, you will receive a message."}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"Purge finished",src:t(8434).Z+"",width:"840",height:"495"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.strong,{children:"Figure 3:"})," ",(0,n.jsx)(a.em,{children:"Purge result."})]})})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},3839:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(2949),i=t(5893);function s(e){let{children:a}=e;const{colorMode:t}=(0,n.I)();return(0,i.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==t?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==t?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",a]})}},6905:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(2949),i=t(5893);function s(e){let{children:a}=e;const{colorMode:t}=(0,n.I)();return(0,i.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==t?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,i.jsx)("strong",{children:"Disclaimer:"})," ",a]})}},1112:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/featuresModal-a7094524b0347dd7fa03d5daab3df10c.png"},7022:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/acceptResponsability-57d7279f02b124ce6e7c3444714ff521.png"},8434:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/purgationCompleted-b21a1315681af42c084de5f28a35ad07.png"},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var n=t(7294);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);