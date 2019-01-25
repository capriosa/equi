import * as Scrivito from 'scrivito';

const FAQWidget = Scrivito.provideWidgetClass('FAQWidget', {
    attributes: {
        items: ['widgetlist', { only: 'FAQItemWidget' }],

    },
});

export default FAQWidget;