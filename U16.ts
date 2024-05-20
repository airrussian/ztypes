import SimpleZ from "./SimpleZ";

/**
 * Беззнаковое целое 16 битное число
 */
export class U16 extends SimpleZ {

    /**
     * Диапозон допустимых целых чисел
     */
    protected range = { min: 0, max: 65535 };

    /**
     * Длина занимаемых байт
     */
    protected bytes = 2;

    /**
     * Признак беззнаковости
     */
    protected unsigned = true;

}

/**
 * Фабричная функция, для удобства создания
 * @param value 
 * @returns 
 */
export const u16 = ( value: number = 0 ): U16 => new U16().setValue(value);