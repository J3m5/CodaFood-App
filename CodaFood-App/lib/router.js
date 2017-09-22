Router.configure({
    layoutTemplate: 'layout',

});

Router.route('/', {
    name: "carte",
    subscriptions: function () {
        this.subscribe('categories');
    }
});

Router.route('/cat/:name', function () {
    let test = this.params.name;
    let low = test.toLowerCase();
    Meteor.subscribe(low);
    this.render('produits', {
        data: function () {
            return {produits: window[test].find({})}
        }
    })
});
