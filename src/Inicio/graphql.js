import gql from "graphql-tag";

// const PELICULAS_TODAS = gql`
//   query MyQuery2 {
//     peliculas {
//       nodes {
//         cinameProximoEstreno
//         cinemaCartelera
//         cinemaClasificacionPublico
//         cinemaDuracion
//         cinemaFechaDesde
//         cinemaFondo
//         cinemaPoster
//         cinemaPreVenta
//         cinemaSlug
//         cinemaTitulo
//       }
//     }
//   }
// `;

const PELICULAS_TODAS = gql`
query peliculas {
  carteleras {
      nodes {
        id
        carteleraClasificacion
        carteleraFondo
        carteleraPoster
        carteleraTitulo
        slug
        title(format: RENDERED)
        carteleraDuracion
        carteleraFechaDesde
        carteleraPreVenta
        carteleraProximoEstreno
        carteleraEnCartelera
      }
    }
  }

`;

export { PELICULAS_TODAS };
