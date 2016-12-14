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
//             data.internalGeneSets = new Array<GeneSetDto>();
//             data.internalGeneSets.push(new GeneSetDto());
//             let geneSetKey = new GeneSetKeyDto();
//             data.internalGeneSets[0].geneSetKey = geneSetKey; 
//             data.internalGeneSets[0].geneSetKey.shortFormKey = "123";
//             data.internalGeneSets[0].geneSetKey.longFormKey = "longkey";
//             data.internalGeneSets[0].threadMapNodes = new Array<ThreadMapNodeDto>();
//             let threadMapNodeDto = new ThreadMapNodeDto();
//             data.internalGeneSets[0].threadMapNodes.push(threadMapNodeDto);
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings = new ImplicitThreadMapConnectionSettingsDto()
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.associatedConstant = 1;
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.connectionFunctionType = "connectionFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.createsAnImplicitConnection = true;
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.isConnectedToSearchNode = true;
//             data.internalGeneSets[0].threadMapNodes[0].isSynchronizing = true;
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions = new Array<ThreadMapNodeFunctionDto>();
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions.push(new ThreadMapNodeFunctionDto());
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions[0].associatedConstant = 123;
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions[0].nodeFunctionType = "nodeFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].nodeKey = new WoollyKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].nodeKey.internalKey = 123;
//             data.internalGeneSets[0].threadMapNodes[0].nodeKey.keyLength = 5;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList = new PendingConnectionListDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections = new Array<ThreadMapConnectionBaseDto>();
//             let inputConnectionThreadMapConnectionBaseDto = new ThreadMapConnectionBaseDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections.push(inputConnectionThreadMapConnectionBaseDto);
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].associatedConstant = 123;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].connectionFunctionType = "connectionFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].geneSetSearchKey = new GeneSetKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].geneSetSearchKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].geneSetSearchKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].isConnectedToSearchedForNode = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].newThreadThreadMapThreadKeyPosition = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapConnectionType = "threadMapConnectionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore = new ThreadMapNodeKeyStoreDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.containingNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.containingNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.containingNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.targetNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.targetNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.targetNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition = new WoollyKeySearchDefinitionDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.isLocal = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchForNodeKey = new WoollyKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchForNodeKey.internalKey = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchForNodeKey.keyLength = 2;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchRange = 1;

//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections = new Array<ThreadMapConnectionBaseDto>();
//             let outputConnectionThreadMapConnectionBaseDto = new ThreadMapConnectionBaseDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections.push(outputConnectionThreadMapConnectionBaseDto);
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].associatedConstant = 123;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].connectionFunctionType = "connectionFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].geneSetSearchKey = new GeneSetKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].geneSetSearchKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].geneSetSearchKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].isConnectedToSearchedForNode = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].newThreadThreadMapThreadKeyPosition = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapConnectionType = "threadMapConnectionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore = new ThreadMapNodeKeyStoreDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.containingNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.containingNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.containingNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.targetNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.targetNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.targetNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition = new WoollyKeySearchDefinitionDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.isLocal = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchForNodeKey = new WoollyKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchForNodeKey.internalKey = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchForNodeKey.keyLength = 2;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchRange = 1;
//             data.internalGeneSets[0].threadMapNodes[0].threadMapNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].threadMapNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].threadMapNodeKey.shortFormKey = "shortFormKey";

//             data.key = new ThreadMapThreadKeyDto();
//             data.key.longForm = "longForm";
//             data.key.shortForm = "shortForm";
//             data.lazyParentThread = new LazyThreadMapThreadReferenceDto();
//             data.lazyParentThread.isConnected = true;
//             data.lazyParentThread.targetThreadMapThread = new ThreadMapThreadDto();

//             // TODO - is there really any need to this lazy parent thread dto to have have complete copy of the parent thread?

//             data.lifeManager = new ThreadLifeManagerDto();
//             data.lifeManager.ageOfThread = 1;
//             data.lifeManager.remainingLife = 2;
//             data.lifeManager.threadPosition = new ThreadPositionDto();
//             data.lifeManager.threadPosition.depth = 1;
//             data.lifeManager.threadPosition.isUpperNext = true;
//             data.lifeManager.threadPosition.lowerRange = new RangeDto();
//             data.lifeManager.threadPosition.lowerRange.lowerInclusive = 1;
//             data.lifeManager.threadPosition.lowerRange.upperInclusive = 2;
//             data.lifeManager.threadPosition.position = 3;
//             data.lifeManager.threadPosition.upperRange = new RangeDto();
//             data.lifeManager.threadPosition.upperRange.lowerInclusive = 1;
//             data.lifeManager.threadPosition.upperRange.upperInclusive = 2;

//             let result = target.convert(data); 
//             expect(result).not.toBeNull();
//             expect(result.length).toBe(1);
//             expect(result[0].id).toBe(1);
//             expect(result[0].geneSetKeyDto).toBe(geneSetKey);
//             expect(result[0].threadMapNodeD3nodes).not.toBeNull();
//             expect(result[0].threadMapNodeD3nodes.length).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].id).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections).not.toBe(null);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections.length).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections[0].id).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections[0].threadMapConnectionBaseDto).toBe(inputConnectionThreadMapConnectionBaseDto);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections).not.toBe(null);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections.length).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections[0].id).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections[0].threadMapConnectionBaseDto).toBe(outputConnectionThreadMapConnectionBaseDto);
//             expect(result[0].threadMapNodeD3nodes[0].threadMapNodeDto).toBe(data);
//         }),

//         it("when selected thread map contains a simple geneset properties set as expected (2)", () =>  {
//             let target = new ConvertToGeneSetD3Nodes();
//             let data = new ThreadMapThreadDto()

//             data.internalGeneSets = new Array<GeneSetDto>();
//             data.internalGeneSets.push(new GeneSetDto());
//             let geneSetKey = new GeneSetKeyDto();
//             data.internalGeneSets[0].geneSetKey = geneSetKey; 
//             data.internalGeneSets[0].geneSetKey.shortFormKey = "123";
//             data.internalGeneSets[0].geneSetKey.longFormKey = "longkey";
//             data.internalGeneSets[0].threadMapNodes = new Array<ThreadMapNodeDto>();
//             let threadMapNodeDto = new ThreadMapNodeDto();
//             data.internalGeneSets[0].threadMapNodes.push(threadMapNodeDto);
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings = new ImplicitThreadMapConnectionSettingsDto()
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.associatedConstant = 1;
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.connectionFunctionType = "connectionFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.createsAnImplicitConnection = true;
//             data.internalGeneSets[0].threadMapNodes[0].implicitThreadMapConnectionSettings.isConnectedToSearchNode = true;
//             data.internalGeneSets[0].threadMapNodes[0].isSynchronizing = true;
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions = new Array<ThreadMapNodeFunctionDto>();
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions.push(new ThreadMapNodeFunctionDto());
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions[0].associatedConstant = 123;
//             data.internalGeneSets[0].threadMapNodes[0].nodeFunctions[0].nodeFunctionType = "nodeFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].nodeKey = new WoollyKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].nodeKey.internalKey = 123;
//             data.internalGeneSets[0].threadMapNodes[0].nodeKey.keyLength = 5;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList = new PendingConnectionListDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections = new Array<ThreadMapConnectionBaseDto>();
//             let inputConnectionThreadMapConnectionBaseDto = new ThreadMapConnectionBaseDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections.push(inputConnectionThreadMapConnectionBaseDto);
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].associatedConstant = 123;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].connectionFunctionType = "connectionFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].geneSetSearchKey = new GeneSetKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].geneSetSearchKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].geneSetSearchKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].isConnectedToSearchedForNode = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].newThreadThreadMapThreadKeyPosition = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapConnectionType = "threadMapConnectionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore = new ThreadMapNodeKeyStoreDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.containingNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.containingNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.containingNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.targetNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.targetNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].threadMapNodeKeyStore.targetNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition = new WoollyKeySearchDefinitionDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.isLocal = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchForNodeKey = new WoollyKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchForNodeKey.internalKey = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchForNodeKey.keyLength = 2;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0].woollyKeySearchDefinition.searchRange = 1;

//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections = new Array<ThreadMapConnectionBaseDto>();
//             let outputConnectionThreadMapConnectionBaseDto = new ThreadMapConnectionBaseDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections.push(outputConnectionThreadMapConnectionBaseDto);
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].associatedConstant = 123;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].connectionFunctionType = "connectionFunctionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].geneSetSearchKey = new GeneSetKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].geneSetSearchKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].geneSetSearchKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].isConnectedToSearchedForNode = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].newThreadThreadMapThreadKeyPosition = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapConnectionType = "threadMapConnectionType";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore = new ThreadMapNodeKeyStoreDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.containingNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.containingNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.containingNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.targetNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.targetNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].threadMapNodeKeyStore.targetNodeKey.shortFormKey = "shortFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition = new WoollyKeySearchDefinitionDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.isLocal = true;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchForNodeKey = new WoollyKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchForNodeKey.internalKey = 1;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchForNodeKey.keyLength = 2;
//             data.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0].woollyKeySearchDefinition.searchRange = 1;
//             data.internalGeneSets[0].threadMapNodes[0].threadMapNodeKey = new ThreadMapNodeKeyDto();
//             data.internalGeneSets[0].threadMapNodes[0].threadMapNodeKey.longFormKey = "longFormKey";
//             data.internalGeneSets[0].threadMapNodes[0].threadMapNodeKey.shortFormKey = "shortFormKey";

//             data.key = new ThreadMapThreadKeyDto();
//             data.key.longForm = "longForm";
//             data.key.shortForm = "shortForm";
//             data.lazyParentThread = new LazyThreadMapThreadReferenceDto();
//             data.lazyParentThread.isConnected = true;
//             data.lazyParentThread.targetThreadMapThread = new ThreadMapThreadDto();

//             // TODO - is there really any need to this lazy parent thread dto to have have complete copy of the parent thread?

//             data.lifeManager = new ThreadLifeManagerDto();
//             data.lifeManager.ageOfThread = 1;
//             data.lifeManager.remainingLife = 2;
//             data.lifeManager.threadPosition = new ThreadPositionDto();
//             data.lifeManager.threadPosition.depth = 1;
//             data.lifeManager.threadPosition.isUpperNext = true;
//             data.lifeManager.threadPosition.lowerRange = new RangeDto();
//             data.lifeManager.threadPosition.lowerRange.lowerInclusive = 1;
//             data.lifeManager.threadPosition.lowerRange.upperInclusive = 2;
//             data.lifeManager.threadPosition.position = 3;
//             data.lifeManager.threadPosition.upperRange = new RangeDto();
//             data.lifeManager.threadPosition.upperRange.lowerInclusive = 1;
//             data.lifeManager.threadPosition.upperRange.upperInclusive = 2;

//             let result = target.convert(data); 
//             expect(result).not.toBeNull();
//             expect(result.length).toBe(1);
//             expect(result[0].id).toBe(1);
//             expect(result[0].geneSetKeyDto).toBe(geneSetKey);
//             expect(result[0].threadMapNodeD3nodes).not.toBeNull();
//             expect(result[0].threadMapNodeD3nodes.length).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].id).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections).not.toBe(null);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections.length).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections[0].id).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].inputConnections[0].threadMapConnectionBaseDto).toBe(inputConnectionThreadMapConnectionBaseDto);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections).not.toBe(null);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections.length).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections[0].id).toBe(1);
//             expect(result[0].threadMapNodeD3nodes[0].outputConnections[0].threadMapConnectionBaseDto).toBe(outputConnectionThreadMapConnectionBaseDto);
//             expect(result[0].threadMapNodeD3nodes[0].threadMapNodeDto).toBe(data);
//         })


//     })
// });