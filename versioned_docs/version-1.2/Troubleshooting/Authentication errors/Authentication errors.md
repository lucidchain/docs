---
sidebar_position: 3
tags: 
  - lucid-chain
  - Unauthorized
  - troubleshooting
  - vite
  - set up
  - development
keywords:
  - lucid-chain
  - troubleshooting
  - authentication error
  - 401 unauthorized
  - invalid credentials
  - authentication failed
  - login error
  - API authentication
  - .env configuration
  - environment variables
  - backend authentication
  - APP_MODE
  - LUCID_USERNAME
  - LUCID_PASSWORD
  - production mode
  - development mode
  - vite
  - vite dev
  - npm run dev
  - HTTP error
  - no credentials provided
  - credential management
  - authentication debugging
  - authentication token
  - authentication request
  - error handling
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Authentication errors

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you will learn everything you have to know about authentication errors.

## Introduction

Authentication errors can only happen in production enviroment. These errors occur when your ***/back/.env*** has its variable ***APP_MODE*** with ***prd*** value. Once you understand this, there are many possible scenarios. The credentials needed to access Lucid chain are the ones stablished in the ***/back/.env***. Please make sure you are entering those credentials properly. You can change them modifying your backend's file with these two variables:

```.env
LUCID_USERNAME=yourNewUsername
LUCID_PASSWORD=yourNewPassword
```

## Invalid credentials

If you are receiving 401 Invalid credentials error in your HTTP requests, it is because your credentials are not the same as the ones in the .env of your Lucid chain backend.

<div align="center">
![Invalid credentials response problem](/img/troubleshooting/invalid-credentials.png)  
**Figure 1:** *Invalid credentials in browser.*
</div>

Check your requests and do not forget to add authentication to them. Otherwise you will not be able to use Lucid chain in production mode.

## 401 Unauthorized using VITE DEV

In case you are contributing to Lucid chain by modifying it, you can make changes in frontend and see them instantly. This can be done running the command ***npm run dev*** in ***/front***. Once you have done that, you will be able to see all the changes in ***http://localhost:5173***. However, if you are running your backend in production mode, your application instance in vite dev mode will not have access to the backend due to the lack of credentials in your requests.

<div align="center">
![401 Unauthorized responses in vite dev instance](/img/troubleshooting/401-VITE-DEV.png)  
**Figure 2:** *401 Unauthorized responses in vite dev instance.*
</div>

:::important
As you can see in figure 2, your vite dev application instance cannot access the endpoints because of this problem. ***To fix this***, you have to change your ***back/.env*** file ***APP_MODE*** variable to ***dev***.

```.env
APP_MODE=dev
```

:::

### No credentials provided

In case you are in the bwoser and you check want to enter your production Lucid chain instance, the first time you will need to introduce your backend credentials. If you fail the authentication and press the ***cancel*** button, you will be redirected to an error page. In this page you will see the following message: ***"No credentials provided"***. You will not be able to do anything until you authenticate properly, and ***you will stay in this error page once the cancel button has been pressed***.

<div align="center">
![No credentials provided page](/img/troubleshooting/no-credentials.png)  
**Figure 3:** *No credentials provided page.*
</div>

:::important
***To fix this,*** just refresh the page and try again the credential introduction until you provide the correct credentials.
:::

<Disclaimer>
In future versions we will add a special error page that will enable authentication form again to avoid manual refreshing each time you press cancel button. However, meanwhile you can just try to not press cancel button.
</Disclaimer>
