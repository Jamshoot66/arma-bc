import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav } from "mdbreact";

import { TabButton } from "./Main.ui";
import GPS from "./GPS";

class Main extends Component {
  tabs = [
    { caption: "GPS", content: <GPS /> },
    { caption: "Прямой", content: "Прямой" },
    { caption: "Позиции", content: "Позиции" },
    { caption: "Таблица", content: "Таблица" },
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab_0",
    };
  }

  activateTab = (activeTab) => {
    this.setState({
      activeTab,
    });
  };

  renderHeader = () => {
    const { activeTab } = this.state;
    return this.tabs.map((tab, index) => (
      <TabButton
        key={`header_tab_key_${tab.caption}`}
        active={activeTab === `tab_${index}`}
        onClick={() => this.activateTab(`tab_${index}`)}
      >
        {tab.caption}
      </TabButton>
    ));
  };

  renderContent = () =>
    this.tabs.map((tab, index) => (
      <MDBTabPane tabId={`tab_${index}`}>{tab.content}</MDBTabPane>
    ));

  render() {
    console.log("this.state ", this.state);
    const { activeTab } = this.state;
    return (
      <MDBRow className="mt-2 mt-4">
        <MDBCol md="12">
          <MDBNav className="nav-pills mb-4">{this.renderHeader()}</MDBNav>
          <MDBTabContent activeItem={activeTab}>
            {this.renderContent()}
          </MDBTabContent>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Main;
