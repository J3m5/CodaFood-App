Router.configure({
    layoutTemplate: 'layout',


});

Router.route('/', {
    name: "carte",
    waitOn: function() {
        return Meteor.subscribe('categories');
    }});

Router.route('/:name', {
    name: "pizzas",
    waitOn: function() {
        return Meteor.subscribe('pizzas');
    },
    data: function() { return Categories.findOne(this.params.name); }
});
