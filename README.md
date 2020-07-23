# Exit Strategies

Branches are subdomains deployed on Vercel

Development server: `yarn run develop`  
Build: `yarn run build`  
Experimental incremental build: `GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=TRUE gatsby build --log-pages`

### Branches

Branches are deployed as subdomains

| Branch  | Subomain | Description | Active |
| ------------- | ------------- | ------------- | ------------- |
| Master  |   | Live Store  | Y |
| Dev  | dev.*  | Staging  | N |
| Temp  | temp.*  | Pre–Release | Y |
| Closed  | closed.*  | Post–Release | Y |
