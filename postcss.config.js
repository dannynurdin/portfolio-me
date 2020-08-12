module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content:[
                './src/**/*.vue',
                './public/index.html',
            ],
            defaultExtractorKey: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}