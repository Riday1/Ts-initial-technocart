{


    // destructuring 
    // object destructuring 

    const user = {
        id: 345,
        name: {
            firstName: 'riday',
            lastName: 'hossain',
        },
        contactNo: '01232323',
        address: 'Africa'
    }

    const { contactNo, name: { firstName } } = user


    // array destructuring 
    const Names = ['riday', 'sohel', 'suad', 'maruf', 'sakib']
    const [, , student, ...rest] = Names

    // another example
    const employeeList = ['riday', 'sakib', 'tamim', 'mushfir', 'sabit']
    const [,,bestEmployee, ...restEmployee] = employeeList;
}