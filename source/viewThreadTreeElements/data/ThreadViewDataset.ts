
import { IThreadD3node } from './IThreadD3node'

export class ThreadViewDataset {
    public rootThread : IThreadD3node;
    findThreadById = (id : number) => {
        return this.findThreadInThreadById(this.rootThread, id);
    }

    public findThreadInThreadById = (currentThread : IThreadD3node, id : number) => {
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

    constructor(rootThread : IThreadD3node) {
        this.rootThread = rootThread;
    }

}