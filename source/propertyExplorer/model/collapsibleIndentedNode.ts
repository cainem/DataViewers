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

    constructor() {
        this.x = 0;
        this.y = 0;
        this.isCollapsed = false;
        this.children = null;
        this.collapsedChildren = [];
        this.value = null;
        this.parent = null;        
    }

}