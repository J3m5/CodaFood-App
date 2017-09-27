Template.produit.helpers({
    qty: function () {
        if (Cart.findOne({product: this.name})) {
            return Cart.findOne({product: this.name}).quantity;
        } else {
            return "";
        }
    },
    bought: function () {
        if (Cart.findOne({product: this.name})) {
            return true;
        }
    },
    categorie: function () {
        if (Iron.Location.get().path.indexOf("Pizzas") !== -1) {
            return "pizza";
        } else {
            return "burger"
        }
    }
});
Template.produits.events({

    'click .modify'(event) {
        let product = this.name;
        let inc;
        let price = this.price;
        let op = event.target.textContent;
        let findOneProd = Cart.findOne({product: product});
        if (op === "add") {
            inc = 1;
            $('.right i, .cartCount a').addClass('added');
            Meteor.setTimeout(function(){
                $('.right i, .cartCount a').removeClass('added');
            }, 300);
        } else if (op === "remove") {
            inc = -1;
            $('.right i, .cartCount a').addClass('removed');
            Meteor.setTimeout(function(){
                $('.right i, .cartCount a').removeClass('removed');
            }, 300);
        }
        if (findOneProd) {
            if (Cart.findOne({product: product}).quantity === 1 && inc === -1) {

                $('.modifycart .button:not(.add-to-cart)').removeClass('fade-in').addClass('fade-out');
                Meteor.setTimeout(function () {
                    Cart.remove({product: product});
                }, 300)
            } else {
                Cart.update({product: product},
                    {
                        $inc: {
                            quantity: inc
                        }
                    })
            }
        } else {
            $('.modifycart .add-to-cart').removeClass('fade-in').addClass('fade-out');
            $('.right i, .cartCount a').addClass('added');
            Meteor.setTimeout(function () {
                Cart.insert({'product': product, 'quantity': 1, 'price': price, 'checked': false});
                $('.right i, .cartCount a').removeClass('added');
            }, 300)
        }
    }
});

Template.produits.onCreated(function () {
    //add your statement here
    // Meteor.subscribe('produits');
});

Template.produits.onRendered(function () {
    //add your statement here
});

Template.produits.onDestroyed(function () {
    //add your statement here
});