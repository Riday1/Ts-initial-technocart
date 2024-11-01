// Reference type --> object 

const info = {
    name: 'riday',
    age: 26,
    address: 'khilkhet',
    isMarred: true
}

const userInfo: {
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarred: boolean;
    readonly companyName: "PH" // literal types
} = {
    firstName: "riday",
    lastName: "hossain",
    isMarred: true,
    companyName: "PH"

}
