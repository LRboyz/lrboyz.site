export function url(path = '') {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lrboyz.site' : 'http://localhost:3333'
  return new URL(path, baseUrl)
}
