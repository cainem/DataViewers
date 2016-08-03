import {ThreadD3nodeInterface} from './threadD3node.interface';
import {ThreadMapThreadDto} from '../../data/generatedTypescript/ThreadMapThreadDto';
import {GeneSetD3node} from './geneSetD3node';

export class ThreadD3node implements ThreadD3nodeInterface {
    geneSets : GeneSetD3node[];    
    childThreads : ThreadD3nodeInterface[];
    
    threadMapThread : ThreadMapThreadDto

    id : number;
    depth: number;
    y : number;
    x : number;
    debugText: string;    
}