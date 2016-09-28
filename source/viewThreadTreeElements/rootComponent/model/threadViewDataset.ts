
import { ThreadD3node } from '../../threadsView/model/threadD3node'

/*
    This class is responsible for holding the a reference to the root thread.

    It has methods for finding a given thread by its id. This is possible as the ThreadD3node class holds a threads children
    and therefore it indirectly holds a reference to all of the threads.
*/
export class ThreadViewDataset {
    public rootThread : ThreadD3node;

    findThreadById = (id : number) => {
        return this.findThreadInThreadById(this.rootThread, id);
    }

    public findThreadInThreadById = (currentThread : ThreadD3node, id : number) => {
        if (currentThread.id === id) {
            return currentThread;
        }

        //if the current thread has child threads, search them recursively
        if (currentThread.childThreads) {
            for(let i = 0; i < currentThread.childThreads.length; i++) {
                var recursiveSearch = this.findThreadInThreadById(currentThread.childThreads[i], id);
                if (recursiveSearch !== null) {
                    return recursiveSearch;
                }
            }
        }

        //not found
        return null;
    }

    constructor(rootThread : ThreadD3node) {
        this.rootThread = rootThread;
    }

}