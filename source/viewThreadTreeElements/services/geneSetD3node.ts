import {GeneSetKeyDto} from '../../data/AllDtos';
import {ThreadMapNodeD3node} from './threadMapNodeD3node';

/*
    This is the class that will be used to drawn a linear view of the nodes within a thread
*/
export class GeneSetD3node { 
    private cachedHeightOfGeneSet : number = -1;

    public id : number;
    public index: number;

    public geneSetKeyDto : GeneSetKeyDto;
    public threadMapNodeD3nodes : ThreadMapNodeD3node[];

    public x : number;
    public y : number;

    get spacingOfGeneSets() : number {
        return 10;
    }

    public heightOfGeneSet = () => {

        if (this.cachedHeightOfGeneSet !== -1) {
            return this.cachedHeightOfGeneSet;
        }

        if (!this.threadMapNodeD3nodes || this.threadMapNodeD3nodes.length === 0) {
            // minimum length
            this.cachedHeightOfGeneSet = 10;
            return this.cachedHeightOfGeneSet;
        }

        this.cachedHeightOfGeneSet = (this.threadMapNodeD3nodes.length * this.threadMapNodeD3nodes[0].heightOfThreadMapNode) + 
            ((this.threadMapNodeD3nodes.length + 1) * this.threadMapNodeD3nodes[0].spacingOfThreadMapNode);
        return this.cachedHeightOfGeneSet;
    }

}