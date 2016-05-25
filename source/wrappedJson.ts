
export class WrappedJson {
    parsedJson: string;

    private _unparsedJson: string;
    get unparsedJson(): string {
        return this._unparsedJson;
    }
    set unparsedJson(value: string) {
        if (this._unparsedJson !== value) {
            this._unparsedJson = value;
            try {
                this.parsedJson = JSON.parse(this._unparsedJson);
            }
            catch (e) {
                //console.log(e);
            }
        }
    }
}