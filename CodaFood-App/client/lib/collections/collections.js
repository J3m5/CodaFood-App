Cart = new Mongo.Collection('cart', {connection: null});
CartObserver = new PersistentMinimongo2(Cart, 'codaFood');


