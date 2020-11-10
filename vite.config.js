import antdVars from './resources/applause/themes/antd'

export default {
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: antdVars
    }
  }
}
