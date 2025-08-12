export default function Head() {
  const baseUrl = 'https://portfolio-rho-gold-24.vercel.app/'; //replace when buying a domain

  return (
    <>
      <meta name="description" content="Welcome to my Full-stack developer portfolio." />

      {/* Open Graph */}
      <meta property="og:title" content="My Portfolio – Achraf Reyani" />
      <meta property="og:description" content="Welcome to my Full-stack developer portfolio." />
      <meta property="og:image" content={`${baseUrl}/images/preview-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${baseUrl}/images/preview-image.jpg`} />
      <meta name="twitter:title" content="My Portfolio – Achraf Reyani" />
      <meta name="twitter:description" content="Welcome to my Full-stack developer portfolio." />
    </>
  );
}
