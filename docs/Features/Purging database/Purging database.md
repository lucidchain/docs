# Purging database

import Alert from '@site/src/components/Alert.js';
import Disclaimer from '@site/src/components/Disclaimer.js';

In this section you will learn how to clean your ITop and/or Redmine's database using Lucid Chain.

<Disclaimer>
In future versions we will have a transactional purge in ITop. This means that if any errors occur during removal, purgation will not continue and database will stay as in the begining.
</Disclaimer>

## Choosing the target and selecting purgation

If you want to purge your Redmine or Itop database, you can do it by clicking on Redmine or ITop logo and selecting "Purge database" option in the modal.

## Database purgation

You will be redirected to a very basic screen where you will have to fill a checkbox assuming the responsability of this action. After that, you have to click in the red button that says "Purge redmine/itop database". Please be patient because this process is very slow, specially in ITop. Database purgation is transactional, which means that if any errors occur during the process, the database will stay as in the begining.

<Alert>
Please make sure that your connection is correct and that you are going to remove all data. This is very dangerous because it will not be reversible.
</Alert>

Once the process is completed, you will receive a message.
