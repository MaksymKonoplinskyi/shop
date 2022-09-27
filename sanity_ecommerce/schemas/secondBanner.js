export default {
    name: 'secondBanner',
    title: 'SecondBanner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },        
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },        
        {
            name: 'midelText',
            title: 'MidelText',
            type: 'string',
        },        
        {
            name: 'largeText',
            title: 'LargeText',
            type: 'string',
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'productNameForButtonLink',
            title: 'ProductNameForButtonLink',
            type: 'string',
        },
    ],
  };