import { ZTypes } from ".";
import {Byte} from "./Byte";

/**
 * Базовый класс для сериализации и десериализации данных
 */
export abstract class Z {

    /**
     * Текущее значение структуры
     */
    protected _value: Byte[];

    /**
     * Метод преобразует входящий массив байт в объект
     * Метод возвращает количество используемых байт сначала входящего массива
     * @param { Byte[] } bytes
     * @returns { number };
     */
    public unserialize(bytes: ZTypes.ZArray): number {

        let offset = 0;
        Object.keys( this ).map( k => {
            if ( this[k as keyof Z] instanceof Z ) 
                offset += this[k as keyof Z].unserialize(bytes.slice(offset));            
        });
        return offset;
    }

    /**
     * Метод преобразует объект в последовательность байт
     * @returns { Byte[] }
     */
    public serialize(): Array<Byte> {
        let _ret: Array<Byte> = [];
        Object.keys( this ).map( k => {
            //@ts-ignore
            if ( this[k] instanceof Z ) {
                //@ts-ignore
                _ret = _ret.concat(this[k].serialize());
            }
        });
        return _ret;
    }

    public toJSON(): Object {

        let _ret = {};

        Object.keys( this ).map( k => {
            // @ts-ignore
            if ( this[k] instanceof Z ) {
                // @ts-ignore
                _ret[k] = this[k].toJSON()
            }
        });

        return _ret;
    }

    public fromJSON( json: Object ): void {
        // @ts-ignore
        Object.keys( this ).filter( k => this[k] instanceof Z ).forEach( key => {
            // @ts-ignore
            if ( json[key] !== undefined ) this[key].fromJSON( json[key] );
        });
        console.log( this );
    }

    compare( typeZ: Z ): boolean {

        const arr1 = this.serialize(), arr2 = typeZ.serialize();

        return ( arr1.length === arr2.length )
            && arr1.reduce( (res: boolean, byte: Byte, index: number) =>
                res && (byte === arr2[index]), true);
    }

    getProperties(): Z[] {
        return Object.keys( this ).filter( k => {
            // @ts-ignore
            return this[k] instanceof Z 
        }).map( k => {
            // @ts-ignore
            return this[k] as Z 
        });        
    }


}
