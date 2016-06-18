
#Build System
This build system is built on gulp by default. It is designed to be extremely extendable and customizeable to your own needs. Simply follow our patterns to implement your own functionality. 
- The gulp tasks are located in the <package_name>/tasks folder. 
- In addition, the tasks are namespaced by folder based on how they will be ran in gulp. 
  For example, to run just the sass tasks for the users package you would run ```gulp users:dev:fe:sass``` as opposed to running all of the gulp tasks for users by running 
  ```gulp users```. This design was done to make debugging or compartmentalized working super fast.
- This system also makes things very easy to extend because all you have to do to add your own 
  functionality to a package is just make your own gulp task in the tasks folder.

#Build Goals
- Runs from the root folder of the app
- Can run gulp to serve the app with browserSync by default
- Can run gulp dev to run compilation for all of the assets in the app ( every package ) and 
  to execute all of the tests.
- Can run fe or be to compile for either front end or backend.
- Can break the dev into js or styles by running ```gulp <package_name> styles``` or 
  ```gulp <package_name> scripts```
- Can run all of these commands per pacakge as well like ```gulp dev:fe users``` 