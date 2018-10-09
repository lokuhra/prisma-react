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
      <Mutation mutation={queries.mutation.CREATE_LABEL}>
        {(createLabel, { loading, error }) => (
          <Fragment>
            <input
              className={"mdc-button mdc-ripple-upgraded"}
              type="file"
              onChange={e => this.loadFile(e)}
            />
            <Button
              raised
              theme="secondary-bg on-secondary"
              onClick={() =>
                new delayMap(
                  data2Load,
                  value => createLabel({ variables: { alias: value.ETIQUETA, name:value.ZONA } }),
                  {
                    timeout: 1000
                  }
                ).then(() => alert(`se cargaron ${data2Load.length} labels`))
              }
            >
              Cargar etiquetas
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
