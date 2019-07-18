import React, { Fragment } from "react";
import RegistryTitle from "./RegistryTitle";
import RegistryItem from "./RegistryItem";
import "../../../styles/registry/registry.css";
import Nav from "../../layout/Nav"
import Container from "../../layout/Container"
import PageImage from "../../layout/PageImage"


class Registry extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Container>
          <PageImage 
           title="Create Your Registry"
           src="https://cdn.mos.cms.futurecdn.net/diEadh9sgT5d32yn2za8bj-768-80.jpg"/>
        {/* <section>
          <RegistryTitle />
        </section> */}

        <section>
          <h3 className="registry-content">
            Register with one of the following retail stores
          </h3>
          <RegistryItem />
        </section>
        </Container>
      </Fragment>
    );
  }
}
export default Registry;
