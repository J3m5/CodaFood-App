Template.panelRight.helpers({

    cartItems: function () {
        return Cart.find({});
    },
    total: function(){
        const col = Cart.find();
        let total = 0;
        col.forEach(function (el) {
            let subTotal = el.quantity * el.price;
            total = total + subTotal;
        });
        return total;
    },
    cartNotEmpty: function(){
        return !!Cart.find().count();
    }
});

Template.panelRight.events({

    'click .allin': function () {
        const col = Cart.find().fetch();
        let checked = $('.chk').is(':checked');
        col.forEach(function (el) {
            Cart.update({product: el.product}, {
                $set: {
                    checked: !checked
                }
            })
        });
    },
    'click .inc': function (event) {
        const col = Cart.find({checked: true}).fetch();
        let inc = parseInt(event.currentTarget.id);
        col.forEach(function (el) {
            if (Cart.findOne({product: el.product}).quantity === 1 && inc === -1) {
                Cart.remove({product: el.product})
            } else {
                Cart.update({product: el.product}, {
                    $inc: {
                        quantity: inc,
                    }
                })
            }
        });
        if (Cart.find().count() === 0) {
            $(".chk").prop("checked", false);
        }

    },
    'click .delete': function(event){
        const col = Cart.find({checked: true}).fetch();
        col.forEach(function (el) {
                Cart.remove({product: el.product})
            });
        if (Cart.find().count() === 0) {
            $(".chk").prop("checked", false);
        }
    }
});

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

Template.cart_list.onCreated(function () {
    // this.checked = new ReactiveVar();
    // this.checked.set(false);
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

