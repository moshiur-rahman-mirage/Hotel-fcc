import { defineDocumentFieldAction, defineField } from "sanity";

const user={
    name:"user",
    title:"user",
    type:"document",
    fields:[
        defineField({
            name:"isAdmin",
            title :"Is Admin",
            type:"boolean",
            description:"Check if the user is admin",
            initialValue:false,
            validation:Rule=>Rule.required(),
            // readOnly:true,
            // hidden:true
        }),
        defineField({
            name:"name",
            title:"name",
            type:"string",
            description:"Name of the user",
            readOnly:true,
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:'image',
            title:'image',
            type:'url'
        }),
        defineField({
            name:'password',
            type:'string',
            hidden:true
        }),
        defineField({
            name:'about',
            title:'About',
            type:'text',
            description:"A brief description"
        })
    ]
}


export default user;