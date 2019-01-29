import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";



const CollabsibleCardWidget = Scrivito.provideWidgetClass("CollabsibleCardWidget", {
  attributes: {
    icon: "reference",
    headline: "string",
    teaser: "html",
    body: "html",
  },
});

registerTextExtract("CollabsibleCardWidget", [
  { attribute: "headline", type: "string" },
  { attribute: "teaser", type: "html" },
  { attribute: "body", type: "html" },
]);

export default CollabsibleCardWidget;