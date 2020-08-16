import request2 from '@/api/base/request2'
import request1 from '@/api/base/request1'
import md5 from 'js-md5'

export function getChatResponse1(text) {
  return request1({
    url: 'http://127.0.0.1:8001/',
    method: 'post',
    data: { sentence: text },
  })
}

export function getChatResponse2(text) {
  return request2({
    url: 'fcgi-bin/nlp/nlp_textchat?' + getChatParams(text),
    method: 'get',
  })
}

function getChatParams(text) {
  let app_id = 2151744249
  let app_key = 'AWNcQGMMWi0OUceN'
  let nonce_str = 'fa577ce340859f9fe'
  let question = encodeURIComponent(text)
  let session = 10000
  let time_stamp = parseInt(Date.now() / 1000)

  let params =
    'app_id=' +
    app_id +
    '&nonce_str=' +
    nonce_str +
    '&question=' +
    question +
    '&session=' +
    session +
    '&time_stamp=' +
    time_stamp +
    '&app_key=' +
    app_key
  let sign = md5(params).toUpperCase()

  return params + '&sign=' + sign
}
