import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("StickyNavItemWidget", ({ widget }) => {
  const link = widget.get("link");

  if (!link) {
    return (
      <Scrivito.WidgetTag tag="li">
        <InPlaceEditingPlaceholder>
          Provide a link in the widget properties.
        </InPlaceEditingPlaceholder>
      </Scrivito.WidgetTag>
    );
  }

  return (
    <Scrivito.WidgetTag tag="li" className="sticky-nav-item">
      <Scrivito.LinkTag to={link}>
        <LinkTitle link={link} />

      </Scrivito.LinkTag>
    </Scrivito.WidgetTag>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {

  return link.url();
});
