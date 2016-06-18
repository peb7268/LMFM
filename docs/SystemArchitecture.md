
#System Architecture
The LMFM stack is started by running ```npm start```. It uses one file, ```server.js``` to bootup everything. Any global mods should be done there. The LMFM stack is composed of packages. Each pacakge is self contained and has it's own routes, front end ( public ) and back end ( server ) folders. This makes locating where things are super easy. In addition, each package has their own per package configurations wich can work in concert with, or override the global config.


#System Goals
- Global config
	- for view engines
	- view paths ( layouts ect.. )
	- css preprocessors
	- css paths
	- password protected advanced options ( changing the package.json / bower.json files via the UI)
	
- Overrideable by packages
- Each package configs are viewable and configurable via a UI. 