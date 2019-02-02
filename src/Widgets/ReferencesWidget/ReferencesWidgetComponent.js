import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ReferencesWidget", ({ widget }) => {
  const refType = widget.get('pageType');

  const references = Scrivito.getClass(`${refType}`).all().order('date', 'desc');

  return (

    <div className="d-flex justify-content-between wrap">
    {[...references].map((item, index) => (
      <div className='flex-fill mt-3 mb-3'>
      <ReferenceItem key={`${item.id}${index}`} item={item} />

      </div>
    ))}
  </div>
    );
    }
);

const ReferenceItem = Scrivito.connect(({ item }) => (
    <div className='small'>
        <Scrivito.ImageTag content={item.get('image')} alt='Bild vom Haus' />
        <h2 className="h4 font-weight-bold">{item.get("title")}</h2>
        {item.get("pvt") && <div>PVT<div>Größe {item.get("pvt")}</div></div>}
        {item.get("waermepumpe") && <div>Wärmepumpe<div>Größe {item.get("waermepumpe")}</div></div>}
        {item.get("pufferspeicher") && <div>Pufferspeicher<div>Größe {item.get("pufferspeicher")}</div></div>}
        {item.get("erdwaermespeicher") && <div>Erdwärmespeicher<div>Größe {item.get("erdwaermespeicher")}</div></div>}
        <div className="small">{item.get('address')}</div>




    </div>
));



