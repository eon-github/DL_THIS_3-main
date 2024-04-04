# CCAPDEV-MCO3

Group Members:

Amores, Louise Carlo
De Guzman, Neo-Rey Djee
Tolentino, Maxene Allison R.
Villagarcia, Wilbert Shawn

DLSU Food Review Web Application

Description:

DLSU Food Review is a web application that allows users to review and discover food establishments in the De La Salle University (DLSU) campus specifically the EGI Taft Tower beside Gokongwei Building Agno Street.

Users can explore different restaurants and cafes, read reviews, and post their own reviews based on their dining experiences.

The application aims to provide a platform for the DLSU community to share their thoughts and recommendations on various food establishments as due to a majority of students spend most of their break time deciding where adn what to eat.

Features:

1. Homepage:
   Upon visiting the page, the General page will appear which allows the user to view the top 3 raters on each of the featured establishment.

2.View Establishments:
    Upon visiting the web page, users can see a list of featured establishments available in EGI.
    Each establishment's overall rating and a brief description are easily accessible from the list.

3. View Establishment Reviews:
   Users can select an establishment to view its reviews. They can click on a review to see the full detail. The number of registered users who found the review helpful or unhelpful is also displayed.

4. Register/Sign Up:
   Visitors must register to allow to post a review. During registration, users need to provide their email, username, and password.

5. Login:
   After successful registration, users can log in to start posting reviews. The option to be "remembered" by the website is available, which extends the "remember" period by 3 weeks for each subsequent visit.

6. Logout:
   Users can log out from their account, cutting short the "remember" period (if it exists) and clearing any session-related data.

7. View User Profile:
   Each user has a public profile page displaying their username, profile picture, and a short description. A portion of the user's reviews and comments is visible, with an option to view the rest of their posts and comments.

8. Edit Profile:
   Logged-in users can edit their profile, update their profile picture, and modify the short description.

9. Create a Review:
   Logged-in users can create reviews for selected establishments.
   They need to provide a title, review body, and a rating. The rating system can be customized (e.g., 5-star rating). Users can also attach media (e.g., images, videos) to their review.

10. Mark as Helpful/Unhelpful:
    Logged-in users can mark a review as helpful or unhelpful once.

11. Edit/Delete a Review:
    Reviewers can edit their reviews at any time.
    Edited reviews will have an indication of being edited. Review owners also have the option to delete their reviews.

12. Search Establishments/Reviews:
    Visitors and users can search for establishments based on similarities in the name or description.

    They can also filter establishments based on their overall rating.

    Additionally, they can search for reviews based on similarities in the title or post body.

13. Establishment Owner Response:
    An additional user account role called "establishment owner" allows the owner to respond to reviews about their establishment. Their responses will be published and visible to the public.

Installation:
Instructions on how to install and set up the EGI Taft Tower Food Review web application will be provided here. Include any required dependencies and how to run the application locally.

1. Open the project folder
2. In the terminal, type "npm init" to initialize file package.
3. In the terminal, type "npm i express express-handlebars body-parser mongodb" to download node modules for the web application to run.
4. In the terminal, type the command "node app.js" to run the application.
5. To access the application locally, open your web browser and enter the following URL: "http://localhost:3000/".
   This will automatically display the main page for unregistered users. 
   On this page, you can view reviews, replies, and user profiles. However, liking, disliking, and commenting on posts and replies are not available to unregistered users.
6. To be able to do the aforementioned functionalities, one may register/login in by clicking the login button in the
   profile icon found in the upper right of the header.
7. When you click on the "home" icon situated in the right part of the header, it will redirect you to the main page.
8. When clicked on the "explore" icon it will redirect to the list of establishments.

