Template.header.helpers({
    //add you helpers here
    cartCount: function () {
        let cartProducts = Cart.find();
        let cartCount = Cart.find().count();
        let totalProducts = 0;
        cartProducts.forEach(function (product) {
            let subtotalProducts = product.quantity;
            totalProducts = totalProducts + subtotalProducts;
        });
        return totalProducts;
    }
});
Template.header.events({
    //add your events here
});

Template.header.onCreated(function () {
    //add your statement here
});

Template.header.onRendered(function () {
    //add your statement here
});

Template.header.onDestroyed(function () {
    //add your statement here
});

