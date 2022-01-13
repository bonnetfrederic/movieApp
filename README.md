# The Movie App
based on The Movie DB project (TMDB) API

example of request: https://api.themoviedb.org/3/search/movie?api_key=4c1c0d1b5ab4b958dc6516de881a951d&query=star&language=fr-FR


##### (rootpath fix)

`$rootpath = "../..";` on local server, but must be `$rootpath = "./..";` on Github

*Solution*: use a global variable (`$rootpath = "../.." !global;`), overridden by a '_rootpathLocal.scss' file (with `$rootpath = "./..";`) that is then ignored during the 'push' process.

