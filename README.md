![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/Title.png)

## TABLE OF CONTENTS
* [OVERVIEW](#overview)
* [THE TEAM](#the-team)
* [DOCUMENTS](#documents)
* [PROGRESS + DEVELOPMENT](#progress--development)
* [INSTALLATION](#installation)
* [RUNNING THE SYSTEM](#running-the-system)
* [WALKTHROUGH](#walkthrough)
* [CLOSING THOUGHTS](#Closing-Thoughts)

## OVERVIEW
### Project: Secure Development Life Cycle
This project is geared towards learning about improving the <b>secure development life cycle</b> with software quality assurance.  This team is a group of four ICS427 students dedicated to improving our team work and communication skills, security and privacy policies, understanding of quality and reliable code, penetration testing, and analyzing the impact and severity of bugs within software.

## THE TEAM
Four ICS students at the University of Hawaii at Manoa.  
Check out our portfolios below! 
* [Darlene Agbayani](https://darleneagbayani.github.io/)
* [Julian Kim](https://julianki-cs.github.io/)
* [Craig Opie](https://craigopie.github.io/)
* [Joseph Paragas](https://joeparagas.github.io/)

## DOCUMENTS
* [Our SDL](https://github.com/softwarewarriors/softwarewarriors.github.io/tree/master/doc/sdl.pdf)
* [Our Release](https://github.com/softwarewarriors/taskjeeves/releases/tag/v1.0.0)
* [Our Wiki](https://github.com/softwarewarriors/taskjeeves/wiki)

## PROGRESS + DEVELOPMENT
* [Task Jeeves Deployment](https://taskjeeves.meteorapp.com/)

Track the team's progress via Milestones:
* [Security](https://github.com/softwarewarriors/taskjeeves/projects/2)
* [First Milestone](https://github.com/softwarewarriors/taskjeeves/projects/4)

Task Jeeves is a Meteor application that illustrates:

  * A secure web application deployment using Microsoft's Security Development Lifecycle.
  * A task management system that allows users to create tasks for productivity purposes.
  * Allows creating new tasks with due dates.
  * Allows marking tasks as complete.

The goal of this application is to demonstrate a Meteor development providing a secure directory structure for development and deployment, a set of common extensions to the core framework, and a basic application to implement basic page display, navigation, forms, roles, and collection manipulation.

### Update 05/31/2020 - 06/07/2020
- Progress: 
    - Setup GitHub for the Team
    - Created issues for the team
    - Created the two projects in GitHub (M1 and Security)
    - Created the working backbone meteor app
    - Created the GitHub Page
    - Landing Page UI
    - Footer UI
    - End User License Agreement
    - Privacy Policy
    - Security Policy
    - Implementation 
    - Approved Tools
        - Static Analysis Tools
        - Dynamic Analysis Tools
    - SignOut Page
        
- Pending:
    - Protect user passwords using hash and salting algorithm 
    - Implement a new user table to store personal information and to ensure the password is not passed when the user wants to update profile information
    - Filter user input using regular expressions to check if the information is valid and not using select characters that may introduce a vulnerability
    - Deploy our web application for use at https://taskjeeves.meteorapp.com/
    - Deploy Arachni on our site to evaluate vulnerabilities
    - Update content in the terms of service, security, and privacy policies
    - Improve the UI of our site and create a new logo
    
- Roles and Responsibilities:
    - [Darlene Agbayani](https://darleneagbayani.github.io/)
        - New Completions:
            - Footer UI
            - End User License Agreement
            - Privacy Policy
            - Security Policy
        - Current:
            - Updating the security and privacy policies
            - Improve UI of web pages
            - Application logo
        - Next:
            - Design the color scheme/layout of the site
            - Implement UI changes to multiple pages
            - Implement new terms of use, security, and privacy policies
            - Update the footer to include new policies
    - [Julian Kim](https://julianki-cs.github.io/)
        - New Completions:
            - Implementation 
            - Approved Tools
                - Static Analysis Tools
                - Dynamic Analysis Tools
            - SignOut Page
        - Current:
            - Update the UI for the sign out page
            - Verifying functionality of the web application
        - Next:
            - Complete redirect during sign out
            - Implement UI changes to sign out page
            - Review and approved pull requests
            - Attack Surface Review
    - [Craig Opie](https://craigopie.github.io/)
        - New Completions:
            - Setup GitHub for the Team
            - Created issues for the team
            - Created the two projects in GitHub (M1 and Security)
            - Created the working backbone meteor app
            - Created the GitHub Page
            - Sceduled meetings / setup communication channels
        - Current:
            - Scedule meetings / maintain communication channels
            - Evaluating security concerns in accordance with the NVD and using the CVSS v3.1 calculation evaluation
        - Next:
            - Make adjustments to the user session to terminate when closing the browser or tab
            - Implement a new table to store the user information without having to go the same table where the user's password is stored
            - Implement bcrypt to hash and salt the passwords to prevent being stored in plain text
            - Implement regular expressions to check for invalid characters during using input
            - Deploy our web application to https://taskjeeves.meteorapp.com/
    - [Joseph Paragas](https://joeparagas.github.io/)
        - New Completions:
            - Design Requirements
                - Attack Surface Analysis and Reduction
                - Application Title
            - Landing Page UI 
        - Current:
            - Designing the user profile page
            - Creating components to access user table
            - Designing the user's edit profile feature
        - Next:
            - Implement a way for the user to edit their profile
            - Implement a way for the user to change their password

### Update 06/07/2020 - 06/14/2020
- Progress: 
    - User passwords are now protected using hash and salting algorithm with bcrypt 
    - Implemented a new user table to store personal information and to ensure the password is not passed when the user wants to update profile information
    - Sessions are now ended when the user closes the tab or browser window
    - User input for registration page now uses regular expressions to check if the information is valid and not using select characters that may introduce a vulnerability
    - Deployed our web application for use at https://taskjeeves.meteorapp.com/
    - Deployed Arachni on our site to evaluate vulnerabilities
    - Updated content in the terms of service, security, and privacy policies
    - Improved the UI of our site and created a new logo
        - UI modified on landing page
        - UI modified on sign up page
        - UI modified on sign in page
        - UI modified on list tasks page
        - UI modified on add task page
        - UI modified on edit task page
        - UI modified on the footer
        - Added date picker for items with dates
        
- Pending:
    - Add regular expressions to all user input to prevent malicious entries
    - Remove depreciated pages and references from the site
    - Modify UI in navbar to remove email and replace with user's first name
    - Add information about the app to the landing page
    - Update formatting on the terms, security, and privacy pages
    - Have user agree to terms when creating account
    - Address security concerns identified in our Arachni evaluation
    - Implement a way for the user to edit their profile
    - Implement a way for the user to change their password
    
- Roles and Responsibilities:
    - [Darlene Agbayani](https://darleneagbayani.github.io/)
        - New Completions:
            - New logo for the site
            - Designed the color scheme/layout of the site
            - Implemented UI changes to multiple pages
            - Implemented new terms of use, security, and privacy policies
            - Updated the footer to include new policies
        - Current:
            - Updating the security and privacy policies
            - Update formatting on the terms, security, and privacy pages
        - Next:
            - Add information about the app to the landing page
            - Modify UI in navbar to remove email and replace with user's first name
    - [Julian Kim](https://julianki-cs.github.io/)
        - New Completions:
            - Completed redirect during sign out
            - Implemented UI changes to sign out page
            - Reviewed and approved pull requests
            - Attack Surface Review
        - Current:
            - Update the UI for the sign out page
            - Verifying functionality of the web application
        - Next:
            - Add regular expressions to all user input to prevent malicious entries
            - Address security concerns identified in our Arachni evaluation
    - [Craig Opie](https://craigopie.github.io/)
        - New Completions:
            - Made adjustments to the user session to terminate when closing the browser or tab
            - Implemented a new table to store the user information without having to go the same table where the user's password is stored
            - Implemented bcrypt to hash and salt the passwords to prevent being stored in plain text
            - Implemented regular expressions to check for invalid characters during using input
            - Deployed our web application to https://taskjeeves.meteorapp.com/
            - Deployed Arachni to evaluate our web application's security
            - Wrote the Dynamic Analysis portion of our report
        - Current:
            - Evaluating security concerns in accordance with the NVD and using the CVSS v3.1 calculation evaluation
        - Next:
            - Remove depreciated pages and references from our web application
            - Have user agree to terms when creating account
            - Address security concerns identified in our Arachni evaluation
    - [Joseph Paragas](https://joeparagas.github.io/)
        - New Completions:
            - Reviewed and approved pull requests
            - Reviewed the Dynamic Analysis portion of our report
            - Implemented UI changes to langing page
            - Implemented UI changes to the tasks page
        - Current:
            - Designing the user profile page
            - Creating components to access user table
            - Designing the user's edit profile feature
        - Next:
            - Implement a way for the user to edit their profile
            - Implement a way for the user to change their password

### Update 6/15/2020 - 6/21/2020
- Progress:
    - Fixed errors defined by the Static Analysis tool (ESLint)

- Pending:
    - Add regular expressions to all user input to prevent malicious entries
    - Remove depreciated pages and references from the site
    - Have user agree to terms when creating account
    - Address security concerns identified in our Arachni evaluation
    - Implement a way for the user to edit their profile
    - Implement a way for the user to change their password
- Roles and Responsibilities:
    - [Darlene Agbayani](https://darleneagbayani.github.io/)
        - New Completions:
            - Update formatting on the terms, security, and privacy pages
            - Add information about the app to the landing page
        - Current:
            - Modify UI in navbar to remove email and replace with user's first name
        - Next:
            - Change color of links in navbar to white        
    - [Julian Kim](https://julianki-cs.github.io/)
        - New Completions:
            - Fixed ESLint errors 
            - Fuzz testing on AddTask to test for Buffer Overflow, Injection, and Cross-Site scripting vulnerabilities
            - Wrote updated report on Static Analysis of code
            - Organized Google Drive folders and report
            - Other miscellaneous administrative tasks
        - Current:
            - Further testing to ensure that users cannot input malicious JavaScript into application 
            - UI and QOL improvements for application
        - Next:
            - Further security testing 
            - Review Attack surface of application
    - [Craig Opie](https://craigopie.github.io/)
        - New Completions:
            - Wrote python script to brute force password check the admin and default user passwords
            - Changed default passwords to something that is not included in the RockYou password list
            - Performed and wrote Fuzz testing attempt 3
            - Performed and wrote Dynamic Analysis Review
            - Corrected security for HTTP ‘TRACE’ method to prevent XSS exploits
            - Added ‘X-Frame-Options’ header to prevent clickjacking exploits
            - Reviewed and approved pull requests
        - Current:
            - Remove depreciated pages and references from our web application 
        - Next:
            - Have user agree to terms when creating account
    - [Joseph Paragas](https://joeparagas.github.io/)
        - New Completions:
            - Fuzz Testing Attempt #2
            - Profile page
            - Reviewed and approved pull requests 
        - Current:
            - Finishing up static pages 
        - Next:
            - Security testing 
            - Review security/privacy requirements of our app and see if our app has fulfilled them

### Update 6/22/2020 - 7/3/20 RELEASE
* [Our SDL](https://github.com/softwarewarriors/softwarewarriors.github.io/tree/master/doc/sdl.pdf)
* [Our Release](https://github.com/softwarewarriors/taskjeeves/releases/tag/v1.0.0)
* [Our Wiki](https://github.com/softwarewarriors/taskjeeves/wiki)

- Progress:
    - Add regular expressions to all user input to prevent malicious entries
          - Removed depreciated pages and references from the site
          - Have user agree to terms when creating account
          - Address security concerns identified in our Arachni evaluation
          - Implemented a way for the user to edit their profile
    
- Roles and Responsibilities:
    - [Darlene Agbayani](https://darleneagbayani.github.io/)
        - New Completions:
            - Create Wiki page for Task Jeeves   
    - [Julian Kim](https://julianki-cs.github.io/)
        - New Completions:
            - Incidence Response Plan
            - Managing Final Report Document
            - Supervising the team
    - [Craig Opie](https://craigopie.github.io/)
        - New Completions:
            - Added to the Wiki page
            - Removed depreciated pages and references from the site
            - Helped implement a way for the user to edit their profile
            - Have user agree to terms when creating account
    - [Joseph Paragas](https://joeparagas.github.io/)
        - New Completions:
            - Updated Readme information
            - Created project release

## INSTALLATION
First, [install Meteor](https://www.meteor.com/install).

Second, go to [https://github.com/softwarewarriors/taskjeeves](https://github.com/softwarewarriors/taskjeeves), and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Third, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## RUNNING THE SYSTEM
Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/softwarewarriors/taskjeeves/tree/master/app/package.json):

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
=> Started proxy.
=> Started MongoDB.
I20200628-12:12:54.595(-10)? Creating the default user(s)
I20200628-12:12:54.626(-10)?   Creating user admin@foo.com.
I20200628-12:12:54.683(-10)?   Creating user john@foo.com.
I20200628-12:12:54.756(-10)? Creating default tasks.
I20200628-12:12:54.757(-10)?   Adding: First Task (john@foo.com)
I20200628-12:12:54.792(-10)?   Adding: Second Task (john@foo.com)
I20200628-12:12:54.794(-10)?   Adding: Third Task (admin@foo.com)
I20200628-12:12:54.795(-10)?   Adding: Fourth Task (admin@foo.com)
I20200628-12:12:54.797(-10)? Creating default data.
I20200628-12:12:54.797(-10)?   Adding: admin@foo.com
I20200628-12:12:54.831(-10)?   Adding: john@foo.com
=> Started your app.

=> App running at: http://localhost:3000/
```


### VIEWING THE RUNNING APP LOCALLY
If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/softwarewarriors/taskjeeves/tree/master/config/settings.development.json), or else register a new account.

### ESLint
You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

## WALKTHROUGH
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
    main.html       # The boilerplate HTML with a "root" div to be manipulated by React.
    main.js         # Import startup files.
    style.css       # The boilerplate CSS.

imports/
    api/            # Define collections
        task/       # The Task collection definition
        user/       # The User collection definition
    startup/        # Define code to run when system starts up
        client/     # Client-only
        server/     # Server-only
    ui/             # Define code that details the UI
        components/ # Contains page elements, some of which could appear on multiple pages.
        layouts/    # Contains top-level layout (<App> component).
        pages/      # Contains components for each page.

node_modules/       # managed by npm

public/             # static assets go here.
    images/         # Contains images available to the public.
    themes/         # Contains themes available.

server/             # Server specific files go here.
    main.js         # Import the server-side js files.
    policy.js       # Import the browser policy js files.
```

### Import conventions
This system adheres to the Meteor guideline of putting all application code in the imports/ directory, and using client/main.js and server/main.js to import the code appropriate for the client and server in an appropriate order.

### Application functionality
The application implements a simple CRUD application for managing "Stuff", which is a Mongo Collection consisting of a name (String), a quantity (Number), and a condition (one of 'excellent', 'good', 'fair', or 'poor').

By default, each user only sees the Stuff that they have created.  However, the settings file enables you to define default accounts.  If you define a user with the role "admin", then that user gets access to a special page which lists all the Stuff defined by all users.

#### Landing page
When you retrieve the app at http://localhost:3000, this is what should be displayed:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/Landing.JPG)

The next step is to use the Login menu to either Login to an existing account or register a new account.

#### Login page
Clicking on the Login link, then on the Sign In menu item displays this page:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/SignIn.JPG)

#### Register page
Alternatively, clicking on the Login link, then on the Sign Up menu item displays this page:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/Register.JPG)


#### Add Task page
After logging in, here is the page that allows you to add new Tasks:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/AddStuff.JPG)

#### List Tasks page
After logging in, here is the page that allows you to list all the Tasks you have created:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/Tasks.JPG)

You click the "Edit" link to go to the Edit Task page, shown next.

#### Edit Task page
After clicking on the "Edit" link associated with a task, this page displays that allows you to change and save it:

![](https://raw.githubusercontent.com/softwarewarriors/taskjeeves/master/doc/Edit.JPG)


## CLOSING THOUGHTS 
Software developers definitely need to put in the same, or maybe even more, amount of focus on the security aspects of your application as you would with the functionality of the pages and the overall aesthetics.  Throughout the creation of this project our team has been tried, tested, and found that we need to make improvements.  However, one surprise and somewhat disappointment that we discovered is that our team was not aware of all the built in features already protecting against the more common vulnerabilities of web applications.  However, this forced us to do additional research outside of the provided classroom assignments and discover modern ways to protect our project.  

[Back to table of contents](#table-of-contents)
