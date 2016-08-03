import {assert} from "chai";
import {ThreadViewDataset} from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import {threadD3nodeInterface} from '../../../../source/viewThreadTreeElements/data/threadD3node.interface';
import {KeyGenerator} from '../../../../source/viewThreadTreeElements/data/keyGenerator';
import {TransformToThreadD3node} from '../../../../source/viewThreadTreeElements/data/transformToThreadD3node';
import {ThreadMapThreadDtoWithChildren} from '../../../../source/viewThreadTreeElements/data/threadMapThreadDtoWithChildren';
import {ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto} from '../../../../source/data/AllDtos';
import {MapCreator} from '../../../../source/viewThreadTreeElements/data/mapCreator';


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

        assert.equal(result.id, 1);
        assert.equal(result.depth, 0);
        assert.equal(result.threadMapThread, thread1);
        assert.equal(result.geneSets, null);
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

        assert.equal(result.id, 1);
        assert.equal(result.depth, 0);
        assert.equal(result.threadMapThread, thread1);
        assert.equal(result.childThreads.length, 1);
        
        let child = result.childThreads[0];

        assert.equal(child.id, 2);
        assert.equal(child.depth, 1);
        assert.equal(child.threadMapThread, thread2);
        assert.equal(child.childThreads.length, 0);
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

        assert.equal(result.id, 1);
        assert.equal(result.depth, 0);
        assert.equal(result.threadMapThread, thread1);
        assert.equal(result.childThreads.length, 2);
        
        let child1 = result.childThreads[0];

        assert.equal(child1.id, 2);
        assert.equal(child1.depth, 1);
        assert.equal(child1.threadMapThread, thread2);
        assert.equal(child1.childThreads.length, 0);
        
        let child2 = result.childThreads[1];

        assert.equal(child2.id, 3);
        assert.equal(child2.depth, 1);
        assert.equal(child2.threadMapThread, thread3);
        assert.equal(child2.childThreads.length, 0);
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

        assert.equal(result.id, 1);
        assert.equal(result.depth, 0);
        assert.equal(result.threadMapThread, thread1);
        assert.equal(result.childThreads.length, 1);
        
        let child1 = result.childThreads[0];

        assert.equal(child1.id, 2);
        assert.equal(child1.depth, 1);
        assert.equal(child1.threadMapThread, thread2);
        assert.equal(child1.childThreads.length, 1);
        
        let child2 = child1.childThreads[0];

        assert.equal(child2.id, 3);
        assert.equal(child2.depth, 2);
        assert.equal(child2.threadMapThread, thread3);
        assert.equal(child2.childThreads.length, 0);
    })
    })
});