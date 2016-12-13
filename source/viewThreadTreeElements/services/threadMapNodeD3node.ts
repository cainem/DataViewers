import {ConnectionD3node} from './connectionD3node';
import {ThreadMapNodeDto} from '../../data/AllDtos';

/*
    This class holds the information to draw thread map nodes in d3
*/
export class ThreadMapNodeD3node {

    public threadMapNodeDto : ThreadMapNodeDto;
    public inputConnections : ConnectionD3node[];
    public outputConnections : ConnectionD3node[];

    public id : number;

    get spacingOfThreadMapNode() : number {
        return 10;
    }

    get heightOfThreadMapNode() : number {
        return 50;
    } 

    displacementOfThreadMapNode = () => {
        return ((this.id) * (this.heightOfThreadMapNode + this.spacingOfThreadMapNode)) + this.spacingOfThreadMapNode;
    }

}