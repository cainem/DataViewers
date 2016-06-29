import { assert } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/ThreadViewDataset';

describe('ThreadViewDataset tests', () => {
    describe("findThreadById", () => {
    it("when current thread has no children returns null", () =>
        {
            let target = new ThreadViewDataset(
            {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : []
            })

            let result = target.findThreadInThreadById(target.rootThread, 1);

            assert.isNull(result);
        }
    )})
});