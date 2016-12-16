import {GeneSetDtoMapperService} from './geneSetDtoMapper.service';
import {KeyGenerator} from '../../../../service/keyGenerator/keyGenerator';
import {ThreadMapNodeDtoMapperService} from '../threadMapNodeDtoMapper/threadMapNodeDtoMapper.service';
import {ThreadMapNodeD3node} from '../../threadMapNodeD3node';
import {ThreadMapThreadDto, GeneSetDto, GeneSetKeyDto, ThreadMapNodeDto, ThreadPositionDto,
        ImplicitThreadMapConnectionSettingsDto, ThreadMapNodeFunctionDto, ThreadLifeManagerDto,
        WoollyKeyDto, PendingConnectionListDto, ThreadMapConnectionBaseDto, LazyThreadMapThreadReferenceDto,
        ThreadMapNodeKeyStoreDto, ThreadMapNodeKeyDto, WoollyKeySearchDefinitionDto, ThreadMapThreadKeyDto, RangeDto
} from '../../../../data/AllDtos';

describe('GeneSetDtoMapperService tests', () => {
    describe("convert", () => {
        it("when geneSetKey copied as expected", () =>  {
            let keyGenerator : KeyGenerator = <KeyGenerator>
            {
                getNextKey : () => 1
            };
            let threadMapNodeDtoMapperService = <ThreadMapNodeDtoMapperService>{
                convert : (t) => {
                    return new ThreadMapNodeD3node();
                }                
            }

            let target = new GeneSetDtoMapperService(keyGenerator, threadMapNodeDtoMapperService);
            let data = new GeneSetDto();
            data.threadMapNodes = [new ThreadMapNodeDto()];            

            data.geneSetKey = new GeneSetKeyDto();

            let result = target.convert(data);

            expect(result.geneSetKeyDto).toBe(data.geneSetKey);
        }),
        it("when id set from key generator as expected (1)", () =>  {
            let keyGenerator : KeyGenerator = <KeyGenerator>
            {
                getNextKey : () => 1
            };
            let threadMapNodeDtoMapperService = <ThreadMapNodeDtoMapperService>{
                convert : (t) => {
                    return new ThreadMapNodeD3node();
                }                
            }
            
            let target = new GeneSetDtoMapperService(keyGenerator, threadMapNodeDtoMapperService);
            let data = new GeneSetDto();
            data.geneSetKey = new GeneSetKeyDto();
            data.threadMapNodes = [new ThreadMapNodeDto()];            

            let result = target.convert(data);

            expect(result.id).toBe(1);
        }),        
        it("when called id set from key generator as expected (2)", () =>  {
            let keyGenerator : KeyGenerator = <KeyGenerator>
            {
                getNextKey : () => 2
            };
            let threadMapNodeDtoMapperService = <ThreadMapNodeDtoMapperService>{
                convert : (t) => {
                    return new ThreadMapNodeD3node();
                }                
            }

            let target = new GeneSetDtoMapperService(keyGenerator, threadMapNodeDtoMapperService);
            let data = new GeneSetDto();
            data.geneSetKey = new GeneSetKeyDto();
            data.threadMapNodes = [new ThreadMapNodeDto()];            

            let result = target.convert(data);

            expect(result.id).toBe(2);
        }),        
        it("when called id set from key generator as expected (2)", () =>  {
            let keyGenerator : KeyGenerator = <KeyGenerator>
            {
                getNextKey : () => 2
            };
            let threadMapNodeDtoMapperService = <ThreadMapNodeDtoMapperService>{
                convert : (t) => {
                    return new ThreadMapNodeD3node();
                }
            }

            let target = new GeneSetDtoMapperService(keyGenerator, threadMapNodeDtoMapperService);
            let data = new GeneSetDto();
            data.geneSetKey = new GeneSetKeyDto();
            data.threadMapNodes = [new ThreadMapNodeDto()];

            let result = target.convert(data);

            expect(result.id).toBe(2);
        }),
        it("when called with a gene with a single threadMapNode ThreadMapNodeDtoMapperService.convert is called to convert the first threadMapNode", () =>  {
            let keyGenerator : KeyGenerator = <KeyGenerator> {
                getNextKey : () => 2
            };
            let wasCalled = false;
            let calledWithThreadMapNodeDto : ThreadMapNodeDto | null = null;
            let returnedThreadMapNodeD3node = new ThreadMapNodeD3node();
            let threadMapNodeDtoMapperService = <ThreadMapNodeDtoMapperService> {
                convert : (threadMapNodeDto : ThreadMapNodeDto) => {
                    calledWithThreadMapNodeDto = threadMapNodeDto;
                    wasCalled = true;        
                    return returnedThreadMapNodeD3node;
                }
            }

            let target = new GeneSetDtoMapperService(keyGenerator, threadMapNodeDtoMapperService);
            let data = new GeneSetDto();
            data.geneSetKey = new GeneSetKeyDto();
            let threadMapNodeDto = new ThreadMapNodeDto();
            data.threadMapNodes = [threadMapNodeDto];

            let result = target.convert(data);

            expect(wasCalled).toBe(true);
            expect(calledWithThreadMapNodeDto).toBe(threadMapNodeDto);
            expect(result.threadMapNodeD3nodes[0] = returnedThreadMapNodeD3node)
        }),
        it("when called with a gene with two threadMapNodes ThreadMapNodeDtoMapperService.convert is called to convert both threadMapNodes", () =>  {
            let keyGenerator : KeyGenerator = <KeyGenerator> {
                getNextKey : () => 2
            };
            let callCount = 0;
            let calledWithThreadMapNodeDtos = new Array<ThreadMapNodeDto>()
            let returnedThreadMapNodeD3node1 = new ThreadMapNodeD3node();
            let returnedThreadMapNodeD3node2 = new ThreadMapNodeD3node();
            let returns = [returnedThreadMapNodeD3node1, returnedThreadMapNodeD3node2];
            let threadMapNodeDtoMapperService = <ThreadMapNodeDtoMapperService> {
                convert : (threadMapNodeDto : ThreadMapNodeDto) => {
                    calledWithThreadMapNodeDtos.push(threadMapNodeDto);
                    callCount++;
                    return returns[callCount - 1];
                }
            }

            let target = new GeneSetDtoMapperService(keyGenerator, threadMapNodeDtoMapperService);
            let data = new GeneSetDto();
            data.geneSetKey = new GeneSetKeyDto();
            let threadMapNodeDto1 = new ThreadMapNodeDto();
            let threadMapNodeDto2 = new ThreadMapNodeDto();
            data.threadMapNodes = [threadMapNodeDto1, threadMapNodeDto2];

            let result = target.convert(data);

            expect(calledWithThreadMapNodeDtos[0]).toBe(threadMapNodeDto1);
            expect(calledWithThreadMapNodeDtos[1]).toBe(threadMapNodeDto2);
            expect(result.threadMapNodeD3nodes[0] = returnedThreadMapNodeD3node1);
            expect(result.threadMapNodeD3nodes[1] = returnedThreadMapNodeD3node2);
        })                                    
    })
});
