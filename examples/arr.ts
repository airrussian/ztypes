import { ZTypes } from "..";

let arr: ZTypes.ZArray = new ZTypes.ZArray([1, 2, 3, 255, 5, 6, 7, 8, 9]);

console.log( "U8=%d", arr.U8(3).getValue() );
console.log( "U16=%d", arr.U16(2).getValue() );
console.log( "U32=%d", arr.U32(0).getValue() );
console.log( "I8=%d", arr.I8(3).getValue() );
console.log( "I16=%d", arr.I16(2).getValue() );
console.log( "I32=%d", arr.I32(0).getValue() );

let a = ZTypes.U8(10);
console.log( a.toJSON() ); 

