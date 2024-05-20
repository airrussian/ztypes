import SimpleZ from "./SimpleZ";

export interface BinaryStruct {
    [key: string]: number
}

export class Binary {

    private _value: SimpleZ;

    constructor( value: SimpleZ ) {
        this._value = value
    }

    toString() {
        return this._value.getValue().toString( 2 )    
    }

    toArray(): number[] {
        return this.toString().split("").map( s => parseInt( s ) );
    }

    toStruct( struct: BinaryStruct): BinaryStruct {
        const res: BinaryStruct = {};

        const value = this._value.getValue();

        let index = 0;
        Object.keys( struct ).forEach( key => {
            res[ key ] = ((value >>> index) & ( Math.pow( 2, struct[key] ) - 1 ));
            index += struct[ key ];
        });

        return res;
    }

}

export const binary = ( s: SimpleZ ) => new Binary( s );