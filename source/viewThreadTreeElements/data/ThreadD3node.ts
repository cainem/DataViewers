import {ThreadMapThreadDto} from '../../data/generatedTypescript/ThreadMapThreadDto';
import { GeneSetD3node } from './GeneSetD3node';

export interface ThreadD3node {
    geneSets : GeneSetD3node[];    
    childThreads : ThreadD3node[];
    
    threadMapThread? : ThreadMapThreadDto

    id : number;
    depth: number;
    y? : number;
    x? : number;
    debugText?: string;    
}