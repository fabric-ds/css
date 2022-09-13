import { injectHtml } from 'vite-plugin-html';
import glob from 'glob';
import path from 'path';
import drnm from 'drnm';

const basedir = drnm(import.meta.url)

export default function ({ mode }) {
    let input = {};

    const isProduction = mode === 'production';

    // For production we need to specify all our entry points
    // See https://vitejs.dev/guide/build.html#multi-page-app
    if (isProduction) {
        input.main = path.resolve(basedir, 'index.html');

        const pages = glob.sync('pages/*.html', { absolute: true });

        for (const page of pages) {
            const fileName = path.parse(page).name;

            input[fileName] = page;
        }
    }

    return {
        // base: isProduction ? '/css/' : '',
        plugins: [
            injectHtml({
                injectOptions: { views: ['pages/includes'] },
            }),
            isProduction && basePathFix(),
        ],
        build: {
            outDir: 'site',
            rollupOptions: {
                input,
            },
        },
    };
}

/**
 * Since we deploy the site to github pages we need to prefix all the interal links with a base path
 * We do this with a simple regex
 */
function basePathFix() {
    return {
        name: 'base-path-fix',
        transformIndexHtml(html) {
            // Regex matches href=", followed by a /, then any combination of \w, / or -, ending with .html
            return html.replace(/href="\/([\w\/-]*)\.html/g, 'href="/$1.html');
        },
    };
}
