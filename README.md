# Tailwind with react 
<br />

**Step 1:** Create react app with the following code:<br />
```
npx create-react-app my-project
cd my-project
```
<br />
**Step 2:** Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.<br />
```
npm install -D tailwindcss
npx tailwindcss init
```
<br />
**Step 3:** Change the contents of ***tailwind.config.js*** file to:<br />
```
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```
<br />
***Step 4:** Go to ***./src/index.css*** and add the following css into it:<br />
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
<br />
**Step 5:** Start your project:<br />
```
npm start
```
<br />
# A h m a d - R e s u m e 
 
 
