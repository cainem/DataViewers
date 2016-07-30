import {ThreadMapThreadDto} from '../../data/generatedTypescript/ThreadMapThreadDto';
import {GeneSetD3node} from './geneSetD3node';

export interface IThreadD3node {
    geneSets : GeneSetD3node[];    
    childThreads : IThreadD3node[];
    
    threadMapThread? : ThreadMapThreadDto

    id : number;
    depth: number;
    y? : number;
    x? : number;
    debugText?: string;    
} 
