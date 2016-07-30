import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {IKeyGenerator} from './IKeyGenerator';
import {ThreadD3Node} from './ThreadD3Node';
import {TransformHelper} from './TransformHelper';
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';

export class TransformThreadMapThreadToThreadD3node {

    constructor(private keyGeneratorService : IKeyGenerator) {
    }

    createThreadD3nodeFromThreadMapThreadDto = (allThreadMapThreadDtos : ThreadMapThreadDtoWithChildren[],
        threadMapThreadDto : ThreadMapThreadDto, depth: number) => {

        let threadD3Node = new ThreadD3Node();
        threadD3Node.depth = depth;
        threadD3Node.id = this.keyGeneratorService.getNextKey();
        threadD3Node.threadMapThread = threadMapThreadDto;
        //threadD3Node.childThreads = TransformHelper.

        return null;

    }    
}