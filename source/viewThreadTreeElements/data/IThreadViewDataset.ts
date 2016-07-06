import { IThread } from './IThread'

export interface IThreadViewDataset {
    rootThread : IThread;
    findThreadById : (id : number) => IThread;    
}