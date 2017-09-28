Router.configure({
    layoutTemplate: 'layout',
});

// Router.route('/', {
//     name: "carte",
//     subscriptions: function () {
//         this.subscribe('categories');
//     },
//
// });

Router.route('/', {
    subscriptions: function() {
        this.subscribe('categories');
    },
    template: 'carte',
    onBeforeAction: function(){

        if ( $('#f7css').length === 0) {
            $('head').prepend('<link id="f7css" rel="stylesheet" href="/packages/tecsinapse_framework7/Framework7/dist/css/framework7.material.min.css">')
            $('.content').css({
                "position": "absolute",
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0",
                "overflow": "auto",
                "-webkit-overflow-scrolling": "touch",
                "background-color": "#fff"
            });
        }

            this.next();

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

Router.route('analytics', {
    path: AdminDashboard.path('analytics'),
    controller: 'AdminController',
    onAfterAction: function () {
        Session.set('admin_title', 'Analytics');
    }
});