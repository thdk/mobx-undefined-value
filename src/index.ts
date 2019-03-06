export const UndefinedValue = { value: undefined };
export type Undefined = typeof UndefinedValue;

export const isUndefinedValue = (value: any): value is Undefined =>  {
    return value === UndefinedValue;
}