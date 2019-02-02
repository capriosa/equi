import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("Reference", ({ page }) => (

<div>

  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
  <section className="bg-white">
      <div className="container">
      <h1>{page.get('title')}</h1>
      {page.get("pvt") ? (<div>PVT<div>Größe { page.get("pvt") }</div></div> ): null }
      {page.get("waermepumpe") ? (<div>Wärmepumpe<div>Größe { page.get("waermepumpe") }</div></div> ): null }
      {page.get("pufferspeicher") ? (<div>Pufferspeicher<div>Größe { page.get("pufferspeicher") }</div></div> ): null }
      {page.get("erdwaermespeicher") ? (<div>Erdwärmespeicher<div>Größe { page.get("erdwaermespeicher") }</div></div> ): null }
      <div>{page.get('address')}</div>
      <Scrivito.ImageTag content={page.get('image')} alt="Bild vom Haus" />
      </div>

  </section>

</div>
));




