---
tags:
  - lucid-chain
  - service-chain
  - YAML
  - SCModel
  - mermaid
  - anonymize
  - features
keywords:
  - export service chain
  - Redmine export
  - ITop export
  - Redmine export
  - YAML export
  - SCModel notation
  - service chain anonymize
  - mermaid graph
  - download YAML
  - export tutorial
  - export
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Exporting a service chain

import Alert from '@site/src/components/Alert.js';

In this section you will learn how to export your Redmine and/or ITop service chain and have it in a yaml file following SCModel notation.

## Choosing the target and selecting exportation

If you want to export your service chain from Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting ***export*** option in the modal.

<div align="center">
![Features modal](/img/mysc/featuresModal.png)  
**Figure 1:** *Lucid chain available features modal.*
</div>

## Chain exportation

After that, you will be asked about your service chain type. Select *"faceted"* or *"state"* depending on the case. You will be able to see your chain represented in a mermaid grpah.

<div align="center">
![Chain type modal](/img/mysc/chainTypeModal.png)  
**Figure 2:** *Service chain type modal.*
</div>

<Alert>
If you see something in the mermaid graph like ***"Max size exceeded"*** do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation.
</Alert>

:::tip
You can decide whether your data is going to be anonimized or not by selecting this option in the checkbox. ***By default Lucid chain will not anonimize data***.

<div align="center">
![Anonymize data option](/img/export/anonimizeData.png)  
**Figure 3:** *Anonymize data option.*
</div>

:::

Whenever you are ready you can click in ***export*** button and Lucid chain will start working on that. After some seconds you will be able to download you service chain in yaml compliant with SCModel. You can choose the file's name and also its location. By default, it will be in ***"Donwloads"*** folder and it will be named ***"export.yaml"***.

<div align="center">
![Export finished](/img/export/exportSuccessful.png)  
**Figure 4:** *Export result.*
</div>
