import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ReferencesWidget", {
  title: "Seitenliste",
  attributes: {

    pageType: {
      title: "Page Type",
      description: "Default: Page",
      values: [
        { value: "Page", title: "Page" },
        { value: "Reference", title: "Referenzen" },

      ],
    },

},
properties: [
    'pageType',

],
initialContent: {
    headline: "Lorem Ipsum",
    pageType: "Reference"
  },
});


