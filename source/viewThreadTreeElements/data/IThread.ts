import { IGeneSet } from './IGeneSet';

export interface IThread {
    geneSets : IGeneSet[];    
    childThreads : IThread[]
}