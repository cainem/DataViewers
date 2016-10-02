import {GeneSetKeyDto} from '../../../data/AllDtos';
import {ThreadMapNodeD3node} from './threadMapNodeD3node';

/*
    This is the class that will be used to drawn a linear view of the nodes within a thread
*/
export class GeneSetD3node { 
    public id : number;
    public sequence: number;

    public geneSetKeyDto : GeneSetKeyDto;
    public threadMapNodeD3nodes : ThreadMapNodeD3node[];

    public x : number;
    public y : number;

    public heightOfGeneSet = (heightOfThreadMapNode : number, spacingOfThreadMapNode : number) => {
        if (!this.threadMapNodeD3nodes || this.threadMapNodeD3nodes.length === 0) {
            // minimum length
            return 10;
        }

        return this.threadMapNodeD3nodes.length * heightOfThreadMapNode + (this.threadMapNodeD3nodes.length - 1) * spacingOfThreadMapNode;
    }

}