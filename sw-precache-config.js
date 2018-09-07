module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js',
    runtimeCaching:[{
        urlPattern:/^https:\/\/maps\.googleapis\.com\/maps\/api\/js\/\**/,
        handler:'fastest',
        options: {
           cache: {
               maxEntries: 50,
               name: 'google-maps-cache'
           }
       }

    },{
        urlPattern:/^https:\/\/en\.wikipedia\.org\/w\/api/,
        handler:'fastest',
        options: {
           cache: {
               maxEntries: 50,
               name: 'wikipedia-cache'
           }
       }

    }
    ]

};
