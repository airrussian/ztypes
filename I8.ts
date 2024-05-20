import { Byte } from "./Byte";
import SimpleZ from "./SimpleZ";

export class I8 extends SimpleZ {

    protected range = { min: -128, max: 127 };

    protected bytes = 1;

    protected unsigned = false;   
    

} 

export const i8 = ( value: number = 0 ) => new I8().setValue( value );