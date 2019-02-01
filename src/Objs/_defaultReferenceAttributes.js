const defaultReferenceAttributes = {
  body: ["widgetlist", { only: "SectionWidget" }],
  navigationBackgroundImage: "reference",
  navigationBackgroundImageGradient: ["enum", { values: ["yes", "no"] }],
  navigationHeight: [
    "enum",
    {
      values: ["small", "medium-height", "full-height"],
    },
  ],

  pvt: 'string',
  waermepumpe: 'string',
  pufferspeicher: 'string',
  erdwaermespeicher: 'string',
  title: "string",

  address: "string",
};

export default defaultReferenceAttributes;
