# Interactive web app that resembles a grocery store

## Table of contents

- [General info](#general-info)
- [Setup](#setup)
- [Sources](#sources)

## General info

This app was created with JavaScript - React.js, Vite.js, React Router DOM, JSON Server and CSS3 to put the acquired knowledge into practice and consolidate the use of these technologies and tools.

### About the app

The application consists of four main pages that can be accessed via the navigation bar at the top of the page. Clicking on a specific link allows a user to navigate to: Home page (by clicking "Grocery Stand"), Products page (by clicking "Products"), Farmers page (by clicking "Farmers") and Cart page (by clicking shopping bag icon or "View Basket").

The application is also adapted to be opened on electronic devices such as tablets or mobile phones.

#### Products page

At the top of this page there are filters that allow a user to filter products by category, e.g. dairy products, vegetables. There is also a search button that allows a user to search for a specific product by its name.

On Products page a user can also add a particular product to the basket by pressing the "Add to Basket" button.

Moreover, by clicking on the product picture, a user goes to the page with details of the given product. On that page a user can add a review of the product by clicking "Add a Review" button.

#### Farmers page

This page contains a list of farmers who supply the products featured on the site.
By clicking the "View" button, a user is navigated to a page with detailed information about a specific farmer. That page contains also a list of products from this particular farmer.

#### Cart page

In this app there are two views of shopping cart:

1. a mini cart and
2. a full-size shopping cart page

##### Mini cart

By clicking on the shopping bag icon, a user has access to a mini shopping cart, which contains information such as: product thumbnail, product price, quantity of products, sum prices of all products.
Within this view a user can make changes on the go like control the number of products in the cart (remove or add products by clicking the plus or minus buttons), remove a given product from the cart or empty the entire cart.
By clicking the "View Basket" link, a user is navigated to a full-size shopping cart page.

##### Full-size shopping cart page

This page contains information about products such as: product thumbnail, product price, price of several pieces of a given product, quantity of products, sum prices of all products.
A user can control the number of products in the cart by removing or adding products (by clicking the plus or minus buttons), removing a given product from the cart or emptying the entire cart.

## Setup

To run this project, clone this repo to your desktop using:

```
git clone https://github.com/just-caarol/store-project.git
```

and install it locally using npm:

```
$ cd <store-project-directory>
$ npm install (to install all the dependencies)
$ npm run dev (to start the vite server)
```

To open an app in the browser, click the link provided during startup of the app.

## Sources

Images and icons were used to create this app only for educational/practice purposes and come from the following sources:

#### Home page

- background image by Chad Stembridge on Unsplash
- photo of a watering can by Markus Spiske on Unsplash
- photos with tomatoes by Priscilla Du Preez on Unsplash

#### Products

- apricots - photo by Quin Engle on Unsplash
- avocados - photo by Erol Ahmed on Unsplash
- bagels - photo by Tara Evans on Unsplash
- bananas - photo by Ioana Cristiana on Unsplash
- beef - photo by Sergey Kotenev on Unsplash
- blueberries - photo by Joanna Kosinska on Unsplash
- bread - photo by Wesual Click on Unsplash
- broccolis - photo by Mockup Graphics on Unsplash
- butter - photo by Marine Le Gac on Unsplash
- cheese - photo by Alexander Maasch on Unsplash
- chicken - photo by Towfiqu barbhuiya on Unsplash
- cucumbers - photo by Mockup Graphics on Unsplash
- eggplants - photo by Mockup Graphics on Unsplash
- eggs - photo by Erol Ahmed on Unsplash
- garlic - photo by Mockup Graphics on Unsplash
- grapes - photo by Mockup Graphics on Unsplash
- green apples - photo by Drahomír Hugo Posteby-Mach on Unsplash
- lemons - photo by Mockup Graphics on Unsplash
- milk - photo by Nikolai Chernichenko on Unsplash
- onions - photo by Mockup Graphics on Unsplash
- oranges - photo by BP Miller on Unsplash
- pears - photo by Mockup Graphics on Unsplash
- pomegranates - photo by Mockup Graphics on Unsplash
- potatoes - photo by Mads Eneqvist on Unsplash
- pumpkins - photo by Mockup Graphics on Unsplash
- raspberries - photo by Mockup Graphics on Unsplash
- red apples - photo by Amit Lahav on Unsplash
- red peppers - photo by Lucian Alexe on Unsplash
- strawberries - photo by Anastasia Zhenina on Unsplash
- tomatoes - photo by Thomas Martinsen on Unsplash

#### Icons

- arrow up - [font awesome](https://fontawesome.com/icons/angle-up?f=classic&s=solid)
- back - <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Bingge Liu - Flaticon</a>
- bin - <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by Freepik - Flaticon</a>
- favicon - <a href="https://www.flaticon.com/free-icons/online-shop" title="online shop icons">Online shop icons created by Freepik - Flaticon</a>
- shopping bag - <a href="https://www.flaticon.com/free-icons/basket" title="basket icons">Basket icons created by Karacis - Flaticon</a>
- shopping cart - [font awesome](https://fontawesome.com/icons/cart-shopping?f=classic&s=solid)
- tractor - [font awesome](https://fontawesome.com/icons/tractor?f=classic&s=solid)
- trolley - [font awesome](https://fontawesome.com/icons/dolly?f=classic&s=solid)
