// import { assert } from "chai";
// import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
// import { ThreadD3nodeInterface } from '../../../../source/viewThreadTreeElements/data/threadD3node.interface';
// import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
// import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto } from '../../../../source/data/AllDtos';
// import { MapCreator } from '../../../../source/viewThreadTreeElements/data/mapCreator';

// describe('TransformHelper tests', () => {

//     describe("createThreadMapThreadDtoWithChildrenArray", () => {
//     it("empty array passed in empty array returned", () =>  {            
//             let allThreads : ThreadMapThreadDto[] = [];

//             let target = new MapCreator();

//             let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

//             assert.isNotNull(result);
//             assert.equal(0, Object.keys(result).length);
//         }
//     )
//     ,it("an array with one (root) thread, returns single element array", () =>  {

//             let thread1 = new ThreadMapThreadDto();
//             thread1.lazyParentThread = null
//             thread1.key = new ThreadMapThreadKeyDto();
//             thread1.key.shortForm = "rootkey";            
//             let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

//             let allThreads : ThreadMapThreadDto[] = [
//                 thread1
//             ];

//             let target = new MapCreator();

//             let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

//             assert.isNotNull(result);
//             assert.equal(1, Object.keys(result).length);
//             assert.equal(result["rootkey"].threadMapThreadDto, thread1);
//             assert.equal(0, result["rootkey"].children.length);
//         }
//     )
//     ,it("an array with one (root) thread and one child thread returns 2 elements children properties as expected", () =>  {

//             // root thread
//             let thread1 = new ThreadMapThreadDto();
//             thread1.lazyParentThread = null;
//             thread1.key = new ThreadMapThreadKeyDto();
//             thread1.key.shortForm = "rootkey";
//             let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);
//             // child thread
//             let thread2 = new ThreadMapThreadDto();
//             thread2.key = new ThreadMapThreadKeyDto();
//             thread2.key.shortForm = "childkey";
//             thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
//             thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
//             thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootkey";
//             let thread2WithChildren = new ThreadMapThreadDtoWithChildren(thread2);

//             let allThreads : ThreadMapThreadDto[] = [
//                 thread1,
//                 thread2
//             ];

//             let target = new MapCreator();

//             let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

//             assert.isNotNull(result);
//             assert.equal(2, Object.keys(result).length);
//             assert.equal(result["rootkey"].threadMapThreadDto, thread1);
//             assert.equal(result["childkey"].threadMapThreadDto, thread2);
//             assert.equal(1, result["rootkey"].children.length);
//             assert.equal(result["rootkey"].children[0].threadMapThreadDto, thread2WithChildren.threadMapThreadDto);
//         }
//     )
//     ,it("an array with one (root) thread and two child threads returns 3 elements, children properties as expected", () =>  {

//             // root thread
//             let thread1 = new ThreadMapThreadDto();
//             thread1.lazyParentThread = null;
//             thread1.key = new ThreadMapThreadKeyDto();
//             thread1.key.shortForm = "rootkey";
//             let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);
//             // child thread
//             let thread2 = new ThreadMapThreadDto();
//             thread2.key = new ThreadMapThreadKeyDto();
//             thread2.key.shortForm = "childkey1";
//             thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
//             thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
//             thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootkey";
//             let thread2WithChildren = new ThreadMapThreadDtoWithChildren(thread2);
//             // child thread
//             let thread3 = new ThreadMapThreadDto();
//             thread3.key = new ThreadMapThreadKeyDto();
//             thread3.key.shortForm = "childkey2";
//             thread3.lazyParentThread = new LazyThreadMapThreadReferenceDto();
//             thread3.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
//             thread3.lazyParentThread.threadMapThreadKey.shortForm = "rootkey";
//             let thread3WithChildren = new ThreadMapThreadDtoWithChildren(thread3);

//             let allThreads : ThreadMapThreadDto[] = [
//                 thread1,
//                 thread2,
//                 thread3
//             ];

//             let target = new MapCreator();

//             let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

//             assert.isNotNull(result);
//             assert.equal(3, Object.keys(result).length);
//             assert.equal(result["rootkey"].threadMapThreadDto, thread1);
//             assert.equal(result["childkey1"].threadMapThreadDto, thread2);
//             assert.equal(result["childkey2"].threadMapThreadDto, thread3);
//             assert.equal(2, result["rootkey"].children.length);
//             assert.equal(result["rootkey"].children[0].threadMapThreadDto, thread2WithChildren.threadMapThreadDto);
//             assert.equal(result["rootkey"].children[1].threadMapThreadDto, thread3WithChildren.threadMapThreadDto);
//         }
//     )

//     })
// });