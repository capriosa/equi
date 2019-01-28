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

<AccordionItem  key={index}>

    <AccordionItemTitle>
      <div className='row'>

      <div className={`col-3 item-${index}`}>
    <Scrivito.ImageTag content={ item.get('icon') }  />
    </div>
    <div className='col-9 accordion-teaser'>
        <h3 className='primary'>{item.get('title')}</h3>
        <div>{item.get('teaser')}</div>
      </div>
      </div>
    </AccordionItemTitle>
    <AccordionItemBody>
      <div className='row'>
      <div className='col-3'>
      <Scrivito.ImageTag content={ item.get('image') }  />
      </div>
      <div className='col-9'>
        {item.get('text')}
      </div>
      </div>
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

Scrivito.provideComponent('AccordionWidget', AccordionComponent);


