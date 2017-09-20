Template.panelRight.helpers({

    cartitems: function(){
        return Cart.find({});
    },

});



Template.panelRight.events({
    //add your events here
    'click .modifycart'(event) {
        // event.preventDefault();
        let product = this.name;
        let inc;
        let op = event.target.textContent;
        // let findOneProd = Cart.findOne({product: product});
        if(op === "add"){
            inc= 1;
        } else if(op === "remove"){
            inc= -1;
        }
        // if(findOneProd ){
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
    }
});
Template.cart_list.helpers({
    total: function () {
        return this.price * this.quantity;
    },
    checked: function(){
        return Cart.findOne({product:this.product}).checked;
    }
});

Template.cart_list.events({
    'click .product':function() {

        Cart.update({product: this.product},{
            $set:{
                checked: !this.checked
            }
        })
    }
});

Template.cart_list.onCreated(function(){
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

