const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    platform: 'node',
    sourcemap: true,
    target: 'es2015',
    format: 'cjs',
}).catch(() => process.exit(1));

esbuild.build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.mjs',
    bundle: true,
    minify: true,
    platform: 'node',
    sourcemap: true,
    target: 'es2015',
    format: 'esm',
}).catch(() => process.exit(1));
