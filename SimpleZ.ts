import { ZTypes } from ".";
import { Byte } from "./Byte";
import { Z } from "./Z";

/**
 * Элементарный тип представления данных ( числовой )
 */
export default abstract class SimpleZ extends Z {

    public union: boolean = false;

    protected _bits: number;

    set bits(bits: number) {
        this._bits = bits
    }

    get bits(): number {
        return this._bits;
    }

    /**
     * Диапозон допустимых значений
     * @property { min: number, max: number }
     */
    protected range: { min: number, max: number };

    /**
     * Количество байт в структуре
     * @property { number }
     */
    protected bytes: number;

    /**
     * Как представлять структуру в виде знакового или беззнакого числа.
     * Используется в элементрахных типах U8, I8, U16....
     * @property { boolean }
     */
    protected unsigned: boolean;

    setValue( value: number ) {
        if ( value < this.range.min || value > this.range.max )
            throw new RangeError("Выход за диапозон допустимых значений");

        if ( !this._value || this._value.length )
            this._value = new Array<Byte>( this.bytes ).fill( 0x00 );

        this._value = this._value.map((byte: Byte, index: number) => (( value >> 8 * index ) & 0xff) as Byte);

        return this;
    }

    getValue(): number {
        const maxValue = Math.pow( 256, this.bytes );

        let res = this._value.reduce((a: number, byte: Byte, index: number) => a + byte * Math.pow(256, index), 0);
        if ( !this.unsigned && (res >= maxValue / 2)) res = res - maxValue;

        return res;
    }

    public unserialize(array: ZTypes.ZArray): number {
        this._value = bytes.slice(0, this.bytes); 

        if ( this.union ) {

            const properties: string[] = Object.keys( this ).filter( key => this[key as keyof SimpleZ] instanceof Z );
                        
            let value = this.getValue();
            properties.forEach( key => {

                //@ts-ignore
                const property = this[key];

                const bits: number = property._bits;

                const valueBits = value & (Math.pow(2, bits) - 1);
                value = value >> bits;

                // @ts-ignore
                this[key].setValue( valueBits );
            });
        }

        return this.bytes;
    }

    /**
     * Устанавливает значение из входящего массива bytes и возвращает значение как number
     * @param { Array<Byte> } bytes
     * @returns { number } числовое значение
     */
    public fromArray( bytes: Array<Byte> ): number {
        this._value = bytes.slice(0, this.bytes);
        return this.getValue();
    }

    public serialize(): Array<Byte> {
        return this._value;
    }

    public toJSON(): Object {

        if ( this.union ) {

            const keysProperty: string[] = Object.keys( this ).filter( key => 
                this.hasOwnProperty( key ) && this[key as keyof SimpleZ] instanceof Z);
            
            let object: { [key: string]: any } = {};
            keysProperty.forEach( key => {
                //@ts-ignore
                object[ key ] = this[key].toJSON();
            });

            return object;

        }
        return this.getValue();
    }

    public fromJSON( value: any ): void {
        this.setValue( value );
    }

}
