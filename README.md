# HW-2-MERN-Project-Part-1


Part 1: 

Following the instructions step by step, First I downloaded NVM-Windows, and make sure the Node version I run on my system is 17.6.0. Then I 'cd' into my target folder, and created this backend project. Based on the requiements, I installed all these required dependencies, and add "type" : "modules" to make sure Node.js could use the import syntax throughout the project. Next,I created gitignore with the required contents, and created the required directories with the files in. Finally, I create the .env in backend.

![image](https://media.github.khoury.northeastern.edu/user/10747/files/3653ac1c-6973-4b80-a375-5f4ecb050105)



Part 2:

I downloaded MongoDB Community Edition and MongoDB Database Tools separately. then, launched MongoDB Compass. Next, To make sure Database Tools available in my system's PATH environment variable, which allows referencing each tool directly on the command prompt by name, without needing to specify its full path, or first navigating to its parent directory. I add the path of bin under MongoDB Database Tools as new environment variable under system on Control Panel. For the dump data set, I use cmd first cd to MongoDB bin, and mongorestore the dump file' path to get the database ingested into my local MongoDB environment.

![image](https://media.github.khoury.northeastern.edu/user/10747/files/398e5a25-383b-45f9-9ecf-eacef73b337a)


Eventually, I refresh the dashboard of Mongodb, and the movie_time_db showed up. For the last step, I created a collection called reviews under the movies_time_db.

![image](https://media.github.khoury.northeastern.edu/user/10747/files/d4801dd5-f093-4c8e-9169-f49b8bafab6f)





10/14/2022
# HW 3: MERN Project Part 2

For the environment variables part, Set three important environment variables based on the tutorials in .env file(MOVIEREVIEWS_DB_URI,MOVIE_REVIEWS_NS,PORT). Next, imported the dependencies, set the server, and set up the handling for reviews requests in index.js. Then, created an Express application,set up the base URL for the APIs, and exported the file in server.js.

For the Routes part, handled requests based on the different URLs and HTTP request methods in movies.route.js. Then, exported router as a module so that it can be imported by other server.js.

For the Movies controller, created and implemented apiGetMovies, apiGetMovieById, and apiGetRatings methods in movies.controller.js. For the Movies DAO, implemented injectDB, getMovies, getRatings, and getMovieById.

For the review controller, created and implemented apiPostReview, apiUpdateReview, and apiDeleteReview methods in review.controller.js. For the Review DAO, implemented injectDB, addReview, updateReview, and deleteReview.

To test APIs, downloaded and installed insomnia successfully, and then successfully created a project called "CS5610 Web Dev" and a request collection called "Requests". Test POST, PUT, DELETE logic one by one. 

Screenshots are as below:

![image](https://media.github.khoury.northeastern.edu/user/10747/files/566cbd60-e9cb-4430-810a-cc510719017b)

![image](https://media.github.khoury.northeastern.edu/user/10747/files/ccd9c250-4c99-414a-8827-969881ea68a0)

![image](https://media.github.khoury.northeastern.edu/user/10747/files/a5410e9b-c115-4078-b3cc-87599dd67e6b)

![image](https://media.github.khoury.northeastern.edu/user/10747/files/488a9697-3c2e-4a03-a037-1ef2f6e428ed)


 
