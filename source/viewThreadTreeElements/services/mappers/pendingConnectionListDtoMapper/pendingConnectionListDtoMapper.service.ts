import {ThreadMapNodeDto, PendingConnectionListDto, ThreadMapConnectionBaseDto} from '../../../../data/AllDtos';
import {GeneSetD3node} from '../../geneSetD3node';
import {ThreadMapNodeD3node} from '../../threadMapNodeD3node';
import {ConnectionD3node} from '../../connectionD3node';
import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {ThreadMapConnectionBaseDtoMapperService} from '../threadMapConnectionBaseDtoMapper/threadMapConnectionBaseDtoMapper.service';

export class PendingConnectionListDtoMapperService {

    constructor(private threadMapConnectionBaseMapperService : ThreadMapConnectionBaseDtoMapperService) {        
    }

    public convertOutputConnections : (pendingConnectionListDto : PendingConnectionListDto) => ConnectionD3node[] = (pendingConnectionListDto : PendingConnectionListDto) => {
        return this.convertConnection(pendingConnectionListDto.outputConnections);
    }

    public convertInputConnections : (pendingConnectionListDto : PendingConnectionListDto) => ConnectionD3node[] = (pendingConnectionListDto : PendingConnectionListDto) => {
        return this.convertConnection(pendingConnectionListDto.inputConnections);
    }    

    private convertConnection(threadMapConnectionBaseDtoArray : ThreadMapConnectionBaseDto[]) {
        let result = new Array<ConnectionD3node>()
        for(let i = 0; i < threadMapConnectionBaseDtoArray.length; i++) {
            result.push(this.threadMapConnectionBaseMapperService.convert(threadMapConnectionBaseDtoArray[i]));
        }
        return result;        
    }

}