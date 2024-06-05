import { gql } from "@apollo/client/core";
// import { gql } from "@apollo/client";

const LISTA_CATEGORIA_TRABAJOS = gql`
  {
    categoriaTrabajos {
      nodes {
        id
        description
        name
        categoriaTrabajoImagen {
          node {
            sourceUrl(size: THUMBNAIL)
            sizes(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

export { LISTA_CATEGORIA_TRABAJOS };
