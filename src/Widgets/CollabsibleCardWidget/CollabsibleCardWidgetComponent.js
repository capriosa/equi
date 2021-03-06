import * as React from "react";
import * as Scrivito from "scrivito";


class CollabsibleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      buttonText: 'Expand',
      class: 'collapsed',
      height: 100
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(e) {
    const contentHeight = 200;
    const contentPadding = 20;
    const newHeight = "auto";

    this.setState({
        collapsed: !this.state.collapsed,
        buttonText: this.state.collapsed ? 'Collapse' : 'Expand',
        class: this.state.collapsed ? '' : 'collapsed',
        height: this.state.collapsed ? newHeight : 100
    });
}

  render() {
    return (
      <div className="ui card">
        <div className="content header-content text-left row">
        <div className="col-lg-3">
        <Scrivito.ImageTag className="img-responsive card-icon mt-3" content={ this.props.widget } attribute="icon" alt="Icon" />
        </div>
        <div className="col-lg-9">
        <Scrivito.ContentTag tag="h2" className="header h3" content={this.props.widget} attribute="headline" />
        <Scrivito.ContentTag tag="div" className="description mt-3" content={this.props.widget} attribute="teaser" />
        </div>

        </div>
        <div className={"content collapsible " + this.state.class} style={{height:this.state.height}}>
          <div className="content-wrapper">
            <Scrivito.ContentTag tag="div" content={this.props.widget} attribute="body" />
        </div>
        </div>
        <div className="card-button" onClick={this.toggleCollapse}>
          {this.state.collapsed ?
          <i className={"fa fa-plus-circle fa-2x " + (this.state.collapsed ? "down" : "up")}></i>
          :
          <i className={"fa fa-minus-circle fa-2x " + (this.state.collapsed ? "down" : "up")}></i>
          }

        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("CollabsibleCardWidget", CollabsibleCard);

