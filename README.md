![cf](http://i.imgur.com/7v5ASc8.png) 43: OAuth
===

## Documentation

Implementing oAuth into your application.

What is OAUTH? 
OAuth (Open Authorization) is an open standard for token-based authentication and authorization on the Internet. OAuth, which is pronounced "oh-auth," allows a user's account information to be used by third-party services, such as Google, without exposing the user's password.

How Does it Work?
There are 5 major steps:
1. The first step starts at your front-end ex: <a href:"---"/>
2. Step two sends you to the third-party backend(user pass)
3.1 The TP backend sends code to your own backend
3.2 Your own backend sends the secret back to the TP backend
3.3 The TP backend sends the access token
4. The access token is sent to the third-party (ex: Google Plus)
5. The account is created and the token is sent back to your front-end.