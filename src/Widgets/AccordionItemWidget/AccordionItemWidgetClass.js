import * as Scrivito from 'scrivito';

const AccordionItemWidget = Scrivito.provideWidgetClass('AccordionItemWidget', {
    onlyInside: 'AccordionWidget',
    attributes: {
        title: 'string',
        teaser: 'string',
        text: 'html',
        image: 'reference',

    },
});

export default AccordionItemWidget;

