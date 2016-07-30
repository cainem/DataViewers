import { assert } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { IThreadD3node } from '../../../../source/viewThreadTreeElements/data/IThreadD3node';
import { TransformHelper } from '../../../../source/viewThreadTreeElements/data/transformHelper';
import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto } from '../../../../source/data/AllDtos';

describe('TransformHelper tests', () => {
    describe("isKeyMatch", () => {
    it("when passed two key matched dtos returns true", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key1";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let result = TransformHelper.isKeyMatch(thread1WithChildren, key);

            assert.isTrue(result);
        }
    )

    ,it("when passed two non-key matched dtos returns false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";
            

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key2";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let result = TransformHelper.isKeyMatch(thread1WithChildren, key);

            assert.isFalse(result);
        }
    )

    ,it("when first thread has key and second doesn't return false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            let result = TransformHelper.isKeyMatch(thread1WithChildren, key);

            assert.isFalse(result);
        }
    )

    ,it("when first thread doesn't have key and second does return false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key2";

            let result = TransformHelper.isKeyMatch(thread1WithChildren, key);

            assert.isFalse(result);
        }
    )

    }),

describe("findParentThread", () => {
    it("null allThreads passed in returns null", () =>  {            
            let allThreads : ThreadMapThreadDtoWithChildren[] = null;
            let parentThreadReference = null;

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.isNull(result);
        }
    )
    ,it("allThreads contains one thread with the matching thread reference, returns thread", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";            
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);
        
            let allThreads : ThreadMapThreadDtoWithChildren[] = [ thread1WithChildren ];
            let parentThreadReference : LazyThreadMapThreadReferenceDto = new LazyThreadMapThreadReferenceDto();
            parentThreadReference.threadMapThreadKey = new ThreadMapThreadKeyDto();
            parentThreadReference.threadMapThreadKey.shortForm = "key1";

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.equal(result, thread1WithChildren);
        }
    )
    ,it("allThreads contains two threads one matches the thread reference, returns matching thread", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let thread2 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread2.key = new ThreadMapThreadKeyDto();
            thread2.key.shortForm = "key2";
            let thread2WithChildren = new ThreadMapThreadDtoWithChildren(thread2);
        
            let allThreads : ThreadMapThreadDtoWithChildren[] = [ thread1WithChildren, thread2WithChildren ];
            let parentThreadReference : LazyThreadMapThreadReferenceDto = new LazyThreadMapThreadReferenceDto();
            parentThreadReference.threadMapThreadKey = new ThreadMapThreadKeyDto();
            parentThreadReference.threadMapThreadKey.shortForm = "key2";

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.equal(result, thread2WithChildren);
        }
    )
    ,it("allThreads contains two threads null thread reference, returns null", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);
            
            let thread2 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread2.key = new ThreadMapThreadKeyDto();
            thread2.key.shortForm = "key2";
            let thread2WithChildren = new ThreadMapThreadDtoWithChildren(thread2);            
        
            let allThreads : ThreadMapThreadDtoWithChildren[] = [ thread1WithChildren, thread2WithChildren ];
            let parentThreadReference : LazyThreadMapThreadReferenceDto = null;

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.isNull(result);
        }
    )
    
    }),

describe("createThreadMapThreadDtoWithChildrenArray", () => {
    it("empty array passed in empty array returned", () =>  {            
            let allThreads : ThreadMapThreadDtoWithChildren[] = [];

            let result = TransformHelper.createThreadMapThreadDtoWithChildrenArray(allThreads)

            assert.isNotNull(result);
            assert.equal(0, result.length);
        }
    )
    ,it("an array with one (root) thread, returns single element array", () =>  {

            let thread1 = new ThreadMapThreadDto();
            thread1.lazyParentThread = null
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let allThreads : ThreadMapThreadDtoWithChildren[] = [
                thread1WithChildren
            ];

            let result = TransformHelper.createThreadMapThreadDtoWithChildrenArray(allThreads)

            assert.isNotNull(result);
            assert.equal(1, result.length);
            assert.equal(result[0].threadMapThreadDto, thread1);
            assert.equal(0, result[0].children.length);
        }
    )
    ,it("an array with one (root) thread and one child thread returns 2 elements children properties as expected", () =>  {

            // root thread
            let thread1 = new ThreadMapThreadDto();
            thread1.lazyParentThread = null;
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "rootkey";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);
            // child thread
            let thread2 = new ThreadMapThreadDto();
            thread2.key = new ThreadMapThreadKeyDto();
            thread2.key.shortForm = "childkey";
            thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
            thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
            thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootkey";
            let thread2WithChildren = new ThreadMapThreadDtoWithChildren(thread2);

            let allThreads : ThreadMapThreadDtoWithChildren[] = [
                thread1WithChildren,
                thread2WithChildren
            ];

            let result = TransformHelper.createThreadMapThreadDtoWithChildrenArray(allThreads)

            assert.isNotNull(result);
            assert.equal(2, result.length);
            assert.equal(result[0].threadMapThreadDto, thread1);
            assert.equal(result[1].threadMapThreadDto, thread2);
            assert.equal(1, result[0].children.length);
            assert.equal(result[0].children[0], thread2WithChildren);
        }
    )
    ,it("an array with one (root) thread and two child threads returns 3 elements, children properties as expected", () =>  {

            // root thread
            let thread1 = new ThreadMapThreadDto();
            thread1.lazyParentThread = null;
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "rootkey";
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);
            // child thread
            let thread2 = new ThreadMapThreadDto();
            thread2.key = new ThreadMapThreadKeyDto();
            thread2.key.shortForm = "childkey1";
            thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
            thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
            thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootkey";
            let thread2WithChildren = new ThreadMapThreadDtoWithChildren(thread2);
            // child thread
            let thread3 = new ThreadMapThreadDto();
            thread3.key = new ThreadMapThreadKeyDto();
            thread3.key.shortForm = "childkey2";
            thread3.lazyParentThread = new LazyThreadMapThreadReferenceDto();
            thread3.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
            thread3.lazyParentThread.threadMapThreadKey.shortForm = "rootkey";
            let thread3WithChildren = new ThreadMapThreadDtoWithChildren(thread3);

            let allThreads : ThreadMapThreadDtoWithChildren[] = [
                thread1WithChildren,
                thread2WithChildren,
                thread3WithChildren
            ];

            let result = TransformHelper.createThreadMapThreadDtoWithChildrenArray(allThreads)

            assert.isNotNull(result);
            assert.equal(3, result.length);
            assert.equal(result[0].threadMapThreadDto, thread1);
            assert.equal(result[1].threadMapThreadDto, thread2);
            assert.equal(result[2].threadMapThreadDto, thread3);
            assert.equal(2, result[0].children.length);
            assert.equal(result[0].children[0], thread2WithChildren);
            assert.equal(result[0].children[1], thread3WithChildren);
        }
    )


    })



})