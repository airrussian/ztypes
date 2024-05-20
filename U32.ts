import SimpleZ from "./SimpleZ";

export class U32 extends SimpleZ {

    protected range = { min: 0, max: 4294967295 };

    protected bytes = 4; 

    protected unsigned = true;
    
}

export const u32 = ( value: number = 0 ) => new U32().setValue( value );