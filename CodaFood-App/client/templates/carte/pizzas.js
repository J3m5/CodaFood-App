//
// Template.pizzas.helpers({
//     pizzas: function() {
//         return Pizzas.find({});
//     },
//
// });
Template.pizza.helpers({
    qty : function(){
        if(Cart.findOne({product: this.name}) ){
            return Cart.findOne({product: this.name}).quantity;
        } else{
            return "";
        }
    },
    bought: function () {
        if(Cart.findOne({product: this.name}) ){
            return true;
        }
    }
});
Template.pizzas.events({


    'click .modifycart'(event) {
        // event.preventDefault();
        let product = this.name;
        let inc = 1;
        let op = event.target.firstChild.textContent;
        let findOneProd = Cart.findOne({product: product});
        if(op ==="+"){
            inc= 1;
        } else if(op ==="-"){
            inc= -1;
        }
        if(findOneProd ){
            if(Cart.findOne({product: product}).quantity === 1 && inc === -1){
                Cart.remove({product: product})
            }else{
                Cart.update({product : product},
                    {
                        $inc:{
                            quantity: inc
                        }
                    })
            }
        } else {
            Cart.insert({'product' :product, 'quantity': 1, 'categorie': this.categorie});
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