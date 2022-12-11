const Price = require("./index")
const assert = require('assert').strict;

describe("integration test", function() {
    it("should be able to add and complete TODOs", function() {
        let price = new Price();
        assert.notStrictEqual(price.list().length, 1);
    });
});