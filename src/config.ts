const ENV = process.env;

export const NODE_ENV: string | undefined = ENV.NODE_ENV;
export const isProduction: boolean = ENV.NODE_ENV === 'production';
export const isDevelopment: boolean = !isProduction;
export const PORT: number | undefined = Number(ENV.PORT);

export const LOG_LEVEL: string | undefined = ENV.LOG_LEVEL;
