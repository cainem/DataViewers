import { assert, expect } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { IThreadD3node } from '../../../../source/viewThreadTreeElements/data/IThreadD3node';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto, ThreadMapRootDto } from '../../../../source/data/AllDtos';
import { TransformJsonToThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/transformJsonToThreadViewDataset';
import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';

describe('TransformJsonToThreadViewDataset tests', () => {
    describe("typedTransformJson", () => {
    it("when null ThreadMapRootDto is passed in returns throws", () =>  {
            let target = new TransformJsonToThreadViewDataset(null, null);

            let threadMapRootDto = null;

            expect(target.typedTransformJson.bind(threadMapRootDto)).
                to.throw('json not valid');
        })
    ,it("calls map creator as expected (1)", () =>  {
            let target = new TransformJsonToThreadViewDataset(null, null);

            var calledWithAllThreads;

            var mockResult = {};

            let mapCreatorMock = {
                createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => {
                    calledWithAllThreads = allThreads;
                    return mockResult;
                }
            };

            let threadMapRootDto = new ThreadMapRootDto();

            let result = target.typedTransformJson(threadMapRootDto);

            assert.equal(result, mockResult);
        })
    })
});