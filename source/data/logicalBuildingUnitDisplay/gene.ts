import {ILogicalReaderReturn} from './logicalReaderReturnDto'

export class Gene {
    public logicalReaderReturns : ILogicalReaderReturn[];
    
    constructor() {
        this.logicalReaderReturns = [];
    }
    
}