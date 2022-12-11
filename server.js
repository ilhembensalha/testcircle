const cache = require('cache');
const User = require('user');
const Wish = require('wish');

describe('User', () => {

    beforeEach(() => {
        cache.clear();
    });

    afterEach(() => {
        cache.clear();
    });

    it('should add wishes', function() {

        const user = new User();
        const wish = new Wish({title: 'Holidays'});

        /* Add a wish. */
        user.addWish(wish);

        /* Check wishlist. */
        expect(user.wishList().length).toEqual(1);
        expect(user.wishList()[0].title()).toEqual('Holidays');

    });

});