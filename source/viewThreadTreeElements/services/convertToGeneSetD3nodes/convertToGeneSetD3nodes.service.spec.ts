import {ConvertToGeneSetD3Nodes} from './convertToGeneSetD3nodes.service';

describe('ConvertToGeneSetD3nodesService tests', () => {
    describe("convert", () => {
        it("when selected thread map thread is null returns empty array", () =>  {
            let target = new ConvertToGeneSetD3Nodes();
            let result = target.convert(null); 
            expect(result).not.toBeNull();
        })
    })
});