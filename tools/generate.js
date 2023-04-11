const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  {
    option: 'Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/storybook-component/',
    },
    stringReplacers: [
      { question: 'Component name', slot: '__CompName__' },
    ],
    dynamicReplacers: [
      { slot:'__Collection__', slotValue: 'components' },
    ],
    output: {
      path: './src/components/__CompName__',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
  {
    option: 'Symbol',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/storybook-component/',
    },
    stringReplacers: [
      { question: 'Symbol name', slot: '__CompName__' }
    ],
    dynamicReplacers: [
      { slot:'__Collection__', slotValue: 'symbols' },
    ],
    output: {
      path: './src/components/__CompName__',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  }
])
