import { ZTypes } from "..";
import {expect, describe, test} from '@jest/globals';

describe('u32 function', () => {
    test('Установка значения в пределах от 0 до 0xffffffff', () => {
        const rnd = Math.ceil( Math.random() * 0xffffffff  );
        const result = ZTypes.U32(rnd).getValue();
        expect(result).toEqual(rnd);
    });

    test('Установка значения меньше 0', () => {
        expect(() => {
            ZTypes.U32(-1).getValue();
        }).toThrow();        
    });

    test('Установка значения больше 0xffffffff', () => {
        expect(() => {
            ZTypes.U32(0x100000000).getValue();
        }).toThrow();        
    });
    
    test('Нижняя граница: Установка 0', () => {
        const result = ZTypes.U32(0).getValue();
        expect(result).toEqual(0);
    })

    test('Верхняя граница: Установка 0xffffffff', () => {
        const result = ZTypes.U32(0xffffffff).getValue();
        expect(result).toEqual(0xffffffff);
    })


});