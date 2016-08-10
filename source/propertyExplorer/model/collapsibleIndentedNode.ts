export class CollapsibleIndentedNode {
    name : string;
    children : CollapsibleIndentedNode[];
    isCollapsed : boolean;
    x : number;
    y : number;
    id : number;
    value : string | number | boolean;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.isCollapsed = false;
        this.children = [];
        this.value = null;
    }

}