Template.panelleft.helpers({
    cartitems: function(){
        return Cart.find({});
    }
});

Template.panelleft.events({
    //add your events here
});

Template.panelleft.onCreated(function () {
    //add your statement here
});

Template.panelleft.onRendered(function () {
    //add your statement here
});

Template.panelleft.onDestroyed(function () {
    //add your statement here
});

AccountsTemplates.configure({
    texts: {
        title: {
            signIn: "",
        }
    }
});