import {ThreadViewDataset} from '../threadViewDataset';
import {ThreadD3node} from '../threadD3node';
import {TransformToThreadD3node} from '../transformToThreadD3node/transformToThreadD3node';
import {KeyGenerator} from '../../../service/keyGenerator/keyGenerator';
import {ThreadMapThreadDtoWithChildren} from '../threadMapThreadDtoWithChildren';
import {ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto} from '../../../data/AllDtos';
import {MapCreator} from '../mapCreator';

describe('TransformToThreadD3node tests', () => {
    describe("createThreadD3node", () => {
    it("single root node without node children, transforms as expected", () =>  {

        let thread1 = new ThreadMapThreadDto();
        thread1.key = new ThreadMapThreadKeyDto();
        thread1.key.shortForm = "rootKey";
        thread1.lazyParentThread = null;

        let allThreads = [
            thread1
        ];

        var map = new MapCreator().createThreadMapThreadDtoWithChildrenMap(allThreads);
        var keyGenerator = new KeyGenerator();

        let target = new TransformToThreadD3node(keyGenerator);

        var result = target.createThreadD3node(map, map["rootKey"], 0);

        expect(result.id).toEqual(1);
        expect(result.depth).toEqual(0);
        expect(result.threadMapThread).toEqual(thread1);
        expect(result.geneSets).toBeNull();

    })
    ,it("single root node with one child, transforms as expected", () =>  {

        let thread1 = new ThreadMapThreadDto();
        thread1.key = new ThreadMapThreadKeyDto();
        thread1.key.shortForm = "rootKey";
        thread1.lazyParentThread = null;
        let thread2 = new ThreadMapThreadDto();
        thread2.key = new ThreadMapThreadKeyDto();
        thread2.key.shortForm = "child1";
        thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
        thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
        thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootKey";

        let allThreads = [
            thread1,
            thread2
        ];

        var map = new MapCreator().createThreadMapThreadDtoWithChildrenMap(allThreads);
        var keyGenerator = new KeyGenerator();

        let target = new TransformToThreadD3node(keyGenerator);

        var result = target.createThreadD3node(map, map["rootKey"], 0);

        expect(result.id).toEqual(1);
        expect(result.depth).toEqual(0);
        expect(result.threadMapThread).toEqual(thread1);
        expect(result.childThreads.length).toEqual(1);
        
        let child = result.childThreads[0];
        
        expect(child.id).toEqual(2);
        expect(child.depth).toEqual(1);
        expect(child.threadMapThread).toEqual(thread2);
        expect(child.childThreads.length).toEqual(0);
    })
    ,it("single root node with two children, transforms as expected", () =>  {

        let thread1 = new ThreadMapThreadDto();
        thread1.key = new ThreadMapThreadKeyDto();
        thread1.key.shortForm = "rootKey";
        thread1.lazyParentThread = null;
        let thread2 = new ThreadMapThreadDto();
        thread2.key = new ThreadMapThreadKeyDto();
        thread2.key.shortForm = "child1";
        thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
        thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
        thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootKey";
        let thread3 = new ThreadMapThreadDto();
        thread3.key = new ThreadMapThreadKeyDto();
        thread3.key.shortForm = "child2";
        thread3.lazyParentThread = new LazyThreadMapThreadReferenceDto();
        thread3.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
        thread3.lazyParentThread.threadMapThreadKey.shortForm = "rootKey";

        let allThreads = [
            thread1,
            thread2,
            thread3
        ];

        var map = new MapCreator().createThreadMapThreadDtoWithChildrenMap(allThreads);
        var keyGenerator = new KeyGenerator();

        let target = new TransformToThreadD3node(keyGenerator);

        var result = target.createThreadD3node(map, map["rootKey"], 0);

        expect(result.id).toEqual(1);
        expect(result.depth).toEqual(0);
        expect(result.threadMapThread).toEqual(thread1);
        expect(result.childThreads.length).toEqual(2);

        let child1 = result.childThreads[0];

        expect(child1.id).toEqual(2);
        expect(child1.depth).toEqual(1);
        expect(child1.threadMapThread).toEqual(thread2);
        expect(child1.childThreads.length).toEqual(0);

        let child2 = result.childThreads[1];

        expect(child2.id).toEqual(3);
        expect(child2.depth).toEqual(1);
        expect(child2.threadMapThread).toEqual(thread3);
        expect(child2.childThreads.length).toEqual(0);
    })
    ,it("single root node with one child which in turn has a child, transforms as expected", () =>  {

        let thread1 = new ThreadMapThreadDto();
        thread1.key = new ThreadMapThreadKeyDto();
        thread1.key.shortForm = "rootKey";
        thread1.lazyParentThread = null;
        let thread2 = new ThreadMapThreadDto();
        thread2.key = new ThreadMapThreadKeyDto();
        thread2.key.shortForm = "child1";
        thread2.lazyParentThread = new LazyThreadMapThreadReferenceDto();
        thread2.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
        thread2.lazyParentThread.threadMapThreadKey.shortForm = "rootKey";
        let thread3 = new ThreadMapThreadDto();
        thread3.key = new ThreadMapThreadKeyDto();
        thread3.key.shortForm = "child2";
        thread3.lazyParentThread = new LazyThreadMapThreadReferenceDto();
        thread3.lazyParentThread.threadMapThreadKey = new ThreadMapThreadKeyDto();
        thread3.lazyParentThread.threadMapThreadKey.shortForm = "child1";

        let allThreads = [
            thread1,
            thread2,
            thread3
        ];

        var map = new MapCreator().createThreadMapThreadDtoWithChildrenMap(allThreads);
        var keyGenerator = new KeyGenerator();

        let target = new TransformToThreadD3node(keyGenerator);

        var result = target.createThreadD3node(map, map["rootKey"], 0);

        expect(result.id).toEqual(1);
        expect(result.depth).toEqual(0);
        expect(result.threadMapThread).toEqual(thread1);
        expect(result.childThreads.length).toEqual(1);

        let child1 = result.childThreads[0];

        expect(child1.id).toEqual(2);
        expect(child1.depth).toEqual(1);
        expect(child1.threadMapThread).toEqual(thread2);
        expect(child1.childThreads.length).toEqual(1);

        let child2 = child1.childThreads[0];

        expect(child2.id).toEqual(3);
        expect(child2.depth).toEqual(2);
        expect(child2.threadMapThread).toEqual(thread3);
        expect(child2.childThreads.length).toEqual(0);
    })
    })
});