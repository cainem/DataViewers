export class CollapsibleIndentedNode {
    name : string;
    children : CollapsibleIndentedNode[];
    isCollapsed : boolean;
    parent : CollapsibleIndentedNode;
    x : number;
    y : number;
    id : number;
    value : string | number | boolean;

    collapsedChildren : CollapsibleIndentedNode[];
    x0 : number;
    y0 : number;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.isCollapsed = false;
        this.children = [];
        this.collapsedChildren = null;
        this.value = null;
        this.parent = null;        
    }

}