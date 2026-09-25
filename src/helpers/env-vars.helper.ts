const ENV_FILES_MAP: Record<string, string> = {
    'test': '.env.test',
    'development': '.env.development',
    'production': '.env',
    'production.local': '.env.production.local',
};

export const getEnvVarFile = (nodeEnv = ''): string[] => {
    return Array.from(new Set([ENV_FILES_MAP[nodeEnv], '.env'])).filter(Boolean);
};