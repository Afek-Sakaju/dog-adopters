export * from '../utils/environment-variables';

export const JEST_TIMEOUT: number = +(process.env.JEST_TIMEOUT ?? 0);
