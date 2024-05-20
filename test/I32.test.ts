import { ZTypes } from '..';
import {expect, describe, test} from '@jest/globals';

describe('i32 function', () => {
    test('Установка значения в пределах от -2147483648 до 2147483647', () => {
        const rnd = Math.ceil( Math.random() * 0xffff - 0xffff / 2 );
        const result = ZTypes.I32(rnd).getValue();
        expect(result).toEqual(rnd);
    });

    test('Установка значения меньше -2147483648', () => {
        const v = -2147483648 - 1;
        expect(() => {
            ZTypes.I32(v).getValue();
        }).toThrow();        
    });

    test('Установка значения больше 2147483647', () => {
        const v = 2147483647 + 1;
        expect(() => {
            ZTypes.I32(v).getValue();
        }).toThrow();        
    });
    
    test('Нижняя граница: Установка -2147483648', () => {
        const v = -2147483648;
        const result = ZTypes.I32(v).getValue();
        expect(result).toEqual(v);
    })

    test('Верхняя граница: Установка 2147483647', () => {
        const v = 2147483647;
        const result = ZTypes.I32(v).getValue();
        expect(result).toEqual(v);
    })
});