"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[1417],{73314:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(85893),r=i(11151),o=i(16905);const t={sidebar_position:2,tags:["lucid-chain","configuration","API","integration","setup","features"],keywords:["Lucid Chain configuration","Redmine integration","ITop configuration","API setup","configuring tools","Lucid Chain setup guide","connecting Lucid Chain to tools"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},c="Configuring tools",l={id:"Features/Configuring tools/Configuring tools",title:"Configuring tools",description:"In this section you will learn how to connect your Lucid chain instance to your Redmine and/or ITop.",source:"@site/versioned_docs/version-1.2/Features/Configuring tools/Configuring tools.md",sourceDirName:"Features/Configuring tools",slug:"/Features/Configuring tools/",permalink:"/docs/docs/Features/Configuring tools/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2/Features/Configuring tools/Configuring tools.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/tags/lucid-chain"},{label:"configuration",permalink:"/docs/docs/tags/configuration"},{label:"API",permalink:"/docs/docs/tags/api"},{label:"integration",permalink:"/docs/docs/tags/integration"},{label:"setup",permalink:"/docs/docs/tags/setup"},{label:"features",permalink:"/docs/docs/tags/features"}],version:"1.2",lastUpdatedBy:"dangalcan",lastUpdatedAt:1743427486,formattedLastUpdatedAt:"Mar 31, 2025",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["lucid-chain","configuration","API","integration","setup","features"],keywords:["Lucid Chain configuration","Redmine integration","ITop configuration","API setup","configuring tools","Lucid Chain setup guide","connecting Lucid Chain to tools"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/docs/docs/Features/Feature-introduction"},next:{title:"Importing a service chain",permalink:"/docs/docs/Features/Importing a service chain/"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Configuring ITop",id:"configuring-itop",level:2},{value:"Configuring Redmine",id:"configuring-redmine",level:2},{value:"Save configuraion",id:"save-configuraion",level:2}];function h(e){const n={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuring-tools",children:"Configuring tools"}),"\n",(0,s.jsx)(n.p,{children:"In this section you will learn how to connect your Lucid chain instance to your Redmine and/or ITop."}),"\n","\n","\n",(0,s.jsx)(o.Z,{children:(0,s.jsxs)(n.p,{children:["Lucid chain only supports configuration for ",(0,s.jsx)(n.strong,{children:"Redmine and ITop"}),". Any other Service management tool is not available for configuration yet."]})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["You can know if Lucid chain has access to your ITop or your Redmine by checking the message below each tool image. If everything is working the application will desplay ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Connected"})}),". Otherwise, ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Not connected"})})," will appear."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Not connected tools",src:i(46059).Z+"",width:"778",height:"477"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 1:"})," ",(0,s.jsx)(n.em,{children:"Initial Lucid chain view with disconnected tools."})]})}),"\n",(0,s.jsxs)(n.p,{children:["If you are trying to connect your tool to Lucid chain, you have to click on the ",(0,s.jsx)(n.strong,{children:"globe icon"})," to access configuration. Once you are there, you will see two forms, once for each tool. You ",(0,s.jsx)("u",{children:"do not need"})," to configure both of them in order to have your tool connected."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-itop",children:"Configuring ITop"}),"\n",(0,s.jsxs)(n.p,{children:["When configuring ITop you will need first to have an user with ",(0,s.jsx)(n.strong,{children:'"Administrator"'})," and ",(0,s.jsx)(n.strong,{children:'"REST services user"'})," profiles. You can verify this in ",(0,s.jsx)(n.em,{children:'"administration"'})," ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:'"User Accounts"'})," ",(0,s.jsx)(n.strong,{children:">"})," Click in the admin user you want to use for Lucid chain Wizard ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:"Profiles"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you want to configure your profiles and add them to a new user. Follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create an user."}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.em,{children:'"administration"'})," ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:'"user accounts"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click in ",(0,s.jsx)(n.em,{children:'"admin"'})," or the superuser you created."]}),"\n",(0,s.jsxs)(n.li,{children:["Click in ",(0,s.jsx)(n.em,{children:'"profiles"'}),", and then click the pencil button to edit."]}),"\n",(0,s.jsxs)(n.li,{children:["Click in ",(0,s.jsx)(n.em,{children:'"add profile objects"'}),". Select ",(0,s.jsx)(n.em,{children:'"REST serivces user"'})," and click ",(0,s.jsx)(n.em,{children:'"add"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"(if it is not already done)"})," Click in ",(0,s.jsx)(n.em,{children:'"add profile objects"'}),". Select ",(0,s.jsx)(n.em,{children:'"Adminitrator"'})," and click ",(0,s.jsx)(n.em,{children:'"add"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:'"apply"'})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can check all ITop documentation in this ",(0,s.jsx)(n.a,{href:"https://www.itophub.io/wiki/page?id=latest:start",children:"link"})]}),"\n",(0,s.jsx)(n.p,{children:"Once REST Services and administrator profiles have been given to your user, you have to fill the form."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Server:"})})})," You have to specify here the HTTP method and the host of your ITop."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Port:"})})})," You have to specify here the port where your ITop is listening."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"API:"})})})," You have to specify here the API route. Please verify that you do not include host, port or version in this parameter. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:'A commonly right value is "/webservices/rest.php"'})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Username:"})})})," You have to include here the login (username) with the grantted privileges given before."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Password:"})})})," Here you have to write this user's password."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here we show an example ",(0,s.jsx)(n.strong,{children:"assuming"})," that we have an ITop listening in ",(0,s.jsx)(n.strong,{children:"localhost:8000"})," and that our user credentials are ",(0,s.jsx)(n.strong,{children:'user:"admin" pwd:"admin"'}),"."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"ITop form",src:i(41812).Z+"",width:"496",height:"465"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 2:"})," ",(0,s.jsx)(n.em,{children:"Example of ITop configuration in localhost."})]})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-redmine",children:"Configuring Redmine"}),"\n",(0,s.jsxs)(n.p,{children:["When configuring Redmine it is very important to do something similar to what is needed in ITop. We need to enable ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"API REST Services"})})," in Redmine and make it possible to ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"assign issues to groups"})}),". If you have not done it, you can follow these steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Authenticated as an admin user, go to ",(0,s.jsx)(n.em,{children:'"Administration"'})," ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:'"Configuration"'})," ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:'"API"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click in ",(0,s.jsx)(n.em,{children:'"Enable REST web Service"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:'"save"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.em,{children:'"Administration"'})," ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:'"Settings"'})," ",(0,s.jsx)(n.strong,{children:">"})," ",(0,s.jsx)(n.em,{children:'"Issue Tracking"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click in ",(0,s.jsx)(n.em,{children:'"Allow issue assignment to groups"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click in ",(0,s.jsx)(n.em,{children:'"save"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now you have to simply fill the form:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Server:"})})})," You have to specify here the ",(0,s.jsx)(n.strong,{children:"HTTP method"})," and the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"host"})})," of your Redmine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Port:"})})})," You have to specify here the port where your Redmine is listening."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"API:"})})})," You have to specify here the API route. Please verify that you do not include host, port or version in this parameter. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:'A commonly right value is "/"'})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Username:"})})})," You have to include here the login (username) with the grantted privileges given before."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Password:"})})})," Here you have to write this user's password."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Aditionally, you will need to configure your Redmine's Database connection filling another form."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Server:"})})})," You have to specify here the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"HTTP method"})})," and the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"host"})})," of your Redmine's database."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Port:"})})})," You have to specify here the port where your database is listening."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"User:"})})})," You have to include here an user with privileges for CRUD operations in Redmine's database."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Password:"})})})," Here you have to write this user's password."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Database:"})})})," Here you have to write your Redmine's database name. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:'Usually, it is called "Redmine"'})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here we show an example ",(0,s.jsx)(n.strong,{children:"assuming"})," that we have an ",(0,s.jsx)(n.strong,{children:"Redmine"})," listening in ",(0,s.jsx)(n.strong,{children:"localhost:8080"})," and that our user credentials are ",(0,s.jsx)(n.strong,{children:'user:"admin" pwd:"admin"'}),". We also ",(0,s.jsx)(n.strong,{children:"assume"})," that we have a database in ",(0,s.jsx)(n.strong,{children:"localhost:3307"})," and an user with credentials ",(0,s.jsx)(n.strong,{children:"user: root pwd: root"})," with CRUD privileges for a database named ",(0,s.jsx)(n.strong,{children:'"Redmine"'}),", which is our Redmine's database."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Redmine form",src:i(67410).Z+"",width:"507",height:"757"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 3:"})," ",(0,s.jsx)(n.em,{children:"Example of Redmine configuration in localhost."})]})}),"\n",(0,s.jsx)(n.h2,{id:"save-configuraion",children:"Save configuraion"}),"\n",(0,s.jsxs)(n.p,{children:["You can save this configuration by clicking of ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:'"Save"'})})," button. This will sava the data into your localstorage. This will ensure privacy because you can delete your configuration by cleaning you localstorage."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Saving configuration",src:i(98221).Z+"",width:"102",height:"80"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 4:"})," ",(0,s.jsx)(n.em,{children:"Configuration saving confirmation."})]})}),"\n",(0,s.jsx)(o.Z,{children:(0,s.jsx)(n.p,{children:"In future versions you will be able to delete the configuration from Lucid chain."})}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Connected tools",src:i(90231).Z+"",width:"717",height:"456"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Figure 5:"})," ",(0,s.jsx)(n.em,{children:"Lucid chain connected to ITop and Redmine."})]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16905:(e,n,i)=>{i.d(n,{Z:()=>o});var s=i(92949),r=i(85893);function o(e){let{children:n}=e;const{colorMode:i}=(0,s.I)();return(0,r.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==i?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,r.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},41812:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/ITopForm-d92abec8f4c4d14ee703903dc0793560.png"},67410:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/RedmineForm-c0b0d8ebfcc47f5a6b02d2b6b201386f.png"},90231:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/connected-16ebd9f88916d43d36151db555ba721a.png"},46059:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/notConnected-181449b0adefe54bf04dc78623fe8c03.png"},98221:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,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"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(67294);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);