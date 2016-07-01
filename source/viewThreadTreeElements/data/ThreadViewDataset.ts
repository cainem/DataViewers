import { IThreadViewDataset } from './IThreadViewDataset';
import { IThread } from './IThread';

export class ThreadViewDataset implements IThreadViewDataset {
    public rootThread : IThread;
    findThreadById = (id : number) => {
        return this.findThreadInThreadById(this.rootThread, id);
    }

    public findThreadInThreadById = (currentThread : IThread, id : number) => {
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

    constructor(rootThread : IThread) {
        this.rootThread = rootThread;
    }

}