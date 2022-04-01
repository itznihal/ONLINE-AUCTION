# BestBid - Auction Platform

> The main purpose our website is, to give a virtual platform to the sellers who are interested to put their product for online selling via Bidding. And the bidders who are interested to buy and bid for the rare and best things. 

Let’s Visit our Website “BestBid” – An interactive and User friendly Virtual Platform for auction!!
![MergedImages](https://user-images.githubusercontent.com/83122808/161217545-4e4ea08f-8fbb-4330-8054-ef145e6b1c12.png)

## Technologies

- Frontend - Bootstrap 5 , React.js 
- Backend - Node js , Express
- Database - MongoDB


## SET-UPS

The application includes two modules (client and server). For local developement, run `npm install` in client and server both directory which will install all dependencies accordingly. Before running this command please make sure your environment variables are setup accordingly.

### PROJECT SETUP

#### What you need to run this code
1. Node JS
2. NPM  or Yarn 
3. MongoDB 
4. Stripe account with test data
5. Cloudinary account to store images.

####  How to run this code
1. Make sure MongoDB is running on your system. 
2. Clone this repository.
3. Update config.env with your MongoDB URI and Secret Key , Cloudinary api Key, Stripe API keys.
4. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ```  , for client and server both directory.
   - To run the application , run ```  node app.js  ``` or ```  nodemon app.js  ```  , for server side.
   - And run ```  npm start  ``` , for client side.
5. Open [localhost:3000](http://localhost:3000/) in the browser

### Env Variables

Inside config.env

```
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

CLOUDINARY_NAME= your API name
CLOUDINARY_API_KEY=  your API key
CLOUDINARY_API_SECRET= your API secret key
```


### Install Dependencies (frontend & backend)

```
# Open  client
npm install
# Open  Server
npm install
```

### Run

```
# Run Client
npm start

# Run Server
node app.js 
#or
nodemon app.js
```



