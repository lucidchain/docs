# Synchronizating a service chain

import Alert from '@site/src/components/Alert.js';
import Disclaimer from '@site/src/components/Disclaimer.js';

In this section you will learn how to synchronize your current service chain in ITop and/or Redmine.

## What is synchronization

We call service chain synchronization to the process of updaating your current service chain. In order to keep all the data, your current service chain will be marked as **DEPRECATED** and it will be substituted by the updated one. This way you can keep all the issues and other configurations without losing the oportunity to add new things to your service chain.

<Disclaimer>
This is not a completly proffesional solution and we are working in improving it. Lucid Chain actually renames everything with the prefix "_DEPRECATED_" plus the synchronization date and it creates a new service chain using the synchronization yaml. In future versions this will be more complex.
</Disclaimer>

## Choosing the target and selecting synchronization

If you want to synchronice your current service chain in Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting "Synchronize" option in the modal.

You will be redirected to synchronization page. You will be asked about choosing your service chain type. This will make Lucid Chain export your current chain and showing it to you. You will be able to see your current chain represented in a mermaid grpah. If you see something like "Max size exceeded" do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation.

 If everything goes right, a message like ***"Service chain retrieved. Select a file to start syncronization Current service chain"*** will be displayed. You can upload a yaml file with your service chain configured following SCModel. If any validations errors are present, you will recieve a message, explaining them and usually also giving its location.

<Alert>
Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed.
</Alert>

Once you have selected a valid file, you can see a mermaid graph representing your service chain. If you see something like "Max size exceeded" do not panic. It is because your chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation. You can toggle this mermaid too and also zoom in by clicking on the graph. You can also see some synchronization imformation about how many organizations, teams and service you are going to import.

Now you will be able to see a lot of infromation. You can see both current and uploaded service chain simultaneously and a merged service chain with all the information. You can also see a ***Show detailed differences*** button. If you click on it, a detailed list of changes made to your service chain will be displayed. In every section, you can click and toggle information knowing which things have been deleted and added. You can click ***Hide differences*** to close this part of the screen.

Please be sure about what you are going to do, and do not forget yo click ***Before sync***
button for having further information.

If everything looks good, click the ***Syncrhonize*** button and Lucid Chain will start the process. If anything goes wrong during it, any object created or modified in between will be deleted. This is because **Lucid Chain synchronization is transactional**.

Once you have clicked the button and you have waited, you will see a message saying that everything was synchronized.

**NOTE:** Please be patient because synchronizations in ITop can be very slow.

## Conditions to synchronize

In order to be able to synchronize, you have to take into account some conditions and restrictions.

+ A current service chain must exist in your Redmine/ITop.

+ Both chains must have at least one difference.

+ Your service chain cannot have suborganizations. This type of service chains must be translated in order to be supported.

+ Both chains must have the same id.

+ Both chains must have different versions.

+ You **cannot** change ownership-type.

+ Both chains must have the same service-chain-type.

+ Both chains must be valid and follow SCModel.
