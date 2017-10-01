Template.produit.helpers({

    qty () {
            return Cart.findOne({product: this.name}).quantity;
    },

    bought () {
        if (Cart.findOne({product: this.name})) {
            return true;
        }
    },

    categorie () {
        if (Iron.Location.get().path.indexOf("Pizzas") !== -1) {
            return "pizza";
        } else {
            return "burger"
        }
    }
});



function animateCounter(op){
    const $counter = $('.right i, .cartCount a');
    $counter.addClass(op);
    Meteor.setTimeout(function () {
        $counter.removeClass(op);
    }, 300);
}

function updateCartProduct(product, inc){
    Cart.update({product: product},
        {
            $inc: {
                quantity: inc
            }
        })
}

function fade(){
    $('.modifycart .button:not(.add-to-cart)').removeClass('fade-in').addClass('fade-out');
}

Template.produits.events({

    'click .modifycart .remove'() {
        let inc = -1;

        animateCounter('removed');

        if (Cart.findOne({product: this.name}).quantity === 1) {

            fade();
            Meteor.setTimeout(() => {
                Cart.remove({product: this.name});
            }, 300);
        } else {
            updateCartProduct(this.name, inc);
        }

    },

    'click .modifycart .add'() {

        let inc = 1;

        animateCounter('added');

        updateCartProduct(this.name, inc);
    },

    'click .modifycart .add-to-cart'() {

        fade();

        $('.right i, .cartCount a').addClass('added');

        Meteor.setTimeout( () => {
            Cart.insert({'product': this.name, 'quantity': 1, 'price': this.price, 'checked': false});
            $('.right i, .cartCount a').removeClass('added');
        }, 300)
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