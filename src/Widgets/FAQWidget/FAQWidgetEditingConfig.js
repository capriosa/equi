import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('FAQWidget', {
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