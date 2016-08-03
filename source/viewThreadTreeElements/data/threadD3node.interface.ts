import {ThreadMapThreadDto} from '../../data/generatedTypescript/ThreadMapThreadDto';
import {GeneSetD3node} from './geneSetD3node';

export interface threadD3nodeInterface {
    geneSets : GeneSetD3node[];    
    childThreads : threadD3nodeInterface[];
    
    threadMapThread? : ThreadMapThreadDto

    id : number;
    depth: number;
    y? : number;
    x? : number;
    debugText?: string;    
} 
