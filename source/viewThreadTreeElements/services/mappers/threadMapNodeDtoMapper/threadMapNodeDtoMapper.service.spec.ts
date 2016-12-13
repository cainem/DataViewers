import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {ThreadMapNodeDtoMapperService} from './threadMapNodeDtoMapper.service';
import {ThreadMapConnectionBaseDto, ThreadMapNodeDto, PendingConnectionListDto} from '../../../../data/AllDtos';
import {PendingConnectionListDtoMapperService} from '../pendingConnectionListDtoMapper/pendingConnectionListDtoMapper.service';
import {ConnectionD3node} from '../../connectionD3node';
import {ThreadMapConnectionBaseDtoMapperService} from '../threadMapConnectionBaseDtoMapper/threadMapConnectionBaseDtoMapper.service';

describe('ThreadMapNodeDtoMapperService tests', () => {
    describe("convert", () => {
        it("upon convertion assigns the id from the key generator (1)", () =>  {
           let keyGenerator = new KeyGenerator();
           keyGenerator.getNextKey = () => 9;

           let pendingConnectionListDtoMapperService : PendingConnectionListDtoMapperService = <any>{
                convertInputConnections : (p) => {
                    return new Array<ConnectionD3node>();
                }
           } 

           let target = new ThreadMapNodeDtoMapperService(keyGenerator, pendingConnectionListDtoMapperService);
           let data = new ThreadMapNodeDto();

           var result = target.convert(data);

           expect(result.id).toBe(9);
        }),
        it("upon convertion assigns the id from the key generator (2)", () =>  {
           let keyGenerator = new KeyGenerator();
           keyGenerator.getNextKey = () => 19;

           let pendingConnectionListDtoMapperService : PendingConnectionListDtoMapperService = <any>{
                convertInputConnections : (p) => {
                    return new Array<ConnectionD3node>();
                }
           } 

           let target = new ThreadMapNodeDtoMapperService(keyGenerator, pendingConnectionListDtoMapperService);

           let data = new ThreadMapNodeDto();

           var result = target.convert(data);

           expect(result.id).toBe(19);
        }),
        it("Convertion calls pendingConnectionListDtoMapper to map input connections", () =>  {
           let keyGenerator = new KeyGenerator();
           
           let pendingConnectionsInput = null;
           let outputArray = new Array<ConnectionD3node>();
           outputArray.push(new ConnectionD3node());

           let pendingConnectionListDtoMapperService : PendingConnectionListDtoMapperService = <any>{
                convertInputConnections : (p) => {
                    pendingConnectionsInput = p;
                    return outputArray;        
                }
           } 

           let target = new ThreadMapNodeDtoMapperService(keyGenerator, pendingConnectionListDtoMapperService);

           let data = new ThreadMapNodeDto();
           data.pendingConnectionList = new PendingConnectionListDto();
           let inputConnections = new Array<ThreadMapConnectionBaseDto>();
           data.pendingConnectionList.inputConnections = inputConnections;

           var result = target.convert(data);

           expect(pendingConnectionsInput).toBe(data.pendingConnectionList);
           expect(result.inputConnections).toBe(outputArray);
        })                       
    })
});