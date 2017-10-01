Template.cart_list.helpers({
    subTotal: function () {
        return this.price * this.quantity;
    },
    checked: function () {
        return Cart.findOne({product: this.product}).checked;
    },

});

Template.cart_list.events({
    'click .product': function () {
        Cart.update({product: this.product}, {
            $set: {
                checked: !this.checked
            }
        })
    }
});
