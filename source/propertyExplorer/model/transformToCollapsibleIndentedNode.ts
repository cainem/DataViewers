import {Injectable} from '@angular/core'; 
import {CollapsibleIndentedNode} from './collapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';
import {JsonTransformationInterface} from '../../service/JsonTransformationService';


@Injectable()
export class TransformToCollapsibleIndentedNode implements JsonTransformationInterface {

    constructor(private _keyGenerator : KeyGenerator) {
    }

    transform : (name : string, json : any) => CollapsibleIndentedNode = (name : string, json :any) => {
        let result = new CollapsibleIndentedNode();
        result.id = this._keyGenerator.getNextKey();
        result.name = name;

        for(let key in json) {
            if (json.hasOwnProperty(key)) {
                let type = typeof json[key];
                let value = json[key];
                if (type === "string" || type === "number" || type === "boolean")
                {
                    // is a simple type, create a leaf node with a value
                    let child = new CollapsibleIndentedNode();
                    child.id = this._keyGenerator.getNextKey();
                    child.name = key;
                    child.value = value;
                    child.parent = result;
                    // this is a leaf node; it has no children
                    child.collapsedChildren = null;                    
                    result.collapsedChildren.push(child);
                }
                else
                {
                    // is a complex type, create a branch node
                    let child = this.transform(key, value)
                    child.parent = result;
                    result.collapsedChildren.push(child);
                }
            }
        }

        return result;
    }

    transformJson = (json :any) => {
        return this.transform("object", json);
    }    	


}