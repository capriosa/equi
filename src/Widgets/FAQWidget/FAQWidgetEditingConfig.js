import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('AccordionWidget', {
    title: 'FAQ',

    attributes: {
        items: {
            title: 'FAQ Item',
        },

    },
    properties: [
        'items',

    ],
});