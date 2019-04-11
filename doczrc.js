/** 
 * Docz Configuration File:
 * https://www.docz.site/docs/project-configuration 
 */

import { css } from 'docz-plugin-css';

export default {
  indexHtml: 'src/__docs__/index.html',
  menu: [
    'Getting Started',
    { name: 'Elements', menu: ['Form / Select'] },
    { name: 'Components', menu: [
      'CINE Dialog',
      'Layout Button',
      'Overlay Trigger',
      'Rounded Button Group',
      'Simple Dialog',
      'Study Browser',
      'Toolbar Section',
      'Tooltip'
    ] }
  ],
  // Rollup Aliases?
  // https://github.com/pedronauck/docz/issues/373
  plugins: [
    css(),
    css({
      preprocessor: 'stylus',
      cssmodules: false,
    }),
  ],

}

/* 
 * Alternative ways to extend/modify underlying webpack config
 *
modifyBundlerConfig: (config) => {
  config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    })
  
  return config
} 
  *
  *
  *
onCreateWebpackChain: config => {
  config.module
    .rule('css')
      .test(/\.css$/)
        .use('css-loader')
        .loader('css-loader')
        .options({ sourceMap: false,
                    importLoaders: 2 })
}
*/