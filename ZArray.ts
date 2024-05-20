import { i8, I8 } from "./I8";
import { i16, I16 } from "./I16";
import { i32, I32 } from "./I32";
import { u8, U8 } from "./U8";
import { u16, U16 } from "./U16";
import { u32, U32 } from "./U32";

export class ZArray extends Uint8Array {

    U8( offset: number = 0 ): U8 {
        return u8( this[offset] );
    }

    U16( offset: number = 0 ): U16 {
        return u16( this[offset] + (this[offset + 1] << 8) );
    }

    U32( offset: number = 0 ): U32 {
        return u32( this[offset] + (this[offset + 1] << 8) + (this[offset + 2] << 16) + (this[offset + 3] * Math.pow(2, 24) ) );    
    }
 
    I8(offset: number): I8 {    
        return i8(this[offset] < 0x80 ? this[offset] : (this[offset] - 0x100));
    }
    
    I16(offset: number): I16 {        
        let value = this[offset] + (this[offset + 1] << 8);
        return i16( value < 0x8000 ? value : (value - 0x10000) );
    }
    
    I32(offset: number): I32 {
        let value = this[offset] + (this[offset + 1] << 8) + (this[offset + 2] << 16) + (this[offset + 3] << 24);
        return i32( value < 0x80000000 ? value : (value - 0x100000000) );
    }
}


