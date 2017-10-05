import Test from '/imports/classes/Test';

Template.carte.helpers({
    categories: function (){
        return Categories.find({});
    },
    get : function(){
        return Test.find();
    }
});

Template.carte.events({

    'submit form': function(e){
        e.preventDefault();
        const test = new Test;
        let text = e.target.text.value;
        test.callMethod('add', text, (err, result) => {
            // console.log(err + result);
            if (err){
                Materialize.toast(err.reason, 5000);
            }
        });
    }
});

Template.carte.onCreated(function () {
    //add your statement here
    Meteor.subscribe('tests');

});

Template.carte.onRendered(function () {
    //add your statement here
});

Template.carte.onDestroyed(function () {
    //add your statement here
});

