---
tags: 
  - lucid-chain
  - architecture
  - ITSM
  - API
keywords:
  - Lucid Chain Wizard
  - data model
  - database
  - UML
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Data model

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you are going to learn about how lucid chain manages its data. You will learn about the need of storing data and how Lucid chain does it.

## Class diagram

Lucid chain has a very simple conceptual model. It needs to be able to recognise users and protect their administration credentials for Redmine and iTop. To do so, it has a simple conceptual model.

<div align="center">
![Data model ](/img/structure/LCW-DataModel.png)  
**Figure 1:** *Lucid chain conceptual model represented in UML.*
</div>

As you can see, there is a main class called ***User***. It has username and credentials to allow basic auth through JWT tokens. Each user must have an iTop and a Redmine configuration to be able to use Lucid chain.  This way we can support various users simoultaneously without any problems. Actually, we implemented everything in the same class, giving this type of objects as a result:

```json
{
    "lucidchainUser": "exampleUsername",
    "lucidchainPassword": "hashedPassword",
    "expiresToken": true,
    "lucidchainUserToken": "secretToken",
    "redmineConfig":
                    {
                        "server": "http://localhost",
                        "port": 8080,
                        "api_path": "/",
                        "username": "admin",
                        "password": "admin1234",
                        "dbhost": "localhost",
                        "dbport": 3307,
                        "dbuser": "root",
                        "dbpassword": "example",
                        "dbname": "redmine"
                    },
    "itopConfig":
                    {
                        "server": "http://localhost",
                        "port": 8000,
                        "api_path": "/webservices/rest.php",
                        "username": "admin",
                        "password": "admin"
                    }
}
```

Above you can apreciate an user with both Redmine and iTop credentials configured properly. When creating an user we do not request iTop or Redmine configuration, instead, the user has to add this information later using the system. If you want to learn about that process check  [configuring tools](../../Features/Configuring%20tools/Configuring%20tools.md) section.

## Database

As Lucid chain does ***not*** need to store huge amount of data, we chose [***NeDB***](https://github.com/louischatriot/nedb).

<Disclaimer>
In the future we might use MongoDB or other database if needed. Until now, Lucid chain will stay with NeDB.
</Disclaimer>
