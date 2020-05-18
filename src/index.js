import Editor from '@toast-ui/editor';

import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'tui-color-picker/dist/tui-color-picker.css';

import 'tui-chart/dist/tui-chart.css';
import 'highlight.js/styles/github.css';

import './css/editor.css';

import './css/custom-element.css';

let height = 400;
let value = '';
let editor;

function storeValue() {
  value = editor.getMarkdown();
  CustomElement.setValue(value);
}

function updateDisabled(disabled) {
  document.querySelector('#editor').innerHTML = '';
  if (disabled) {
    editor = Editor.factory({
      el: document.querySelector('#editor'),
      height: `${height}px`,
      initialValue: value,
      viewer: true
    });
  }
  else {
    editor = Editor.factory({
      el: document.querySelector('#editor'),
      height: `${height}px`,
      initialValue: value,
      viewer: false,
      events: {
        change: storeValue
      },
      plugins: [
        chart,
        [codeSyntaxHighlight, { hljs }],
        colorSyntax,
        tableMergedCell,
        uml
      ]
    });
  }
};


CustomElement.init((element, _context) => {
  height = (element.config || {}).height || 400;
  value = element.value;
  CustomElement.setHeight(height);
  updateDisabled(element.disabled);
  CustomElement.onDisabledChanged(updateDisabled);

});
