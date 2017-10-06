Meteor.startup(() => {
    // code to run on server at startup
    AdminDashboard.addSidebarItem('Analytics', {
        icon: 'line-chart',
        urls: [
            { title: 'Statistics', url: AdminDashboard.path('/analytics/statistics') },
            { title: 'Settings', url: AdminDashboard.path('/analytics/settings') }
        ]
    });
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.closeMethod = 'slideUp';
});

Template.AdminHeader.onCreated(function () {

    $('#f7css').remove();
});

Template.AdminHeader.onRendered(function () {

    $('.content').css({
        "position": "inherit",
        "top": "inherit",
        "right": "inherit",
        "bottom": "inherit",
        "left" :"inherit",
        "overflow": "inherit",
        "-webkit-overflow-scrolling": "inherit",
        "background-color": "inherit"
    });

});

// Template.AdminHeader.events({
//     'click .nav > li > a' : function(event){
//         console.log(event);
//         if (event.currentTarget.innerText === 'Home'){
//
//         }
//     }
// });