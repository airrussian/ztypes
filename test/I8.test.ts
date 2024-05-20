import { ZTypes } from '..';
import {expect, describe, test} from '@jest/globals';

describe('i8 function', () => {
    test('Положительный тест случай: установка значения в пределах от -128 до 127', () => {
        const rnd = Math.ceil( Math.random() * 0xff - 0xff / 2 );
        const result = ZTypes.I8(rnd).getValue();
        expect(result).toEqual(rnd);
    });

    test('Отрицательный тест случай: установка значения меньше -129', () => {
        expect(() => {
            ZTypes.I8(-129).getValue();
        }).toThrow();        
    });

    test('Отрицательный тест случай: установка значения больше 128', () => {
        expect(() => {
            ZTypes.I8(128).getValue();
        }).toThrow();        
    });
    
    test('Нижняя граница: Установка -128', () => {
        const result = ZTypes.I8(0).getValue();
        expect(result).toEqual(0);
    })

    test('Верхняя граница: Установка 127', () => {
        const result = ZTypes.I8(127).getValue();
        expect(result).toEqual(127);
    })
});

