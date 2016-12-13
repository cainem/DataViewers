import {ThreadMapNodeDto} from '../../../../data/AllDtos';
import {GeneSetD3node} from '../../geneSetD3node';
import {ThreadMapNodeD3node} from '../../threadMapNodeD3node';
import {ConnectionD3node} from '../../connectionD3node';
import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {PendingConnectionListDtoMapperService} from '../pendingConnectionListDtoMapper/pendingConnectionListDtoMapper.service';

export class ThreadMapNodeDtoMapperService {

    constructor(public keyGenerator : KeyGenerator,
        public pendingConnectionListDtoMapperService : PendingConnectionListDtoMapperService) {
    }

    public convert(threadMapThreadDto : ThreadMapNodeDto) : ThreadMapNodeD3node {
        let result = new ThreadMapNodeD3node();
        result.id = this.keyGenerator.getNextKey();
        result.inputConnections = this.pendingConnectionListDtoMapperService.convertInputConnections(threadMapThreadDto.pendingConnectionList);
        return result;
    }
}