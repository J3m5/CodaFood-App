import Test from '../../imports/classes/Test';

Test.extend({
    events: {
      beforeSave(e){
          const doc = e.target;

         if (Test.isNew(doc)){
             throw new Meteor.Error('Duplicated entry','Input is already present!');
         }
      }
    },
    meteorMethods: {
        add(input) {
            this.input = input;
            return this.save();
        }
    }
});