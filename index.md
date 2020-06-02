## TABLE OF CONTENTS
***
* [OVERVIEW](#overview)
* [THE TEAM](#the-team)
* [DOCUMENTS](#documents)
* [PROGRESS + DEVELOPMENT](#progress--development)
* [INSTALLATION](#installation)
* [RUNNING THE SYSTEM](#running-the-system)
* [WALKTHROUGH](#walkthrough)

## OVERVIEW
***
### Project: Secure Development Life Cycle
This project is geared towards learning about improving the <b>secure development life cycle</b> with software quality assurance.  This team is a group of four ICS427 students dedicated to improving our team work and communication skills, security and privacy policies, understanding of quality and reliable code, penetration testing, and analyzing the impact and severity of bugs within software.

Assignments: 
- Task Jeeves

## THE TEAM
***
Four ICS students at the University of Hawaii at Manoa.  
Check out our portfolios below! 
* [Darlene Agbayani](https://darleneagbayani.github.io/)
```
Responsible for ...
```
* [Julian Kim](https://julianki-cs.github.io/)
```
Responsible for ...
```
* [Craig Opie](https://craigopie.github.io/)
```
Responsible for ...
```
* [Joseph Paragas](https://joeparagas.github.io/)
```
Responsible for ...
```

## DOCUMENTS
***
* [Our SDL](https://github.com/softwarewarriors/softwarewarriors.github.io/tree/master/doc/sdl.pdf)
* [Assignment One](https://github.com/softwarewarriors/softwarewarriors.github.io/tree/master/doc/ass1.pdf)

## PROGRESS + DEVELOPMENT
***
Track the team's progress via Milestones:
* [Security](https://github.com/softwarewarriors/taskjeeves/projects/2)
* [First Milestone](https://github.com/softwarewarriors/taskjeeves/projects/4)

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/landing-page.png)

Task Jeeves is a Meteor application that illustrates:

  * A secure web application deployment using Microsoft's Security Development Lifecycle.
  * A task management system that allows users to create tasks for productivity purposes.
  * Allows creating new tasks with due dates.
  * Allows marking tasks as complete.

The goal of this application is to demonstrate a Meteor development providing a secure directory structure for development and deployment, a set of common extensions to the core framework, and a basic application to implement basic page display, navigation, forms, roles, and collection manipulation.

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, go to [https://github.com/softwarewarriors/taskjeeves](https://github.com/softwarewarriors/taskjeeves), and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/softwarewarriors/taskjeeves/tree/master/app/package.json):

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
=> Started proxy.
=> Started MongoDB.
I20180227-13:33:02.716(-10)? Creating the default user(s)
I20180227-13:33:02.742(-10)?   Creating user admin@foo.com.
I20180227-13:33:02.743(-10)?   Creating user john@foo.com.
I20180227-13:33:02.743(-10)? Creating default data.
I20180227-13:33:02.743(-10)?   Adding: Basket (john@foo.com)
I20180227-13:33:02.743(-10)?   Adding: Bicycle (john@foo.com)
I20180227-13:33:02.743(-10)?   Adding: Banana (admin@foo.com)
I20180227-13:33:02.744(-10)?   Adding: Boogie Board (admin@foo.com)
=> Started your app.

=> App running at: http://localhost:3000/
```


### Viewing the running app

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/softwarewarriors/taskjeeves/tree/master/config/settings.development.json), or else register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

## Walkthrough

The following sections describe the major features of this template.

### Directory structure

The top-level directory structure is:

```
app/        # holds the Meteor application sources
config/     # holds configuration files, such as settings.development.json
doc/        # holds developer documentation, user guides, etc.
.gitignore  # don't commit IntelliJ project files, node_modules, and settings.production.json
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory has this structure:

```
client/
  main.html      # The boilerplate HTML with a "root" div to be manipulated by React.
  main.js        # import startup files.

imports/
  api/           # Define collections
    stuff/       # The Stuff collection definition
  startup/       # Define code to run when system starts up (client-only, server-only, both)
    client/
    server/
  ui/
    layouts/     # Contains top-level layout (<App> component).
    pages/       # Contains components for each page.
    components/  # Contains page elements, some of which could appear on multiple pages.

node_modules/    # managed by npm

public/          # static assets (like images) can go here.

server/
   main.js       # import the server-side js files.
```

### Import conventions

This system adheres to the Meteor guideline of putting all application code in the imports/ directory, and using client/main.js and server/main.js to import the code appropriate for the client and server in an appropriate order.

### Application functionality

The application implements a simple CRUD application for managing "Stuff", which is a Mongo Collection consisting of a name (String), a quantity (Number), and a condition (one of 'excellent', 'good', 'fair', or 'poor').

By default, each user only sees the Stuff that they have created.  However, the settings file enables you to define default accounts.  If you define a user with the role "admin", then that user gets access to a special page which lists all the Stuff defined by all users.

#### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/landing-page.png)

The next step is to use the Login menu to either Login to an existing account or register a new account.

#### Login page

Clicking on the Login link, then on the Sign In menu item displays this page:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/signin-page.png)

#### Register page

Alternatively, clicking on the Login link, then on the Sign Up menu item displays this page:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/register-page.png)


#### Landing (after Login) page, non-Admin user

Once you log in (either to an existing account or by creating a new one), the navbar changes as follows:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/landing-after-login-page.png)

You can now add new Stuff documents, and list the Stuff you have created. Note you cannot see any Stuff created by other users.

#### Add Stuff page

After logging in, here is the page that allows you to add new Stuff:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/add-stuff-page.png)

#### List Stuff page

After logging in, here is the page that allows you to list all the Stuff you have created:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/list-stuff-page.png)

You click the "Edit" link to go to the Edit Stuff page, shown next.

#### Edit Stuff page

After clicking on the "Edit" link associated with an item, this page displays that allows you to change and save it:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/edit-stuff-page.png)

#### Landing (after Login), Admin user

You can define an "admin" user in the settings.json file. This user, after logging in, gets a special entry in the navbar:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/admin-landing-page.png)

#### Admin page (list all users stuff)

To provide a simple example of a "super power" for Admin users, the Admin page lists all of the Stuff by all of the users:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/admin-list-stuff-page.png)

Note that non-admin users cannot get to this page, even if they type in the URL by hand.

### Collections

The application implements a single Collection called "Stuff". Each Stuff document has the following fields: name, quantity, condition, and username.

The Stuff collection is defined in [imports/api/stuff/stuff.js](https://github.com/softwarewarriors/taskjeeves/blob/master/app/imports/api/stuff/stuff.js).

The Stuff collection is initialized in [imports/startup/server/stuff.js](https://github.com/softwarewarriors/taskjeeves/blob/master/app/imports/startup/server/stuff.js).

### CSS

The application uses the [React implementation of Semantic UI](http://react.semantic-ui.com/).

### Routing

For display and navigation among its four pages, the application uses [React Router](https://reacttraining.com/react-router/).

Routing is defined in [imports/ui/layouts/App.jsx](https://github.com/softwarewarriors/taskjeeves/tree/master/app/imports/ui/layouts/App.jsx).


### Authentication

For authentication, the application uses the Meteor accounts package.

When the application is run for the first time, a settings file (such as [config/settings.development.json](https://github.com/softwarewarriors/taskjeeves/tree/master/config/settings.development.json)) should be passed to Meteor. That will lead to a default account being created through the code in [imports/startup/server/accounts.js](https://github.com/softwarewarriors/taskjeeves/tree/master/app/imports/startup/server/accounts.js).

The application allows users to register and create new accounts at any time.

### Authorization

Only logged in users can manipulate Stuff documents (but any registered user can manipulate any Stuff document, even if they weren't the user that created it.)

### Configuration

The [config](https://github.com/softwarewarriors/taskjeeves/tree/master/config) directory is intended to hold settings files.  The repository contains one file: [config/settings.development.json](https://github.com/softwarewarriors/taskjeeves/tree/master/config/settings.development.json).

The [.gitignore](https://github.com/softwarewarriors/taskjeeves/tree/master/.gitignore) file prevents a file named settings.production.json from being committed to the repository. So, if you are deploying the application, you can put settings in a file named settings.production.json and it will not be committed.

[Back to table of contents](#table-of-contents)