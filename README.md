## Official Fetcher for AlyaChan API

[![npm version](https://img.shields.io/npm/v/@alyachan/api)](https://www.npmjs.com/package/@alyachan/api)
[![npm downloads](https://img.shields.io/npm/dm/@alyachan/api)](https://www.npmjs.com/package/@alyachan/api)

> Module to fetch api data very easily with efficient and readable code

## How to use ??

for the get method
```Javascript
Api.get([endpoint], {[parameter]})
```

for the post method
```Javascript
Api.post([endpoint], {[parameter]})
```

## Set the path first in .env
```
API_ENDPOINT = 'https://api.alyachan.dev/'
API_KEY = 'yourkey'
```

## Example
```Javascript
const Api = new (require('@alyachan/api'))
const json = await Api.get('api/tiktok', {
   url: 'https://vm.tiktok.com/ZSR7c5G6y/'
})
console.log(json)
````

^ Thank you for using our Alyachan API service