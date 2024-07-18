import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Seo = ({ title, description, keywords }) => {
  return (
      <HelmetProvider>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </HelmetProvider>
  );
};

export default Seo;


