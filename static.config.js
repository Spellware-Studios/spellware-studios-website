import path from 'path'
import axios from 'axios'

export default {
    getRoutes: async () => {
        //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

        return [
            // Add dynamic routes here to prevent 404's
            { path: "/en/home", template: "src/pages/HomePage" },
            { path: "/en/contact", template: "src/pages/ContactPage" },
            { path: "/en/services", template: "src/pages/ServicesPage" },
            { path: "/en/about", template: "src/pages/AboutPage" },
            { path: "/en/portfolio", template: "src/pages/PortfolioPage" },
            { path: "/nl/home", template: "src/pages/HomePage" },
            { path: "/nl/contact", template: "src/pages/ContactPage" },
            { path: "/nl/services", template: "src/pages/ServicesPage" },
            { path: "/nl/about", template: "src/pages/AboutPage" },
            { path: "/nl/portfolio", template: "src/pages/PortfolioPage" },
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
