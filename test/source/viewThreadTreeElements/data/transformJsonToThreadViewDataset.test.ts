import { assert, expect } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { threadD3nodeInterface } from '../../../../source/viewThreadTreeElements/data/threadD3node.interface';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto, ThreadMapRootDto } from '../../../../source/data/AllDtos';
import { TransformJsonToThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/transformJsonToThreadViewDataset';
import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
import { mapCreatorInterface } from '../../../../source/viewThreadTreeElements/data/mapCreator.interface';
import { keyedThreadMapInterface } from '../../../../source/viewThreadTreeElements/data/keyedThreadMap.interface';
import { transformToThreadD3nodeInterface } from '../../../../source/viewThreadTreeElements/data/transformToThreadD3node.interface';
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

            var mockResult : keyedThreadMapInterface = {};

            let rootNode = new ThreadD3node();
            let mapCreatorMock : mapCreatorInterface = {
                createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => {
                    calledWithAllThreads = allThreads;
                    return mockResult;
                }
            };
            let transformMock : transformToThreadD3nodeInterface = {
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