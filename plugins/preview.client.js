export default ({ query, enablePreview }) => {
  if (typeof query.preview !== 'undefined') {
    console.log('PREVIEW MODE ENABLED')
    enablePreview()
  }
}
