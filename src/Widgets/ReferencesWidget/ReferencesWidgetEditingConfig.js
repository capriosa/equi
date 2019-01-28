import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ReferencesWidget", {
  title: "References",
  attributes: {

    pageType: {
      title: "Page Type",
      description: "Default: Page",
      values: [
        { value: "Page", title: "Page" },
        { value: "Reference", title: "News" },

      ],
    },

},
properties: [
    'pageType',

],
initialContent: {
    headline: "Lorem Ipsum",
    pageType: "Page"
  },
});


