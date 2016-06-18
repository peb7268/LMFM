#LMFM: Lean Mean Fighting Machine | A Mean stack implementation with kick ass attitude.
The purpose of this stack is to give developers a way to make amazing applications as easy as possible, while being based on cutting edge practices and technologies.

There are several MEAN stack implementations out there. There is MEAN.io & MEAN.js among others.
These are great. However, to me, a lot of the solutions out there either feel overly complicated, unfocused, or their methodology seems murky. Out of that need LMFM is born. Wether you are looking to create a quick and beautiful front end app, a native app, or a full scale web application, this stack aims to provide you with the cleanest, most efficient start possible.

The scope of this project is massive so as we start building, this project will be 
focusing on several key things.  

1. Current Technologies ( browserSync, socket.io, ect.. )
2. Gulp for builds: Extendable Gulp structure
3. Swappable Template Engines
4. Horizontal application structure
5. Fine grained control of package loading order
6. App mode ( debug, dev, production )
7. Central config for things like template engines, CSS preprocessors, app level technologies & 
   settings. These settings should be overrideable by packages.
8. Each package is self contained.

###Next Steps:
- Create a db interface for each module by extending the dbResource / Mongoose in each package 
  instance. See more on DB proposed behavior in the docs folder / Models.
- Update the LMFM package repo to use the new structure.
- Verify that the Package inheritance is done as efficiently as possible.

###To see more on how things work consult the docs folder.

** *Note this project is a work in progress* **


To Start this baby up just do ```npm start```