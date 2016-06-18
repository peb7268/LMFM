
#Package Architecture
- Each app is composed of packages. 
- Each of these lives in the packages folder. 
- Each package, is self contained. Having it's own public and server folders. 
- Each package has it's own package.json where the package name is derrived from as well as any per 
  package configurations.
- In addition, each of these packages have their own app.js file. 
  This app.js file is like mini express apps that get folded into ( mounted onto ) the main app. ( AKA Aggregated )


#Package Goals
- Each package should be able to inherit from global configs but override some things. For instance, 
  if you wanted to use a different templating engine in package a than the global configs are set to use. These settings are in the package's package.json.

- Each package should look for views in the same place, but be able to override that path in the 
  package's package.json. The default path will be public/views

- Each package will act as it's own model as well. So doing something like User.find() will leverage  
  mongoose and the DB layer by default behind the scences Laravel Style. So that all of the mongoose setup will be abstracted away by default.

- Long Term (LT): Each package will be able to leverage a front end framework system such as angular 
  or react by specifying it in the package.json and then running a command through the LMFM shell tool.

- LT: Make the package indifferent to the data layer by using something like Waterline.