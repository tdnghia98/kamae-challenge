import path from 'path';
import react from '@vitejs/plugin-react';
import { UserConfig, defineConfig } from 'vite';

export const defaultConfig: UserConfig = {
    server: {
        host: true,
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/kamae-challenge/',
};
export default defineConfig(defaultConfig);
