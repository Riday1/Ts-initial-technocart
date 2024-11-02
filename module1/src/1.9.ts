{


    // Alias in typescript

    // const student1: {
    //     name: string;
    //     age: number;
    //     phoneNumber: string;
    //     address: string;
    //     isMarred: boolean
    // } = {
    //     name: 'riday',
    //     age: 26,
    //     phoneNumber: '32323232323',
    //     address: 'dhaka',
    //     isMarred: false
    // }

    // const student2: {
    //     name: string;
    //     age: number,
    //     address: string,
    //     isMarred: boolean,
    // } = {
    //     name: "sohel",
    //     age: 28,
    //     address: 'nikunjo-02',
    //     isMarred: false
    // }


    // Type Alias : define types in a central position , then use where u want 

    type Student = {
        name: string;
        age?: number; // optional type
        address: string;
        phoneNumber: string;
        isMarred: boolean
    }


    // here we are using "Student" Type Alias
    const student3: Student = {
        name: 'shohel',
        age: 28,
        address: 'dhaka',
        phoneNumber: '332323232',
        isMarred: false

    }

    const student4: Student = {
        name: 'sakib',
        address: 'narayongonj',
        phoneNumber: '323232232',
        isMarred: false
    }

    const student5: Student = {
        name: 'dipu',
        age: 45,
        address: 'narayongonj',
        phoneNumber: '9898323',
        isMarred: true
    }


    // Type alias for function

    type Add = (num1: number, num2: number) => number
    type Multiply = (num1: number, num2: number) => number
    type SubTract = (num1: number, num2: number) => number

    const subtraction: SubTract = (num1, num2) => num1 - num2
    const multiply: Multiply = (num1, num2) => num1 * num2
    const add: Add = (num1, num2) => num1 + num2




}