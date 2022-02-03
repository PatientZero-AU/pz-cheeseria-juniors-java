# End-to-End Testing with Cypress

This subproject contains end-to-end (UI-based) using Cypress.

## Getting Started

You need to have the application [client](../client/README.md) **and** [server](../server/../README.md) running for the Cypress test to work. If you haven't done that, check out those links to get started.

Assuming they are running on default ports, then your node installation should be fine for the cypress test, so nothing else to do.  Happy testing.

NOTE: you may need to register for a free account on [https://cypress.io](https://cypress.io), especially if you want to keep results of previous test runs for a while.

## Build and Run Locally

In the e2e directory, run:

### `npm install`

to install package dependencies, including cypress. This can take a while. Once that finishes:

### `npm test`

will run the tests, and you shoud see a browser open where the client app will be remote-controlled.

### Developing

Assuming you have been developing the client, you should have no dramas using the same tools to create more tests. Our initial repository just contains one very brief test, but it should pass.

### Helpful links

[Cypress Website](https://cypress.io)

