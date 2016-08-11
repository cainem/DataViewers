
import { ThreadD3nodeInterface } from './threadD3node.interface'

export class ThreadViewDataset {
    public rootThread : ThreadD3nodeInterface;
    findThreadById = (id : number) => {
        return this.findThreadInThreadById(this.rootThread, id);
    }

    public findThreadInThreadById = (currentThread : ThreadD3nodeInterface, id : number) => {
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

    constructor(rootThread : ThreadD3nodeInterface) {
        this.rootThread = rootThread;
    }

}