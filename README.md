![Lang Sorts](/langsorts-react/public/images/readme-logo.png)

Discover how to code sorting algorithms in multiple programming languages.

This repo contains [our backend API](/langsorts-api) built in Node.js, Express.js, and MongoDB. 

It also contains [our React front-end](/langsorts-react).

## Getting Started

To use the backend API, you will need to install [MongoDB](https://www.mongodb.com/). 

To use either the backend API or the front-end, you will need to install [Node](https://nodejs.org/en/).

## View the website

View it at [www.LangSorts.com](http://langsorts.com).

![LangSorts example](/langsorts-react/public/images/readme-image.jpg)

## Using the API (Server-Side Framework)

```
git clone https://github.com/kelsonic/langsorts.git

cd /langsorts/langsorts-api

npm install

// do this in one terminal
npm install -g node-mongo-seeds

mongod --dbpath /{pathOfLangsortsDirectory}/langsorts-api/data

// do this in a separate terminal
seed

npm start
```

The API will be running on [localhost:9000](http://localhost:9000/).

## Using the Client-Side Framework

```
// Assuming you have already cloned the repo

cd /langsorts/langsorts-react

npm install

npm start
```

The front-end will be running on [localhost:5000](http://localhost:5000/).

## Contributing

Do you see any errors? Want to add your own sorting algorithm or language?

#### Steps

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

* [Victoria](https://github.com/vic8722)
* [Kelsonic](https://github.com/kelsonic)

## License
MIT License. View it [here](LICENSE).