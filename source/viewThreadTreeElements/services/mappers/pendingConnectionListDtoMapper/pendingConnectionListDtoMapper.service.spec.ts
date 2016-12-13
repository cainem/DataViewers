import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {PendingConnectionListDtoMapperService} from './pendingConnectionListDtoMapper.service';
import {ThreadMapConnectionBaseDto} from '../../../../data/AllDtos';
import {ThreadMapConnectionBaseDtoMapperService} from '../threadMapConnectionBaseDtoMapper/threadMapConnectionBaseDtoMapper.service';
import {PendingConnectionListDto} from '../../../../data/AllDtos';


describe('threadMapConnectionBaseSdtoMapper.service tests', () => {
    describe("convertOutputConnections", () => {
        it("contains zero output connections returns empty array as expected", () =>  {

            let keyGenerator = new KeyGenerator();
            let threadMapConnectionBaseMapperService  = new ThreadMapConnectionBaseDtoMapperService(keyGenerator);

            let data = new PendingConnectionListDto();
            data.outputConnections = [];

            let target = new PendingConnectionListDtoMapperService(threadMapConnectionBaseMapperService);

            let result = target.convertOutputConnections(data);

            expect(result).not.toBeNull();
            expect(result.length).toBe(0);
        }),
        it("contains one output connections returns one element array as expected", () =>  {

            let keyGenerator = new KeyGenerator();
            let threadMapConnectionBaseMapperService  = new ThreadMapConnectionBaseDtoMapperService(keyGenerator);
            let element1 = new ThreadMapConnectionBaseDto();

            let data = new PendingConnectionListDto();
            data.outputConnections = [
                element1,
            ];

            let target = new PendingConnectionListDtoMapperService(threadMapConnectionBaseMapperService);

            let result = target.convertOutputConnections(data);

            expect(result.length).toBe(1);
            expect(result[0].threadMapConnectionBaseDto).toBe(element1);
            expect(result[0].id).toBe(1);
        }),
    describe("convertInputConnections", () => {
        it("contains one output connections returns one element array as expected", () =>  {        
            let keyGenerator = new KeyGenerator();
            let threadMapConnectionBaseMapperService  = new ThreadMapConnectionBaseDtoMapperService(keyGenerator);
            let element1 = new ThreadMapConnectionBaseDto();

            let data = new PendingConnectionListDto();
            data.inputConnections = [
                element1,
            ];

            let target = new PendingConnectionListDtoMapperService(threadMapConnectionBaseMapperService);

            let result = target.convertInputConnections(data);

            expect(result.length).toBe(1);
            expect(result[0].threadMapConnectionBaseDto).toBe(element1);
            expect(result[0].id).toBe(1);
            
        }
        )
        }
        )
    })
});