# basic-starting-file

##### (rootpath fix)

`$rootpath = "../..";` on local server, but must be `$rootpath = "./..";` on Github

*Solution*: use a global variable (`$rootpath = "../.." !global;`), overridden by a '_rootpathLocal.scss' file (with `$rootpath = "./..";`) that is then ignored during the 'push' process.

