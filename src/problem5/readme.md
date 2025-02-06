# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

## BACKEND Problem5 ##
This project is a simple Express application that interacts with MongoDB. It provides API endpoints to create, retrieve, update, and delete resources.

Getting Started
To run this project, follow these steps:

1. Clone the repository:
First, clone the repository to your local machine

2. Install dependencies:
Navigate to the project folder and run the following command to install the necessary dependencies:
cd src/problem5
npm install

3. Start the server:
Once the dependencies are installed, start the server using:
npm run start

This will start the Express server and watch for changes using nodemon. The server will be running and listening for requests on the specified port(see the logs).

4. API Endpoints
The application exposes the following API endpoints:

Create a Resource:
POST /resources - Create a new resource. Body parameters: name and text.

Get All Resources:
GET /resources - Fetch all resources from the database.

Get Resource by ID:
GET /resources/:id - Fetch a resource by its ID.

Update Resource by ID:
PUT /resources/:id - Update a resource by its ID.

Delete Resource:
DELETE /resources/:id - Delete a resource by its ID.

5. Database
The project uses MongoDB as the database to store resources. Make sure MongoDB is set up and running on your local machine or a cloud provider.

6. API Documentation
To view the API documentation for this project, please download the file '99techteam problem5.postman_collection.json'.
Once downloaded, you can import the collection into your Postman app to test and interact with the API endpoints.

How to Import into Postman:
Open Postman and click on Import in the top-left corner.
Choose Upload Files and select the downloaded 99techteam-problem5.postman_collection.json file.
After the collection is imported, you can view and execute the API requests for creating, reading, updating, and deleting resources.

