const { generateTemplateFiles } = require('generate-template-files');

const config = require('../package.json');

generateTemplateFiles([
  {
    option: 'Atom',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/atom',
    },
    output: {
      path: './components/atoms/__component__/',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    stringReplacers: [
      { question: 'What is the name of the component?', slot: '__component__' },
    ],
  },
  {
    option: 'Feature',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/feature',
    },
    output: {
      path: './components/features/__component__/',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    stringReplacers: [
      { question: 'What is the name of the component?', slot: '__component__' },
    ],
  },
]);
