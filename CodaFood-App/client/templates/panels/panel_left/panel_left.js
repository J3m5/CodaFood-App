

Template.panelLeft.events({
    //add your events here
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

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "N° de téléphone",
});