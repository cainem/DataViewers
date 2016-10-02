import {ThreadMapConnectionBaseDto} from '../../../data/AllDtos';

/*
    This class will contain the information necessary to draw a connection on the thread view
*/
export class ConnectionD3node {
    threadMapConnectionBaseDto : ThreadMapConnectionBaseDto;
    id : number;
    x : number;
    y: number;
}