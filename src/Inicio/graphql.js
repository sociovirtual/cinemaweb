import gql from "graphql-tag";

const PELICULAS_TODAS = gql`
  query MyQuery2 {
    peliculas {
      nodes {
        cinameProximoEstreno
        cinemaCartelera
        cinemaClasificacionPublico
        cinemaDuracion
        cinemaFechaDesde
        cinemaFondo
        cinemaPoster
        cinemaPreVenta
        cinemaSlug
        cinemaTitulo
      }
    }
  }
`;

export { PELICULAS_TODAS };
