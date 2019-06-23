// Reusable Metadata Snippets
export function getPageMeta({ url, description, title }) {
  const ogUrl = url || 'https://codotype.io'
  const desc =
    description ||
    'Instantly generate full-stack boilerplate code with custom CRUD.'

  const titleVal = title || 'Codotype - Building Better Boilerplate'

  return [
    {
      property: 'twitter:card',
      content: 'summary'
    },
    {
      property: 'twitter:site',
      value: '@codotype'
    },
    {
      property: 'twitter:creator',
      value: '@aeksco'
    },
    {
      hid: 'description',
      name: 'description',
      content: desc
    },
    {
      property: 'og:url',
      content: ogUrl
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'Codotype'
    },
    {
      property: 'og:title',
      content: titleVal
    },
    {
      property: 'og:description',
      content: desc
    },
    {
      property: 'og:image',
      content: 'https://avatars2.githubusercontent.com/u/42126198?s=200&v=4'
    }
  ]
}
