export default {
    name: 'backend',
    title: 'Backend',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'id',
            title: 'Id',
            type: 'string'
        },
       
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
       
    ],

}



