const winston = require('winston');

// Configura el logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ],
});

// Exporta la instancia del logger
module.exports = logger;