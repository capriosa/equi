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

      <h3 className="h3">{item.get("title")}</h3>
      {item.get("pvt") ? (<div>PVT<div>Größe { item.get("pvt") }</div></div> ): null }
      {item.get("waermepumpe") ? (<div>Wärmepumpe<div>Größe { item.get("waermepumpe") }</div></div> ): null }
      {item.get("pufferspeicher") ? (<div>Pufferspeicher<div>Größe { item.get("pufferspeicher") }</div></div> ): null }
      {item.get("erdwaermespeicher") ? (<div>Erdwärmespeicher<div>Größe { item.get("erdwaermespeicher") }</div></div> ): null }
      <div>{item.get('address')}</div>
    <div>{item.get('address')}</div>


  </div>
));



