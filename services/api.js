import axios from 'axios'
import pathHelper from '../helpers/path'

export default {
  getArticles: () => {
    return axios.get(`${pathHelper.getBaseUrl()}posts/list.json`)
      .then(res => {
        // 依建立日期由大至小排列
        return _.orderBy(res.data,
          [
            function (o) {
              return moment(o.createDate, 'YYYY-MM-DD')
            }
          ],
          [
            'desc'
          ])
      })
      .catch(() => [])
  },
  getArticlesWithTag: (tag) => {
    return axios.get(`${pathHelper.getBaseUrl()}posts/list.json`)
    .then(res => {
      // 依建立日期由大至小排列
      return _.orderBy(_.filter(res.data, function(o) { return o.tags && o.tags.includes(tag) }),
        [
          function (o) {
            return moment(o.createDate, 'YYYY-MM-DD')
          }
        ],
        [
          'desc'
        ])
    })
    .catch(() => [])
  },
  getArticleById: (id) => {
    const _info = axios.get(`${pathHelper.getBaseUrl()}posts/list.json`)
      .then(res => {
        const posts = res.data
        const article = _.find(posts, function (o) { return o.id === id })
        if (article && article.id) {
          return { data: article }
        } else {
          return { message: 'Not found' }
        }
      })
      .catch(() => {
        return { message: 'Not found' }
      })
    const _content = axios.get(`${pathHelper.getBaseUrl()}posts/${id}/content.md`)
      .then(res => {
        return { data: res.data }
      })
      .catch(() => {
        return { message: 'Not found' }
      })
    return axios.all([_info, _content])
  }
}