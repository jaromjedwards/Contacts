const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: "Users Api",
        description: "Users Api",
        contact: {
            name: "Your Name",
            email: "your.email@example.com",
            url: "https://www.example.com"
        }
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
