/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self' '*.fortelle.no' 'https://fortelle.no'; font-src 'self' 'https://fonts.googleapis.com';"
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: "Camera=(); battery=(); geolocation=(); microphone=()"
                    }
                ]
            
            }
        ]
    },
};

module.exports = nextConfig;
