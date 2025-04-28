---
tags:
  - features
  - lucid-chain
  - account
  - auth
keywords:
  - auth
  - account
  - Account management
  - Lucid chain
  - Create account
  - Log in
  - Log out
  - Change profile information
  - Change password
  - Delete account
  - Stored data
  - Session management
  - JWT tokens
  - API tokens
  - No expiration tokens
  - Security
  - Username
  - Password
  - Authentication
  - Session expiration
  - User data
  - Credential storage
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Account management

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

Due to security reasons, Lucid chain implements a simple account management system. In order to use both the UI and the API you **must have** an account. In this ection you will learn everything you need to know about user data, session management and many other features.

## Create an account

In order to create an account in Lucid chain, you will have to click in the blue text in login modal that says: ***create one***. You will be redirected to register view.

<div align="center">
![Register form](/img/auth/registerModal.png)  
**Figure 1:** *Register view form.*
</div>

Once there you will be asked about an username and a password. Please introduce secure credentials to protect your data. Once you have created your account, the system will display an alert and you will be redirected to the main page, **logged in** your new account. If you already have an account, you log in clicking on the text saying ***log in*** at the bottom of the log in form.

<Disclaimer>
Your username must be unique. We recommend using a password with more than 12 characters for a better security.
</Disclaimer>

## Log in

The first thing you will see when visiting Lucid chain is this view. In order to log in you just have to introduce your username and password.

<div align="center" id='login-view'>
![Login form](/img/auth/loginModal.png)  
**Figure 2:** *Log in form.*
</div>

If everything is fine you will be logged in and have access to the rest of the system, but be carefull because you **will log out automatically after 2 hours**. If you do not have an account, you can create one clicking on the text saying ***create one*** at the bottom of the log in form.

## Log out

**Every two hours your session will expire**, which means that you will be forced to log in again. However, you can also log out by yourself. To do so, just go to the main page, click in the profile icon located up to the right. After that, click in the orange button saying ***Log out***.

<div align="center" id='profile-view'>
![Profile view](/img/auth/profilePage.png)  
**Figure 3:** *Profile view.*
</div>

## Change profile information

If you want to change your user data, you can do it in two easy steps. Go to the main page and click in the profile icon located up to the right. You will see your current username in a text input. You will be able to introduce a new username and update it by clicking in ***Update profile*** button.

<div align="center">
![Profile update successful](/img/auth/profileUpdateAlert.png)  
**Figure 4:** *Profile updated successfully.*
</div>

<Disclaimer>
Your username must be unique. Lucid chain won't let you update your username if another user already has that one or if it is the same as the one you already have.

<div align="center">
![Profile update error](/img/auth/profileUpdateAlertError.png)  
**Figure 5:** *Profile not updated for validation errors.*
</div>

</Disclaimer>

### Change password

Changing password is similar to username update. You will also have to go to the main page and click in profile icon up to the right. Once you are in your [profile page](#profile-view), click in ***Change password*** button. You will access another view where you can introduce your new password.

<div align="center">
![Update password](/img/auth/changePasswordScreen.png)  
**Figure 6:** *Change password screen.*
</div>

Please use secure passwords to avoid hacking and protect your data. If you changed your mind and do not want to update your password anymore, you can go back to your [profile page](#profile-view) by clicking in ***Go back to profile*** button. Otherwise, introduce your new password and click in ***Update password***.

<Alert>
Lucid chain ***does not*** allow password or account recovery if you forgot your password. We are currently working on that and may add it in the future. Until then, if you forget your password you will have to ***create a new account***.
</Alert>

## Delete account

If you want to delete your account, you can do it very simply. First go to main page and click in profile button. You will be redirected to your [profile page](#profile-view). After that, click in ***Delete Account*** button.

<div align="center">
![Confirm delete account](/img/auth/accountDeletionConfirmation.png)  
**Figure 7:** *Account deletion confirmation.*
</div>

You will be asked about a confirmation because this will **remove forever all your data**. This will be your **last chance** to cancel the process. If you accept, your account will be deleted. The system will display a confirmation modal and you will be redirected to [log in page](#login-view).

<div align="center">
![Confirm delete account](/img/auth/accountDeletionSuccess.png)  
**Figure 8:** *Account deletion success.*
</div>

## Stored data

Due to security, scalabillity and consistency reasons, Lucid chain must have users to manage their requests and ensure correct iTop and/or Redmine configuration use. Lucid chain will store username, hashed passwords, iTop credentials and Redmine credentials. This way, each user will have access only to his data, and we can associate credentials to its owners to avoid unethical use.

## Session management

As we said before, Lucid chain requires authentication for using its API and UI. When log in, you will receive a JWT cyphered with a secret key only known by the system. Every token expires after 2 hours, so you will have to renew your session to continue using Lucid chain after that time. Lucid chain's UI is prepared to manage session expiration, and will redirect you to log in page **automatically** once it detects that your session expired. Then, you will have to log in again to continue working.

<Disclaimer>
Lucid chain checks your token expiration date **every minute**, which can lead to some errors in rare cases when you try to use the UI before it has detected that your session expired. In those cases, we recommend reloading the page or logging out. However, this problems are not common and the **API is prepared** to manage these type of errors, so do not be scared.
</Disclaimer>

## API Tokens

In some cases, token expiration can be annoying. If we want to build an API or a system that uses Lucid chain, managing session expiration can be difficult. Even though we recommend doing that, we can create special accounts having ***NO EXPIRATION TOKENS***. This is only possible using lucid chain's API, so do not forget to check how to do it visiting [auth routes](../../Lucid%20chain%20API/Auth%20routes/Auth%20routes.md). You will find there Lucid chain Open API Specification.