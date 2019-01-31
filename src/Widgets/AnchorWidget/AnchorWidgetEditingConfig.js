import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('AnchorWidget', {
  title: 'Link List item',
  attributes: {
    link: {
      title: 'Link',
      description: "If no title is given, the obj's title or the external URl will be shown.",
    },
    anchor: {
      title: 'Anchor ID',
      description: 'Leave empty, if no anchor jump is available',
    },
  },
  properties: [
    'link',
    'anchor',
  ],
});
