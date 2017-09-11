Router.configure({
    layoutTemplate: 'layout',


});

Router.route('/', {
    name: "carte",
    waitOn: function() {
        return Meteor.subscribe('categories');
    }});
