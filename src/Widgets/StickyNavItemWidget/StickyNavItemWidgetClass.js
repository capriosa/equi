import * as Scrivito from "scrivito";

const StickyNavItemWidget = Scrivito.provideWidgetClass("StickyNavItemWidget", {
    onlyInside: "StickyNavWidget",
    attributes: {
        link: "link",
    },
});

export default StickyNavItemWidget;