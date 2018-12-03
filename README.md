# hapi-next

Next.js wrapper for hapi


## Get started

- [Create Hapi.js Application]()
- [Run Hello World Application]()
- [Add Next.js Application]()
- [Open next.js end point]()

## Hello World Application
Make a folder & generate a plain old package.json [without having it ask any questions](https://docs.npmjs.com/cli/init)
```console
mkdir awesome-project
cd awesome-project
npm init -y
```

That command generates package.json like this:
```json
{
  "name": "awesome-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Next, install hapi packages
```console
$ npm i hapi
```

That comands will install & saves any specified packages into dependencies
```json
{
  "name": "awesome-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "hapi": "^17.8.1"
  }
}
```

Create `server.js`
```
const Hapi = require('hapi')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

  server.route({
    path: '/hello',
    method: 'GET',
    handler: (request, h) => {
      return `Hello world`;
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`)
};

init()
```

## Run Hapi 'Hello World' Application

Install nodemon, utility that will monitor for any changes in your source and automatically restart your server.
```console
npm i nodemon -D
```

Update `package.json`
```json
{
  "name": "awesome-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "hapi": "^17.8.1"
  },
   "devDependencies": {
    "nodemon": "^1.18.7"
  }
}

```

Run this command on terminal
```console
npm run dev
```
Output:

```console
> awesome-project@1.0.0 dev /Users/user/Documents/awesome-project
> nodemon server.js
[nodemon] 1.18.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Server running at: http://localhost:3000
```
Next, open on browser: http://localhost:3000/hello

# Add hapi-next plugin

```console
npm i @ynwd/hapi-next -S
```

Adds the plugin to your hapi application. See [hapi plugins tutorial](https://hapijs.com/tutorials/plugins) for detail.

```javascript
await server.register({
  plugin: require('@ynwd/hapi-next'),
  options: { 
    dir: './web',
    routes: ['/about', '/welcome'],
  }
})
```

Create `web` folder. You can change the name and location.
```console
mkdir web
```

Create `pages` folder inside `web`. It's required. This folder is for react aplication pages. You should not change this name. 
```console
mkdir web/pages
```

Add `.js` files inside `pages` folder
```console
touch web/pages/about.js
touch web/pages/welcome.js
touch web/pages/index.js
```

The content of `about.js`:
```javascript
import React from 'react'
export default () => <div>about</div>
```

The content of `welcome.js`:
```javascript
import React from 'react'
export default () => <div>welcome</div>
```
The content of `index.js`:
```javascript
import React from 'react'
import Link from 'next/link'
export default () => (
  <ul>
    <li><Link href='/about' as='/about'><a>about</a></Link></li>
    <li><Link href='/welcome' as='/welcome'><a>welcome</a></Link></li>
  </ul>
)
```