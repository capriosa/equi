import * as React from "react";
import * as Scrivito from "scrivito";
import ScrollableAnchor from 'react-scrollable-anchor'

Scrivito.provideComponent("HeadlineWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = [style];
  const anchorId = widget.get("anchorId");
  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("b-bottom");
  }
  if (widget.get("showMargin") === "no") {
    classNames.push("no-margin");
  }

  return (
    <div>
    <ScrollableAnchor id={anchorId}>
    <Scrivito.ContentTag
      tag={level}
      content={widget}
      attribute="headline"
      className={classNames.join(" ")}
    />
    </ScrollableAnchor>
    </div>
  );
});
