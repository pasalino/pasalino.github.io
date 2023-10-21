import Script from "next/script";

export const GTag = () => (
  <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-PBF2CJPF" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GTM-PBF2CJPF');
        `}
    </Script>
  </>
);
