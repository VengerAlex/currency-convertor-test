export const formValue = (value: string | number, quantity: number) => {
    return +(Number(value)).toFixed(quantity)
}