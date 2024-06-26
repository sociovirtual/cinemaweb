import gql from "graphql-tag";

// const GET_PELICULA = gql`
//   query movie($slug: String!) {
//     peliculaBy(slug: $slug) {
//       id
//       cinameProximoEstreno
//       cinemaCartelera
//       cinemaClasificacionPublico
//       cinemaDuracion
//       cinemaFechaDesde
//       cinemaFechaHasta
//       cinemaFondo(size: "full")
//       cinemaHorarios {
//         doblaje
//         formato
//         hora
//       }
//       cinemaPoster(size: "large")
//       cinemaPreVenta
//       cinemaSlug
//       cinemaTitulo
//       cinemaTrailer
//       cinemaTrailerId
//       cinemaTrailerThumbnail
//       content(format: RENDERED)
//       slug
//       title(format: RENDERED)
//     }
//   }
// `;

const GET_PELICULA = gql`
  query movie($slug: String!) {
    carteleraBy(slug: $slug) {
      id
      carteleraClasificacion
      carteleraFondo(size: "large")
      carteleraPoster(size: "large")
      carteleraTitulo
      slug
      title(format: RENDERED)
      content(format: RENDERED)
      carteleraDuracion
      carteleraFechaDesde
      carteleraPreVenta
      carteleraProximoEstreno
      carteleraEnCartelera
      carteleraFechaHasta
      carteleraHorarios {
        doblaje
        formato
        hora
      }
      carteleraTrailer
      carteleraTrailerId
      carteleraTrailerThumbnail
    }
  }
`;


export { GET_PELICULA };
