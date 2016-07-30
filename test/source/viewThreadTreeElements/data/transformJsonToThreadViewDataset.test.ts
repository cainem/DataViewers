import { assert } from "chai";
import { ThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/threadViewDataset';
import { IThreadD3node } from '../../../../source/viewThreadTreeElements/data/IThreadD3node';
import { TransformHelper } from '../../../../source/viewThreadTreeElements/data/transformHelper';
import { ThreadMapThreadDto, ThreadMapThreadKeyDto, LazyThreadMapThreadReferenceDto, ThreadMapRootDto } from '../../../../source/data/AllDtos';
import { TransformJsonToThreadViewDataset } from '../../../../source/viewThreadTreeElements/data/transformJsonToThreadViewDataset';

// TODO - fix and put back

// describe('TransformJsonToThreadViewDataset tests', () => {
//     describe("typedTransformJson", () => {
//     it("when null ThreadMapRootDto is passed in returns ThreadViewDataset with null root", () =>  {
//             let target = new TransformJsonToThreadViewDataset(null);

//             let threadMapRootDto = null;

//             var result = target.typedTransformJson(threadMapRootDto);

//             assert.isNull(result.rootThread);
//         })
//     ,it("when null ThreadMapRootDto is passed in returns null", () =>  {
//             let target = new TransformJsonToThreadViewDataset(null);

//             let threadMapRootDto = null;

//             var result = target.typedTransformJson(threadMapRootDto);

//             assert.isNull(result);
//         })
//     })
// });