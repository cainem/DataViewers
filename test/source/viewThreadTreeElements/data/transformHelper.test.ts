import { assert } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { ThreadD3node } from '../../../../source/viewThreadTreeElements/data/threadD3node';
import { TransformHelper } from '../../../../source/viewThreadTreeElements/data/transformHelper';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto } from '../../../../source/data/AllDtos';

describe('TransformHelper tests', () => {
    describe("isKeyMatch", () => {
    it("when passed two key matched dtos returns true", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key1";

            let result = TransformHelper.isKeyMatch(thread1, key);

            assert.isTrue(result);
        }
    )

    ,it("when passed two non-key matched dtos returns false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key2";

            let result = TransformHelper.isKeyMatch(thread1, key);

            assert.isFalse(result);
        }
    )

    ,it("when first thread has key and second doesn't return false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            let result = TransformHelper.isKeyMatch(thread1, key);

            assert.isFalse(result);
        }
    )

    ,it("when first thread doesn't have key and second does return false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key2";

            let result = TransformHelper.isKeyMatch(thread1, key);

            assert.isFalse(result);
        }
    )

    }),

describe("findParentThread", () => {
    it("null allThreads passed in returns null", () =>  {            
            let allThreads : ThreadMapThreadDto[] = null;
            let parentThreadReference = null;

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.isNull(result);
        }
    )
    ,it("allThreads contains one thread with the matching thread reference, returns thread", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";
        
            let allThreads : ThreadMapThreadDto[] = [ thread1 ];
            let parentThreadReference : LazyThreadMapThreadReferenceDto = new LazyThreadMapThreadReferenceDto();
            parentThreadReference.threadMapThreadKey = new ThreadMapThreadKeyDto();
            parentThreadReference.threadMapThreadKey.shortForm = "key1";

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.equal(result, thread1);
        }
    )
    ,it("allThreads contains two threads one matches the thread reference, returns matching thread", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let thread2 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread2.key = new ThreadMapThreadKeyDto();
            thread2.key.shortForm = "key2";
        
            let allThreads : ThreadMapThreadDto[] = [ thread1, thread2 ];
            let parentThreadReference : LazyThreadMapThreadReferenceDto = new LazyThreadMapThreadReferenceDto();
            parentThreadReference.threadMapThreadKey = new ThreadMapThreadKeyDto();
            parentThreadReference.threadMapThreadKey.shortForm = "key2";

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.equal(result, thread2);
        }
    )
    ,it("allThreads contains two threads null thread reference, returns null", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let thread2 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread2.key = new ThreadMapThreadKeyDto();
            thread2.key.shortForm = "key2";
        
            let allThreads : ThreadMapThreadDto[] = [ thread1, thread2 ];
            let parentThreadReference : LazyThreadMapThreadReferenceDto = null;

            let result = TransformHelper.findParentThread(allThreads, parentThreadReference)

            assert.isNull(result);
        }
    )
    
    })

})