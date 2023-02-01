import path from 'path'
import axios from 'axios'

export default {
    getRoutes: async () => {
        //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

        return [
            // Add dynamic routes here to prevent 404's
            { path: "/home", template: "src/pages/HomePage" },
            { path: "/contact", template: "src/pages/ContactPage" },
            { path: "/services", template: "src/pages/ServicesPage" },
            { path: "/about", template: "src/pages/AboutPage" },
            { path: "/portfolio", template: "src/pages/PortfolioPage" }
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
