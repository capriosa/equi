import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("MapboxWidget", {
  title: "Mapbox",
  attributes: {
    headline: {
      title: "Headline",
      description: "Post Headline",

    },
  },
  initialContent: {
    headline: "Lorem Ipsum",
    author: "Max Mustermann",
    body:
    "Eiusmod aliquip aliquip esse nisi. Lorem fugiat commodo aute tempor irure esse sunt. Incididunt irure dolore eiusmod qui pariatur id sunt officia irure ad.",
  }
});
