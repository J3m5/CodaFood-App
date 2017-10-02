

Template.panelLeft.events({
    //add your events here
    'click .logout' (){
        Meteor.logout();
    }
});

Template.panelLeft.onCreated(function () {
    //add your statement here
});

Template.panelLeft.onRendered(function () {
    //add your statement here
});

Template.panelLeft.onDestroyed(function () {
    //add your statement here
});

// AccountsTemplates.configure({
//     texts: {
//         title: {
//             signIn: "",
//         }
//     }
// });

