var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { devDependencies, dependencies } from './package.json';
var __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'test-npm-lib',
            // the proper extensions will be added
            fileName: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: __spreadArray(__spreadArray(['react/jsx-runtime'], Object.keys(devDependencies), true), Object.keys(dependencies), true),
        },
        target: 'esnext',
        sourcemap: true,
    },
});
