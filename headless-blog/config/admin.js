module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a77af58d1636f45a73b241e07f6a1ac'),
  },
});
