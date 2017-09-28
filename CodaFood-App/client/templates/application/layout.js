Template.layout.helpers({
    //add you helpers here

});

Template.layout.events({
    //add your events here
});

Template.layout.onCreated(function () {

});

Template.layout.onRendered(function () {
    //add your statement here
    //add your statement here
    let myApp = new Framework7({
        router: false, // prevent framework 7 to override flow router link
        swipePanel: 'both',
        material: true,
        materialRipple: true,
        materialRippleElements: '.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, .floating-button',
        sortable: false,
        cache: false
    });
    // Session.set('myApp', myApp);
    // let app = Session.get('myApp');
    // console.log(app.params.swipePanel);
    // If we need to use custom DOM library, let's save it to $$ letiable:
    let $$ = Dom7;

});

Template.layout.onDestroyed(function () {
    //add your statement here
});

Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);