import * as Scrivito from 'scrivito';

const FAQItemWidget = Scrivito.provideWidgetClass('FAQItemWidget', {
    onlyInside: 'FAQWidget',
    attributes: {
        question: 'string',
        answer: 'html',

    },
});

export default FAQItemWidget;

