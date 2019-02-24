import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";



const MapboxWidget = Scrivito.provideWidgetClass("MapboxWidget", {
  attributes: {
    headline: "string",
    author: "string",
    body: "html",
  },
});

registerTextExtract("MapboxWidget", [
  { attribute: "headline", type: "string" },
  { attribute: "author", type: "string" },
  { attribute: "body", type: "html" },
]);

export default MapboxWidget;