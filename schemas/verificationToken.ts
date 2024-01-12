import { defineField } from "sanity";

const verificationToken={
    name:'verification-token',
    title:'Verification Token',
    type:'document',
    fields:[
        defineField({
            name:'identifier',
            title:'identifier',
            type:'string'
        }),
        defineField({
            name:'token',
            title:'token',
            type:'string'
        }),
        defineField({
            name:'expires',
            title:'Expires',
            type:'datetime'
        }),
        
    ]
}

export default verificationToken;