const minutes = (n) => n * 60 * 1000;

const frontendUrl = process.env.FRONTEND_URL;

module.exports = {
  databaseOptions: {
    maxPoolSize: 10,
    minPoolSize: 2,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 5000,
    family: 4,
    retryWrites: true,
    w: 'majority'
  },

  rateLimitOptions: {
    windowMs: minutes(15),
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes'
  },

  corsOptions: {
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true
  },

  jsonBodyLimit: process.env.JSON_BODY_LIMIT || '10mb',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d'
};
