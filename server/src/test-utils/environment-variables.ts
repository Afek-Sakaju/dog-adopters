export * from '../utils/environment-variables';

export const JEST_TIMEOUT: number = +(process.env.JEST_TIMEOUT ?? 0);
export const TEST_REQ_ID = process.env.TEST_REQ_ID ?? 'Test ID';
