import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string[]
      baseUrl: string
      lang: string
    }
  }
}

export interface SeoProps {
  /** Title tag */
  title?: string
  /** Meta description */
  description?: string
  /** Meta keywords */
  keywords?: string[]
  /** Image for socials. Makes reason for articles */
  image?: string
  /** Relative path for canonical link and socials */
  pathname?: string
}

/** Component adds meta tags in head via react-helmet. Pass this component on every page and override values via props if needed */
const Seo = ({ title, description, keywords, image, pathname }: SeoProps) => {
  const data: SeoQuery = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
          baseUrl
          lang
        }
      }
    }
  `)
  const defaults = data.site.siteMetadata

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    keywords: keywords || defaults.keywords,
    url: pathname && `${defaults.baseUrl}${pathname}`,
    lang: defaults.lang,
    image: image && `${defaults.baseUrl}${image}`,
  }

  return (
    <Helmet>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      {seo.url && <link rel="canonical" href={seo.url} />}
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta name="og:type" content="website" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta property="og:image:alt" content={seo.description} />}

      <meta name="twitter:card" content={seo.image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.url && <meta property="twitter:url" content={seo.url} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.image && <meta name="twitter:image:alt" content={seo.description} />}
    </Helmet>
  )
}

export default Seo
