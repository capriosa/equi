import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ProgressBarWidget", {
  title: "Progress Bar",
  attributes: {
    level: {
      title: "Heading tag",
      description:
        "Level of Headline tag. Default: h1",
      values: [
        { value: "h1", title: "h1" },
        { value: "h2", title: "h2" },
        { value: "h3", title: "h3" },
        { value: "h4", title: "h4" },
        { value: "h5", title: "h5" },
        { value: "h6", title: "h6" },
      ],
    },
    style: {
      title: "Heading tag",
      description:
        "Style of Headline tag. Default: h1",
      values: [
        { value: "h1", title: "h1" },
        { value: "h2", title: "h2" },
        { value: "h3", title: "h3" },
        { value: "h4", title: "h4" },
        { value: "h5", title: "h5" },
        { value: "h6", title: "h6" },
      ],
    },
  },
  properties: ["level","style"],
  initialContent: {
    level: "h1",
    style: "h1",
    headline: "Lorem Ipsum",
    author: "Max Mustermann",
    body: "Eiusmod aliquip aliquip esse nisi. Lorem fugiat commodo aute tempor irure esse sunt. Incididunt irure dolore eiusmod qui pariatur id sunt officia irure ad.",
  }
});
