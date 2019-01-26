import * as Scrivito from "scrivito";
import PageObjIcon from "../../assets/images/page_obj.svg";
import {
  defaultReferenceEditingConfigAttributes,
  defaultReferenceInitialContent,
  defaultReferenceProperties,
} from "../_defaultReferenceEditingConfig";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroup,
  socialCardsPropertiesGroup,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("Reference", {
  title: "Reference",
  thumbnail: PageObjIcon,
  attributes: {
    ...defaultReferenceEditingConfigAttributes,
    ...metadataEditingConfigAttributes,
  },
  properties: [...defaultReferenceProperties],
  propertiesGroups: [socialCardsPropertiesGroup, metadataPropertiesGroup],
  initialContent: {
    ...defaultReferenceInitialContent,
    ...metadataInitialContent,
  },
});
