import React from 'react';
import Head from 'next/head';
import { generateMetaTags } from './meta';

interface SeoProps {
  title: string;
  description: string;
  keywords: string[];
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords }) => {
  const metaTags = generateMetaTags(title, description, keywords);

  return (
    <Head>
      <title>{metaTags.title}</title>
      {metaTags.meta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
    </Head>
  );
};

export default Seo;
