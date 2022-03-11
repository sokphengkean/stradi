module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c63073b2e891dc235cd840b126fc0f28'),
  },
});
