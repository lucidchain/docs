"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[7431],{8764:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(5893),t=i(1151),a=i(3839),r=i(6905);const l={},o="Metrics",c={id:"Features/Metrics/Metrics",title:"Metrics",description:"In this section you will learn about Lucid chain SLA metrics and how to interpret them.",source:"@site/docs/Features/Metrics/Metrics.md",sourceDirName:"Features/Metrics",slug:"/Features/Metrics/",permalink:"/docs/docs/next/Features/Metrics/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Features/Metrics/Metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Purging database",permalink:"/docs/docs/next/Features/Purging database/"},next:{title:"Contributing",permalink:"/docs/docs/next/category/contributing"}},h={},d=[{value:"Choosing the target and selecting Metrics",id:"choosing-the-target-and-selecting-metrics",level:2},{value:"Global Overview",id:"global-overview",level:2},{value:"Organizations",id:"organizations",level:3},{value:"Problematic open issues",id:"problematic-open-issues",level:3},{value:"SLA passed pie chart",id:"sla-passed-pie-chart",level:3},{value:"SLA passed last 6 months bar chart",id:"sla-passed-last-6-months-bar-chart",level:3},{value:"Global Details",id:"global-details",level:2},{value:"Issue filtering",id:"issue-filtering",level:3},{value:"Issue table",id:"issue-table",level:3},{value:"Pie charts",id:"pie-charts",level:3},{value:"Service Details",id:"service-details",level:2}];function A(e){const s={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"metrics",children:"Metrics"}),"\n","\n","\n",(0,n.jsx)(s.p,{children:"In this section you will learn about Lucid chain SLA metrics and how to interpret them."}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsxs)(s.p,{children:["Take into account that in ITop TTR is defined as the time between ",(0,n.jsx)(s.strong,{children:"issue creation"})," and ",(0,n.jsx)(s.strong,{children:"issue resolution"}),". This ",(0,n.jsx)(s.strong,{children:"differs"})," from Lucid chain TTR definition. It is also important to remember that ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"ownership-type state+team is not supported in ITop"})})," because Itop does not allow to assign and issue to a group without assining it to a user at the same time. We are very sorry for that but nothing can be done as we cannot modify your ITop in order to do this."]})}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.p,{children:"Please be patient because all metrics pages can be slow if you have a lot of issues and/or your service chain is very big."})}),"\n",(0,n.jsx)(s.h2,{id:"choosing-the-target-and-selecting-metrics",children:"Choosing the target and selecting Metrics"}),"\n",(0,n.jsxs)(s.p,{children:["If you want to analyse your SLA metrics of your current service chain in Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Get SLA Metrics"})})," option in the modal."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Features modal",src:i(1112).Z+"",width:"668",height:"357"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 1:"})," ",(0,n.jsx)(s.em,{children:"Lucid chain available features modal."})]})}),"\n",(0,n.jsx)(s.h2,{id:"global-overview",children:"Global Overview"}),"\n",(0,n.jsx)(s.p,{children:"You will be redirected to global overview page. You will be asked about choosing your service chain type. This will make Lucid chain export your current chain and showing it to you. You will be able to see your current chain represented in a mermaid grpah. You can toggle the mermaid and also zoom in by clicking on the graph. You can also see some import imformation about how many organizations, teams and service you are going to import."}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Chain type modal",src:i(5126).Z+"",width:"513",height:"248"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 2:"})," ",(0,n.jsx)(s.em,{children:"Service chain type modal."})]})}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsxs)(s.p,{children:["If you see something in the mermaid graph like ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:'"Max size exceeded"'})})," do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation."]})}),"\n",(0,n.jsx)(s.h3,{id:"organizations",children:"Organizations"}),"\n",(0,n.jsx)(s.p,{children:"In this view you will be able to see a lot of overall information. In addition of your service chain, which you can toggle, you will also see a component named Organizations."}),"\n",(0,n.jsx)(s.p,{children:"It is a list of your service chain organizations. You can toggle each one by clicking in its name. This will display all the teams it has. You can also toggle them by clicking on them. If no data is retrieved, this means that there are no issues associated with that team. In other case, you will see a progress bar showing TTO and TTR passed percentage and how many issues from the total issues of this team are passing the SLA defined in your yaml."}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.p,{children:"When we say that an issue has passed SLA, it means that this issue's TTO and TTR have valid values according to the service chain model described in the yaml and imported in your tool."})}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Organizations component",src:i(1871).Z+"",width:"913",height:"877"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 3:"})," ",(0,n.jsx)(s.em,{children:"Basic example of organization component."})]})}),"\n",(0,n.jsx)(s.h3,{id:"problematic-open-issues",children:"Problematic open issues"}),"\n",(0,n.jsxs)(s.p,{children:["If you scroll down you will be able to see a rectagle that says ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Problematic open issues  (X/Y)"})}),", where X is the total number of problematic open issues, and the Y is the total number of open issues. You can click on it in order to toggle it and see the table.Here you can see all the open issues whose TTOs and/or TTRs have been exceded. The ideal situation is an empty table (Figure 4)."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Ideal problematic open issues table",src:i(473).Z+"",width:"1267",height:"127"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 4:"})," ",(0,n.jsx)(s.em,{children:"Ideal situation where there are not problematic open issues."})]})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"If you click in any issue, Lucid chain will redirect you exactly to the link of it in your ITop or Redmine in a new page in your browser."})}),"\n",(0,n.jsx)(s.p,{children:"If any issues are shown, you will be able to see a lot of information about them. You will see some columns:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Issue:"})})})," This column contains issue id, title, the person assigned to it, its type and its creation date."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TTO:"})})})," This column contains the issue TTO. If TTO does not pass SLA, the exceding time will be shown below as ",(0,n.jsx)(s.em,{children:'"+ X h"'})," in hours."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TTR:"})})})," This column contains the issue TTR. If TTR does not pass SLA, the exceding time will be shown below as ",(0,n.jsx)(s.em,{children:'"+ X h"'})," in hours."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TOTAL:"})})})," This column contains the sum of issue TTO and TTR. If any of does not pass the SLA, exceding time will be shown below as ",(0,n.jsx)(s.em,{children:'"+ Xh"'})," in hours."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"STATE:"})})})," This column shows the current state of the issue. This is very usefull for service chain type state because you can kwno the service associated with it instantly."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"sla-passed-pie-chart",children:"SLA passed pie chart"}),"\n",(0,n.jsx)(s.p,{children:"If you go to the bottom, you will see some graphics. Now we are going to talk about these two pie charts."}),"\n",(0,n.jsx)(s.p,{children:"The big pie chart contains a representation of the total TTO and TTR passed percentage of the issues of this month. Once you have your cursor in the pie chart, it will show you the exact values with two decimals. The other one, which is smaller, represents the same but taking into account the total percentage of issues that have passed TTO and TTR."}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.p,{children:"This pie charts only take into account closed issues. Moreover, if a issue is closed while whatching this page and you do not reload it, data will not be updated."})}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Global passed SLA graphics",src:i(3819).Z+"",width:"767",height:"857"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 5:"})," ",(0,n.jsx)(s.em,{children:"Ideal situation where there all issues pass SLA."})]})}),"\n",(0,n.jsx)(s.h3,{id:"sla-passed-last-6-months-bar-chart",children:"SLA passed last 6 months bar chart"}),"\n",(0,n.jsx)(s.p,{children:"The right part of the bottom charts is a bar chart which represents the percentage of issues that passed TTO and TTR in the last six months. In each month, you can analyse TTO and TTR separately, and you can see one progress bar for each property. Moving the cursos in them will show you the exact number. You can also see the exact percentage in the begining of each progress bar. If there are no bars, it means that there are not issues in that month."}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.p,{children:"This bar chart takes into account closed issues. Moreover, if a issue is closed while whatching this page and you do not reload it, data will not be updated."})}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Issue bar chart",src:i(4924).Z+"",width:"818",height:"852"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 6:"})," ",(0,n.jsx)(s.em,{children:"Ideal situation where there all issues pass SLA."})]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.strong,{children:"NOTE:"})})," See how in Figure 6 there are a lot of 0% due to the lack of issues in the past months. This can also appear when you start to use Lucid chain metrics and your service chain is new. You will not have data because not enough time would have passed."]}),"\n",(0,n.jsx)(s.h2,{id:"global-details",children:"Global Details"}),"\n",(0,n.jsxs)(s.p,{children:["If you click on ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"View details"})})," button, you will be redirected to global details view. In here you will be able to see more statistics and filter your issues."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"View details button",src:i(7543).Z+"",width:"190",height:"57"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 7:"})," ",(0,n.jsx)(s.em,{children:"View details button."})]})}),"\n",(0,n.jsx)(s.p,{children:"The first thing you will notice is that you will see again your mermaid graph representation of your chain. You can toggle it and also zoom in by clicking on the graph."}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsxs)(s.p,{children:["If you see something in the mermaid graph like ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:'"Max size exceeded"'})})," do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation."]})}),"\n",(0,n.jsx)(s.h3,{id:"issue-filtering",children:"Issue filtering"}),"\n",(0,n.jsx)(s.p,{children:"You will also see a component that contains all the filtering possibilities that Lucid chain offers. You can use these parameters for filtering as you please. Let's see what they do."}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Issue filter component",src:i(7551).Z+"",width:"1405",height:"262"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 8:"})," ",(0,n.jsx)(s.em,{children:"Issue filters component."})]})}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsx)(s.p,{children:"All these filters have effects in issue table and TTO and TTR pie charts, as only filtered information will be taken into account."})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"For a better filtering and more precission, you can use all these parameters at the same time."})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"From:"})})})," This parameter filters issues by its creation date. You will display issues only created defore this Date. By default its value is ",(0,n.jsx)(s.em,{children:"Null"}),", which does not filter anything."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"To:"})})})," This parameter filters issues by its creation date. You will display issues only created after this Date. By default its value is ",(0,n.jsx)(s.em,{children:"Null"}),", which does not filter anything."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TTO over:"})})})," This parameter filters issues by its TTO. You will display only issues with a TTO value greater that the specified value. By default its value is ",(0,n.jsx)(s.em,{children:"0"}),", which does not filter anything."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TTR over:"})})})," This parameter filters issues by its TTR. You will display only issues with a TTR value greater that the specified value. By default its value is ",(0,n.jsx)(s.em,{children:"0"}),", which does not filter anything."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Ticket type:"})})})," This parameter filters issues by its type. In ITop you will be able to distinguish between Incident and User Requests. In Redmine is much more usefull because  you will filter issues by tracker. By default its value is ",(0,n.jsx)(s.em,{children:"All"}),", which does not filter anything."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Status:"})})})," This parameter filters issues by its state. This can make obtain only open or closed issues. By default its value is ",(0,n.jsx)(s.em,{children:"All"}),", which does not filter anything."]}),"\n"]}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsxs)(s.p,{children:["Once you have decided you filter values do not forget to click in ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"filter"})})," button in order to apply changes."]})}),"\n",(0,n.jsx)(s.h3,{id:"issue-table",children:"Issue table"}),"\n",(0,n.jsx)(s.p,{children:"You will see below that filtering component a big table with a list of issues. Initially it contains all existings issues in your tool."}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Issue table",src:i(1851).Z+"",width:"867",height:"301"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 9:"})," ",(0,n.jsx)(s.em,{children:"Issue table with only one issue."})]})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"If you click in any issue, Lucid chain will redirect you exactly to the link of it in your ITop or Redmine in a new page in your browser."})}),"\n",(0,n.jsx)(s.p,{children:"If any issues are shown, you will be able to see a lot of information about them. You will see some columns:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Issue:"})})})," This column contains issue id, title, the person assigned to it, its type and its creation date."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TTO:"})})})," This column contains the issue TTO. If TTO does not pass SLA, the exceding time will be shown below as ",(0,n.jsx)(s.em,{children:'"+ X h"'})," in hours."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TTR:"})})})," This column contains the issue TTR. If TTR does not pass SLA, the exceding time will be shown below as ",(0,n.jsx)(s.em,{children:'"+ X h"'})," in hours."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("u",{children:(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"TOTAL:"})})})," This column contains the sum of issue TTO and TTR. If any of does not pass the SLA, exceding time will be shown below as ",(0,n.jsx)(s.em,{children:'"+ Xh"'})," in hours."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"pie-charts",children:"Pie charts"}),"\n",(0,n.jsx)(s.p,{children:"In addition to the isssue table, you also have in the right two piecharts who show the percentage of issues passing TTO and TTR respectively. Understanding that percentages are calculated depending on the issues filtered is very important."}),"\n",(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"},children:[(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Ideal TTO pie chart",src:i(5332).Z+"",width:"565",height:"617"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 10:"})," ",(0,n.jsx)(s.em,{children:"Ideal situation where all issues pass TTO."})]})}),(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Ideal TTR pie chart",src:i(6288).Z+"",width:"580",height:"617"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 11:"})," ",(0,n.jsx)(s.em,{children:"Ideal situation where all issues pass TTR."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"service-details",children:"Service Details"}),"\n",(0,n.jsxs)(s.p,{children:["If you want to have a better look in some service's metrics, you have to go to ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#global-overview",children:"Global Overwivew"})})})," page and select in the ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"#organizations",children:"Organizations"})})})," component the organization and team that you want to analyse. Once you have toggled the team, you have to click in ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"View details"})})," button."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"View service details",src:i(2504).Z+"",width:"987",height:"432"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Figure 12:"})," ",(0,n.jsx)(s.em,{children:"View service details button."})]})}),"\n",(0,n.jsxs)(s.p,{children:["You will be redirected to a page identical to ",(0,n.jsx)(s.a,{href:"#global-details",children:"Global details"}),". The difference here is that in the mermaid you will have the service highlighted in purple and the title will be ",(0,n.jsx)(s.em,{children:"Service X Details"}),", being X the name of the selected service. The last difference is that the issues shown here will only belong to the selected service."]}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsxs)(s.p,{children:["Here you will have the same features as in ",(0,n.jsx)(s.a,{href:"#global-details",children:"Global details"}),", so we strongly recommend checking that section and learn how you can use it."]})}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.p,{children:"If your service has no issues, you will not be able to access into this page."})})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},3839:(e,s,i)=>{i.d(s,{Z:()=>t});var n=i(5893);function t(e){let{children:s}=e;return(0,n.jsxs)("div",{style:{padding:"12px",backgroundColor:"#ffe6e6",borderLeft:"5px solid #d9534f",color:"#a94442",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",s]})}},6905:(e,s,i)=>{i.d(s,{Z:()=>t});var n=i(5893);function t(e){let{children:s}=e;return(0,n.jsxs)("div",{style:{padding:"10px",backgroundColor:"#fffae6",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,n.jsx)("strong",{children:"Disclaimer:"})," ",s]})}},1871:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/OrganizationComponent-01e9663d887df3e2b621b145f3bd90a0.png"},3819:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/SLAPieChartIdealSituation-2d1680f2b8283c193b85f1c3309f3f5d.png"},5332:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/TTOChart-a4d707f2d188f954d51921212afddb12.png"},6288:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/TTRChart-e7e712ec1ecd04f007c39d87c9a6da7f.png"},4924:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/issueBarchart-c93035084ec8c15deef4b23eb379a7f4.png"},1851:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/issueTable-8d93eb0afe3cd13a1f702eb3f78efaa6.png"},473:(e,s,i)=>{i.d(s,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPMAAAB/CAYAAACKXYceAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABUfSURBVHhe7d3fa1dnngfwj9NlZ2cHhu3uMCxFm27STYm6dzNzI1QRYr2IGuhfoOQitGAKxVz4B3gREarQkotg/4KCP3LRVhAreDOdpQxUg9JIrc7FzM5OoVtmbJnWPb++35xzvj8T25ozeb3gizm/z3nO8ebN83mebQ+/+vpRAAAAAACb3o+KfwEAAACATU6YBwAAAAANIcwDAAAAgIYQ5gEAAABAQwjzAAAAAKAhhHkAAAAA0BDCPAAAAABoCGEeAAAAADTEtodfff2o+Htdvvnmm7j36afx+ed/jkePNnQKAAAAANgStm3bFk8//a8x8txz8dRTTxVr12/DYd7d1dX4yU/+KZ599tn40Y908AMAAACAXr799tv47LPP4q9/fRijY2PF2vXbcAqX9sgT5AEAAADAYGmGlmZpaab2ODacxKWltYI8AAAAABhOmqU97nB10jgAAAAAaAhhHgAAAAA0hDAPAAAAABpCmAcAAAAADSHMAwAAAICGEOYBAAAAQEMI8wAAAACgIYR5AAAAANAQwjwAAAAAKPnbH27Hf3/4u/j0/4oVm4gwDwAAAABK/vynP8dfHn4Rn/9PsWITebJh3tX5GB3fWf3NXy82Po7r8VpyrteuFovdZNeej2vF4mZwf+nl5J5ejqV7xYqN6NKmfdvhB/Mglo5slnsZVn7P5W/y2nypbY+8HfeL9R3S99CxPf0uq+83O1+/8wAAAACUPPmeeRMn4oM7t+Ju9ns/Tt6e/Y4Cvc2uM9zaMfNO0gbvxMxIsWKdsmBodjVOXmm1Z/K7ciJWZ3fGoaUHxV4M6/7SXJx6YTHuLrxYLL8cx26vfa/nXzgde7t+q8m7Pbsch+eOxo5iTR4CzsalYrll30LyzcfpONOokBMAAAB4UjZZme32mDl3InZdWN5UPeYa4ep8HLswFefrYeDI0bh85UTEwtzj9fjbch7Ee5cjTr6aB3lpr7ozC8nyubWAbt+r6bd6trNd712JiytTMb0/X1wLARfjcL6qJPnm56bi0lm98wAAAIDBNumYeavxSRaQtMpl83/LZbGVcsdsn2JDRVEmWewzqHda9ZzlEtz8PIeWrpfOV5RLlsta6+WStZLX9vXvvR2Hxg/EqZWIS7P1c9VKf7N9187Rq9fitXeXY9f88dhXLFeMHI3Xp1fi1JvFsa3rVM7dpby3du1y+2Ulwenz9nv+AfKy4tb5y9dvve/iVzxz+5rZUiG9fm1d7/eYqL2TnmW/aSAXU/FSKxi9t5p8lWPxfCUonYwjEyvx8WqxXLh/ZTluTk+130XW4/LiWgjYYf9UHF5Zjvfq7Q8AAAB87/7y+9vxu48+io9Kv/tffptte/i/1fUf/W4lHjzhSTE2X5i3uhI3a6HJpdnlmM5KGxdiXxGsHYvFjlLSejBzaXYu4lyxz53FGFs40DPQSwOg8jk/mF+NY7WQ6ObC2fb5zqfh2OTOGD07UZRdLsbhldPxSun8196NOF+cL73Hdu+4tLdcWlI8EXF4Md3eo7Q2DdMmT8dYtk/6S44ZL7ZVPIhPbkeMjW4vljvtOzgVcXu19DzLcex4xFut+1scS56nFKhl116OI+2S3bz9Km2cPO/ed6fa2+vP39fV+di7MLbWPovJ/WXS9zsbq/PvF+ft9czd9X2P6TOVy5CTd7I7O6pTFsi9MLYWwKXf5cRE8mUOUvTga/foG8Zo7O4SCgIAAADfvz/88Y/xxZdfxpel31++zsO8vz2srv/yiz/F7+//Kdv2pGyyMO96vDbb2cOssnz1XJxamYrzxThmmZGj8db8RFx6t9prbdf82VJI9mK8nuxz8/KVas+u1L2340xaolo6546ZuY7eUuXzZSWWMVEquyzOf+dutpTat5CGj4Uevbj6ufbm6Yj59+ONolwzK8mc6RYS3Y2PVyZi9+CkqaR874n9x+Nkcn8Xr+RhXH7tzvartnG5zTqff6ByOLb/aCXQXAsmez1zF0O9x1JQnHw3M+227bRrfLT4q7/Vu6UA8+pyXJoo9egbyvZ4/oXaeQAAAIAfxH/sfCGee+aZeKb0+/lP88jsH/+luv6Zkf+M/xr/ebbtSXnyYV7au6td9jgbsXgrLs9Ue5iVe5zdv7taDYEKO0aTNZWeZ5091bJ9usl6Ay7HsVL5ZT5ZwaDwrVZ22aFc5puX1Q7vely40PkMva23Z1f93vNAKZf39Lu5cKDUHjtj70LyAOU27tZTrfYOespKS/N3X+1RuT1eOjSRlx+vs2x34HvMAtV8+6CS69U7w7+s8jvKyp0PTfYuqQUAAAA2lx//InaMjcVY6fdvPy7CvJ9W1489++/xz/+QbXpinnyYV5nN9lapF1of5fLH70w6ecTafazrfrpJSzrHD8TFQ6Vy0Yli29CG7W33YkxP9+/ZtZGQaVe71LX06zf227q8GG+k5ytKpMtj2+Wz+hazxQ4RvFX1e4/bY+ZiupyXDHcdJ7AwNl57WWMTsWtlJfrnpWkAOxWv18JoAAAAgO/KJiuzHSzrXddlttusx96AkK/nPmlQ055047uRT4Kw2NHLcHj5OGqtstdB0jHxbi6c62iXTFZ+OhFHJvvdS3ncvbyX3rpKZjcqGz8wHYNwOc7UQrt9C7eKsQbz5+rWszJ7py1Dv8c8SPxgPtYmBemi8vwjYzFWP3fHrLVn41Jp4ovhDR7zEAAAACDVuDAvH9ttOY6VZ3W993a80mXSgUuzpZlMe+yTGSlmez1eLut8EEvz6yzzLKmHjveX5rqW2fbuTbc9ZubSgK6YNCOT3NNSj/Bp/0IWiB3rNhvuZH38u1S1DbP7ixPxehFMZWMCXpitlsBene89++s63V+arzxXGmblrsdr5Xeblc4Wst5xp+NM6x6yd1pq1EHvsXb//Uppd0xOxa5KyXDa+7F67nxcwdZ4jg/ivcsrcfjgkOP7VWxkzEMAAABgK2pemJeVSr4fJ2/Pro2Lls262jkj7OHFqbjQ3iedFbbHrLGJfQvJOaM8ft+B+PjgY5SUtsO1/HyvxFytzLYV1vUp90zOkc8yu3ZPF6P3pAxZT7bFqI4ZV8xI29lDcCrOH1xu75fNLFsuoU17zCXtl41d1zrX2Yl22Pe4diSPUXmuQ+8X9zgau8vvdjadEbiYSCS5p2yik9Y9pbPxtmfBzfV9j2MTRUlv/stmvS1PpFKWjq8X1QlQ0vZtlf62jm+3a9pLrxSGrsuGJs0AAAAAvi+/eHYktj/zXOx4tlixiWx7+NXXj4q/1+W3H/4m9uzZUyzRKFfnqyEZXd1fejn23pnrHfiVXJvfGWfGW4HkeqSTpByIj+ceY3xGAAAAoDFu3LgRv/zVr4ul9Wtgzzz4YeyYOZv3AC2X/XaVTnwxaEzC7q7NH6iUNwMAAAD0o2feVqRnHgAAAMAToWce65eOxSfIAwAAAGgcYR4AAAAANIQwDwAAAAAaQpgHAAAAAA0hzAMAAACAhhDmAQAAAEBDCPMAAAAAoCGEeQAAAADQEMI8AAAAAGgIYR4AAAAANMS2h199/aj4e11+++Fv4mc/+1mxBAAAAAAM8sUXX8Qvf/XrYmn9HivM27NnT7EEAAAAAAxy48aNxwrzlNkCAAAAQEMI8wAAAACgIYR5AAAAANAQwjwAAAAAaAhhHgAAAAA0hDAPAAAAABpCmAcAAAAADSHMAwAAAICGEOYBAAAAQEMI8wAAAACgIYR5AAAAANAQwjwAAAAAaAhhHgAAAAA0hDAPAAAAABpCmAcAAAAADSHMAwAAAICGEOYBAAAAQEMI8wAAAACgIYR5AAAAANAQwjwAAAAAaAhhHgAAAAA0hDAPAAAAABpCmAcAAAAADSHMAwAAAICGEOYBAAAAQEMI8wAAAACgIYR5AAAAANAQwjwAAAAAaAhhHgBsFffejkPjO2N0/nqxouxBLB3ZGa9dLRY3m6vzMTo+H9eKxW7uL70co0fejvvF8maQ3dP4y7F0r1jxd+DafPINDXgX9NH6f5j8nuj/t+w+vEcAaCJhHgBsNRdmN29o12jX47VacLdj5p24e+edmBkpVvwd2LdwK3mmhdhXLLMeyTcyeTrGFtM2vBVv7C9WAwCsgzAPALaUqTg5PxGXZvXIgSdjInaPFX8CAGyAMA8AtpjnZ87GyYnlONa13LYqL6lc+/Xv0Zf2TEv3yUt2W8ccWnpQbE+0ymWzf5PtpXsY6lqlEsVhyler5ywHmK17zf8tb89LY4t19TZq3Xfxaz9btn42LsVKnJpcO1e38uDK+ZNfvzat71tpy6I0Ol1Xec6O91p9H5VS5Nb9Vdq1er919XLm6j2W30m5bZNfcV/14zPpfdTW9X53/a5Z0nHOoh3K7VPfJ2uP1nnL76bV1teLtixds+cxNVkbd/lGEn2//ey4+jOmbbu2rt2m5Xupt3H9/85qsR4AaBxhHgBsOdtj5tyJ2HXhbPcQJJOHF8diMSsHzH5XTsTqbP/wKXVpdi7iXHHMncUYWzhQC6GW49i7U/n2hReT5WGvlRx3POKt1j6LY3FqskeQk0gDkvI5P5hfjWO1gOPS7HJMZ9vfzwPO8Z2x985c+x521UqSr70bcb44X7o9Fuby6+9fSNYtxuGYiJNX0u3dy1DT0GXvwljlHLuLbXXp/e+9PBUftPbt2pYRN5N1Fw629kme4/ZsKbBK2/ZAXDz0frH9Vpx/4XTsrQR+5XYt2qEjEOzh6nz1eRanig3pdWdjdb513eS848WmIfR9dz2vWbN/Kg6vLMd77e/jbny8kvxze7X9Ddy/uxrxwljsSBfSIGy2+n5XZ6vf182Fs8W3XZROD3FM28jRuNzxjWz8/1mHleS9tv5fpddJll9pfStpkFcq7717J3mOs6fjZr4VAGgYYR4AbEUjR+Ot+YhTx2u9d1qunotTK1NxPgvbCtkxE3Hp3f5Bz675s6Ux4l6M15Njbl6+UrrORJx8tXTeoa+VHHfuaB68pPYfj5MTK3HxSjXcytx7O85cqJ5zx8xcLdyJOLzYCt22x8xcGgqVjknu4fXpiNW7a+fft1AK6UYm40hy/Y+H7uF0Pc4sRJy8Uj7H0ZjpNm5adv+1503a8o3FqVpbJqYXS2OvFc9xYbnoGZi0bZyIt2a2Z1tT+15NQ8pie6Z8neL4UuA10MREtKtG9yfPUxofcGy0dd3kvDOl99vPMO+uzzXXjMbu8vdxdTkuTZcDvgfx3uWVOHwwvc6DWDq7XPoeEtn7r31f03Olaw15TD+P8f+sU/k8xf+7O3ezpWtvno6b9e8kDfSLJQCgWYR5ALBF5QFJqfdOSdZjqRyYFHaMJmsGBD1rAU4uO6ZiLJ4vhS/DX6t6XBpIPP9C8Wfd6krcTHuctcsK019e4tg3fOtyH1V5T6r8fAfiVNrTa1hpmNTxDD1k999l37GJ2LWyEuVH2DU+WvxVSPcp/szaNu2xVW6HybRH1mp80g41u1yndo2est5v+fmrPcm2x0uH0rEZk+vVyz0HGfTuel6zLr+HdqD17nIcPrgQ09OtbyDtqTcV01nAlffay+63dN1jF6J9fKra1sMd08/j/D/r0O3bzc7xID653eU7AQAaS5gHAFtW0dNr4Vz3MdJa5Yc/hO/lWlNr5Y+l34ZnEM3GHCuXrKYlqcW2YQ0MC0vWs28/EydKpbqt33c1w27yDaXnK0pDy+PA5TP5FmW94/Xx/gbp9+56X7Nux+RU0Qvxely4kAd3Y+NFr7c0XK218eF2GWrpV+4118VGjqn4gf6f1UN2AKC5hHkAsJXtX4jz0+kYaVeKFbmsZ1ClFDNXGWNsSIOO2fi18h5HXUOKrHdauffZ47t/ZTkrVbxcKlldl6xXXbXMt6de+6a91gaFfKV9srYdtpfd4xhJx4O7lX1LZ2qh3b6FW1nwFkVonN1TTfauW4Z9d32u2TYylrRDcq6rq7E6PZWVw2YB3+3VuJZcc9ehyeL7Sktyk6YrlVQPtpFjqob69rNnqLmXPE/x52B5D9aOst2sByQA0ETCPADY4vIx1E5XS0az8ehqEyHcezteScd8K49318Wl2VJPqWGOGfpa1X3uL81l48G93q2nXTF2WXVMwAexNL/Oks+SevCSXb+jzLZPGW+3e0qec6lbqWjX+78er80ux+G58jh66aQMxSQcmdo+3do23WfYCS4GuL80X7p2Hq7matcoB0dZUHk6zrSeO3vXpYYc8O56X7ObF7Oy2lOzpyNaZabpWIdxOo4l39eRydKYfnNpL9VyW9avVbeRY2qG+vbzsf9OvdnaJ2mL4+ubvGLfwXQcxfKEN/l3AgA0kzAPALa6kXzA/artMXOxmBm1NR7Y5HIcuTK4PPPw4lRcaB+TzqA56JhhrzUV5w8ut/fJZjS9WA22yvYtJOeM8nhxB+Ljg733H6jVi7E43ysxVyuzzScdyMdQ6176mfZSa5Wdtp6zVze7jn3HZyMWO8uEd83PRRxf2yedQbYy0cHFxTh8odS242dj94BAdlg7RiNOTbbOm5cg5z0XR2N3+X1mM74WE0UU31t7rLl0Jt3ajLT93l3va3aXBVkxUQnusrEWJ6bipfL3lbzfD9JJYdrnTmc2nur/7W7kmIphvv1kn2z26dY+6WzR6ay465DOtpzN/ty6z+WYvmICDABoqm0Pv/r6UfH3uvz2w9/Enj17iiUAgOvxWo/Aie9DOhnH4DALAIDN5caNG/HLX/26WFo/PfMAAAAAoCGEeQAAAADQEMpsAQAAAOAHoswWAAAAALYIYR4AAAAANIQwDwAAAAAaQpgHAAAAAA0hzAMAAACAhhDmAQAAAEBDCPMAAAAAoCGEeQAAAADQEMI8AAAAAGgIYR4AAAAANIQwDwAAAAAaQpgHAAAAAA0hzAMAAACAhhDmAQAAAEBDCPMAAAAAoCGEeQAAAADQEMI8AAAAAGgIYR4AAAAANIQwDwAAAAAaQpgHAAAAAA0hzAMAAACAhhDmAQAAAEBDbDjM27ZtW3z77bfFEgAAAADQT5qlpZna49hwmPf00/8an332mUAPAAAAAAZIM7Q0S0sztcex7eFXXz8q/l6Xb775Ju59+ml8/vmf49GjDZ0CAAAAALaEtEdeGuSNPPdcPPXUU8Xa9dtwmAcAAAAA/LBMgAEAAAAADSHMAwAAAICGEOYBAAAAQEMI8wAAAACgIYR5AAAAANAQwjwAAAAAaAhhHgAAAAA0hDAPAAAAABpCmAcAAAAAjRDx/3hU2mgr1uphAAAAAElFTkSuQmCC"},7551:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/ticketFilters-00624bc0acb5859300184e3c4a6bd472.png"},7543:(e,s,i)=>{i.d(s,{Z:()=>n});const n="data:image/png;base64,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"},2504:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/viewServiceDetails-40c42a0a26bfeb15591fd24286b0e61c.png"},5126:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/chainTypeModal-45a06c299a228f5a78db044d1cf9699c.png"},1112:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/featuresModal-a7094524b0347dd7fa03d5daab3df10c.png"},1151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>r});var n=i(7294);const t={},a=n.createContext(t);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);