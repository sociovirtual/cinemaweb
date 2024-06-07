import gql from "graphql-tag";

const GET_PELICULA = gql`
  query movie($slug: String!) {
    peliculaBy(slug: $slug) {
      id
      cinameProximoEstreno
      cinemaCartelera
      cinemaClasificacionPublico
      cinemaDuracion
      cinemaFechaDesde
      cinemaFechaHasta
      cinemaFondo(size: "full")
      cinemaHorarios {
        doblaje
        formato
        hora
      }
      cinemaPoster(size: "large")
      cinemaPreVenta
      cinemaSlug
      cinemaTitulo
      cinemaTrailer
      cinemaTrailerId
      cinemaTrailerThumbnail
      content(format: RENDERED)
      slug
      title(format: RENDERED)
    }
  }
`;

export { GET_PELICULA };
