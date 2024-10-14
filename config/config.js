export default {
  port: process.env.PORT || 1234,
  ip: process.env.HOST || '0.0.0.0',
  mongo: {
    uri: process.env.MONGO_URL || 'mongodb://mongo:27017/post-clean-code'
  },
  redis: {
    uri: process.env.REDIS_URL || 'redis://redis:6379'
  },
  jwtSecret: process.env.JWT_SECRET || 'jkl!±@£!@ghj1237'
};
