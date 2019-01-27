import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("NewsPage", ({ page }) => (
  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
));
