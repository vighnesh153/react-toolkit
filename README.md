# @vighnesh153/react-toolkit


### Steps to create a react component library
* `mkdir <PROJECT-NAME>`
* `cd <PROJECT-NAME>`
* `npm init -y`
* ** MAKE NECESSARY CHANGES IN PACKAGE.JSON **
* `npx gitignore node`
* ** Add .idea, storybook-static in .gitignore'
* `npm install --save react react-dom typescript`
* ** Add this script in package.json: `"tsc:init": "tsc --init"`**
* `npm run tsc:init`
* `npx -p @storybook/cli sb init --story-format=csf-ts`
