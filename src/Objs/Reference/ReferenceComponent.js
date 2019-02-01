import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("Reference", ({ page }) => (

<div>

  <Scrivito.ContentTag tag="div" content={page} attribute="body" />
  <section className="bg-white">
      <div className="container">
      {page.get("components").map((item, index) => (
            <div key={index}>
              {item} <br />

            </div>
          ))}
            <div>{page.get('address')}</div>
        </div>

  </section>

</div>
));




