module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Stencil","Helvetica Neue LT Pro"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Website Name","short_name":"Website Name","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/img/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0bab8ad8360e7882a92f8c6ee46f2cb0"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"gold-for-cash","accessToken":"MC5aQnJSdHhBQUFDQUFncFJp.77-9SBzvv73vv73vv71aHu-_ve-_vQLvv73vv70ESO-_ve-_ve-_vQw977-977-977-9VO-_vTbvv70W77-9LO-_ve-_vQ","schemas":{"project":{"Main":{"uid":{"type":"UID","config":{"label":"slug"}},"title":{"type":"StructuredText","config":{"single":"paragraph","label":"title"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":null,"choices":{"image":{"type":"Slice","fieldset":"Image","description":"Image","icon":"add_box","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"image_caption":{"type":"StructuredText","config":{"single":"paragraph","label":"Image Caption"}}},"repeat":{}}}}}},"Project Page Content":{"body1":{"type":"Slices","fieldset":"Slice zone","config":{"labels":null,"choices":{"project_page_image":{"type":"Slice","fieldset":"Project Page Image","description":"Project Page Image","icon":"add_box","display":"list","non-repeat":{"project_page_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Project Page Image"}},"project_page_image_caption":{"type":"StructuredText","config":{"single":"paragraph","label":"Project Page Image Caption"}}},"repeat":{}}}}}}},"homepage":{"Main":{"sizzle":{"type":"Link","config":{"select":"media","label":"Sizzle"}},"short_intro":{"type":"StructuredText","config":{"multi":"paragraph","label":"Short Intro"}},"clients":{"type":"StructuredText","config":{"multi":"paragraph","label":"Clients"}},"project_relationship_group":{"type":"Group","config":{"fields":{"project_relationship_field":{"type":"Link","config":{"select":"document","customtypes":["project"],"label":"Project Relationship Field"}}},"label":"Project Relationship Group"}}}}},"imageImgixParams":{"auto":"format"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/theodoreford/Documents/01_projects/Oliver De Vitre/00 React/02 Builds/01 Gold for Cash/src/components/global/layout.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
