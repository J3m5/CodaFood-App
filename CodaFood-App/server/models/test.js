// import { Class } from 'meteor/jagi:astronomy';
import Test from '../../imports/classes/Test';

Test.extend({
    meteorMethods: {
        add(input) {
            this.input = input;
            return this.save();
        }
    }
});