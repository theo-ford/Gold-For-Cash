var plugins = [{
      plugin: require('/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Website Name","short_name":"Website Name","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/img/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0bab8ad8360e7882a92f8c6ee46f2cb0"},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/node_modules/gatsby-source-prismic/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"gold-for-cash","accessToken":"MC5aQnJSdHhBQUFDQUFncFJp.77-9SBzvv73vv73vv71aHu-_ve-_vQLvv73vv70ESO-_ve-_ve-_vQw977-977-977-9VO-_vTbvv70W77-9LO-_ve-_vQ","schemas":{"project":{"Main":{"uid":{"type":"UID","config":{"label":"slug"}},"title":{"type":"StructuredText","config":{"single":"paragraph","label":"title"}},"client":{"type":"StructuredText","config":{"single":"paragraph","label":"client"}},"team":{"type":"StructuredText","config":{"multi":"paragraph,hyperlink","label":"team"}},"agency":{"type":"StructuredText","config":{"single":"paragraph","label":"Agency"}},"about":{"type":"StructuredText","config":{"multi":"paragraph","label":"About"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":null,"choices":{"4ximg":{"type":"Slice","fieldset":"4xImg","description":"Img Row of 4","icon":"add_circle","display":"list","non-repeat":{"img1":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"img1"}},"img1_caption":{"type":"StructuredText","config":{"multi":"paragraph","label":"Img1 caption"}},"img2":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"img2"}},"img2_caption":{"type":"StructuredText","config":{"multi":"paragraph","label":"img2 caption"}},"img3":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"img3"}},"img3_caption":{"type":"StructuredText","config":{"multi":"paragraph","label":"img3 caption"}},"img4":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"img4"}},"img4_caption":{"type":"StructuredText","config":{"multi":"paragraph","label":"img4 caption"}}},"repeat":{}},"2ximg":{"type":"Slice","fieldset":"2xImg","description":"Img Row of 2","icon":"add_box","display":"list","non-repeat":{"img1":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"img1"}},"img1_caption":{"type":"StructuredText","config":{"multi":"paragraph","label":"img1 Caption"}},"img2":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"img2"}},"img2_caption":{"type":"StructuredText","config":{"multi":"paragraph","label":"img2 Caption"}}},"repeat":{}}}}}}},"about":{"Main":{"email":{"type":"StructuredText","config":{"single":"paragraph","label":"Email"}},"phone":{"type":"StructuredText","config":{"single":"paragraph","label":"Phone"}},"web":{"type":"StructuredText","config":{"multi":"paragraph","label":"Web"}},"address":{"type":"StructuredText","config":{"multi":"paragraph","label":"Address"}}}},"statement":{"Main":{"statement_1":{"type":"StructuredText","config":{"multi":"paragraph","label":"statement 1"}},"statement_2":{"type":"StructuredText","config":{"multi":"paragraph","label":"statement 2"}}}},"homepage":{"Main":{"sizzle":{"type":"Link","config":{"select":"media","label":"Sizzle"}},"short_intro":{"type":"StructuredText","config":{"multi":"paragraph","label":"Short Intro"}},"clients":{"type":"StructuredText","config":{"multi":"paragraph","label":"Clients"}},"project_relationship_group":{"type":"Group","config":{"fields":{"project_relationship_field":{"type":"Link","config":{"select":"document","customtypes":["project","statement"],"label":"Project Relationship Field"}}},"label":"Project Relationship Group"}}}}},"imageImgixParams":{"auto":"format"}},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/src/components/global/layout.js"},
    },{
      plugin: require('/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
