import React, { Component } from "react";
import { Mutation } from "react-apollo";
import queries from "../../utils/queries";
import { Button, ButtonIcon } from "rmwc";

class UpdatePersona extends Component {
  render() {
    return (
      <Mutation mutation={queries.mutation.CREATE_ZONA}>
        {(createZona, { loading, error }) => (
          <div>
            <Button onClick={() => createZona({ variables: { name: "alancito" } })}>
              Default
            </Button>
            <Button>
              <ButtonIcon icon="favorite" /> With Icon
            </Button>
            <input className={"mdc-button mdc-ripple-upgraded"} type="file"></input>
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
          </div>
        )}
      </Mutation>
    )
  }
}

export default UpdatePersona;


