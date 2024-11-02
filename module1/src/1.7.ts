{

    // spread operator 
    // rest operator 
    // destructuring



    let friend1: string[] = ['riday', 'jon', 'rishad']
    let friend2: string[] = ['shaown', 'mizan', 'mamun']

    friend1.push(...friend2)

    let newFriendList: string[] = [...friend1, ...friend2]

    // insert friends2 array element into friends1 array by using spread operator 
    friends.push(...friend2)




    // make a new array which contain friends1 and friends2 array element
    const newFriends: string[] = [...friend1, ...friend2]


    // use spread operator in object
    let teacher1 = {
        math: 'riday',
        physics: 'rounok',
        english: 'Tushar '
    }

    let teacher2 = {
        bangla: 'rishad',
        history: 'kamal',
        higherMath: 'salam'
    }


    let teacherList = {
        ...teacher1,
        ...teacher2
    }


    // another example of object spread operation

    const branch1 = {
        manager: 'riday',
        productManager: 'sakib',
        accountant: 'sohel'
    }

    const branch2 = {
        supplier: 'rashed',
        admin: 'sohel'
    }

    const newBranch = {
        ...branch1,
        ...branch2
    }





    // Rest operator 

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(friend))
    }


    greetFriends('sohel', 'sakib', 'ratul', 'sakib')


    // 









}