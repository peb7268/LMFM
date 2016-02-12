#LMFM: Lean Mean 	 Machine | A Mean stack implementation with kick ass attitude.
There are several MEAN stack implementations out there. There is MEAN.io & MEAN.js among other.
These are great. To me, a lot of the solutions out there either feel overly complicated, unfocused, 
or their methodology seems murky. As I learn the stack myself, I wanted to provide a way for others to learn also. Thus I am creating this guide. 

As I created it though, I thought, if im going to be reinventing the wheel anyway, why not invent it the way I want.
So this project will be an implementation focusing on several key things.  

1. Current Technologies ( browserSync, socket.io, ect.. )
2. Gulp for builds: Extendable Gulp structure
3. Swappable Template Engines
4. Horizontal application structure

####The Example Project: Social Fitness Tracker
Track meals, activities, good life choices and friends.

** *Note this project is a work in progress* **

Got a question, writing my own MEAN stack to use for all projects going forward. 
Mounted sub packages into my main express instance. I then set static routes in those packages
to serve some static views, but for some reason none of my static files are working. I dont think its 
recognizing my mount path correctly.

Main express is in server.js. The app then uses framework/packages.js to load all of the packages that are in the packages folder and then initialize them. 

https://github.com/peb7268/LMFM


To Start this baby up just do npm start