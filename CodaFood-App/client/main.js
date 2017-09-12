if (Meteor.isClient) {
    // Initialize app
    let myApp = new Framework7();

    // If we need to use custom DOM library, let's save it to $$ letiable:
    let $$ = Dom7;

    // ...
}