export default {
    redis: {
        host: process.env.REDIZ_HOST!,
        password: process.env.REDIS_PASSWORD!,
        port: Number(process.env.REDIS_PORT!),
    },
};
