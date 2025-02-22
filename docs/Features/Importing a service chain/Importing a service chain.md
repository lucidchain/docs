# Importing a service chain

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you will learn how to import in ITop and/or Redmine your service chain.

## Choosing the target and selecting importation

If you want to import your service chain into Redmine or Itop, you can do it by clicking on Redmine or ITop logo and selecting "Import" option in the modal.

## Chain importation

You will be redirected to import page. There you can upload a yaml file with your service chain configured following SCModel. If any validations errors are present, you will recieve a message, explaining them and usually also giving its location.

<Alert>
Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed.
</Alert>

Once you have selected a valid file, you can see a mermaid graph representing your service chain. If you see something like "Max size exceeded" do not panic. It is because you chain is too big to be represented in mermaid. We are very sorry for that but this is something we cannot fix because it is a mermaid limitation. You can toggle the mermaid and also zoom in by clicking on the graph. You can also see some import imformation about how many organizations, teams and service you are going to import.

If everything looks good, click the import button and Lucid Chain will start importing your service chain. If anything goes wrong during the process, any object created in between will be deleted. This is because Lucid Chain importation is transactional.

Once you have clicked the button and you have waited, you will see a message saying that everything was imported.

**NOTE:** Please be patient because importations in ITop acan be very slow.

<Disclaimer>
In order to manage metrics and other Lucid chain features, when importing a service chain a special issue is created. In case of ITop Lucid chain creates an User Request with you chain attached to it. It is very important to NOT delete this issue or this attachment. It is also needed to have the default organization My Company/Departament in ITop. In Redmine, Lucid chain can create more than one special issues. Please do not remove them or interact with them.
</Disclaimer>
