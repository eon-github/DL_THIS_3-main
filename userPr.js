  app.get("/userProfile", (req, resp) => {
    const username = loginInfo.username;
    MongoClient.connect(uri)
      .then((client) => {
        console.log("Connected to MongoDB");
        const dbo = client.db("eggyDB"); // Get the database object
        const collName = dbo.collection("comments"); // Get the collection
        const cursor = collName.find({ name: username }); // Find all documents in the collection

        const col2ndName = dbo.collection("users");
        const cursor2nd = col2ndName.find({ username: username });

        const col3rdName = dbo.collection("restaurants");
        const cursor3rd = col3rdName.find({});

        Promise.all([
          cursor.toArray(),
          cursor2nd.toArray(),
          cursor3rd.toArray(),
        ])
          .then(function ([comments, users, restaurants]) {
            const createArrays = (comment) => {
              comment["food-stars"] = createArray(comment["food-rating"]);
              comment["service-stars"] = createArray(comment["service-rating"]);
              comment["ambiance-stars"] = createArray(
                comment["ambiance-rating"]
              );
              comment["overall-stars"] = createArray(comment["overall-rating"]);
            };
            const createRestaurantArrays = (restaurant) => {
              restaurant["rating-stars"] = createArray(
                restaurant["main_rating"]
              );
            };
            comments.forEach(createArrays);
            restaurants.forEach(createRestaurantArrays);
            console.log("These are the users");
            console.log(users);

            console.log("Data fetched successfully");

            // Split the displayRestos array into two arrays
            resp.render("user-profile", {
              layout: "user-layout",
              title: "User Profile",
              commentData: comments,
              userData: [users[0]],
              restoData: restaurants,
            });
          })
          .catch(function (error) {
            console.error("Error fetching data:", error);
            resp.status(500).send("Error fetching data");
          })
          .finally(() => {
            client.close(); // Close the MongoDB client after fetching data
          });
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        resp.status(500).send("Error connecting to MongoDB");
      });
  });
