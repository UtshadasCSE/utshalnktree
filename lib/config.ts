import configData from "@/data/config.json";

export type Config = typeof configData;

export const getConfig = (): Config => {
  return configData;
};

export const config = configData;
