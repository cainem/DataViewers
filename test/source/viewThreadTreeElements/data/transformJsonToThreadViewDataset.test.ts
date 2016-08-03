import { assert, expect } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { IThreadD3node } from '../../../../source/viewThreadTreeElements/data/IThreadD3node';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto, ThreadMapRootDto } from '../../../../source/data/AllDtos';
import { TransformJsonToThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/transformJsonToThreadViewDataset';
import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
import { mapCreatorInterface } from '../../../../source/viewThreadTreeElements/data/mapCreator.interface';
import { IStringToThreadMapThreadDtoWithChildrenMap } from '../../../../source/viewThreadTreeElements/data/IStringToThreadMapThreadDtoWithChildrenMap';
import { ITransformToThreadD3node } from '../../../../source/viewThreadTreeElements/data/ITransformToThreadD3node';
import { ThreadD3node } from '../../../../source/viewThreadTreeElements/data/ThreadD3node';


describe('TransformJsonToThreadViewDataset tests', () => {
    describe("typedTransformJson", () => {
    it("when null ThreadMapRootDto is passed in returns throws", () =>  {
            let target = new TransformJsonToThreadViewDataset(null, null);

            let threadMapRootDto = null;

            expect(target.typedTransformJson.bind(threadMapRootDto)).
                to.throw('json not valid');
        })
    ,it("calls map creator as expected (1)", () =>  {

            var calledWithAllThreads;
            var calledWithMap1;
            var calledWithRootThreadMapThreadDto;

            var mockResult : IStringToThreadMapThreadDtoWithChildrenMap = {};

            let rootNode = new ThreadD3node();
            let mapCreatorMock : mapCreatorInterface = {
                createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => {
                    calledWithAllThreads = allThreads;
                    return mockResult;
                }
            };
            let transformMock : ITransformToThreadD3node = {
                createThreadD3nodes : (allThreads, rootThreadMapThreadDto) =>
                {
                    calledWithMap1 = allThreads;
                    calledWithRootThreadMapThreadDto = rootThreadMapThreadDto;
                    return rootNode;
                },
                createThreadD3node : (allThreads) => new ThreadD3node()
            }

            let target = new TransformJsonToThreadViewDataset(null, null);

            let threadMapRootDto = new ThreadMapRootDto();
            threadMapRootDto.allThreads = [];
            threadMapRootDto.rootThreadMapThread = new ThreadMapThreadDto();
            threadMapRootDto.rootThreadMapThread.key = new ThreadMapThreadKeyDto();
            threadMapRootDto.rootThreadMapThread.key.shortForm = "key";

            let result = target.typedTransformJson(threadMapRootDto);

            assert.equal(calledWithAllThreads, threadMapRootDto.rootThreadMapThread);
            assert.equal(result, mockResult);
        })
    })
});