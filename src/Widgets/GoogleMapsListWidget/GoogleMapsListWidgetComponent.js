import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("GoogleMapsListWidget", ({ widget }) => {
  return <Scrivito.ContentTag content={widget} attribute="headline" />;
});
