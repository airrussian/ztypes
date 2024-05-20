import { ZTypes } from "..";
import {expect, describe, test} from '@jest/globals';

describe('u16 function', () => {
    test('Установка значения в пределах от 0 до 65535', () => {
        const rnd = Math.ceil( Math.random() * 0xffff  );
        const result = ZTypes.U16(rnd).getValue();
        expect(result).toEqual(rnd);
    });

    test('Установка значения меньше 0', () => {
        expect(() => {
            ZTypes.U16(-1).getValue();
        }).toThrow();        
    });

    test('Установка значения больше 65535', () => {
        expect(() => {
            ZTypes.U16(65536).getValue();
        }).toThrow();        
    });
    
    test('Нижняя граница: Установка 0', () => {
        const result = ZTypes.U16(0).getValue();
        expect(result).toEqual(0);
    })

    test('Верхняя граница: Установка 65535', () => {
        const result = ZTypes.U16(65535).getValue();
        expect(result).toEqual(65535);
    })
});