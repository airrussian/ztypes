import SimpleZ from "./SimpleZ";

export class I16 extends SimpleZ {

    protected range = { min: -32768, max: 32767 };

    protected bytes = 2;

    protected unsigned = false;
    
}

export const i16 = ( value: number = 0 ) => new I16().setValue( value );