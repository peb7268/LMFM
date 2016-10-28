#Todos  
Todos are broken down more specifically in each doc file.

current task: view engine implementation
next task: 	  css preprocessor config

Notes to self:
views paths are conflicting because express is matching 
the views in the first path in the config.views.paths array. May need
to mount seperate instances of express into the main app to keep track of their
own configs seperate.

##Need to haves
- Convert to using angular 2 and angular cli
- view engines
- css preprocessors
- Move to an NPM build system
- Integrate JWT's

##Nice To haves
- SocketIO
- If in dev use charlatan
- LT: Integrate Passport
- LT: Make FE MVC switchable to react, polymer w/e


** Create 2 main branches **
1 for platform release and 1 for product development