# WEB103 Project 1 - *LobbyLens*

Submitted by: **Amrita Dubey**

About this web app: **LobbyLen is web application built using HTML, CSS, JavaScript and Node.js.This web application serves as an informative platform where users can explore the social responsibility and lobbying behaviors of companies in a simple, structured, and visually appealing manner.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five list items, each with at least three attributes (such as title, text, and image url)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is appropriately styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists

## Video Walkthrough

Here's a walkthrough of implemented required features:

URL :  https://imgur.com/XMcLLTK


<!-- Replace this with whatever GIF tool you used! -->
GIF created with imgur  Add GIF tool here

## Notes

One challenge I encountered during development was a data mismatch issue between the server and client. Specifically, the id field in the server’s JSON response was stored as a string, while on the client-side, I was attempting to compare it against an id that was treated as a number data type. This led to failed comparisons and unexpected behavior.

After debugging, I identified the root cause as the type mismatch between the id values. To resolve the issue, I ensured that both the server and client were consistently handling the id as a number during comparisons, which ultimately fixed the problem and allowed the data to be processed correctly.

## License

Copyright [2024] [Amrita Dubey]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.








# WEB103 Project 2 - *LobbyLens*

Submitted by: **Amrita Dubey**

About this web app: **LobbyLen is web application built using HTML, CSS, JavaScript, Node.js and postgreSQL.This web application serves as an informative platform where users can explore the social responsibility and lobbying behaviors of companies in a simple, structured, and visually appealing manner.**

Time spent: **15** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
- [x] **The PostgreSQL database includes a table that matches the data displayed in the web app**
  - [x] **NOTE: Your GIF or a screenshot added to the README must include a view of your Railway database that shows the contents of the table used by your app**

The following **optional** features are implemented:

- [ ] The user can search for items with a specific attribute

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

https://imgur.com/crbbAKL


<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here
imgur

## Notes

I faced two major challenges:

1. Port and Host Configuration Issue
The port and host described in the resources provided were only accessible when the application was deployed on Railway. However, when attempting to connect the app locally, the private network configuration failed. After investigation and with help of Guilherme Scotti, I realized I needed to use the host and port of a public network to successfully connect my local app to the database.

1. Database Connection Error due to Environment Variables
Initially, I faced an issue where the database connection was not working, and the error messages indicated a possible database problem. After spending significant time troubleshooting, I found that the actual issue was related to environment variables. The dotenv configuration wasn't loading the variables properly, which resulted in process.env values being undefined. As a result, the database connection couldn't be established. The fix involved correctly configuring the .env file and ensuring it was loaded before the application started. process.env variable was coming as undefined and due to which it wasn't connecting to database

## License

Copyright [2024] [Amrita Dubey]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.