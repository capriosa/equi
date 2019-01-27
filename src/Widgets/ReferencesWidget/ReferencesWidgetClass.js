import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const ReferencesWidget = Scrivito.provideWidgetClass("ReferencesWidget", {
  attributes: {
    headline: "string",
  },
});

registerTextExtract("ReferencesWidget", [
  { attribute: "headline", type: "string" },
]);

export default ReferencesWidget;
