import Test from '../../../imports/classes/Test';


// const test = Test.findOne();


Template.carte.helpers({
    categories: function (){
        return Categories.find({});
    },
    get : function(){
        return Test.find();
    }
});

Template.carte.events({
    //add your events here

    'submit form': function(e){
        e.preventDefault();
        const test = new Test;
        console.log(test);

        let text = e.target.text.value;
        test.callMethod('add', text, (err, result) => {
            console.log(err + result);
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

