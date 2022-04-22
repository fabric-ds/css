#!/usr/bin/env node

import glob from 'glob';
import fs from 'fs';

glob('dist/*.css', { absolute: true }, async (er, files) => {
    await Promise.all(files.map(replaceTW));
});

async function replaceTW(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const replaced = content.replace(/--tw-/g, '--f-');
    fs.writeFileSync(filePath, replaced, 'utf8');
}
