import {LogicalReaderReturnComponent} from '../logicalReaderReturn/logicalReaderReturn.component'
import {LogicalReaderReturnDto} from '../../data/AllDtos';

export class TransformService {
    
    public transform(data :LogicalReaderReturnDto[]) : LogicalReaderReturnComponent[] {        
        for (let value of data) {
            let logicalReaderReturnComponent = new LogicalReaderReturnComponent();
            
            
            for(var prop in value)
            {
                return null;
            }
            
        }        
    }
    
    public static copyProperties<TFrom, TTo extends TFrom>(from : TFrom, to : TTo) : void
    {
        for(let prop in from)
        {
            to["prop"] = from["prop"];
        }
    }
                    
}