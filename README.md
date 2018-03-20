# nyt react

Created for a coding bootcamp assignment, it's a simple react app with a clean ui (using [react-bootstrap](https://react-bootstrap.github.io/)) that lets the user search and save articles from [The New York Times](https://www.nytimes.com/), persisting all data in a MongoDB database.

## Starting the app locally

Start by installing front and backend dependencies. While in the root directory of this project, run the following commands:

```
yarn install
cd client
yarn install
cd ..
```

After both installations complete, make sure your local MongoDB instance is running and run the following command in your terminal:

```
yarn start
```

That's it, the app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Instructions

- Fill out the search parameters on the first screen, and click "search"
- You should see some articles returned (see screenshot below)
- Clicking on "save" will save a copy to be viewed again on the "saved articles" page

![Sample Output](img/screen1.png?raw=true "Sample output")

- On the "saved articles" page, click on "delete" to remove any of the records returned

![Sample Output](img/screen2.png?raw=true "Sample output")