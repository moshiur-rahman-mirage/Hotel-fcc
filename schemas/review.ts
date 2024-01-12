import { defineField } from "sanity";


const review={
    name:'review',
    title:'review',
    type:'document',
    fields:[
        defineField({
            name:'user',
            title:'user',
            type:'reference',
            to:[{type:'user'}],
            validation:Rule=>Rule.required()
        }),
        defineField({
            name:'hotelRoom',
            title:'Hotel Room',
            type:'reference',
            to:[{type:'hotelRoom'}],
            validation:Rule=>Rule.required()
        }),
        defineField({
            name:'text',
            title:'Review text',
            type:'text',
            validation:Rule=>Rule.required()
        }),
        defineField({
            name:'userRating',
            title:'User Rating',
            type:'number',
            validation:Rule=>Rule.required().min(1).max(5).error("Rating must be between 1 & 5.")
        }),
    ]
}

export default review;