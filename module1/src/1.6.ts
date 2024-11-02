{
    // functions in typescript


    function add(a: number, b: number): number {
        return a + b;
    }

    function subtract(num1: number, num2: number): number {
        if (num1 > num2) {
            return num1 - num2
        }
        else {
            return num2 - num1
        }
    }

    function multiplication(num1: number, num2: number) {
        return num1 * num2;
    }

    function division(num1: number, num2: number): number {
        return num1 / num2
    }

    const addTowNumber = (a: number, b: number): number => {
        return a + b;
    }

    const mutiplyTowNumber = (a: number, b: number): number => {
        return a * b
    }

    const square = (num: number): number => {
        return num * num
    }

    const areaOfRectangle = (length: number, width: number): number => {
        return length * width;
    }

    const collection: number[] = [10, 20, 30, 40]
    const newCollection: number[] = collection.map((item: number): number => item * item)

    const id: number[] = [10, 20, 30, 40]
    const newId: number[] = id.filter(id => id !== 10)

    const user = {
        name: 'riday',
        balance: 0,
        add(balance: number): number {
            return this.balance + balance
        }
    }

}