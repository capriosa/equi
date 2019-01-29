import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const ArticleTestWidget = Scrivito.provideWidgetClass("ArticleTestWidget", {
  attributes: {
    headline: "string",
    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    author: "string",
    body: "html",
  },
});

registerTextExtract("ArticleTestWidget", [
  { attribute: "headline", type: "string" },
  { attribute: "level", type: "enum" },
  { attribute: "style", type: "enum" },
  { attribute: "author", type: "string" },
  { attribute: "body", type: "html" },
]);

export default ArticleTestWidget;