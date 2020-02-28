/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */
import WebCache from 'web-storage-cache'

const wsCache = new WebCache({
  storage: 'sessionStorage'
})

export default wsCache
