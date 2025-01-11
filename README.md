BUILDX - Digiwhiz 
This document provides instructions on how to set up, run, and build the React 
application created with tailwind CSS, extract it from a ZIP file uploaded on google drive 
or clone/download zip file from GitHub. 
 
Getting Started 
Follow these steps to get the project up and running: 
1. Extract files from a ZIP file 
1. Download the ZIP file containing the project. 
2. Extract the contents of the ZIP file to your desired location. 
3. Open the terminal or command prompt and navigate to the project folder: 
cd my-assessment 
2. Clone from GitHub Repository 
1. Open your terminal or command prompt. 
2. Run the following command to clone the  
Repository: 
https://github.com/sujalbalar/Digiwhiz-Assessment.git 
Clone the project 
To clone project, run the following command 
git clone https://github.com/sujalbalar/Digiwhiz-Assessment.git 
After cloning, run the following command in terminal 
cd my-assessment  
 
Start working on the project 
After cloning run the command 
npm install 
After installing all library run the below command 
npm run dev 
The terminal will display the local development server URL, typically: 
http://localhost:3000 
 
Build for Production 
To create an optimized production build of the application: 
npm run build 
 
Folder Structure 
Below is a typical folder structure for a BUILDX | Digwhiz project: 
├── public/        # Static assets 
│   ├── index.html / # Main HTML file 
├── src/           # Source files 
│   ├── components/ # Reusable components 
│   ├── App.jsx    # Root component 
│   ├── index.jsx   # Application entry point 
├── .gitignore     # Git ignored files 
├── package.json   # Project metadata and dependencies 
├── tailwind.config.js # TailwindCSS configuration 
Dependencies 
Ensure that you have the following installed: 
Node.js: Install the latest LTS version from nodejs.org. 
NPM: Comes bundled with Node.js. Check your versions: 
node -v 
npm -v
