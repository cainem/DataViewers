import {ThreadMapThreadDto} from '../../../data/AllDtos';
import {GeneSetD3node} from '../geneSetD3Node';

export class ConvertToGeneSetD3Nodes {
    public convert = (selectedThreadMapThread : ThreadMapThreadDto) => {
        return new Array<GeneSetD3node>();
    }
}