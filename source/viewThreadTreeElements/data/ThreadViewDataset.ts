import { IThreadViewDataset } from './IThreadViewDataset';
import { IThread } from './IThread';

export class ThreadViewDataset implements IThreadViewDataset {
    public rootThread : IThread;
    findThreadById = (id : number) => {
    }

    public findThreadInThreadById = (currentThread : IThread, id : number) => {
        if (currentThread.id === id) {
            return currentThread;
        }
        currentThread.childThreads.forEach((item : IThread) => {
            let result = this.findThreadInThreadById(item, id);
            if (result) {
                return result;
            }

        });

        //not found
        return null;
    }

    constructor(rootThread : IThread) {
    }

}