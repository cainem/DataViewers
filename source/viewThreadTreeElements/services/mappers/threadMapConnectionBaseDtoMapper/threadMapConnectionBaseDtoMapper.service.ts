import {ThreadMapConnectionBaseDto} from '../../../../data/AllDtos';
import {GeneSetD3node} from '../../geneSetD3node';
import {ConnectionD3node} from '../../connectionD3node';
import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';

export class ThreadMapConnectionBaseDtoMapperService {

    constructor(public keyGenerator : KeyGenerator) {
    }

    public convert(threadMapConnectionBaseDto : ThreadMapConnectionBaseDto) : ConnectionD3node {
        let result = new ConnectionD3node();

        result.id = this.keyGenerator.getNextKey();
        result.threadMapConnectionBaseDto = threadMapConnectionBaseDto;

        return result;
    }
}