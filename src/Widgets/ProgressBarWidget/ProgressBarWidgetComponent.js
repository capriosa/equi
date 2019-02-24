import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ProgressBarWidget", ({ widget }) => {
  const level = widget.get('level') || 'h1';
  const style = widget.get('style');
  const classNames = [style];
  return (
  <div>
    <Scrivito.ContentTag className={classNames.join(" ")} tag="h1" content={widget} attribute="headline" />
    <Scrivito.ContentTag tag="div" content={widget} attribute="author" />
    <Scrivito.ContentTag tag="div" content={widget} attribute="body" />
  </div>
  )
});


