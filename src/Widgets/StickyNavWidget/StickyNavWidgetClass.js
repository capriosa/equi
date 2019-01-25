import * as Scrivito from "scrivito";

const StickyNavWidget = Scrivito.provideWidgetClass("StickyNavWidget", {
    attributes: {
        links: ["widgetlist", { only: "LinkWidget" }],
    },
});

export default StickyNavWidget;