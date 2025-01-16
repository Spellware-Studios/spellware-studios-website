import path from 'path'
import axios from 'axios'

export default {
    getRoutes: async () => {
        //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

        return [
            // Add dynamic routes here to prevent 404's
            { path: "/:lang/home", template: "src/pages/HomePage" },
            { path: "/:lang/contact", template: "src/pages/ContactPage" },
            { path: "/:lang/services", template: "src/pages/ServicesPage" },
            { path: "/:lang/about", template: "src/pages/AboutPage" },
            { path: "/:lang/portfolio", template: "src/pages/PortfolioPage" },
        ]
    },
    plugins: [
        [
            require.resolve('react-static-plugin-sass'),
            {
                includePaths: ["css/", "src/"]
            }
        ],
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/templates'),
            },
        ],
        require.resolve('react-static-plugin-react-router'),
        require.resolve('react-static-plugin-sitemap')
    ],
}
