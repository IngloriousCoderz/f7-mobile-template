const completeMessage = `
{{#inPlace}}To get started:

npm install # Or yarn
npm run dev{{else}}To get started:

cd {{destDirName}}
npm install # Or yarn
npm run dev{{/inPlace}}
`

module.exports = {
  helpers: {
    raw: options => options.fn(this)
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'Nuxt.js project'
    }
    // NOTE: no need for this, it's precompiled
    // author: {
    //   'type': 'string',
    //   'message': 'Author'
    // },
  },
  completeMessage
}
