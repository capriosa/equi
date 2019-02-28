import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('AnchorWidget', ({ widget }) => {
  const link = widget.get('link');
  const anchor = widget.get('anchor');
  const hash = '';

  if (!link) {
    return (
      <Scrivito.WidgetTag tag="li">
        <InPlaceEditingPlaceholder>
          Provide a link in the widget properties.
        </InPlaceEditingPlaceholder>
      </Scrivito.WidgetTag>
    );
  }

  // use Scrivito.LinkTag for external links
  // or links to binaries (images, pdfs, ...)
  if (link.isExternal() || (link.obj() && link.obj().isBinary())) {
    return (
        <Scrivito.WidgetTag tag="li">
          <Scrivito.LinkTag to={ link }>
            <LinkTitle link={ link }/>
          </Scrivito.LinkTag>
        </Scrivito.WidgetTag>
    );
  }

  // use Scrivito.ContentTag and Scrivito.urlFor
  // for links all other links
  // to non binary objs
  if (anchor) {
    hash = anchor; // eslint-disable-line no-underscore-dangle
  }

  console.log(hash.hash());

  return (
      <Scrivito.WidgetTag tag="li">
        <Scrivito.ContentTag
            tag="a"
            href={ Scrivito.urlFor(link, { hash: hash.hash() }) }
            content={ widget }
            attribute="link"
        >
          <LinkTitle link={ link } />
        </Scrivito.ContentTag>
      </Scrivito.WidgetTag>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {
  if (link.title()) {
    return link.title();
  }

  if (link.isInternal()) {
    return link.obj().get('title');
  }

  return link.url();
});
