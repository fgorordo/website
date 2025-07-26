"use client";

export const JsonLdSchemas = () => {
  return (
    <>
      {/* Schema: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KSQ Pergamino",
            url: "https://www.ksqpergamino.com.ar",
            logo: "https://www.ksqpergamino.com.ar/og-image.png",
            sameAs: [
              "https://www.instagram.com/ksqpergamino",
              "https://www.linkedin.com/company/ksqpergamino"
            ]
          })
        }}
      />

      {/* Schema: WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.ksqpergamino.com.ar",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.ksqpergamino.com.ar/buscar?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
};
