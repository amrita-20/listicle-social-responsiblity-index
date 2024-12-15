## LobbyLens

About this web app: **LobbyLen is web application built using HTML, CSS, JavaScript and Node.js.This web application serves as an informative platform where users can explore the social responsibility and lobbying behaviors of companies in a simple, structured, and visually appealing manner.

## Features

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five list items, each with at least three attributes (such as title, text, and image url)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] The web app displays items in a unique format, such as cards rather than lists

## Video Walkthrough

Here's a walkthrough of implemented required features:

URL :  https://imgur.com/XMcLLTK

## Notes

One challenge I encountered during development was a data mismatch issue between the server and client. Specifically, the id field in the server’s JSON response was stored as a string, while on the client-side, I was attempting to compare it against an id that was treated as a number data type. This led to failed comparisons and unexpected behavior.

After debugging, I identified the root cause as the type mismatch between the id values. To resolve the issue, I ensured that both the server and client were consistently handling the id as a number during comparisons, which ultimately fixed the problem and allowed the data to be processed correctly.

## License

Copyright [2024] [Amrita Dubey]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

