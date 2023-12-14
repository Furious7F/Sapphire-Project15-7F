# CaSMM

> Computation and Science Modeling through Making

Cloud-based programming interface

![Deploy Staging](https://github.com/STEM-C/CaSMM/workflows/Deploy%20Staging/badge.svg)
![Deploy Production](https://github.com/STEM-C/CaSMM/workflows/Deploy%20Production/badge.svg)


# Project 15f
## Student personal/student account dashboard & parental controls
Giovanni Perez Colon, Brian Ramirez, Elan Bar-Nur, Yujin Gu, Richard Burke, Tuan Truong

https://youtu.be/wHpDU0iAiB0

## Features implemented
### Hamburger menu with navigation buttons linking to routing
Initial hamburger menu converted to buttons for easier navigation for children

![Alt text](/images/1_hamburger%20menu.png?raw=true)

Routing and linking to different pages
Verification to make sure the user is a student

![Alt text](/images/2_routing.png?raw=true)
![Alt text](/images/3_routing.png?raw=true)
![Alt text](/images/4_routing.png?raw=true)
![Alt text](/images/5_routing.png?raw=true)

### Student Dashboard
Display student name retrieved from backend
Display lessons module with a lessons button that navigates to lessons
Display student projects

![Alt text](/images/6_dashboard.png?raw=true)

Ability to remove projects

![Alt text](/images/remove.png?raw=true)

### Lessons
Buttons that navigate to student assigned lessons

![Alt text](/images/7_lessons.PNG?raw=true)

Upon hover button is highlighted

![Alt text](/images/8_lessonbuttons.png?raw=true)

### Classroom
Display current grades for student
Display a calander with an agenda of upcoming and previous events
Display classmates so students can collaborate 
Calander interaction

![Alt text](/images/9_classroom.png?raw=true)

### Parental
Form login for attatched parental account

![Alt text](/images/10_classroom.png?raw=true)

Sign up button that has a page with a form with type verification

![Alt text](/images/11_signup.png?raw=true)
![Alt text](/images/12_signupregex.png?raw=true)
![Alt text](/images/12_signupregex2.png?raw=true)
![Alt text](/images/12_signupregex3.png?raw=true)

Forgot password page with a form for the email

![Alt text](/images/13_forgotpass.png?raw=true)

## Instructions on how to run project locally

First, clone the github repository with ‘git clone https://github.com/UFWebApps2-0/sapphire-code-sparks’.

![Alt text](/images/1i.png?raw=true)

Then, navigate to the created repository, run ‘npm install’, then navigate to ‘/client’, and run ‘npm install’ again and then ‘yarn start’. This sets up the front end of the website.
npm install
cd client
npm install
yarn start

![Alt text](/images/2i.png?raw=true)

Then, navigate back to ‘/’ and run ‘docker compose up’. This sets up the backend of the website.
cd ..
docker compose up

![Alt text](/images/3i.png?raw=true)

Wait until this launch confirmation.

![Alt text](/images/4i.png?raw=true)

Now, go to your web browser and navigate to ‘http://localhost:3000/’.

![Alt text](/images/5i.png?raw=true)

Congratulations, you are now running the project locally and can experiment with the different features!

## How to update database and server conncetions

After docker is setup navigate to http://localhost:1337/admin

Login with the Strapi Admin account

In the Content-Types Builder you can create fields of different types of objects

![Alt text](/images/6i.png?raw=true)

Upon adding anything to the backend, you're locally hosted backend will have these changes

![Alt text](/images/7i.png?raw=true)

## Dump Files
Dump files are used by docker to recreate the database from scratch. They, and the script that uses them, are located in ``/scripts/``. The dump file that controls the content of strapi is **development_db.dump**.

### Creating Dump Files
Creating dump files is down using postgres. When running in the Docker environment, you can open the database in a terminal like so:
![image](https://github.com/DavidMagda/CaSMM_fork_2023/assets/31215899/30472760-1f70-4007-9017-02ce31b9d8ce)

Once in the terminal, you can use the ```pg_dump``` command to create the dump file. The full syntax for this is: ```pg_dump -U postgres strapi -f development_db.dump```. This creates the dump file in the current directory. You can then find it in one of two ways: through the Docker UI or through your file navigation system.

#### Finding the file through the Docker UI
You can find the file in the 'Files' tab for the database. It's located here:
![image](https://github.com/DavidMagda/CaSMM_fork_2023/assets/31215899/31321e15-aa5d-4196-8398-79afb64bbf7a)

It will be located in the **docker-entrypoint-initdb.d** folder like so:
![image](https://github.com/DavidMagda/CaSMM_fork_2023/assets/31215899/41f59197-0cdc-4526-8bd2-437b21dae6fc)

You can then right-click and save the file to your desired directory.
![image](https://github.com/DavidMagda/CaSMM_fork_2023/assets/31215899/c7d413f5-f197-48a4-b1ec-8c7eb9a803a8)

Replacing the old dump with this new one will allow you to load your strapi into whatever state it was in when the dump was made.

## Issues
If this does not work, you can alternatively try using the command ```pg_dumpall -U postgres -f dumpall.dump```. This will dump all of the databases and you can then manually remove the ones that you didn't mean to grab.
