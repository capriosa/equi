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

    return (
      <div>

        <div>
          <div className="row">
            {
              items.map((item) =>

                <Accordion
                  key={ item.id() }
                  widget={ item }
                />)
            }
          </div>

        </div>
      </div>
    );
  }
}

Scrivito.provideComponent('AccordionWidget', AccordionComponent);

const AccordionBlock = Scrivito.connect(({ widget }) => {

  const text = widget.get('text');
  const title = widget.get('title');

  console.log(title)
  return (

        <AccordionItem>
            <AccordionItemTitle>
                <h3>{ title }</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{ text }</p>
            </AccordionItemBody>
        </AccordionItem>


  );
});



