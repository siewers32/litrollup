import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {
  static styles = css`
    p {
      color: red;
    }
  `;
  render() {
    return html`<p><slot>I am green!</slot></p>`;
  }
}