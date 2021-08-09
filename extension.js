const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate (context) {
  const globalSearch = vscode.commands.registerCommand('docs-mdn.docsmdnglobal', () => {
    const editor = vscode.window.activeTextEditor
    const selectText = editor.document.getText(editor.selection)
    const url = 'https://developer.mozilla.org/fr/search?q=' + encodeURI(selectText)
    vscode.env.openExternal(vscode.Uri.parse(url))
  })

  const preciseSearch = vscode.commands.registerCommand('docs-mdn.docsmdnprecise', () => {
    const editor = vscode.window.activeTextEditor
    const selectText = editor.document.getText(editor.selection)
    const url = 'https://developer.mozilla.org/fr/docs/Web/API/' + selectText.replace('.', '/')
    vscode.env.openExternal(vscode.Uri.parse(url))
  })

  context.subscriptions.push(globalSearch, preciseSearch)
}

function deactivate () {}

module.exports = {
  activate,
  deactivate
}
