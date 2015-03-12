Ludwig-based testing instance for the Paie API.

> Instance Ludwig pour le test de l'API Paie.


Install dependencies
--------------------

You will need [`compass`](https://github.com/Compass/compass) to build the UI assets. Therefore, before installing, ensure you have Ruby and `compass`. If not, install Ruby and `sudo gem install compass`.

Afterwards, clone this repository and simply `npm install`.


Usage
-----

Run a [Mongo](http://www.mongodb.org) database, and run the app with:

```shell
MONGODB_URL="mongodb://localhost:27017" node server.js
```
