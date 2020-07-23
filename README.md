# Exit Strategies

Development server: `yarn run develop`  
Build: `yarn run build`  
Experimental incremental build: `GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=TRUE gatsby build --log-pages`

### Branches

Branches are deployed as subdomains

| Branch | Subomain  | Description  | Active |
| ------ | --------- | ------------ | ------ |
| master |           | Live         | Y      |
| dev    | dev.\*    | Staging      | N      |
| temp   | temp.\*   | Pre–Release  | Y      |
| closed | closed.\* | Post–Release | Y      |
