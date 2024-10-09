# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

------------------------------------------------------------------------------------------------------------------
# Technical test
You have 72 hours to submit your code. Read the next lines to know about the requirement.

#### The challenge is simple. 
#### According to your desired position is, you are going to choice from the next options:
#### Our new business associate needs a GUI in order to their customers can to submit personal information for future telephonic contact.

## Frontend developer challenge's instructions
##### Clone the repository using the following url 
`https://{your-username-here}@bitbucket.org/MAS_development/crud_dev_jr.git`
> Using ReactJS or AngularJS you must create SPA with a simple form registration.
> This is the URL of the API [https://micros.masservicios-ti.com.mx](#https://micros.masservicios-ti.com.mx)
> This is the main endpoint of the API `/api/customers`
> Attached to this message you'll found an (dot) JSON file EvaluacionProgramadoresFrontEndJunior.postman_collection.json, using POSTMAN to open it (google it if necessary), the documentation wil guide you through the actions that your GUI needs to perform. 


## Backend developer challenge's instructions
##### Clone the repository using the following url 
``https://{your-username-here}@bitbucket.org/MAS_development/api_dev_jr.git``

> Using Laravel you must create API for a simple form registration.
> Attached to this message you'll found an (dot) JSON file EvaluacionProgramadoresFrontEndJunior.postman_collection.json, using POSTMAN to open it (google it if necessary), the documentation wil guide you through the actions that your API needs to perform. 

### Bonus Points
 * Use unit tests.
 * Use of homestead.


### The API should be able to:

 * list all customers
 * retrieve a single customer
 * create a customer
 * update a customer
 * delete a customer
 * restore a deleted customer
 * upload a file with customer's avatar


### Data structure
Field             | Type             | Null | Key | Default                         |
------------------|------------------|------|-----|---------------------------------|
id                | int(11) unsigned | NO   | PRI | NULL                            |
email             | varchar(100)     | YES  |     | NULL                            |
password          | varchar(100)     | YES  |     | NULL                            |
name              | varchar(100)     | YES  |     | NULL                            |
last_name         | varchar(100)     | YES  |     | NULL                            |
birth_date        | date             | YES  |     | NULL                            |
personal_phone    | varchar(20)      | YES  |     | NULL                            |
contact_phone     | varchar(20)      | YES  |     | NULL                            |
address           | text             | YES  |     | NULL                            |
gender            | varchar(1)       | YES  |     | NULL                            |
state             | varchar(30)      | YES  |     | NULL                            |
city              | varchar(80)      | YES  |     | NULL                            |
suburb            | varchar(80)      | YES  |     | NULL                            |
zip_code          | varchar(8)       | YES  |     | NULL                            |
avatar            | varchar(150)     | YES  |     | https://via.placeholder.com/500 |
email_verified_at | timestamp        | YES  |     | NULL                            |
remember_token    | varchar(100)     | YES  |     | NULL                            |
created_at        | timestamp        | YES  |     | current_timestamp()             |
updated_at        | timestamp        | YES  |     | NULL                            |
deleted_at        | timestamp        | YES  |     | NULL                            |


### Customer's required attributes:
> email * validates email address
> password * validates min length of 10
> name * validates min length of 3
> last_name * validates min length of 4
> birth_date * validates date format: YYYY-MM-DD
> personal_phone * validates 10 digits
> contact_phone * validates 10 digits
> zip_code * validates 6 digits

### Criteria
For full transparency, the test will be scored according to the following:

 * REST Structure
 * Unit Testing
 * Logging
 * Best practices
 * Reusable code
 * Decoupled code
 * Ability to transform requirements into code
 * Use of services, controllers, and models | ONLY FOR BACKEND DEVELOPERS
 * Use of Laravel 6 LTS as a framework | ONLY FOR BACKEND DEVELOPERS
 * Use of hooks | ONLY FOR FRONTEND DEVELOPERS
 * Use of dom | ONLY FOR FRONTEND DEVELOPERS
 * This API not requires CSRF verification
 
