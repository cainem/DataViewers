import {GeneSetDtoArrayMapperService} from './geneSetDtoArrayMapper.service';
import {GeneSetDtoMapperService} from '../geneSetDtoMapper/geneSetDtoMapper.service';
import {GeneSetD3node} from '../../geneSetD3node';
import {ThreadMapThreadDto, GeneSetDto} from '../../../../data/AllDtos';

describe('GeneSetDtoArrayMapperServoce tests', () => {
    describe("convert", () => {
        it("when empty array passed in returns empty array", () =>  {
            let geneSetDtoMapperService = <GeneSetDtoMapperService>{};
            let target = new GeneSetDtoArrayMapperService(geneSetDtoMapperService);

            let result = target.convert(new Array<GeneSetDto>())

            expect(result.length).toBe(0);
        }),
        it("when an array of one element is passed in calls geneSetDtoMapperService to do mapping as expected", () =>  {
            
            let calledWithGeneSetDto;
            let returnValue = new GeneSetD3node();
            
            let geneSetDtoMapperService = <GeneSetDtoMapperService>{
                convert : (dto) => {
                    calledWithGeneSetDto = dto;
                    return returnValue;
                }
            };
            let target = new GeneSetDtoArrayMapperService(geneSetDtoMapperService);

            let input = new Array<GeneSetDto>();
            let geneSetDto = new GeneSetDto();
            input.push(geneSetDto);

            let result = target.convert(input);

            expect(result.length).toBe(1);
            expect(result[0]).toBe(returnValue);
            expect(calledWithGeneSetDto).toBe(geneSetDto);
        })
        
    })
});