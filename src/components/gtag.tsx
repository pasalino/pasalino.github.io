import Script from "next/script";

export const GTag = () => (
  <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-V596HZP86Z" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V596HZP86Z');
        `}
    </Script>
  </>
);
