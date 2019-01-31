import * as Scrivito from 'scrivito';

const AnchorWidget = Scrivito.provideWidgetClass('AnchorWidget', {

  attributes: {
    link: 'link',
    anchor: 'string',
  },
});

export default AnchorWidget;
