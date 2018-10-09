import React, { Component } from "react";
import { Mutation } from "react-apollo";
import queries from "../../utils/queries";
import { Button, ButtonIcon } from "rmwc";
import DevTools from "mobx-react-devtools";

import { observer, inject } from "mobx-react";

@inject("zonasStore")
@observer
class UpdatePersona extends Component {
  render() {
    const { zonasStore } = this.props;
    return (
      <Mutation mutation={queries.mutation.CREATE_ZONA}>
        {(createZona, { loading, error }) => (
          <div>
            <Button
              onClick={() => createZona({ variables: { name: "alancito" } })}
            >
              Default
            </Button>
            <Button onClick={() => zonasStore.console()}>
              <ButtonIcon icon="favorite" /> console
            </Button>
            <input
              className={"mdc-button mdc-ripple-upgraded"}
              type="file"
              onChange={e => zonasStore.toObj(e)}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
            <DevTools />
          </div>
        )}
      </Mutation>
    );
  }
}

export default UpdatePersona;
