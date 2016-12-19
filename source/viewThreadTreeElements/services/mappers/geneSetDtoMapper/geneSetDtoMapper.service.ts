import {ThreadMapThreadDto, GeneSetDto} from '../../../../data/AllDtos';
import {GeneSetD3node} from '../../geneSetD3node';
import {ThreadMapNodeD3node} from '../../threadMapNodeD3node';
import {ConnectionD3node} from '../../connectionD3node';
import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {ThreadMapNodeDtoMapperService} from '../threadMapNodeDtoMapper/threadMapNodeDtoMapper.service';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class GeneSetDtoMapperService {

    constructor(public keyGenerator : KeyGenerator,
        public threadMapNodeDtoMapperService: ThreadMapNodeDtoMapperService) {        
    }

    public convert = (geneSetDto : GeneSetDto) => {

        let result = new GeneSetD3node();
        result.geneSetKeyDto = geneSetDto.geneSetKey;
        result.id = this.keyGenerator.getNextKey();

        result.threadMapNodeD3nodes = new Array<ThreadMapNodeD3node>();
        for(let i = 0; i < geneSetDto.threadMapNodes.length; i++) {
            result.threadMapNodeD3nodes.push(this.threadMapNodeDtoMapperService.convert(geneSetDto.threadMapNodes[i]));
        }

        return result;
    }
}