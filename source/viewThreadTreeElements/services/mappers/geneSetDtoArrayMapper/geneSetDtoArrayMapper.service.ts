import {Injectable, EventEmitter} from '@angular/core';
import {ThreadMapThreadDto, GeneSetDto} from '../../../../data/AllDtos';
import {GeneSetDtoMapperService} from '../geneSetDtoMapper/geneSetDtoMapper.service';
import {GeneSetD3node} from '../../geneSetD3node';

@Injectable()
export class GeneSetDtoArrayMapperService {

    constructor(public geneSetDtoMapperService : GeneSetDtoMapperService) {
    }

    public convert = (geneSetDtoArray : Array<GeneSetDto>) => {
        let result = new Array<GeneSetD3node>();
        for(let i = 0; i < geneSetDtoArray.length; i++) {
            result.push(this.geneSetDtoMapperService.convert(geneSetDtoArray[i]));
        }
        return result;
    } 
}