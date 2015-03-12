Ludwig-based testing instance for the Paie API.

> Instance Ludwig pour le test de l'API Paie.


Install dependencies
--------------------

Clone this repository, and then do:

```shell
npm install
cd node_modules/ludwig-ui
npm install .	# install devDependencies
sudo gem install compass
grunt build
```


Usage
-----

Run a [Mongo](http://www.mongodb.org) database, and run the app with:

```shell
MONGODB_URL="mongodb://localhost:27017" node server.js
```
