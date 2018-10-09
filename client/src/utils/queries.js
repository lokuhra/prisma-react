import gql from "graphql-tag";

export default {
  query: {
    GET_PERSONS: gql`
      query {
        personaAll {
          id
          name
          apellido
        }
      }
    `,
    GET_LABELS: gql`
      query {
        labels {
          id
          alias
        }
      }
    `
  },
  mutation: {
    UPDATE_PERSON: gql`
      mutation updatePersona($id: ID!, $name: String!) {
        updatePersona(id: $id, name: $name) {
          id
          name
        }
      }
    `,
    CREATE_ZONE: gql`
      mutation createZone($name: String!) {
        createZone(data: { name: $name }) {
          id
          name
        }
      }
    `,
    CREATE_LABEL: gql`
      mutation createLabel($alias: String!, $name: String!) {
        createLabel(
          data: { alias: $alias, zone: { connect: { name: $name } } }
        ) {
          alias
          zone {
            name
          }
        }
      }
    `
  }
};
