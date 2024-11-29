export const getEnv = (key: string, defaultValue: string = ""): string => {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue) {
      return defaultValue;
    }
    // Test Run For Github API
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
};
