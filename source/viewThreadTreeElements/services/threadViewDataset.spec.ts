import { ThreadViewDataset } from './ThreadViewDataset';
import { ThreadD3node } from './threadD3node';

describe('ThreadViewDataset tests', () => {
    describe("findThreadInThreadById", () => {
    it("when ThreadViewDataset root thread is not the id and has no children returns null", () =>  {

            let rootThread : ThreadD3node = new ThreadD3node();
            rootThread.debugText = "level 0";
            rootThread.id = 1;
            rootThread.depth = 0;
            rootThread.geneSets = [];
            rootThread.childThreads = [];

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 2);

            expect(result).toBeNull();
        }
    ),
    it("when ThreadViewDataset root thread has the id return the root thread", () => {

            let rootThread : ThreadD3node = new ThreadD3node(); 
            rootThread.debugText = "level 0";
            rootThread.id = 1;
            rootThread.depth = 0;
            rootThread.geneSets = [];
            rootThread.childThreads = [];            
            
            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 1);

            expect(result).toEqual(rootThread);
    }),
    it("when ThreadViewDataset has a child thread of the desired id, return the child thread", () => {

            let childThread : ThreadD3node = new ThreadD3node(); 
            childThread.debugText = "level 1";
            childThread.id = 2;
            childThread.depth = 1;
            childThread.geneSets = [];
            childThread.childThreads = [ ];

            let rootThread : ThreadD3node = new ThreadD3node(); 
            rootThread.debugText = "level 0";
            rootThread.id = 1;
            rootThread.depth = 0;
            rootThread.geneSets = [];
            rootThread.childThreads = [ childThread ];

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 2);

            expect(result).toEqual(childThread);
    }),
    it("when ThreadViewDataset has a 2 child threads and the second one is the desired id, return the child thread", () => {

            let childThread1 : ThreadD3node = new ThreadD3node(); 
            childThread1.debugText = "level 1";
            childThread1.id = 2;
            childThread1.depth = 1;
            childThread1.geneSets = [];
            childThread1.childThreads = [ ];
            let childThread2 : ThreadD3node = new ThreadD3node(); 
            childThread2.debugText = "level 1";
            childThread2.id = 3;
            childThread2.depth = 1;
            childThread2.geneSets = [];
            childThread2.childThreads = [ ];

            let rootThread : ThreadD3node = new ThreadD3node(); 
            rootThread.debugText = "level 0";
            rootThread.id = 1;
            rootThread.depth = 0;
            rootThread.geneSets = [];
            rootThread.childThreads = [ childThread1, childThread2 ];

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 3);

            expect(result).toEqual(childThread2);
    })

    it("when ThreadViewDataset has a child within a child and the nested child is the desired id, return the nested child thread", () => {

            let childThread2 : ThreadD3node = new ThreadD3node(); 
            childThread2.debugText = "level 1";
            childThread2.id = 3;
            childThread2.depth = 1;
            childThread2.geneSets = [];
            childThread2.childThreads = [ ];
            let childThread1 : ThreadD3node = new ThreadD3node(); 
            childThread1.debugText = "level 1",
            childThread1.id = 2,
            childThread1.depth = 1,
            childThread1.geneSets = [],
            childThread1.childThreads = [ childThread2 ]
            let rootThread : ThreadD3node = new ThreadD3node(); 
            rootThread.debugText = "level 0";
            rootThread.id = 1;
            rootThread.depth = 0;
            rootThread.geneSets = [];
            rootThread.childThreads = [ childThread1 ];

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 3);

            expect(result).toEqual(childThread2);
    })}),
    describe("findThreadById", () => {
    it("when ThreadViewDataset contains a deepley nested child it returns that deeply nested child", () =>  {
            let childThread2 : ThreadD3node = new ThreadD3node(); 
            childThread2.debugText = "level 1";
            childThread2.id = 3;
            childThread2.depth = 1;
            childThread2.geneSets = [];
            childThread2.childThreads = [ ];
            let childThread1 : ThreadD3node = new ThreadD3node(); 
            childThread1.debugText = "level 1";
            childThread1.id = 2;
            childThread1.depth = 1;
            childThread1.geneSets = [];
            childThread1.childThreads = [ childThread2 ];
            let rootThread : ThreadD3node = new ThreadD3node(); 
            rootThread.debugText = "level 0";
            rootThread.id = 1;
            rootThread.depth = 0;
            rootThread.geneSets = [];
            rootThread.childThreads = [ childThread1 ];

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadById(3);

            expect(result).toEqual(childThread2);
        }
    )
        
    })

});