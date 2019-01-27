import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";
import metadataAttributes from "../_metadataAttributes";

const NewsPage = Scrivito.provideObjClass("NewsPage", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
});

registerTextExtract("NewsPage", [{ attribute: "body", type: "widgetlist" }]);

export default NewsPage;
