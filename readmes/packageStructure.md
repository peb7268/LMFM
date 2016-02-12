
#Package Structure
Each app is composed of components, modules, packages, whatever you want to call them. 
Each of these lives in the packages folder. Each package, is self contained. Having it's own public and server folders. In addition, each of these packages have their own app.js folder. These app.js instances are like mini express apps that get folded into the main app. ( AKA Aggregated )

#Aggregation
This means that the routes get aggregated into the main express app.