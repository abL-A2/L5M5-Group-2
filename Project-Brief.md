# L5M5-Group-2

Repository for Group 2

# Project Briefing

## Learning Outcomes
This Mission is an NZQA assessment designed to support you to achieve the following learning outcomes.

### For participants in Diploma in Digital Technology Development and Design Component 2:

1. Apply Agile software delivery and design thinking practices to contribute to the development of digital technology product solutions. 

2. Apply industry standard best practices to contribute to the development of digital technology product solutions. 

3. Apply legal and ethical decision-making principles when contributing to developing digital technology product solutions.  

4. Apply effective interpersonal and collaborative skills when working on digital technology product projects with internal and external stakeholders

### For participants in Level 5 Certificate in Digital Technology Product Solutions Micro-credential:

1. Apply Agile software delivery and design thinking practices to contribute to the development of digital technology product solutions in specific contexts of practice.

2. Apply industry standard best practices to contribute to the development of digital technology product solutions in the context of practice.

3. Apply ethical decision-making principles when contributing to developing digital technology product solutions.

4. ​​​​​​​Apply effective professional interpersonal and collaborative skills when working on digital technology product projects with internal and external stakeholders.

## Marking Rubrics

Before you read further, make sure that you check out the Marking Rubric. It is the assessment schedule that will be used to assess your submissions to decide whether you passed or failed this Mission. You need to pass all criteria in order to pass this Mission and this programme.

Learning Outcome 1: Advanced Software Developer Pathway 

Diploma Learning Outcome	Apply Agile software delivery and design thinking practices to contribute to the development of digital technology product solutions
Micro-credential Learning Outcome 	Apply Agile software delivery and design thinking practices to contribute to the development of digital technology product solutions in specific contexts of practice. 
Evidence Required:
- Records of Daily Stand Up meetings 
- Completed application based on UX Designer’s prototype. 
- The API prototype with MongoDB
- Completed Project Review form. 

Validation Criteria:
1. Is there evidence of using MongoDB? 	 
2. Does the API respond with the correct data from MongoDB?	 
3. Does the Phase 2 application have an adequate visual and functional resemblance to one or more screens of the UX Designer’s prototype? 	 
4. Does the learner response include evidence of the application of at least one Agile practice other than Daily Standups?  (e.g., iterative development, task board, Kanban board, point estimates, version control, refactoring, user stories, continuous integration, automated deployment, scrum rituals, etc) 	 
5. Does the learner response include evidence of the application of at least one Design Thinking practice? (e.g.  empathising questions, prototype playback/demonstration, solution brainstorming, test planning, etc) 	 
6. Do learner’s comments on Project Review Form demonstrate understanding of Agile and Design Thinking principles or practices?

## Task briefing

The Mission has 2 Phases.  
- In Phase 1, you will work independently on Design Challenge Option 1 - Trade Me, but remain collaborative with the team on some tasks.
- In Phase 2 you will work as a team to build part of the application designed by a UX Designer, which may be in any of the Design Challenge Options. 

The following 2 tasks will need to be done in both Phases.

**<ins>Task 1:</ins>** Use Jira to manage team tasks
> The team will setup a new Jira board to share amongst the team to manage all tasks.  The Jira board will be setup with 3 columns: "To-do", "In-progress", "Done".  The team can enter high level tasks and/or sub-tasks into Jira.  Team members will update Jira when they are working on a task or finished a task.

**<ins>Task 2:</ins>** Daily Stand Up
> Work with everyone in your team to jointly perform Daily Stand Ups (one of the Agile practices).   These Daily Stand Ups should be performed at a set time on each weekday (you do not need to do Daily Stand Ups on weekends), and should not exceed 15 minutes per day.  

At the end of each Daily Stand Up, your team must record these three (3) pieces of information:​​​​​​​
- What was the start time of today’s Daily Stand Up?
- What was the end time of today’s Daily Stand Up?
- What issues, discussed today by individual team members (if any), are blocking the team’s progress?

The following resource may help:

​​​​​​​​​​​​​​REQUIRED: Everything you need to know about [Daily Stand Up](https://geekbot.com/blog/daily-standup-meeting/?k_id=dsa-910872033553&adgroup_id=96910465570&campaign_name_ad=10071775578&gclid=Cj0KCQiAqGNBhD3ARIsAO_o7ymFmj0S60Ad79hp_vikyWiDyedcCiU8VVgCTefF35PpzjU9Em3vl88aAmIoEALw_wcB) (15 mins)

## <ins>Phase 1</ins>

You will work independently on Design Challenge _Option 1 - Trade Me_, but remain collaborative with the team on some tasks.

In response to TradeMe user's feedback on “product pages is overloaded with information”, you will experiment creating an API with the minimum data required.  You will use a NoSQL database to store the data.

You will work **collaboratively** on **Tasks 3, 7, 8,** and work **independently** on **Tasks 4, 5, 6**.  

**<ins>Task 3:</ins>** Choose Agile Mindsets and Practice

> As a team, decide on 2 Agile values and 1 practice (that is not Daily Stand Up) and 1 Design Thinking practice to apply during this mission. A review of how those practices were applied should be included in your Project Review Form.

The following resource may help:

REQUIRED [Agile values](https://resources.scrumalliance.org/Article/key-values-principles-agile-manifesto) (3 mins)

RECOMMENDED [Agile Practices](https://www.ntaskmanager.com/blog/agile-best-practices/) (10 mins)

RECOMMENDED [Design Thinking Practices](https://www.innovationtraining.org/steps-to-design-thinking/) (10 mins)

**<ins>Task 4:</ins>** Install MongoDB Locally

> Install MongoDB and MongoDB Compass locally. You will create and manage your database locally; please do not use Mongo Atlas.

The following resources may help:

REQUIRED: Follow the [MongoDB local installation guide](https://www.mongodb.com/docs/manual/administration/install-community/) (1 hour).

REQUIRED: Install [MongoDB Compass using the instructions found](https://www.mongodb.com/docs/compass/current/install)/ (1 hour).

RECOMMENDED: If you're new to MongoDB, you can start with the [MongoDB Intro](https://www.mongodb.com/basics/get-started) (1 hour).

**<ins>Task 5:</ins>** Seed Auction Data into MongoDB

> Develop a command-line interface (CLI) tool to seed data into your local MongoDB database or delete data from it.  Ensure that this tool is source-controlled and includes the seed data.  Team members should be able to seed data by cloning the repository.  Add sample data for a few auction items with the following 4 fields: title, description, start_price, reserve_price.

The following resources may help:

REQUIRED: [Learn how to build a CLI tool in Node.js](https://blog.logrocket.com/creating-a-cli-tool-with-node-js/)

RECOMMENDED: Watch this [video tutorial](https://youtu.be/v2GKt39-LPA?si=jSXuOUfZSYggzzGp) for additional insights.

**<ins>Task 6:</ins>** Display Similar Auction Items

> Create an API that will retrieve items that match a specified search criteria from your MongoDB instance.  You may use keyword search or optionally use generative AI to assist the search.

The following resources may help:

RECOMMENDED: Understand the basics of [using Mongoose with MongoDB](https://youtu.be/DZBGEVgL2eE?si=8Bavpy9XdhqR5tSQ)

RECOMMENDED: Learn about [CRUD operations with Mongoose](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)

**<ins>Task 7:</ins>** Provide feasibility input when needed

> If you are assigned to a team with UX Designer(s), your task is to provide input as a developer to your team’s UX Designer(s), with a focus on the technical feasibility of the UX Design prototype you have been given to work with.  Note that your input is provided for advisory purposes only, for it is the UX Designer(s)’ responsibility to make the final decisions on the design.

If you are not assigned to a team with UX Designers, you can skip this task.

**<ins>Task 8:</ins>** Attend prototype design walk through

> If you are assigned to a team with UX Designer(s), by the end of Phase 1 attend the prototype design “walk through” that has been organised by your team’s UX Designers, and ask any necessary questions.  In the next Phase you will build part of the prototype into an application.

If you are not assigned to a team with UX Designers, you do not need to attend a walk through.  You will be provided the design prototype to assist you into the next Phase of building part of the prototype into an application.

## <ins>Phase 2</ins>

**<ins>Task 9:</ins>** Create Version 1 of the designed application

> Create an application based on the version of prototype design you received from UX Designers at the end of Phase 1.  You can ask questions to clarify the design with UX Designer(s) as needed, but you do not need to incorporate any design changes made by your UX Designers in Phase 2. 

> Each developer will work on least ONE screen of the application that has both frontend and backend functionality. You are encouraged to work on more screens if time permits.

> Your application will need to use a MongoDB backend.

> Collaborate using Github to discuss how to share common components amongst developers.

The following resources may help if you are building the application in React:

RECOMMENDED: [React tutorial](https://www.w3schools.com/react/)

RECOMMENDED: [React course for beginners](https://www.skillshare.com/classes/Building-your-first-React-application-in-75-minutes-or-so/1253484924) (1.5 hours)

**<ins>Task 10:</ins>** Present at Show and Tell

> At the Show and Tell, your team will jointly present both the Generic and Specialist Tasks it has completed.  This presentation should be designed to take around 5 minutes for each team member – so, if you are in a 4-people team you have up 20 minutes in total.  The time limit will be strictly enforced.  You are encouraged to demonstrate your live application.  You can also add PowerPoint slides, Sway or Prezi to help with your presentation.

**<ins>Task 11:</ins>** Submit your work

> By the beginning of Show and Tell, upload all of your work (screenshots, presentation slides, documents or other files) using the Mission Submission Form.

**<ins>Task 12:</ins>** Complete Project Review Form

> Individually complete the Project Review Form before Show and Tell.  Each team member will need to complete one form.

The following resource may help:

REQUIRED [Ethics framework for decision making](https://www.scu.edu/ethics/ethics-resources/a-framework-for-ethical-decision-making/) (20 mins)​​​​​​​
