import * as Scrivito from "scrivito";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("NewsPage", {
  title: "News Page",
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
  },
  properties: ["title"],
  propertiesGroups: [metadataPropertiesGroup],
  initialContent: {
    body: [
      new SectionWidget({
        content: [new HeadlineWidget({ style: "h1" })],
      }),
    ],
    ...metadataInitialContent,
  },
});
