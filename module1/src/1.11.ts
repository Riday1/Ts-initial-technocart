{
    // Ternary operator || Optional Chaining || Nullish Coalescing 

    const age: number = 20;

    // if (age >= 18) {
    //     console.log("Adult")
    // }
    // else {
    //     console.log("Child")
    // }




    // by using ternary 
    const isAdult: string = age >= 18 ? "Adult" : " Child"
    console.log({ isAdult })


    // Nullish Coalescing Operator
    // null / undefine ===> decision making


    const isAuthenticate = "";
    const result1 = isAuthenticate ?? "Guest"; // result1 = "" because isAuthenticate is not null/undefine ,
    const result2 = isAuthenticate ? isAuthenticate : "Guest"
    console.log({ result1 }, { result2 })




    // explicit type
    type User = {
        name: string,
        address: {
            city: string,
            road: string;
            presentAddress: string,
            permanentAddress?: string
        }
    }

    const riday: User = {
        name: "riday",
        address: {
            city: "dhaka",
            road: '93',
            presentAddress: "dhaka"
        }
    }
    // optional chaining + Nullish coalescing operator  
    const permanentAddress = riday?.address?.permanentAddress ?? "noe permanent address";
    console.log({ permanentAddress })


}