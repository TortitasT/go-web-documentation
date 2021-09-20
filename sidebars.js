/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    docs: [
        'intro',
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: ['installation', 'configuration'],
        },
        {
            type: 'category',
            label: 'Database',
            collapsed: false,
            items: ['models', 'migration'],
        },
        'front-end',
        {
            type: 'category',
            label: 'Advanced',
            collapsed: false,
            items: ['cli', 'architecture'],
        },
        {
            type: 'category',
            label: 'Request lifecycle',
            collapsed: false,
            items: ['routing', 'controller', 'validation']
        }
    ]
};
