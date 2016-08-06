import { ThreadViewDataset } from './threadViewDataset';
import { ThreadD3nodeInterface } from './threadD3node.interface';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto, ThreadMapRootDto } from '../../data/AllDtos';
import { TransformJsonToThreadViewDataset } from './transformJsonToThreadViewDataset';
import { ThreadMapThreadDtoWithChildren } from './threadMapThreadDtoWithChildren';
import { MapCreatorInterface } from './mapCreator.interface';
import { KeyedThreadMapInterface } from './keyedThreadMap.interface';
import { TransformToThreadD3nodeInterface } from './transformToThreadD3node.interface';
import { ThreadD3node } from './ThreadD3node';


describe('TransformJsonToThreadViewDataset tests', () => {
    describe("typedTransformJson", () => {
    it("when null ThreadMapRootDto is passed in returns throws", () =>  {
            let target = new TransformJsonToThreadViewDataset(null, null, null);

            let threadMapRootDto = null;

            expect(target.typedTransformJson.bind(threadMapRootDto)).
                toThrow('json not valid');
        })
    ,it("calls map creator as expected (1)", () =>  {

            var calledWithAllThreads;
            var calledWithMap1;
            var calledWithRootThreadMapThreadDto;
            var calledWithRootThreadD3Node;

            let rootThreadMapThreadDtoWithChildren = new ThreadMapThreadDtoWithChildren(null); 
            let mapResultMock : KeyedThreadMapInterface = 
            {
            };
            mapResultMock["key"] = rootThreadMapThreadDtoWithChildren; 

            let threadViewDatasetMock = new ThreadViewDataset(null);
            let rootNode = new ThreadD3node();
            let mapCreatorMock : MapCreatorInterface = {
                createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => {
                    calledWithAllThreads = allThreads;
                    return mapResultMock;
                }
            };
            let transformMock : TransformToThreadD3nodeInterface = {
                createThreadD3nodes : (map, rootThreadMapThreadDto) =>
                {
                    calledWithMap1 = map;
                    calledWithRootThreadMapThreadDto = rootThreadMapThreadDto;
                    return rootNode;
                },
                createThreadD3node : (allThreads) => new ThreadD3node()
            };
            let threadViewDatasetFactoryMock = {
                create : (rootThread) => {
                    calledWithRootThreadD3Node = rootThread;
                    return threadViewDatasetMock;
                }
            };

            let target = new TransformJsonToThreadViewDataset(transformMock, mapCreatorMock, threadViewDatasetFactoryMock);

            let threadMapRootDto = new ThreadMapRootDto();
            threadMapRootDto.allThreads = [];
            threadMapRootDto.rootThreadMapThread = new ThreadMapThreadDto();
            threadMapRootDto.rootThreadMapThread.key = new ThreadMapThreadKeyDto();
            threadMapRootDto.rootThreadMapThread.key.shortForm = "key";

            let result = target.typedTransformJson(threadMapRootDto);

            expect(calledWithAllThreads).toEqual(threadMapRootDto.allThreads);
            expect(calledWithMap1).toEqual(mapResultMock);
            expect(calledWithRootThreadMapThreadDto).toEqual(rootThreadMapThreadDtoWithChildren);
            expect(calledWithRootThreadD3Node).toEqual(rootNode);
            expect(result).toEqual(threadViewDatasetMock);
        })
    })
});