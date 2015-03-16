Ludwig-based testing instance for the Paie API.

> Instance Ludwig pour le test de l'API Paie.


Install dependencies
--------------------

You will need [`compass`](https://github.com/Compass/compass) to build the UI assets. Therefore, before installing, ensure you have Ruby and `compass`. If not, install Ruby and `sudo gem install compass`.

Afterwards, clone this repository and simply `npm install`.


Usage
-----

### Mongo connection

Run a [Mongo](http://www.mongodb.org) database. Its host is defined in the NPM `package.json` file. If necessary, update the host with `npm config set ludwig-paie:mongoHost <hostname:port>`.

### Running the app

```shell
npm start
```
