import * as React from "react";
import * as Scrivito from "scrivito";


Scrivito.provideComponent("StickyNavWidget", ({ widget }) => (
  <React.Fragment>
    <Headline widget={widget} />
    <Scrivito.ContentTag
      className="sticky-nav"
      tag="ul"
      content={widget}
      attribute="links"
    />
  </React.Fragment>
));


