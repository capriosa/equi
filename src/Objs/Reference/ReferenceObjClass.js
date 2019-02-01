import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";
import defaultReferenceAttributes from "../_defaultReferenceAttributes";

const Reference = Scrivito.provideObjClass("Reference", {
  attributes: {
    ...defaultReferenceAttributes,
    childOrder: "referencelist",
    ...metadataAttributes,
  },
});

registerTextExtract("Reference", [
  { attribute: "body", type: "widgetlist" },
]);

export default Reference;
