export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9d874b78737b9c7f6bd58f',
                  title: 'Sanity Studio',
                  name: 'Ridvan-studio',
                  apiId: '67b00d43-bee5-4e80-8e4c-8501b3e4a18c'
                },
                {
                  buildHookId: '5e9d874b3b0002838fa6736e',
                  title: 'Landing pages Website',
                  name: 'Ridvan',
                  apiId: '04c75cdc-2736-4ea2-afc8-1ad923c16171'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Lastofthefirst/Ridvan',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Ridvan.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
