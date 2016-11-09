export class CollapsibleIndentedNode {
    name : string;
    children : CollapsibleIndentedNode[] | undefined;
    isCollapsed : boolean;
    parent : CollapsibleIndentedNode | undefined;
    x : number;
    y : number;
    id : number;
    value : string | number | boolean;

    collapsedChildren : CollapsibleIndentedNode[];

    constructor() {
        this.x = 0;
        this.y = 0;
        this.isCollapsed = false;
        this.children = undefined;
        this.collapsedChildren = [];
        this.value = 0;
        this.parent = undefined;        
    }

}