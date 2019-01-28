import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ReferencesWidget", ({ widget }) => {
  const refType = widget.get('pageType');

  const references = Scrivito.getClass(`${refType}`).all().order('date', 'desc');

  return (

    <div className="row">
    {[...references].map((item, index) => (
      <ReferenceItem key={`${item.id}${index}`} item={item} />
    ))}
  </div>
    );
    }
);

const ReferenceItem = Scrivito.connect(({ item }) => (
  <div className="col-sm-12">
    <Scrivito.LinkTag to={item}>
      <h3 className="h3">{item.get("title")}</h3>

    </Scrivito.LinkTag>

  </div>
));



