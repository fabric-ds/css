#!/usr/bin/env node

/**
 * Script that prints the compressed (brotli) size of our build artifacts
 */

import brotliSize from 'brotli-size';
import filesize from 'filesize';
import fs from 'fs';
import glob from 'glob';
import prettyBytes from 'pretty-bytes';
import path from 'path';

glob('packages/*/dist/*.css', { absolute: true }, async (er, files) => {
    console.log('\n');
    await Promise.all(files.map(report));
});

async function report(filePath) {
    const discSize = fs.statSync(filePath).size
    const size = await brotliSize.file(filePath);

    const prettySize = prettyBytes(size);

    const fileName = path.basename(filePath);

    console.log(`${prettySize}: ${fileName}.br`);
    console.log(`${filesize(discSize)}: ${fileName}.min.css`);
}
