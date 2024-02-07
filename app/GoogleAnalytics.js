"use client";

import Script from "next/script";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            gtag('event', 'conversion', {'send_to': '${GA_TRACKING_ID}/3EwJCI6u0vUYEIKKsLIo'});
          `,
        }}
      />
      <Script />
    </>
  );
};

export default GoogleAnalytics;
