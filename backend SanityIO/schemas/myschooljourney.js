export default {
    name: 'myschooljourney',
    type: 'document',
    title: 'My School Journey',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name:'id',
            title:'Id',
            type:'string'
        },
       
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}