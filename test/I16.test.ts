import {expect, describe, test} from '@jest/globals';
import { ZTypes } from '..';

describe('i16 function', () => {
    test('Установка значения в пределах от -32768 до 32767', () => {
        const rnd = Math.ceil( Math.random() * 0xffff - 0xffff / 2 );
        const result = ZTypes.I16(rnd).getValue();
        expect(result).toEqual(rnd);
    });

    test('Установка значения меньше -32768', () => {
        const v = -32769;
        expect(() => {
            ZTypes.I16(v).getValue();
        }).toThrow();        
    });

    test('Установка значения больше 32767', () => {
        const v = 32768;
        expect(() => {
            ZTypes.I16(v).getValue();
        }).toThrow();        
    });
    
    test('Нижняя граница: Установка -32768', () => {
        const v = -32768;
        const result = ZTypes.I16(v).getValue();
        expect(result).toEqual(v);
    })

    test('Верхняя граница: Установка 32767', () => {
        const v = 32767;
        const result = ZTypes.I16(v).getValue();
        expect(result).toEqual(v);
    })
});