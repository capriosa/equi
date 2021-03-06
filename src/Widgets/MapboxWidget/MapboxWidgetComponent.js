import * as React from "react";
import * as Scrivito from "scrivito";
import { EquiMap } from "mulando-equimap";
import * as kundenliste from "./kundenliste.csv";
import "mulando-equimap/build/lib/EquiMap/EquiMap.css";


Scrivito.provideComponent("MapboxWidget", ({ widget }) => {

  return (

    <div className="map">
        <EquiMap mapboxApiAccessToken="pk.eyJ1IjoianVsaWFuczM3IiwiYSI6ImNpcDdmNWdlbDAwMmR2M25sa3k0Yjd0bG8ifQ.2S1SPdEJLAffhv-a0HEMIQ" kundenliste={kundenliste} fitBounds />
    </div>

  )
});


