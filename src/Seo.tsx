import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface SeoProps {
    title: string,
    description: string,
    keywords: string,
    canonicalUrl: string,
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords, canonicalUrl }) => {
  return (
      <HelmetProvider>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </HelmetProvider>
  );
};

export default Seo;


