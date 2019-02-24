import * as React from "react";
import * as Scrivito from "scrivito";
import { EquiMap } from "mulando-equimap";
import * as kundenliste from "./kundenliste.csv";


Scrivito.provideComponent("MapboxWidget", ({ widget }) => {
console.log(kundenliste)
  return (

    <div className="map">
        <EquiMap kundenliste={kundenliste} fitBounds />
    </div>

  )
});


