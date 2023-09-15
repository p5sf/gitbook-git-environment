let plugins = [
  '-lunr',
  '-sharing',
  '-search',
  '-favicon',
  'code',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts',
  "github"
];
if (process.env.NODE_ENV == 'dev') {
  plugins.push('livereload');
}
module.exports = {
  title: '配置Linux环境',
  author: 'Gitbook',
  lang: 'zh-cn',
  description: '配置开发环境',
  plugins,
  pluginsConfig: {
    'flexible-alerts': {
      style: 'flat',
      iconVisibility: 'hidden',
      labelVisibility: 'hidden'
    },
    code: {
      copyButtons: true,
    },
    github:{
      url:"https://github.com"
    },
    'theme-lou': {
      color: '#2096FF',
      favicon: 'assets/favicon.ico',
      logo: 'assets/logo.png',
      forbidCopy: false,
      'search-placeholder': '众里寻他千百度',
      'hide-elements': ['.summary .gitbook-link'],
      copyright: {
        author: 'GitBook',
      },
    },
  },
  variables: {
    themeLou: {
      // 顶部导航栏配置
      nav: [
        {
          target: '_blank',
          url: 'https://space.bilibili.com',
          name: 'B站',
        },
        {
          target: '_blank',
          url: 'https://ke.qq.com/course',
          name: '腾讯课堂',
        },
        {
          target: '_blank',
          url: 'https://github.com/p5sf',
          name: 'GitHub',
        },
      ],
    },
  },
};
