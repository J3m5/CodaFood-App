import { Class } from 'meteor/jagi:astronomy';

const Test = Class.create({
    name: 'Test',
    collection: Tests,
    fields: {
        input: String,
    },
    helpers: {
        func(){
            return this.input;
        }
    }
});

export default Test;