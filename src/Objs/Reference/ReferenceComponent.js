import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("Reference", ({ page }) => (
  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
));
