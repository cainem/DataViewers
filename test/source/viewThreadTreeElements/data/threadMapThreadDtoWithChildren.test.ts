import { assert } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { ThreadD3nodeInterface } from '../../../../source/viewThreadTreeElements/data/threadD3node.interface';
import { ThreadMapThreadDtoWithChildren } from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto } from '../../../../source/data/AllDtos';

describe('ThreadMapThreadDtoWithChildren tests', () => {
    describe("isKeyMatch", () => {
    it("when passed two key matched dtos returns true", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key1";

            let target = new ThreadMapThreadDtoWithChildren(thread1);

            let result = target.isKeyMatch(key);

            assert.isTrue(result);
        }
    )

    ,it("when passed two non-key matched dtos returns false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";
            

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key2";

            let target = new ThreadMapThreadDtoWithChildren(thread1);

            let result = target.isKeyMatch(key);

            assert.isFalse(result);
        }
    )

    ,it("when first thread has key and second doesn't return false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "key1";

            let target = new ThreadMapThreadDtoWithChildren(thread1);

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            
            let result = target.isKeyMatch(key);

            assert.isFalse(result);
        }
    )

    ,it("when first thread doesn't have key and second does return false", () =>  {
            let thread1 : ThreadMapThreadDto = new ThreadMapThreadDto ();

            let target = new ThreadMapThreadDtoWithChildren(thread1);

            let key : ThreadMapThreadKeyDto = new ThreadMapThreadKeyDto ();
            key.shortForm = "key2";

            let result = target.isKeyMatch(key);

            assert.isFalse(result);
        }
    )

    })
});