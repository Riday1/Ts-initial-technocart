


{

    //  Union Types 

    // type FrontendDeveloper = 'Fakibaz Developer' | 'Junior Developer'
    // type FullStackDeveloper = 'FrontEnd Develoepr ' | 'Expert Developer'

    // type Developer = FrontendDeveloper | FullStackDeveloper

    // const newDeveloper: FrontendDeveloper = 'Fakibaz Developer'



    // types alias 
    type User = {
        name: string,
        email: string,
        gender: "male" | 'female' // union type
    }

    const rakib: User = {
        name: 'rakib',
        email: 'raking@rakiba.com',
        gender: 'male'
    }


    // intersection 
    type FrontEndDeveloper = {
        skills: string[];
        designation1: string,
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: string
    }

    type Developer = FrontEndDeveloper & BackendDeveloper

    const employe: Developer = {
        skills: ["html" , "css" , "javascript"],
        designation1: "frontend Developer",
        designation2: 'Backend Developer'
    }


}

