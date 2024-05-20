import {expect, describe, test} from '@jest/globals';
import { ZTypes } from '..';

describe('u8 function', () => {
    test('Положительный тест случай: установка значения в пределах от 0 до 255', () => {
        const result = ZTypes.U8(128).getValue();
        expect(result).toEqual(128);
    });

    test('Отрицательный тест случай: установка значения меньше 0', () => {
        expect(() => {
            ZTypes.U8(-1).getValue();
        }).toThrow();        
    });

    test('Отрицательный тест случай: установка значения больше 255', () => {
        expect(() => {
            ZTypes.U8(300).getValue();
        }).toThrow();        
    });
    
    test('Нижняя граница: Установка 0', () => {
        const result = ZTypes.U8(0).getValue();
        expect(result).toEqual(0);
    })

    test('Верхняя граница: Установка 255', () => {
        const result = ZTypes.U8(255).getValue();
        expect(result).toEqual(255);
    })
});