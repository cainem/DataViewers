import { IGeneSet } from './IGeneSet';

export interface IThread {
    depth: number;
    geneSets : IGeneSet[];    
    childThreads : IThread[];

    id? : number;
    y? : number;
    x? : number;
    debugText?: string;    
}