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
        expect(result.children.length).toEqual(0);
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
        expect(result.children.length).toEqual(0);
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
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("property1");
        expect(result.children[0].value).toEqual("hello");
        expect(result.children[0].children.length).toEqual(0);
    })

    ,it("Simple object with one string property, converts to a simple parent-child as expected (2)", () =>  {
        let o = {
            "aProperty" : "helloAlso"
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("aProperty");
        expect(result.children[0].value).toEqual("helloAlso");
        expect(result.children[0].children.length).toEqual(0);
    })

    ,it("Simple object with one object property, that object has no properties, converts to a simple parent-child as expected (1)", () =>  {
        let o = {
            "complex" : {}
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("complex");
        expect(result.children[0].value).toBeNull();
        expect(result.children[0].children.length).toEqual(0);
    })

    ,it("Simple object with one number property, converts to a simple parent-child as expected", () =>  {
        let o = {
            "aProperty" : 1
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("aProperty");
        expect(result.children[0].value).toEqual(1);
        expect(result.children[0].children.length).toEqual(0);
    })

    ,it("Simple object with one boolean property, converts to a simple parent-child as expected", () =>  {
        let o = {
            "aBoolProperty" : false
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("aBoolProperty");
        expect(result.children[0].value).toEqual(false);
        expect(result.children[0].children.length).toEqual(0);
    })

    ,it("Simple object with one object property, that object has no properties, converts to a simple parent-child as expected (2)", () =>  {
        let o = {
            "complexProperty" : {}
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("complexProperty");
        expect(result.children[0].value).toBeNull();
        expect(result.children[0].children.length).toEqual(0);
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

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("complexProperty");
        expect(result.children[0].value).toBeNull();
        expect(result.children[0].children.length).toEqual(1);
        expect(result.children[0].children[0].id).toEqual(3);
        expect(result.children[0].children[0].name).toEqual("Number");
        expect(result.children[0].children[0].value).toEqual(1);
        expect(result.children[0].children[0].children.length).toEqual(0);
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

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].name).toEqual("complexProperty");
        expect(result.children[0].value).toBeNull();
        expect(result.children[0].children.length).toEqual(1);
        expect(result.children[0].children[0].id).toEqual(3);
        expect(result.children[0].children[0].name).toEqual("AlsoComplex");
        expect(result.children[0].children[0].value).toBeNull();
        expect(result.children[0].children[0].children.length).toEqual(0);
    })

    ,it("Simple object with two simple properties, produces parent-children result with ids as expected", () =>  {
        let o = {
            "simple1" : 1,
            "simple2" : 2 
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children.length).toEqual(2);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[1].id).toEqual(3);
    })

    ,it("Simple object with two properties one complex, one simple, produces parent-children result with ids as expected", () =>  {
        let o = {
            "complex" : {         
            },
            "simple1" : 1,
        };

        let target = new TransformToCollapsibleIndentedNode(new KeyGenerator());

        let result = target.transform("o", o);

        expect(result.id).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[1].id).toEqual(3);
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

        expect(result.id).toEqual(1);
        expect(result.children[0].id).toEqual(2);
        expect(result.children[0].children[0].id).toEqual(3)
        expect(result.children[1].id).toEqual(4);
    })

    })
});