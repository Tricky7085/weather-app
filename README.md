# weather-app
The weather API is a NodeJs application that allows user to fetch, store, retrive, update and delete weather data for various locations. It utilizes the openWeatherMap API for real-time weather information and MongoDB for data storage.
# API Endpoints
# Fetch and store weather data -
  # Endpoint :
   1.URL : '/weather/:location'
   2.Method : GET
   3.Description : Fetches current weather data for the specified location from openWeatherMap, stores it in MongoDB and return the data.
   4.Request Parameters : 'location' : The name of the location for which weather data is requested.
# Add weather data -
  # Endpoint :
   1.URL : '/weather'
   2.Method : POST
   3.Description : Add new weather data to MongoDB.
   4.Request Body : 'location' : The name of the location for which weather data is added.
                    'temperature' : The temperature data for the specified location.
# Retrive all weather data -
  # Endpoint :
   1.URL : '/weather'
   2.Method : GET
   3.Description : Retrive all stored weather data from MongoDB.   
# Update weather data -
  # Endpoint :
   1.URL : '/weather/:id'
   2.Method : PUT
   3.Description :Update the weather data for a specific entry in MongoDB.
   4.Request Parameters : 'id' : The MongoDB ObjectId of the weather data entry.
# Delete weather data -
  # Endpoint :
   1.URL : '/weather/:id'
   2.Method : DELETE
   3.Description : Deletes the weather data for a specific entry from MongoDB.
   4.Request Parameters : 'id' : The MongoDB ObjectId of the weather data entry.
