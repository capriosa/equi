import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('AccordionItemWidget', {
    title: 'Accordion Item',
    attributes: {

        title: {
            title: 'Title',
        },
        teaser: {
            title: 'Teaser',
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
        'teaser',
        'text',
        'icon',
        'image'
    ],

});