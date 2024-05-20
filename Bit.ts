export declare type BIT = 0 | 1;

export default class Bit {
    protected bits: number = 1;
    protected unsigned: boolean = false;

    private v: BIT;

    constructor(v: number) {
        this.v = ( v & 0b1 ) ? 1 : 0;
    }
 
    public getValue(): number {
        return this.v as number;
    }
}
