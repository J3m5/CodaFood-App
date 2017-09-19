Template.panelRight.helpers({

    cartitems: function(){
        return Cart.find({});
    },

});

Template.cart_list.helpers({
    total: function () {
        return this.price * this.quantity;
    }
});

Template.panelRight.events({
    //add your events here
});

Template.panelRight.onCreated(function () {
    //add your statement here
});

Template.panelRight.onRendered(function () {
    //add your statement here
});

Template.panelRight.onDestroyed(function () {
    //add your statement here
});

