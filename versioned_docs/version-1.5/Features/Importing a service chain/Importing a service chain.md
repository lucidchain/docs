---
tags:
  - lucid-chain
  - service-chain
  - YAML
  - SCModel
  - mermaid
  - validation
  - transactional
  - features
keywords:
  - import service chain
  - Redmine import
  - ITop import
  - YAML import
  - SCModel validation
  - service chain issues
  - mermaid graph
  - import tutorial
  - transactional import
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Importing a service chain

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';
import LogInRequired from '@site/src/components/LogInRequired.js'

<LogInRequired/>

In this section you will learn how to import in ITop and/or Redmine your service chain.

## Choosing the target and selecting importation

If you want to import your service chain into Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting ***import*** option in the modal.

<div align="center">
![Features modal](/img/mysc/featuresModal.png)  
**Figure 1:** *Lucid chain available features modal.*
</div>

## Chain importation

You will be redirected to import page. There you can upload a yaml file with your service chain configured following SCModel. If any validations errors are present, you will recieve a message, explaining them and usually also giving its location. If you want to know more about these yaml files or SCModels, we recomend checking [creating my service chain](../Creating%20my%20service%20chain/Creating%20my%20service%20chain.md) section.

<div align="center">
![Validation errors 1](/img/import/validationErrors1.png)  
**Figure 2:** *Example of indentation errors.*
</div>

<div align="center">
![Validation errors 2](/img/import/validationErrors2.png)  
**Figure 3:** *Example of SCModel validation errors.*
</div>

<Alert>
Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed.
</Alert>

Once you have selected a valid file, you can see a mermaid graph representing your service chain. You can toggle the mermaid and also zoom in by clicking on the graph. You can also see some import imformation about how many organizations, teams and service you are going to import.

<div align="center">
![Import information](/img/import/importInfo.png)  
**Figure 4:** *Import information summary.*
</div>

<Alert>
If you see something in the mermaid graph like ***"Max size exceeded"*** do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation.
</Alert>

If everything looks good, click the ***import*** button and Lucid chain will start importing your service chain. If anything goes wrong during the process, any object created in between will be deleted. This is because **Lucid chain importation is transactional**.

<div align="center">
![Import process](/img/import/importing.png)  
**Figure 5:** *Import in progress.*
</div>

Once you have clicked the button and you have waited, you will see a message saying that everything was imported.

<u>**NOTE:**</u> Please be patient because importations in ITop can be very slow.

<div align="center">
![Import finished](/img/import/importSuccessful.png)  
**Figure 6:** *Importation result.*
</div>

<Disclaimer>
In order to manage metrics and other Lucid chain features, when importing a service chain a special issue is created. In case of ITop Lucid chain creates an **User Request** with you chain attached to it. It is very important to **NOT delete** this issue or this attachment. It is also needed to have the default organization **My Company/Departament** in ITop. In Redmine, Lucid chain can create more than one special issues. ***Please do not remove them or interact with them***.
</Disclaimer>
