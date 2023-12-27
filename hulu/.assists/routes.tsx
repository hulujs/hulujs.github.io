/**
 * 路由配置
 */
const routes = [
  {
    "path": "/",
    "view": "~ass/layout",
    "children": [
      {
        "path": "*",
        "view": "~ck/views/no-match",
        "lazy": () => import('~ck/views/no-match')
      },
      {
        "path": "no-permission",
        "view": "~ck/views/no-permission",
        "lazy": () => import('~ck/views/no-permission')
      },
      {
        "path": "no-match",
        "view": "~ck/views/no-match",
        "lazy": () => import('~ck/views/no-match')
      },
      {
        "path": "/",
        "view": "home",
        "meta": {
          "count": 1,
          "back": {}
        },
        "lazy": () => import('@/views/home')
      },
      {
        "path": "/demo",
        "view": "demo",
        "children": [
          {
            "path": "/demo/eee/:id",
            "view": "home",
            "lazy": () => import('@/views/home')
          },
          {
            "path": "/demo/ddd/:id?",
            "view": "home",
            "lazy": () => import('@/views/home')
          },
          {
            "path": "/demo/fff/*",
            "view": "home",
            "lazy": () => import('@/views/home')
          }
        ],
        "lazy": () => import('~ck/views/demo')
      }
    ],
    "lazy": () => import('~ass/layout')
  }
];

export default routes;