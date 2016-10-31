import {ConnectionD3node} from './connectionD3node';
import {ThreadMapThreadDto} from '../../data/AllDtos';

/*
    This class holds the information to draw thread map nodes in d3
*/
export class ThreadMapNodeD3node {

    public threadMapThreadDto : ThreadMapThreadDto;
    public inputConnections : ConnectionD3node[];
    public outputConnections : ConnectionD3node[];

    public index : number = -1
    public id : number;

    get spacingOfThreadMapNode() : number {
        return 10;
    }

    get heightOfThreadMapNode() : number {
        return 50;
    } 

    displacementOfThreadMapNode = () => {
        if (this.index < 0) {
            throw "Index not set";
        }

        return (this.index * (this.heightOfThreadMapNode + this.spacingOfThreadMapNode)) + this.spacingOfThreadMapNode;
    }

}