export default function({$axios}) {
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = 'Bearer XXX'
    if (process.env.QIITA_TOKEN) {
      console.log(111)
      config.headers.common['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })
}