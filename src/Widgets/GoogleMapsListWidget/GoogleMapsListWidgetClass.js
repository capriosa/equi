import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const GoogleMapsListWidget = Scrivito.provideWidgetClass("GoogleMapsListWidget", {
  attributes: {
    headline: "string",
  },
});

registerTextExtract("GoogleMapsListWidget", [
  { attribute: "headline", type: "string" },
]);

export default GoogleMapsListWidget;
