import HeadlineWidget from "../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../Widgets/SectionWidget/SectionWidgetClass";

const defaultReferenceEditingConfigAttributes = {
  title: {
    title: "Title",
    description: "Limit to 55 characters.",
  },
  pageType: {
    title: "Page Type",

  },
  navigationBackgroundImage: {
    title: "Header background",
    description: "The background image/video of the header.",
  },
  navigationBackgroundImageGradient: {
    title: "Use gradient for header image?",
    description: "Only applies if a header image is selected. Default: No",
    values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
  },
  navigationHeight: {
    title: "Header height",
    description: "Default: Small",
    values: [
      { value: "small", title: "Small" },
      { value: "medium-height", title: "Medium" },
      { value: "full-height", title: "Fullscreen" },
    ],
  },

    image: {
        title: "Image"
    },

    pvt: {
        title: "PVT Größe"
    },

    waermepumpe: {
        title: "Wärmepumpe Größe"
    },
    pufferspeicher: {
        title: "Pufferspeicher Größe"
    },
    erdwaermespeicher: {
        title: "Erdwärmespeicher Größe"
    },
    address: {
        title: 'Address',
        description: 'The address that should be shown on the map.' +
            ' Example: Brandenburg Gate, Berlin, Germany',
    },
};

const defaultReferenceInitialContent = {
  body: [
    new SectionWidget(

    ),
  ],
  navigationHeight: "small",
  navigationBackgroundImageGradient: "no",

};

const defaultReferenceProperties = [
  "title",
  "image",
  "pvt",
  "waermepumpe",
  "pufferspeicher",
  "erdwaermespeicher",
  "address",
  "navigationHeight",
  "navigationBackgroundImage",
  "navigationBackgroundImageGradient",
];

export {
  defaultReferenceEditingConfigAttributes,
  defaultReferenceInitialContent,
  defaultReferenceProperties,
};
