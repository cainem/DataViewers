import {CollapsibleIndentedNode} from './collapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';

export class TransformToCollapsibleIndentedNode {

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
                    result.children.push(child);
                }
                else
                {
                    // is a complex type, create a branch node
                    let child = this.transform(key, value)
                    result.children.push(child);                    
                }
            }
        }

        return result;
    }
}