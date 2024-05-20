import SimpleZ from "./SimpleZ";

export class U8 extends SimpleZ {

    protected range = { min: 0, max: 255 };

    protected bytes = 1;

    protected unsigned = true;

}

export const u8 = ( value: number = 0 ) => new U8().setValue( value ); 