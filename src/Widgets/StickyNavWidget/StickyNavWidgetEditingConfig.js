import * as Scrivito from "scrivito";
import ListGroupItemWidget from "../StickyNavItemWidget/StickyNavItemWidgetClass";

Scrivito.provideEditingConfig("StickyNavWidget", {
    title: "Sticky Menu Nav",
    
    
    initialContent: {
        
        links: ["Link 1", "Link 2", "Link 3"].map(
            title =>
            new ListGroupItemWidget({
                link: new Scrivito.Link({
                    title,
                    url: "https://scrivito.com",
                    target: "_blank",
                }),
            })
        ),
    },
});