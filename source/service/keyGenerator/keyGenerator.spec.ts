import { KeyGenerator } from './keyGenerator';

describe('KeyGenerator tests', () => {
    describe("getNextKey", () => {
        it("first time it is called it returns 1", () => {
            let target = new KeyGenerator();

            let result = target.getNextKey();

            expect(result).toEqual(1);
         })
        ,it("returns 1 and then 2", () => {
            let target = new KeyGenerator();

            let result1 = target.getNextKey();
            let result2 = target.getNextKey();

            expect(result1).toEqual(1);
            expect(result2).toEqual(2);
         }
    )
  })
});