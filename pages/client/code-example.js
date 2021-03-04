import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import htmlFormat from 'html-format';

export class CodeExample extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .output {
            padding: 16px;
            border: 3px solid #f6f8fa;
        }

        pre {
            background-color: rgb(246, 248, 250);
            font-family: Monaco, Ubuntu Mono, Consolas, monospace;
            font-size: 14px;
            margin: 0;
            padding: 16px;
        }
    `;

    static get properties() {
        return {
            source: { attribute: false },
        };
    }

    // After the initial render we get the source HTML from the slot and highlight it using prismjs
    firstUpdated() {
        const slot = this.shadowRoot.querySelector('slot');

        let slotHtml = slot
            .assignedElements()
            .map((el) => el.outerHTML)
            .join('');

        slotHtml = htmlFormat(slotHtml);

        const highlighted = window.Prism.highlight(slotHtml, window.Prism.languages.markup, 'html');

        this.source = highlighted;
    }

    render() {
        return html`
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
                integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                crossorigin="anonymous"
            />
            <div class="output">
                <slot></slot>
            </div>
            <pre><code>${unsafeHTML(this.source)}</code></pre>
        `;
    }
}

customElements.define('code-example', CodeExample);
