import { assert } from "chai";

describe('outer', () => {
    describe("test class", () => {
    it("should work", () =>
        {
            let x = 1;
            assert.equal(1, x);
        }
    )})
});