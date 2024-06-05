const SEO_SITIO = {
  title: "Bienvenidos a Socio Virtual SPA",
  titleTemplate: "%s ",

  viewport: {
    tag: "meta",
    content: "width=device-width, initial-scale=1, maximum-scale=8",
  },
  author: {
    tag: "meta",
    content: "Jose Vargas Molina - SocioVirtual.com",
  },
  keywords: {
    tag: "meta",
    content:
      "Wordpress, Chile, Hosting, Programacion ,Aseorias , Sitios , Webs , Bio Bio , Los Angeles ",
  },
  copyright: {
    tag: "meta",
    content: "SocioVirtual.com 2024",
  },
  description:
    "Páginas web económicas. En diseño web somos conscientes, Sitios web básicos pero de excelente calidad, con diseño 100% a medida, especial para iniciar.",
  htmlAttrs: {
    lang: "es",
    amp: false,
  },
  og: {
    locale: "es_ES",
    type: "website",
    title: "SocioVirtual SPA - Páginas web económicas y calidad",
    description:
      "Solucionamos problemas. Sitios web básicos pero de excelente calidad, con diseño a medida.",
    url: "http://www.sociovirtual.com",
    site_name: "SocioVirtual - Servicios de Programacion y asesorias ",
    image: "https:sociovirtual.com/final-logo.png",
  },
  twitter: {
    title: "SocioVirtual SPA - Páginas web económicas y calidad",
    description:
      "Solucionamos problemas. Sitios web básicos pero de excelente calidad, con diseño a medida.",
    card: "summary_large_image",
    creator: "@sociovirtualspa",
    image: "https:sociovirtual.com/final-logo.png",
    site: "@sociovirtualspa",
  },

  sitemap: {
    path: "/sitemap.xml",
    gzip: true,
    hostname: "http://sociovirtual.com",
  },
  robots: {
    tag: "meta",
    content:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
};

export { SEO_SITIO };
