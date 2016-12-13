import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {ThreadMapConnectionBaseDtoMapperService} from './threadMapConnectionBaseDtoMapper.service';
import {ThreadMapConnectionBaseDto} from '../../../../data/AllDtos';

describe('threadMapConnectionBaseSdtoMapper.service tests', () => {
    describe("convert", () => {
        it("upon convertion assigns the id from the key generator (1)", () =>  {

            let keyGenerator = new KeyGenerator();
            keyGenerator.getNextKey = () => 9;

            let target = new ThreadMapConnectionBaseDtoMapperService(keyGenerator);

            let data = new ThreadMapConnectionBaseDto();

            var result = target.convert(data);

            expect(result.id).toBe(9);
        }),
        it("upon convertion assigns the id from the key generator (2)", () =>  {

            let keyGenerator = new KeyGenerator();
            keyGenerator.getNextKey = () => 10;

            let target = new ThreadMapConnectionBaseDtoMapperService(keyGenerator);

            let data = new ThreadMapConnectionBaseDto();

            var result = target.convert(data);

            expect(result.id).toBe(10);
        })
        it("upon convertion assigns the threadMapConnectionBaseDto used to create it", () =>  {

            let keyGenerator = new KeyGenerator();

            let target = new ThreadMapConnectionBaseDtoMapperService(keyGenerator);

            let data = new ThreadMapConnectionBaseDto();

            var result = target.convert(data);

            expect(result.threadMapConnectionBaseDto).toBe(data);
        })
    })
});