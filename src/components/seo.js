import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      // titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: `moritzsalla`,
        },
        {
          property: `robots`,
          content: `noindex`,
        },
        {
          property: `googlebot`,
          content: `noindex`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://exitstrategies.store/`,
        },
        {
          property: `og:title`,
          content: `Exit Strategies – Print Sale`,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:image`,
          content: `https://exitstrategies.store/images/social-media.jpg`,
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:url`,
          content: `https://exitstrategies.store/`,
        },
        {
          property: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `https://exitstrategies.store/images/social-media.jpg`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
