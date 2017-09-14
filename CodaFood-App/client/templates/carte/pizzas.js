let qty = 0;

Template.pizzas.helpers({
    pizzas: function() {
        return Pizzas.find({});
    },


// added : function() {
//
//     if(Cart.findOne({product: this.name}) ){
//         return true;
//     }
// },

});
Template.pizza.helpers({
    qty : function(){
        if(Cart.findOne({product: this.name}) ){
            return Cart.findOne({product: this.name}).quantity;
        } else{
        return 0;
    }
    }
});
Template.pizzas.events({

    'click .addtocart'(event) {
        event.preventDefault();
        let product = this.name;
        if(Cart.findOne({product: product}) ){
            Cart.update({product : product},
                {
                    $inc:{
                        quantity: 1
                    }
                });
        } else {

            Cart.insert({'product' :product, 'quantity': 1});

        }





    }
});

Template.pizzas.onCreated(function () {
    //add your statement here
    // Meteor.subscribe('pizzas');

});

Template.pizzas.onRendered(function () {
    //add your statement here
});

Template.pizzas.onDestroyed(function () {
    //add your statement here
});