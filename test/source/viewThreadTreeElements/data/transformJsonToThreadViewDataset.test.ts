// import { assert, expect } from "chai";
// import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
// import { ThreadD3nodeInterface } from '../../../../source/viewThreadTreeElements/data/threadD3node.interface';
// import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto, ThreadMapRootDto } from '../../../../source/data/AllDtos';
// import { TransformJsonToThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/transformJsonToThreadViewDataset';
// import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
// import { MapCreatorInterface } from '../../../../source/viewThreadTreeElements/data/mapCreator.interface';
// import { KeyedThreadMapInterface } from '../../../../source/viewThreadTreeElements/data/keyedThreadMap.interface';
// import { TransformToThreadD3nodeInterface } from '../../../../source/viewThreadTreeElements/data/transformToThreadD3node.interface';
// import { ThreadD3node } from '../../../../source/viewThreadTreeElements/data/ThreadD3node';


// describe('TransformJsonToThreadViewDataset tests', () => {
//     describe("typedTransformJson", () => {
//     it("when null ThreadMapRootDto is passed in returns throws", () =>  {
//             let target = new TransformJsonToThreadViewDataset(null, null, null);

//             let threadMapRootDto = null;

//             expect(target.typedTransformJson.bind(threadMapRootDto)).
//                 to.throw('json not valid');
//         })
//     ,it("calls map creator as expected (1)", () =>  {

//             var calledWithAllThreads;
//             var calledWithMap1;
//             var calledWithRootThreadMapThreadDto;
//             var calledWithRootThreadD3Node;

//             let rootThreadMapThreadDtoWithChildren = new ThreadMapThreadDtoWithChildren(null); 
//             let mapResultMock : KeyedThreadMapInterface = 
//             {
//             };
//             mapResultMock["key"] = rootThreadMapThreadDtoWithChildren; 

//             let threadViewDatasetMock = new ThreadViewDataset(null);
//             let rootNode = new ThreadD3node();
//             let mapCreatorMock : MapCreatorInterface = {
//                 createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => {
//                     calledWithAllThreads = allThreads;
//                     return mapResultMock;
//                 }
//             };
//             let transformMock : TransformToThreadD3nodeInterface = {
//                 createThreadD3nodes : (map, rootThreadMapThreadDto) =>
//                 {
//                     calledWithMap1 = map;
//                     calledWithRootThreadMapThreadDto = rootThreadMapThreadDto;
//                     return rootNode;
//                 },
//                 createThreadD3node : (allThreads) => new ThreadD3node()
//             };
//             let threadViewDatasetFactoryMock = {
//                 create : (rootThread) => {
//                     calledWithRootThreadD3Node = rootThread;
//                     return threadViewDatasetMock;
//                 }
//             };

//             let target = new TransformJsonToThreadViewDataset(transformMock, mapCreatorMock, threadViewDatasetFactoryMock);

//             let threadMapRootDto = new ThreadMapRootDto();
//             threadMapRootDto.allThreads = [];
//             threadMapRootDto.rootThreadMapThread = new ThreadMapThreadDto();
//             threadMapRootDto.rootThreadMapThread.key = new ThreadMapThreadKeyDto();
//             threadMapRootDto.rootThreadMapThread.key.shortForm = "key";

//             let result = target.typedTransformJson(threadMapRootDto);

//             assert.equal(calledWithAllThreads, threadMapRootDto.allThreads);
//             assert.equal(calledWithMap1, mapResultMock);
//             assert.equal(calledWithRootThreadMapThreadDto, rootThreadMapThreadDtoWithChildren);
//             assert.equal(calledWithRootThreadD3Node, rootNode);
//             assert.equal(result, threadViewDatasetMock);
//         })
//     })
// });