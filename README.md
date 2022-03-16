# Welcome to Patient Zero's Cheeseria Coding Challenge - Java Edition

(For Juniors)

## Overview

Help us complete our Cheese shopping cart.

So we can start selling cheese to the delight of our customers, we will need you to implement a few more desired features. As you can see, there is already some code to get you started. The backend server is using Java and the frontend client is using ReactJS. See the **_Getting Started_** section below to get you started.

We recommend you fork this repository under your own username.

Once these features are completed, you will also make sure the functionality you implemented is covered by automated tests. We are not expecting 100% unit test coverage, but we would like to see how you write unit tests, so make sure you have a handful of unit tests for both front-end and server.

## The Challenges

Following are the features you will need to complete

1. When clicking on a Cheese card, open a [Dialog](https://material-ui.com/components/dialogs/#dialog) that contains all the details of the card, including the item's **description**.

2. Add a **Purchase** button to the Cart (In the sliding view that opens when you click the 'Cart' button). Clicking on the **Purchase** button will send all items in the cart to the server (backend) and store them for later use (You are not required to use a Database in this exercise, but you may do so if you wish).

3. Show all recently purchased items when clicking on the "Recent Purchases" button on the top left of the page. You may choose to display those items in a Drawer, a Dialog or any other control you see fit. Note that the recent purchased items **must** be retrieved from the server.

4. Add a UI automation test that performs the Purchase action you implemented as part of Feature #2. For this test case you will add two separate items to the cart and click on the **Purchase** button you have added as part of Feature #2.
   For this exercise we will be using the Cypress.io tool-set. You will find code to get you started in the 'e2e' folder.
   **_Note: You are free to add any selectors to your client code which may be required by the e2e tests._**

Once done, please notify us of your repository details and make sure it is publicly accessible. As part of your assessment we will confirm that all features were implemented as instructed.

## Getting Started

After you clone the project, you will see 3 folders, a README.md, and maybe a few other files.

To run the app, you need to build and run the client and server apps.

Learn how to do that with these documents:

- [Client](client/README.md)
- [Server](server/README.md)
- [End-to-End Testing](e2e/README.md)
