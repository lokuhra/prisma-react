import React, { Component, Fragment } from "react";
import { Button } from "rmwc";
import papa from "papaparse";
import { Mutation } from "react-apollo";
import queries from "../../utils/queries";
import { init, uniq } from "rambdax";
import delayMap from "delay-map";

class UploadZona extends Component {
  state = {
    data2Load: ""
  };

  loadFile = csv => {
    let file = csv.target.files[0];
    papa.parse(file, {
      header: true,
      complete: results =>
        this.setState({
          data2Load: uniq(init(results.data))
        })
    });
  };

  render() {
    const { data2Load } = this.state;
    return (
      <Mutation mutation={queries.mutation.CREATE_ZONE}>
        {(createZone, { loading, error }) => (
          <Fragment>
            <input
              className={"mdc-button mdc-ripple-upgraded"}
              type="file"
              onChange={e => this.loadFile(e)}
            />
            <Button
              raised
              onClick={() =>
                new delayMap(
                  data2Load,
                  value => createZone({ variables: { name: value.ZONA } }),
                  {
                    timeout: 150
                  }
                ).then(() => alert(`se cargaron ${data2Load.length} zonas`))
              }
            >
              Cargar zonas
            </Button>

            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default UploadZona;
