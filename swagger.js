const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: "Contacts Api",
        description: "Contacts Api",
        contact: {
            name: "Jarom Edwards",
            email: "jaromjedwards@gmail.com",
            url: "https://github.com/jaromjedwards?tab=repositories"
        }
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
