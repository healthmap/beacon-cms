export default ({ env }: any) => ({
  host: env('HOST', '0.0.0.0'),
  port: (env as any).int('PORT', 1337),
  app: {
    keys: (env as any).array('APP_KEYS'),
  },
});
