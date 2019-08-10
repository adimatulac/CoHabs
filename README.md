# CoHabs

Web application project for CPSC 436I.

High Level Description
- CoHabs is a web application that allows users to manage shared tasks, bills, and schedules among those living together under one roof. 
- Users can access data pertaining to their share of chores, how much they owe/are owed for utilities, or miscellaneous events like when their roommates are having friends over.

## In Development 

1. Base functionalities
   - Authentication
   ```
     - Sign-up
     - Create/make profile
     ```
   - Groups
   ```
     - Create groups
     - View members
     ```
   - Tasks
   ```
     - Post/Edit/Delete Todo and board (schedules/tasks/bills)
     - View Todo and board (schedules/tasks/bills)
     ```
     
     
2. Important features 
   - Authentication
   ```
     - Log-in/reset password
     ```
   - Groups
   ```
     - Sending invites to join a group
     - Joining a group
     ```
   - Tasks
   ```
     - Assigning tasks to roommates
     ```

3. Extras
   - Tasks
   ```
     - Send email notification/reminders
     - Rotating tasks among assignees based on user input 
     ```

## Final Project Submission
### Overview
CoHabs is a web application that aims to address communication of shared events or responsibilities within a household, such as the internet bill, someone’s birthday party, and the chores. It’s a platform where users can add notes and bills for other household members to see as reminders, consolidating important information so that they don’t just get lost in some other household group chat (if they had one to begin with).

### Functionality
* Create private groups (households) and add new members through an email link
* Add notes with respective actions for other users to “respond” to
* Add bills and visualize payment breakdown for the whole household

### Technology
#### HTML/CSS/JavaScript
* Semantic UI and custom CSS to style the components and make sure they're mobile-friendly
* Used CanvasJS library for chart visualization
#### React
* React to make the UI components such as the notes and board
#### Meteor
* Meteor methods to interact with the database
* User creation and authentication
* Email package to send out sign-up links for groups
#### NoSQL and MongoDB
* MongoDB Atlas for cloud database
* Four collections: users, groups, bills, and notes
#### Galaxy 
* For deployment because of implementation of Meteor provided features such as user accounts

### Contribution
#### Angelli Dimatulac
* Focused on front-end implementation, prototyping, and app’s visual design
* Implemented the front-end using React, Semantic UI, and custom css
* Notes functionality, basic as well as extra features such as calls to action
* User authentication and routing the different views depending on permissions
#### Jessica Huh
* Project set-up with Meteor, React, and Redux
* Focused on Back-end implementation
* Connected back-end to front-end
* Implemented display of members based on the group on the profile page
* Connected pie chart with MongoDB to render based on users and groups
#### Jason Kim
* Project set-up with Meteor, React, and Redux
* Set up and connecting external MongoDB to our front-end
* Used the CanvasJS library to display our bills in pie chart format that can be updated and re-rendered based on users and groups
* Deployment with Galaxy
 
### Challenges and Learning
We struggled with figuring out which information users would like to see and share with their cohabitants as well as an intuitive way to display such information. We decided the main parts of the application should involve a way to communicate (ex. events, requests, reminders) and bills. We addressed these parts by having a bulletin-board style dashboard for communication, and a column of pie charts to display the bills. Throughout the brainstorming process to produce a user-friendly application, we learned what the barebones of maintaining a healthy cohabitation situation was, as well as additional features that could add to a harmonious household. 

### Future Direction
* Export events to personal calendar such as GCal
* Private note function or “direct messages” – ability for user to share things with individual members
* More specific user roles such as administrator
* Ability to add additional note and bill types
* Notifications for important/urgent notes (in-app, text message, or email)
* Chat rooms
* iOS/Android version

### Initiative and Additional Contributions
* Intuitive, mobile-friendly UI
* Used Meteor “Methods”, separating client and server side to use Meteor properly
* Ability of user to edit profile and add additional information such as email and phone number
* Security with emailing the unique group code
