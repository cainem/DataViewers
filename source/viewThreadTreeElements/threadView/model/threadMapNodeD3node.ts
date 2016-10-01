import {ConnectionD3node} from './connectionD3node';
import {ThreadMapThreadDto} from '../../../data/AllDtos';

/*
    This class holds the information to draw thread map nodes in d3
*/
export class ThreadMapNodeD3node {
    public threadMapThreadDto : ThreadMapThreadDto;
    public inputConnections : ConnectionD3node[];
    public outputConnections : ConnectionD3node[];

    public id : number;
}