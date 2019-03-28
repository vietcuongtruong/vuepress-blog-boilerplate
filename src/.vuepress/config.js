const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'uouo',
  dest: './public',
  // serviceWorker: true,
	themeConfig: {
    //sidebarDepth: 1, // defaults to 1 | 0 disables the header links | max is 2
		// repo: 'https://github.com/vietcuongtruong/vuepress-blog-boilerplate',
		repoLabel: 'Repo',
		editLinks: false,
    editLinkText: 'Found a bug? Help me improve this page!',
    serviceWorker: {
      updatePopup: true,
    },
		nav: [
			// { text: 'Home', link: '/' }, 
      { text: 'Projects', link: '/projects/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Archive', link: '/archive/' },
      { text: 'About', link: '/about/' },
      // {
      //   text: 'About',
      //   items: [
      //     { text: 'About', link: '/about/' },
      //     { text: 'Me', link: '/about/me/' },
      //     { text: 'Uses', link: '/about/uses/' }
      //   ]
      // },
			{ text: 'RSS Feed', link: '/rss.xml' }
    ],
    sidebar: {
      '/projects/': [
        {
          title: 'Identities', // required
          //path: '/projects/',  // optional, which should be a absolute path.
          collapsable: false,  // optional, defaults to true
          //sidebarDepth: 1,     // optional, defaults to 1 (funkar inte av någon anledning här)
          children: [
            '/projects/tocaboca/',
            '/projects/everyread/',
            '/projects/readmill/',
            '/projects/tripwell/',
            '/projects/bonniergrowthmedia/',
            '/projects/mobilab/'
          ]
        },
        {
          title: 'Iconography',
          collapsable: false,
          children: [
            '/projects/arbetsformedlingen/'
          ]
        },
        {
          title: 'Exhibition',
          collapsable: false,
          children: [
            '/projects/konstfack/'
          ]
        }
      ],

      '/about/': [
        '',
        'me',
        'uses'
      ],
    },
    
    
    

		logo: '/vuopress-logo.svg',
		docsDir: 'src',
		pageSize: 5,
		startPage: 0,
    newestFirst: true,
    // sidebar: {
    //   '/about/': [
    //     '',     /* /foo/ */
    //     'me',  /* /foo/one.html */
    //     'uses'   /* /foo/two.html */
    //   ]
    // }
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-29435516-2' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://www.uouo.se',
				filter: frontmatter => frontmatter.date <= new Date(),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
    'vuepress-plugin-janitor',
    'vue-progressive-image'
  ],
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] }
  },
	head: [
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
    ],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}