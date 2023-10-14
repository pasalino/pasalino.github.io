import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 className="text-4xl font-bold underline">pasalino.it</h1>
      <p>I'm Pasqualino de Simone a.k.a. pasalino</p>
      <p>Welcome.</p>
      <p>Coming soon. Stay tuned.</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Pasqualino de Simone - Pasalino</title>
);
