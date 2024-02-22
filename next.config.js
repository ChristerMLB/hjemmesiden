/** @type {import('next').NextConfig} */
const nextConfig = {
   async headers() {
      return [
         {
            source: "/(.*)",
            headers: [
               {
                  key: "Content-Security-Policy",
                  value: "default-src 'self' kommunetisk.no fortelle.no hjemmesiden.vercel.app conorganizer-portfoliofork-gmbv.vercel.app cardplank.web.app fonts.googleapis.com va.vercel-scripts.com vitals.vercel-insights.com  'unsafe-eval' 'unsafe-inline'; ",
               },
               {
                  key: "X-Frame-Options",
                  value: "SAMEORIGIN",
               },
               {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
               },
               {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
               },
               {
                  key: "Strict-Transport-Security",
                  value: "max-age=31536000",
               },
               {
                  key: "Permissions-Policy",
                  value: "Camera=(); battery=(); geolocation=(); microphone=()",
               },
            ],
         },
      ];
   },
   experimental: {
      missingSuspenseWithCSRBailout: false,
   },
};

module.exports = nextConfig;
