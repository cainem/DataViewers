import {ThreadMapThreadDto} from '../../../data/AllDtos';
import {GeneSetD3node} from '../geneSetD3node';
import {ThreadMapNodeD3node} from '../threadMapNodeD3node';
import {ConnectionD3node} from '../connectionD3node';

export class ConvertToGeneSetD3Nodes {
    public convert = (selectedThreadMapThread : ThreadMapThreadDto) => {

        let resultArray = new Array<GeneSetD3node>();

        let geneSetD3node = new GeneSetD3node();
        
        geneSetD3node.id = 1;
        geneSetD3node.geneSetKeyDto = selectedThreadMapThread.internalGeneSets[0].geneSetKey;
        geneSetD3node.threadMapNodeD3nodes = new Array<ThreadMapNodeD3node>()

        let threadMapNodeD3node = new ThreadMapNodeD3node();

        threadMapNodeD3node.id = 1;
        threadMapNodeD3node.inputConnections = new Array<ConnectionD3node>();
        threadMapNodeD3node.outputConnections = new Array<ConnectionD3node>();

        let inputConnection = new ConnectionD3node();
        inputConnection.id = 1;
        inputConnection.threadMapConnectionBaseDto = selectedThreadMapThread.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.inputConnections[0];

        let outputConnection = new ConnectionD3node();
        outputConnection.id = 1;
        outputConnection.threadMapConnectionBaseDto = selectedThreadMapThread.internalGeneSets[0].threadMapNodes[0].pendingConnectionList.outputConnections[0];

        threadMapNodeD3node.threadMapThreadDto = selectedThreadMapThread;
        threadMapNodeD3node.outputConnections.push(outputConnection);
        threadMapNodeD3node.inputConnections.push(inputConnection);
        geneSetD3node.threadMapNodeD3nodes.push(threadMapNodeD3node);        
        resultArray.push(geneSetD3node); 

        return new Array<GeneSetD3node>();
    }
}