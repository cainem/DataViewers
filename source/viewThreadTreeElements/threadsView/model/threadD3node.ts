import {ThreadMapThreadDto} from '../../../data/generatedTypescript/ThreadMapThreadDto';
import {GeneSetD3node} from '../../threadView/model/geneSetD3node';

/*
    This class represents a (d3) node witin the thread view.
    As wells as the d3 node information it holds the ThreadMapThreadDto, a map of the child threads and
    (a currently empty) representation of the genesets within the thread (TODO)
*/
export class ThreadD3node  {
    geneSets : GeneSetD3node[];    
    childThreads : ThreadD3node[];
    
    threadMapThread : ThreadMapThreadDto

    id : number;
    depth: number;
    y : number;
    x : number;
    debugText: string;    
}