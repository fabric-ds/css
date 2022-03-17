#!/usr/bin/env node

import fs from 'fs';

const input = new URL('../dist/npm/fabric.min.css', import.meta.url);
const output = new URL('../dist/npm/fabric.min.js', import.meta.url);

const styles = fs.readFileSync(input.pathname, 'utf8');
fs.writeFileSync(output.pathname, `import { css } from 'lit';export default css\`${styles}\``);