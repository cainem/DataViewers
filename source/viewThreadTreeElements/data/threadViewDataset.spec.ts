import { ThreadViewDataset } from './ThreadViewDataset';
import { ThreadD3nodeInterface } from './threadD3node.interface';

describe('ThreadViewDataset tests', () => {
    describe("findThreadInThreadById", () => {
    it("when ThreadViewDataset root thread is not the id and has no children returns null", () =>  {
            let target = new ThreadViewDataset(
            {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : []
            })

            let result = target.findThreadInThreadById(target.rootThread, 2);

            expect(result).toBeNull();
        }
    ),
    it("when ThreadViewDataset root thread has the id return the root thread", () => {

            let rootThread : ThreadD3nodeInterface = {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : []
            };

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 1);

            expect(result).toEqual(rootThread);
    }),
    it("when ThreadViewDataset has a child thread of the desired id, return the child thread", () => {

            let childThread : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 2,
                depth: 1,
                geneSets : [],
                childThreads : [ ]
            }

            let rootThread : ThreadD3nodeInterface = {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : [ childThread ]
            };

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 2);

            expect(result).toEqual(childThread);
    }),
    it("when ThreadViewDataset has a 2 child threads and the second one is the desired id, return the child thread", () => {

            let childThread1 : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 2,
                depth: 1,
                geneSets : [],
                childThreads : [ ]
            };
            let childThread2 : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 3,
                depth: 1,
                geneSets : [],
                childThreads : [ ]
            }

            let rootThread : ThreadD3nodeInterface = {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : [ childThread1, childThread2 ]
            };

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 3);

            expect(result).toEqual(childThread2);
    })

    it("when ThreadViewDataset has a child within a child and the nested child is the desired id, return the nested child thread", () => {

            let childThread2 : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 3,
                depth: 1,
                geneSets : [],
                childThreads : [ ]
            }
            let childThread1 : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 2,
                depth: 1,
                geneSets : [],
                childThreads : [ childThread2 ]
            };

            let rootThread : ThreadD3nodeInterface = {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : [ childThread1 ]
            };

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadInThreadById(target.rootThread, 3);

            expect(result).toEqual(childThread2);
    })}),
    describe("findThreadById", () => {
    it("when ThreadViewDataset contains a deepley nested child it returns that deeply nested child", () =>  {
            let childThread2 : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 3,
                depth: 1,
                geneSets : [],
                childThreads : [ ]
            }
            let childThread1 : ThreadD3nodeInterface = {
                debugText : "level 1",
                id: 2,
                depth: 1,
                geneSets : [],
                childThreads : [ childThread2 ]
            };

            let rootThread : ThreadD3nodeInterface = {
                debugText : "level 0",
                id: 1,
                depth: 0,
                geneSets : [],
                childThreads : [ childThread1 ]
            };

            let target = new ThreadViewDataset(rootThread);

            let result = target.findThreadById(3);

            expect(result).toEqual(childThread2);
        }
    )
        
    })

});