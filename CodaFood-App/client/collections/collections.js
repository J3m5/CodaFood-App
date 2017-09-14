Cart = new Mongo.Collection('cart', {connection: null});
CartObserver = new PersistentMinimongo2(Cart, 'codaFood');

Template.registerHelper("CartItems", function () {
    return Cart.find();
});
