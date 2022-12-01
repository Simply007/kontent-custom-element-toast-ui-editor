# Kontent Toast UI editor custom element

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

This is a [custom element](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features) for [Kontent.ai](https://kontent.ai) that allows you to use the [Toast UI Editor](https://ui.toast.com/tui-editor). It is a Markdown WYSIWYG Editor including GFM Standard + Chart & UML Extensible.

All of the editor [extensions](https://github.com/nhnent/tui.editor/blob/master/docs/using-extensions.md) are enabled in this custom element.

![Toast UI editor](ToastUIEditor.gif)

## Setup

1. Deploy the code to a secure public host
    * See [deploying section](#Deploying) for a really quick option
1. Follow the instructions in the [Kontent.ai documentation](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features#a-3--displaying-a-custom-element-in-kentico-kontent) to add the element to a content model.
    * The `Hosted code URL` is where you deployed to in step 1
    * No JSON parameters are necessary

## Deploying

Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your GitHub account as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Simply007/kontent-custom-element-toast-ui-editor)

### Development

You can use following to set up the development environment

Prerequisites:

* Node.js
* git

```console
git clone https://github.com/Simply007/kc-tui-editor-custom-element
cd kc-tui-editor-custom-element
npm install
npm run start
```

To build for production, run:

```console
npm run build
```

then deploy the contents of the `dist` folder.
