Router.configure({
    layoutTemplate: 'layout',


});

Router.route('/', {
    name: "carte",
    subscriptions: function() {
        this.subscribe('categories');
    }});

Router.route('/:url', {
    name: "pizzas",
    subscriptions: function() {
        this.subscribe('pizzas');
    },
    data: function() { return Categories.findOne({url: this.params.url}); }
});
