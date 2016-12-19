import {ThreadMapNodeDto} from '../../../../data/AllDtos';
import {GeneSetD3node} from '../../geneSetD3node';
import {ThreadMapNodeD3node} from '../../threadMapNodeD3node';
import {ConnectionD3node} from '../../connectionD3node';
import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {PendingConnectionListDtoMapperService} from '../pendingConnectionListDtoMapper/pendingConnectionListDtoMapper.service';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class ThreadMapNodeDtoMapperService {

    constructor(public keyGenerator : KeyGenerator,
        public pendingConnectionListDtoMapperService : PendingConnectionListDtoMapperService) {
    }

    public convert(threadMapNodeDto : ThreadMapNodeDto) : ThreadMapNodeD3node {
        let result = new ThreadMapNodeD3node();
        result.id = this.keyGenerator.getNextKey();
        result.inputConnections = this.pendingConnectionListDtoMapperService.convertInputConnections(threadMapNodeDto.pendingConnectionList);
        result.outputConnections = this.pendingConnectionListDtoMapperService.convertOutputConnections(threadMapNodeDto.pendingConnectionList);
        result.threadMapNodeDto = threadMapNodeDto;
        return result;
    }
}