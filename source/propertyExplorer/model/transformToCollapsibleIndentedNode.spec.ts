import {TransformToCollapsibleIndentedNode} from './transformToCollapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';

describe('TransformToCollapsibleIndentedNode tests', () => {
    describe("transform", () => {
    it("Simple object without any properties, converts to single one level node as expected (1)", () =>  {
        let o = {
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(0);
        expect(result.parent).toBeNull();
        expect(result.name).toEqual("o");
        expect(result.x).toEqual(0);
        expect(result.y).toEqual(0);
        expect(result.value).toBeNull();
        expect(result.isCollapsed).toBeFalsy();
    })

    ,it("Simple object without any properties, converts to single one level node as expected (2)", () =>  {
        let o = {
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("x", o);

        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(0);
        expect(result.parent).toBeNull();
        expect(result.name).toEqual("x");
        expect(result.x).toEqual(0);
        expect(result.y).toEqual(0);
        expect(result.value).toBeNull();
        expect(result.isCollapsed).toBeFalsy();
    })

    ,it("Simple object with one string property, converts to a simple parent-child as expected (1)", () =>  {
        let o = {
            "property1" : "hello"
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.parent).toBeNull();
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].name).toEqual("property1");
        expect(result.collapsedChildren[0].value).toEqual("hello");
        expect(result.collapsedChildren[0].collapsedChildren).toBeNull();
    })

    ,it("Simple object with one string property, converts to a simple parent-child as expected (2)", () =>  {
        let o = {
            "aProperty" : "helloAlso"
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("aProperty");
        expect(result.collapsedChildren[0].value).toEqual("helloAlso");
        expect(result.collapsedChildren[0].collapsedChildren).toBeNull();
    })

    ,it("Simple object with one object property, that object has no properties, converts to a simple parent-child as expected (1)", () =>  {
        let o = {
            "complex" : {}
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("complex");
        expect(result.collapsedChildren[0].value).toBeNull();
        expect(result.collapsedChildren[0].collapsedChildren.length).toEqual(0);
    })

    ,it("Simple object with one number property, converts to a simple parent-child as expected", () =>  {
        let o = {
            "aProperty" : 1
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("aProperty");
        expect(result.collapsedChildren[0].value).toEqual(1);
        expect(result.collapsedChildren[0].collapsedChildren).toBeNull();
    })

    ,it("Simple object with one boolean property, converts to a simple parent-child as expected", () =>  {
        let o = {
            "aBoolProperty" : false
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("aBoolProperty");
        expect(result.collapsedChildren[0].value).toEqual(false);
        expect(result.collapsedChildren[0].collapsedChildren).toBeNull();
    })

    ,it("Simple object with one object property, that object has no properties, converts to a simple parent-child as expected (2)", () =>  {
        let o = {
            "complexProperty" : {}
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("complexProperty");
        expect(result.collapsedChildren[0].value).toBeNull();
        expect(result.collapsedChildren[0].collapsedChildren.length).toEqual(0);
    })

    ,it("Simple object with one object property, that object has one property, converts to a simple parent-child-child as expected", () =>  {
        let o = {
            "complexProperty" : 
            {
                "Number" : 1
            }
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("complexProperty");
        expect(result.collapsedChildren[0].value).toBeNull();
        expect(result.collapsedChildren[0].collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].collapsedChildren[0].parent).toEqual(result.collapsedChildren[0]);
        expect(result.collapsedChildren[0].collapsedChildren[0].id).toEqual(3);
        expect(result.collapsedChildren[0].collapsedChildren[0].name).toEqual("Number");
        expect(result.collapsedChildren[0].collapsedChildren[0].value).toEqual(1);
        expect(result.collapsedChildren[0].collapsedChildren[0].collapsedChildren).toBeNull();
    })
    ,it("Simple object with one object property, that object has one object property, that object has one simple property, converts to a simple parent-child-child-child as expected", () =>  {
        let o = {
            "complexProperty" : 
            {
                "AlsoComplex" : {}
            }
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].name).toEqual("complexProperty");
        expect(result.collapsedChildren[0].value).toBeNull();
        expect(result.collapsedChildren[0].collapsedChildren.length).toEqual(1);
        expect(result.collapsedChildren[0].collapsedChildren[0].parent).toEqual(result.collapsedChildren[0]);
        expect(result.collapsedChildren[0].collapsedChildren[0].id).toEqual(3);
        expect(result.collapsedChildren[0].collapsedChildren[0].name).toEqual("AlsoComplex");
        expect(result.collapsedChildren[0].collapsedChildren[0].value).toBeNull();
        expect(result.collapsedChildren[0].collapsedChildren[0].collapsedChildren.length).toEqual(0);
    })

    ,it("Simple object with two simple properties, produces parent-children result with ids as expected", () =>  {
        let o = {
            "simple1" : 1,
            "simple2" : 2 
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren.length).toEqual(2);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[1].parent).toEqual(result);
        expect(result.collapsedChildren[1].id).toEqual(3);
    })

    ,it("Simple object with two properties one complex, one simple, produces parent-children result with ids as expected", () =>  {
        let o = {
            "complex" : {         
            },
            "simple1" : 1,
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[1].parent).toEqual(result);
        expect(result.collapsedChildren[1].id).toEqual(3);
    })

    ,it("Simple object with two properties one complex, one simple, produces parent-children-(child) result with ids as expected", () =>  {
        let o = {
            "complex" : {         
                "simple2" : 2
            },
            "simple1" : 1,
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren[0].id).toEqual(2);
        expect(result.collapsedChildren[0].collapsedChildren[0].id).toEqual(3)
        expect(result.collapsedChildren[1].id).toEqual(4);
    })

    ,it("3 level hierarchy of complex objects, set parent property as expected", () =>  {
        let o = {
            "complex1" : {         
                "complex2" : {                    
                }
            }
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.parent).toBeNull();
        expect(result.id).toEqual(1);
        expect(result.collapsedChildren[0].parent).toEqual(result);
        expect(result.collapsedChildren[0].collapsedChildren[0].parent).toEqual(result.collapsedChildren[0]);
    })

    })
});