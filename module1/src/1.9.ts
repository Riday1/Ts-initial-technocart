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




}