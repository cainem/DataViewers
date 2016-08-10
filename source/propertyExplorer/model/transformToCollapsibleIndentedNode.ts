import {CollapsibleIndentedNode} from './collapsibleIndentedNode';

export class TransformToCollapsibleIndentedNode {

    transform : (name : string, json : any, depth? : number) => CollapsibleIndentedNode = (name : string, json :any, depth? : number) => {

        if (!depth) {
            depth = 1;
        }

        let result = new CollapsibleIndentedNode();
        result.id = depth;
        result.name = name;

        for(let key in json) {
            if (json.hasOwnProperty(key)) {
                let type = typeof json[key];
                let value = json[key];
                if (type === "string" || type === "number" || type === "boolean")
                {
                    let child = new CollapsibleIndentedNode();
                    child.id = ++depth;
                    child.name = key;
                    child.value = value;
                    result.children.push(child);
                }
                else
                {
                    let child = this.transform(key, value, ++depth)
                    result.children.push(child);                    
                }
            }
        }

        return result;
    }
}