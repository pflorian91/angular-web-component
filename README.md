# WebDemo2

Shows how to wrap Angular components as Web Components which can be used outside of Angular

> npm install

> ng build 1200-web-component

> npx http-server .\dist\1200-web-component\browser\

Open http://127.0.0.1:8080/

You can check the source of the dist/../index.html

It wraps the Angular component under `<my-form-1200-as-web-component></my-form-1200-as-web-component>` as a reusable web component which can be integrated in different frameworks (React, Vue) or plain JS pages provided the required dependencies.

Used:
- Node v18.18.2
- npm 9.8.1
- Angular CLI: 17.0.0
