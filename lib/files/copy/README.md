# YOUR PROJECT

* ```npm run dev```
    * this will run react's live development server and use nodemon to run the express server.
* ```npm run start```
    * this should be how production will be run, ensure you have run build before this script.
* ```npm run build```
    * prepares files for production, this must be run before start.
* ```npm run sequelize -- <sequelize-cli command>```
    * runs sequelize cli and passes arguments after --
    * e.g. ```npm run sequelize -- model:create --name User --attributes name:string,state:boolean,birth:date,card:integer,role:enum:'{Admin,Guest}'```
        * this above command would create a model named User automatically with the given fields.
