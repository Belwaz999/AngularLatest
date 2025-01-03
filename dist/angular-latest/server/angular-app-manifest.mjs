
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/admin"
  }
],
  assets: new Map([
['index.csr.html', {size: 561, hash: 'd23f876d0f5e11a6d8e9fcf9646afd4dcf43b9d776bf99ece7fbc1083f1a371f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1074, hash: '12b0b6e235a0f5c365ea8cd601e9f1b11025c160df98eb37a715c971613377e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['admin/index.html', {size: 21058, hash: 'd8a70fc18f03e99f663783cfc091691c3dff2b8fa85b4347aadf72d11533bffd', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
