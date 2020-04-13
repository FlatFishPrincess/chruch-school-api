// eslint-disable-next-line @typescript-eslint/no-var-requires
const configs = require(`./config.${process.env.NODE_ENV || "dev"}`);

export const getDatabaseConfig = () => {
    return configs.database;
}

export const getServerConfig = () => {
    return configs.server;
}

export const getApiConfig = () => {
    return {
        prefix: '/api'
    }
}