# APP Review

App to get ratings and reviews from a user or entity.

## Installation of dependencies

```sh
npm install
```
If you wan to run the app:

```sh
npm run start
```

Environment:
 We have only one env variable to set mongo db url:
```sh
MONGO_URL
```

We have four endpoints to get information from reviews and ratings.
```sh
POST /ratingsAndReviews 
GET  /myReviews
GET  /ratingsAndReviews
GET  /reviews
PATCH  /reviews/report
GET  /averageRatings
```

For more information about endpoints and details, go to swagger info.

