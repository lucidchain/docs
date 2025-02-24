# Metrics

import Alert from '@site/src/components/Alert.js';
import Disclaimer from '@site/src/components/Disclaimer.js';

In this section you will learn about Lucid chain SLA metrics and how to interpret them.

<Alert>
Take into account that in ITop TTR is defined as the time between **issue creation** and **issue resolution**. This **differs** from Lucid chain TTR definition. It is also important to remember that ***ownership-type state+team is not supported in ITop*** because Itop does not allow to assign and issue to a group without assining it to a user at the same time. We are very sorry for that but nothing can be done as we cannot modify your ITop in order to do this.
</Alert>

<Disclaimer>
Please be patient because all metrics pages can be slow if you have a lot of issues and/or your service chain is very big.
</Disclaimer>

## Choosing the target and selecting Metrics

If you want to analyse your SLA metrics of your current service chain in Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting ***Get SLA Metrics*** option in the modal.

<div align="center">
![Features modal](./../../../static/img/mysc/featuresModal.png)  
**Figure 1:** *Lucid Chain available features modal.*
</div>

## Global Overview

You will be redirected to global overview page. You will be asked about choosing your service chain type. This will make Lucid Chain export your current chain and showing it to you. You will be able to see your current chain represented in a mermaid grpah. You can toggle the mermaid and also zoom in by clicking on the graph. You can also see some import imformation about how many organizations, teams and service you are going to import.

<div align="center">
![Chain type modal](./../../../static/img/mysc/chainTypeModal.png)  
**Figure 2:** *Service chain type modal.*
</div>

<Alert>
If you see something in the mermaid graph like ***"Max size exceeded"*** do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation.
</Alert>

### Organizations

In this view you will be able to see a lot of overall information. In addition of your service chain, which you can toggle, you will also see a component named Organizations.

It is a list of your service chain organizations. You can toggle each one by clicking in its name. This will display all the teams it has. You can also toggle them by clicking on them. If no data is retrieved, this means that there are no issues associated with that team. In other case, you will see a progress bar showing TTO and TTR passed percentage and how many issues from the total issues of this team are passing the SLA defined in your yaml.

<Disclaimer>
When we say that an issue has passed SLA, it means that this issue's TTO and TTR have valid values according to the service chain model described in the yaml and imported in your tool.
</Disclaimer>

<div align="center">
![Organizations component](./../../../static/img/metrics/OrganizationComponent.png)  
**Figure 3:** *Basic example of organization component.*
</div>

### Problematic open issues

If you scroll down you will be able to see a rectagle that says ***Problematic open issues  (X/Y)***, where X is the total number of problematic open issues, and the Y is the total number of open issues. You can click on it in order to toggle it and see the table.Here you can see all the open issues whose TTOs and/or TTRs have been exceded. The ideal situation is an empty table (Figure 4).

<div align="center">
![Ideal problematic open issues table](./../../../static/img/metrics/problematicOpenIssues.png)  
**Figure 4:** *Ideal situation where there are not problematic open issues.*
</div>

:::tip
If you click in any issue, Lucid chain will redirect you exactly to the link of it in your ITop or Redmine in a new page in your browser.
:::

If any issues are shown, you will be able to see a lot of information about them. You will see some columns:

+ <u>***Issue:***</u> This column contains issue id, title, the person assigned to it, its type and its creation date.

+ <u>***TTO:***</u> This column contains the issue TTO. If TTO does not pass SLA, the exceding time will be shown below as *"+ X h"* in hours.

+ <u>***TTR:***</u> This column contains the issue TTR. If TTR does not pass SLA, the exceding time will be shown below as *"+ X h"* in hours.

+ <u>***TOTAL:***</u> This column contains the sum of issue TTO and TTR. If any of does not pass the SLA, exceding time will be shown below as *"+ Xh"* in hours.

+ <u>***STATE:***</u> This column shows the current state of the issue. This is very usefull for service chain type state because you can kwno the service associated with it instantly.

### SLA passed pie chart

If you go to the bottom, you will see some graphics. Now we are going to talk about these two pie charts.

The big pie chart contains a representation of the total TTO and TTR passed percentage of the issues of this month. Once you have your cursor in the pie chart, it will show you the exact values with two decimals. The other one, which is smaller, represents the same but taking into account the total percentage of issues that have passed TTO and TTR.

<Disclaimer>
This pie charts only take into account closed issues. Moreover, if a issue is closed while whatching this page and you do not reload it, data will not be updated.
</Disclaimer>

<div align="center">
![Global passed SLA graphics](./../../../static/img/metrics/SLAPieChartIdealSituation.png)  
**Figure 5:** *Ideal situation where there all issues pass SLA.*
</div>

### SLA passed last 6 months bar chart

The right part of the bottom charts is a bar chart which represents the percentage of issues that passed TTO and TTR in the last six months. In each month, you can analyse TTO and TTR separately, and you can see one progress bar for each property. Moving the cursos in them will show you the exact number. You can also see the exact percentage in the begining of each progress bar. If there are no bars, it means that there are not issues in that month.

<Disclaimer>
This bar chart takes into account closed issues. Moreover, if a issue is closed while whatching this page and you do not reload it, data will not be updated.
</Disclaimer>

<div align="center">
![Issue bar chart](./../../../static/img/metrics/issueBarchart.png)  
**Figure 6:** *Ideal situation where there all issues pass SLA.*
</div>

<u>**NOTE:**</u> See how in Figure 6 there are a lot of 0% due to the lack of issues in the past months. This can also appear when you start to use Lucid Chain metrics and your service chain is new. You will not have data because not enough time would have passed.

## Global Details

If you click on ***View details*** button, you will be redirected to global details view. In here you will be able to see more statistics and filter your issues.

<div align="center">
![View details button](./../../../static/img/metrics/viewDetailsButton.png)  
**Figure 7:** *View details button.*
</div>

The first thing you will notice is that you will see again your mermaid graph representation of your chain. You can toggle it and also zoom in by clicking on the graph.

<Alert>
If you see something in the mermaid graph like ***"Max size exceeded"*** do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation.
</Alert>

### Issue filtering

You will also see a component that contains all the filtering possibilities that Lucid chain offers. You can use these parameters for filtering as you please. Let's see what they do.

<div align="center">
![Issue filter component](./../../../static/img/metrics/ticketFilters.png)  
**Figure 8:** *Issue filters component.*
</div>

:::important
All these filters have effects in issue table and TTO and TTR pie charts, as only filtered information will be taken into account.
:::

:::tip
For a better filtering and more precission, you can use all these parameters at the same time.
:::

+ <u>***From:***</u> This parameter filters issues by its creation date. You will display issues only created defore this Date. By default its value is *Null*, which does not filter anything.
+ <u>***To:***</u> This parameter filters issues by its creation date. You will display issues only created after this Date. By default its value is *Null*, which does not filter anything.
+ <u>***TTO over:***</u> This parameter filters issues by its TTO. You will display only issues with a TTO value greater that the specified value. By default its value is *0*, which does not filter anything.
+ <u>***TTR over:***</u> This parameter filters issues by its TTR. You will display only issues with a TTR value greater that the specified value. By default its value is *0*, which does not filter anything.
+ <u>***Ticket type:***</u> This parameter filters issues by its type. In ITop you will be able to distinguish between Incident and User Requests. In Redmine is much more usefull because  you will filter issues by tracker. By default its value is *All*, which does not filter anything.
+ <u>***Status:***</u> This parameter filters issues by its state. This can make obtain only open or closed issues. By default its value is *All*, which does not filter anything.

<Disclaimer>
Once you have decided you filter values do not forget to click in ***filter*** button in order to apply changes.
</Disclaimer>

### Issue table

You will see below that filtering component a big table with a list of issues. Initially it contains all existings issues in your tool.

<div align="center">
![Issue table](./../../../static/img/metrics/issueTable.png)  
**Figure 9:** *Issue table with only one issue.*
</div>

:::tip
If you click in any issue, Lucid chain will redirect you exactly to the link of it in your ITop or Redmine in a new page in your browser.
:::

If any issues are shown, you will be able to see a lot of information about them. You will see some columns:

+ <u>***Issue:***</u> This column contains issue id, title, the person assigned to it, its type and its creation date.

+ <u>***TTO:***</u> This column contains the issue TTO. If TTO does not pass SLA, the exceding time will be shown below as *"+ X h"* in hours.

+ <u>***TTR:***</u> This column contains the issue TTR. If TTR does not pass SLA, the exceding time will be shown below as *"+ X h"* in hours.

+ <u>***TOTAL:***</u> This column contains the sum of issue TTO and TTR. If any of does not pass the SLA, exceding time will be shown below as *"+ Xh"* in hours.

### Pie charts

In addition to the isssue table, you also have in the right two piecharts who show the percentage of issues passing TTO and TTR respectively. Understanding that percentages are calculated depending on the issues filtered is very important.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
<div align="center">
![Ideal TTO pie chart](./../../../static/img/metrics/TTOChart.png)  
**Figure 10:** *Ideal situation where all issues pass TTO.*
</div>

<div align="center">
![Ideal TTR pie chart](./../../../static/img/metrics/TTRChart.png)  
**Figure 11:** *Ideal situation where all issues pass TTR.*
</div>

</div>

## Service Details

If you want to have a better look in some service's metrics, you have to go to ***[Global Overwivew](#global-overview)*** page and select in the ***[Organizations](#organizations)*** component the organization and team that you want to analyse. Once you have toggled the team, you have to click in ***View details*** button.

<div align="center">
![View service details](./../../../static/img/metrics/viewServiceDetails.png)  
**Figure 12:** *View service details button.*
</div>

You will be redirected to a page identical to [Global details](#global-details). The difference here is that in the mermaid you will have the service highlighted in purple and the title will be *Service X Details*, being X the name of the selected service. The last difference is that the issues shown here will only belong to the selected service.

:::important
Here you will have the same features as in [Global details](#global-details), so we strongly recommend checking that section and learn how you can use it.
:::

<Disclaimer>
If your service has no issues, you will not be able to access into this page.
</Disclaimer>
