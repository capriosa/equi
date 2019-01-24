import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('AccordionItemWidget', {
    title: 'Accordion Item',
    attributes: {

        title: {
            title: 'Title',
        },
        text: {
            title: 'Text',
        },
        icon: {
            title: 'Icon',
        },
        image: {
            title: 'Image',
        },

    },
    properties: [
        'title',
        'text',
        'icon',
        'image'
    ],

});