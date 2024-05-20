import { Byte } from "./Byte";
import SimpleZ from "./SimpleZ";

export class I32 extends SimpleZ {

    protected range = { min: -2147483648, max: 2147483647 };

    protected bytes = 4;

    protected unsigned = false;
    
} 

export const i32 = ( value: number = 0 ) => new I32().setValue( value );