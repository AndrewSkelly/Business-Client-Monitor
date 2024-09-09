# Business-Client-Monitor
`Created By Andrew Skelly`

## Overview

The **Business-Client-Monitor** is a React app which is used for note taking and analytics on customers in the service industry. This app provides an insight into the list of clients who are customers of a salon. The project is designed to support typical client management operations, with the current focus on retrieving clients' data for analytical analysis.

## Features

Display client data in a table for viewing by the salon staff

Layout V3
Shown below is the addition of clients to the client table, viewing specific clients and deleting them from the postgres client table.
https://github.com/user-attachments/assets/e5e9f6de-a6a8-48a6-a2e9-d46dd77e2e33


Layout V2
![image](https://github.com/user-attachments/assets/5d9657db-ceed-49cf-a933-94ea2b0a748a)


Layout V1
![image](https://github.com/user-attachments/assets/1c4569bf-9f3c-4d71-af31-e6daca7776ec)

## Completed
```diff
+ Add another column for tags with pill buttons of short descriptions about the client
+ Possible Tags (New, Friendly, Confrontational, Late, Missed Payments, Banned, Allergies, Special Accomodations)
+ pass the object as a prop and destructire it for readability
+ map these elements to the table component
+ when a basic backend is created for a get request, perform one using the useEffect hook and update the map with real DB data
+ Create a new database to hold data
+ Add view button to see full notes on the client as a modal with detailed profile
+ create a modal component to to display this data
+ Create C# API to handle this data (Get, Post, Delete)
+ create a form modal for when user clicks the add button
+ make sure the submit buttons posts to the backend and into the database
```

## To be Completed
```diff
- Put Method to be made
- on the analytics page create a new flex container layout like for the clientpage this time with 6 divs inside, each can be their own component
- in each for now we can display data as text but will be made into pie charts and such
- the first div will have total users which will be a sum of records in the database of client id's
- the second div will be data related to the amount a tag is used in total as a percentage, this will become a pie chart
- on the clientPage add a filter dropdown with a list of tags to scroll through.
- filter users with specific tags on the backend with a simple select user where Tag='Banned' style query and have a get response for this
- add these edit and delete buttons in the modal for each client
 

```

## Technologies Used

- **React**: A JavaScript library used for building single-page applications with the use of reusable UI components.
- **SCSS**: A CSS preprocessor that adds extra features making it easier to maintain and extend styling.
- **TypeScript**: A strongly typed extension to JavaScript.
