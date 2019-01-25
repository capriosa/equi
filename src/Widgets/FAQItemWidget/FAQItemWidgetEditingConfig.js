import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('FAQItemWidget', {
    hideInSelectionDialogs: true,
    title: 'FAQ Item',
    attributes: {

        question: {
            title: 'Question',
        },
        answer: {
            title: 'Answer',
        },

    },
    properties: [
        'question',
        'answer',
    ],

});

