import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';



class AccordionComponent extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    const widget = this.props.widget;
    const items = widget.get('items');



    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Create Accordion Items in widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

const list = items.map((item, index) =>

<AccordionItem key={index}>
    <div className='row'>
    <div className='col col-md-2'>
    <Scrivito.ImageTag content={ item.get('icon') }  />
    </div>
    <div className='col col-md-10'>
    <AccordionItemTitle>
        <h3>{item.get('title')}</h3>
    </AccordionItemTitle>
    <AccordionItemBody>
        <p>{item.get('text')}</p>
    </AccordionItemBody>
    </div>
    </div>
</AccordionItem>



);

    return (
    <Accordion>
        {list}
    </Accordion>

    );
}
}

Scrivito.provideComponent('AccordionWidget', AccordionComponent);


