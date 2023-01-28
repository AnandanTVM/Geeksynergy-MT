# Geeksynergy-MT
# Project Overview
This project is a web application that allows users to register and login to the system, as well as perform CRUD operations on user data. The application is built using Node.js, React, and MongoDB.
# Screenshots
![gg2](https://user-images.githubusercontent.com/109457296/215295927-ce1426e3-6e89-4440-b8a8-466068f15fcd.png)
![g](https://user-images.githubusercontent.com/109457296/215295932-4d47b0ca-4833-4cf9-aaa4-da3ff0a584a7.png)
# Features
User registration page using Node.js, where users can input their name, password, email, phone number, and profession. Passwords are saved in an encrypted format for security.

API call to send registration data to the server and display a notification upon receiving a response.

Login page to validate email and password, and redirect users to the homepage upon successful verification.

Homepage with an API to list all registered users in a JSON structure.

API to update registered user data, such as name and phone number, by selecting a record from the JSON structure.

API to delete a registered user record.

Getting started
Clone the repository
bash
Copy code
git clone https://github.com/[username]/[repository].git
Install the dependencies
Copy code
npm install
Start the development server
sql
Copy code
npm start
Connect to your MongoDB database by specifying the connection URL in the .env file.

Start the server

Copy code
npm run server
Go to http://localhost:3000 to view the application



Note
Please make sure to have mongodb running in your local machine and configure the connection url in the .env file.
