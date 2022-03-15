import * as eik from '@eik/esbuild-plugin';
import esbuild from 'esbuild';

await eik.load();

await esbuild.build({
    entryPoints: ['./dist/npm/fabric.min.js'],
    bundle: true,
    minify: true,
    format: 'esm',
    outfile: './dist/eik/fabric.min.js',
    target: ['es2017'],
    plugins: [eik.plugin()],
})