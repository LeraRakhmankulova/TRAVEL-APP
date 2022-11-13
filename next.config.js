const STUDIO_REWRITE = {
    source: '/studio/:path*',
    destination:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3333/studio/:path*'
            : '/travel/index.html'
}

module.exports = {
    swcMinify: true,
    reactStrictMode: true,
    env: {
        APP_URL: 'http://localhost:3000'
    },

}
