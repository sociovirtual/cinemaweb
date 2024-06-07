import gql from "graphql-tag";

const PELICULAS_TODAS = gql`
  query movie {
    peliculas {
      edges {
        node {
          id
          cinemaClasificacionPublico
          cinemaDuracion
          cinemaFechaDesde
          cinemaPoster(size: "large")
          cinemaSlug
          cinemaTitulo
          slug
          title(format: RENDERED)
        }
      }
    }
  }
`;

export { PELICULAS_TODAS };
