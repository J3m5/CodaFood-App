Router.configure({
    layoutTemplate: 'layout',


});

Router.route('/', {
    name: "carte",
    waitOn: function() {
        return Meteor.subscribe('categories');
    }});

Router.route('/:url', {
    name: "pizzas",
    subscriptions: function() {
        this.subscribe('pizzas');
    },
    data: function() { return Categories.findOne({url: this.params.url}); }
});
