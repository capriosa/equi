import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';



class FAQComponent extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    const widget = this.props.widget;
    const items = widget.get('items');



    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Create FAQ Items in widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

const list = items.map((item, index) =>

<AccordionItem key={index}>




    <AccordionItemTitle>

        <h3 className="u-position-relative h5"><div className="accordion__arrow" />{item.get('question')}</h3>

    </AccordionItemTitle>
    <AccordionItemBody>

        <p>{item.get('answer')}</p>

    </AccordionItemBody>


</AccordionItem>



);

    return (
    <Accordion>
        {list}
    </Accordion>

    );
}
}

Scrivito.provideComponent('FAQWidget', FAQComponent);


