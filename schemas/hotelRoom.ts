import { defineDocumentFieldAction, defineField } from "sanity";

const roomType=[
    {title:"Basic",value:"basic"},
    {title:"Luxury",value:"Luxury"},
    {title:"Suit",value:"Suit"}
]

const hotelRoom = {
    name: "hotelRoom",
    title: "Hotel Room",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required().max(50).error('Maximum 50 Character'),
        }),
        defineField({
            name: "slug",
            type: "slug",
            validation: Rule => Rule.required(),
            options: {
                source: 'name',
            }
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'text',
            validation: Rule => Rule.required().min(100).error('Minimum 100 character')
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(100).error('Minimum 100 Dollar')
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
            validation: Rule => Rule.required().min(0),
            initialValue: 0
        }),
        defineField({
            name: 'images',
            title: 'images',
            type: 'array',
            of: [
                {
                    type: 'object', fields: [
                        { name: 'url', type: "url", title: 'URL' },
                        { name: 'file', type: "file", title: 'File' }
                    ]
                }
            ],
            validation: Rule => Rule.required().min(3).error('Minimum of 3 image required'),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'object',
            fields:[
                { name:"url",type:"url" ,title:"url" },
                { name: 'file', type: "file", title: 'File' }
            ],
            validation: Rule => Rule.required().error('cover  image required'),
        }),
        defineField({
            name:'type',
            title:'Room type',
            type:'string',
            options:{
                list:roomType
            },
            validation: Rule => Rule.required(),
            initialValue:'basic'
        }),
        defineField({
            name:'specialNote',
            title:'Special Note',
            type:'text',
            validation: Rule => Rule.required(),
            initialValue:'lorem ipsum dolor sit amet. '
        }),
        defineField({
            name:'dimension',
            title:'Dimension',
            type:'string',
        }),
        defineField({
            name:'numberOfBeds',
            title:'Number of Beds',
            type:'number',
            validation:Rule=>Rule.min(1),
            initialValue:1
        }),

        defineField({ 
            name:"offeredAmenities",
            title:"Offered Amenities",
            type:"array",
            of:[{type:'object',fields:[
                {name:"icon",title:"icon",type:'string'},
                {name:"amenity",title:"Amenity",type:'string'},
            ]}]

        }),
        defineField({
            name:'isBooked',
            title:'is booked',
            type:'boolean',
            initialValue:false
        }),
        defineField({
            name:'isFeatured',
            title:'is Featured',
            type:'boolean',
            initialValue:false
        }),
        defineField({
            name:'reviews',
            title:'Reviews',
            type:'array',
           of:[{type:'review'}]
        }),

        

    ]
}

export default hotelRoom;