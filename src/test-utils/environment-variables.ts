export * from '../utils/environment-variables';

export const JEST_TIMEOUT: number = +(process.env.JEST_TIMEOUT ?? 0);
export const MONGO_MEMORY: boolean = !!+(process.env.MONGO_MEMORY ?? 0);
