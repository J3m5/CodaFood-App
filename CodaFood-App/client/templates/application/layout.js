Template.layout.helpers({
    //add you helpers here
});

Template.layout.events({
    //add your events here
});

Template.layout.onCreated(function () {
    //add your statement here
    let myApp = new Framework7({
        router: false // prevent framework 7 to override flow router link
    });

    // If we need to use custom DOM library, let's save it to $$ letiable:
    let $$ = Dom7;
});

Template.layout.onRendered(function () {
    //add your statement here
});

Template.layout.onDestroyed(function () {
    //add your statement here
});

Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);