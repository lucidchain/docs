---
tags:
  - lucid-chain
  - service-chain
  - synchronization
  - configuration
  - update
  - yaml
  - SCModel
  - transactional
  - features
keywords:
  - service chain synchronization
  - redmine synchronization
  - itop synchronization
  - update service chain
  - yaml import
  - SCModel configuration
  - Lucid chain synchronization
  - mermaid graph
  - chain import
  - configuration update
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Synchronizating a service chain

import Alert from '@site/src/components/Alert.js';
import Disclaimer from '@site/src/components/Disclaimer.js';
import LogInRequired from '@site/src/components/LoginRequired.js'

<LogInRequired/>

In this section you will learn how to synchronize your current service chain in ITop and/or Redmine.

## What is synchronization

We call service chain synchronization to the process of updaating your current service chain. In order to keep all the data, your current service chain will be marked as **DEPRECATED** and it will be substituted by the updated one. This way you can keep all the issues and other configurations without losing the oportunity to add new things to your service chain.

<Disclaimer>
This is not a definitive solution and we are working to improve it soon. Lucid chain actually renames everything with the prefix *"_DEPRECATED_"* and adds the synchronization date. Then it creates a new service chain using the synchronization yaml. In future versions this will be more complex.
</Disclaimer>

:::important
  ## <u>Conditions to synchronize</u>

+ A current service chain **must** exist in your Redmine/ITop.

+ Both chains **must** have at least one difference.

+ Your service chain **cannot** have suborganizations. This type of service chains must be translated in order to be supported.

+ Both chains **must** have the same id.

+ Both chains **must** have different versions.

+ You **cannot** change ownership-type.

+ Both chains **must** have the same service-chain-type.

+ Both chains **must** be valid and follow SCModel.

:::

## Choosing the target and selecting synchronization

If you want to synchronice your current service chain in Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting ***Synchronize*** option in the modal.

<div align="center">
![Features modal](/img/mysc/featuresModal.png)  
**Figure 1:** *Lucid chain available features modal.*
</div>

## Chain synchronization

You will be redirected to synchronization page. You will be asked about choosing your service chain type. This will make Lucid chain export your current chain and showing it to you. You will be able to see your current chain represented in a mermaid grpah.

<div align="center">
![Chain type modal](/img/mysc/chainTypeModal.png)  
**Figure 2:** *Service chain type modal.*
</div>

If everything goes right, a message like ***"Service chain retrieved. Select a file to start syncronization Current service chain"*** will be displayed. You can upload a yaml file with your service chain configured following SCModel. If any validations errors are present, you will receive a message explaining them and usually also giving its location.
If you want to know more about these yaml files or SCModels, we recomend checking [creating my service chain](../Creating%20my%20service%20chain/Creating%20my%20service%20chain.md) section.

<div align="center">
![Validation errors 1](/img/import/validationErrors1.png)  
**Figure 3:** *Example of indentation errors.*
</div>

<div align="center">
![Validation errors 2](/img/import/validationErrors2.png)  
**Figure 4:** *Example of SCModel validation errors.*
</div>

<div align="center">
![Validation errors 3](/img/sync/synchronizationErrors.png)  
**Figure 5:** *Example of Synchronization errors.*
</div>

<Alert>
Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed.
</Alert>

Once you have selected a valid file, you can see a mermaid graph representing your service chain. You can toggle this mermaid too and also zoom in by clicking on the graph. You can also see some synchronization imformation about how many organizations, teams and service you are going to import.

<div align="center">
![Import information](/img/import/importInfo.png)  
**Figure 6:** *Import information summary.*
</div>

<Alert>
If you see something in the mermaids graphs like ***"Max size exceeded"*** do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation.
</Alert>

Now you will be able to see a lot of infromation. You can see both current and uploaded service chain simultaneously and a merged service chain with all the information. You can also see a ***Show detailed differences*** button. If you click on it, a detailed list of changes made to your service chain will be displayed. In every section, you can click and toggle information knowing which things have been deleted and added. You can click ***Hide differences*** to close this part of the screen.

<div align="center">
![Differences button](/img/sync/differencesButton.png)  
**Figure 7:** *Differences button.*
</div>

If everything looks good, click the ***Syncrhonize*** button and Lucid chain will start the process. If anything goes wrong during it, any object created or modified in between will be deleted. This is because **Lucid chain synchronization is transactional**.

<Disclaimer>
Please be sure about what you are going to do, and do not forget yo click ***Before sync***
button for having further information.
</Disclaimer>

<div align="center">
![Synchronization progress](/img/sync/synchronizing.png)  
**Figure 8:** *Synchronization progress.*
</div>

Once you have clicked the button and you have waited, you will see a message saying that everything was synchronized.

<u>**NOTE:**</u> Please be patient because synchronizations in ITop can be very slow.

<div align="center">
![Synchronization finished](/img/sync/synchronizationSuccessful.png)  
**Figure 9:** *Synchronization result.*
</div>
