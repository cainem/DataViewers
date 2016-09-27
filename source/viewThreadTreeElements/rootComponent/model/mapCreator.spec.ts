import { ThreadViewDataset } from './threadViewDataset';
//import { ThreadD3nodeInterface } from './threadD3node.interface';
import { ThreadMapThreadDtoWithChildren } from './threadMapThreadDtoWithChildren';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto } from '../../../data/AllDtos';
import { MapCreator } from './mapCreator';

describe('MapCreator tests', () => {

    describe("createThreadMapThreadDtoWithChildrenArray", () => {
    it("empty array passed in empty array returned", () =>  {            
            let allThreads : ThreadMapThreadDto[] = [];

            let target = new MapCreator();

            let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

            expect(result).not.toEqual(null);
            expect(Object.keys(result).length).toEqual(0);
        }
    )
    ,it("an array with one (root) thread, returns single element array", () =>  {

            let thread1 = new ThreadMapThreadDto();
            thread1.lazyParentThread = null
            thread1.key = new ThreadMapThreadKeyDto();
            thread1.key.shortForm = "rootkey";            
            let thread1WithChildren = new ThreadMapThreadDtoWithChildren(thread1);

            let allThreads : ThreadMapThreadDto[] = [
                thread1
            ];

            let target = new MapCreator();

            let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

            expect(result).not.toEqual(null);
            expect(Object.keys(result).length).toEqual(1);
            expect(result["rootkey"].threadMapThreadDto).toEqual(thread1);
            expect(result["rootkey"].children.length).toEqual(0);            

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

            let allThreads : ThreadMapThreadDto[] = [
                thread1,
                thread2
            ];

            let target = new MapCreator();

            let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

            expect(result).not.toEqual(null);
            expect(Object.keys(result).length).toEqual(2);
            expect(result["rootkey"].threadMapThreadDto).toEqual(thread1);
            expect(result["childkey"].threadMapThreadDto).toEqual(thread2);
            expect(result["rootkey"].children.length).toEqual(1);            
            expect(result["rootkey"].children[0].threadMapThreadDto).toEqual(thread2WithChildren.threadMapThreadDto);            
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

            let allThreads : ThreadMapThreadDto[] = [
                thread1,
                thread2,
                thread3
            ];

            let target = new MapCreator();

            let result = target.createThreadMapThreadDtoWithChildrenMap(allThreads)

            expect(result).not.toEqual(null);
            expect(Object.keys(result).length).toEqual(3);
            expect(result["rootkey"].threadMapThreadDto).toEqual(thread1);
            expect(result["childkey1"].threadMapThreadDto).toEqual(thread2);
            expect(result["childkey2"].threadMapThreadDto).toEqual(thread3);
            expect(result["rootkey"].children.length).toEqual(2);            
            expect(result["rootkey"].children[0].threadMapThreadDto).toEqual(thread2WithChildren.threadMapThreadDto);            
            expect(result["rootkey"].children[1].threadMapThreadDto).toEqual(thread3WithChildren.threadMapThreadDto);            
        }
    )

    })
});