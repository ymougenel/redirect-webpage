[![License](https://img.shields.io/badge/License-Mozilla%202.0-blue.svg)]([https://opensource.org/licenses/Apache-2.0](https://opensource.org/license/mpl-2-0))
![Test & Linter CI](https://github.com/ymougenel/redirect-webpage/workflows/Test%20&%20Linter/badge.svg)
![Deploy Docker Image](https://github.com/ymougenel/redirect-webpage/workflows/Publish%20Docker%20Image/badge.svg)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Installation

```bash 
npx create-react-app redirect-webpage-app --template typescript
```
```bash 
npm build
```
npm build

# 
## Docker
https://mherman.org/blog/dockerizing-a-react-app/
[Node docker image](https://hub.docker.com/_/node)

## CI/CD
[Github metadata-action](https://github.com/docker/metadata-action) **TODO readthrough**
[Github publish-action](https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-docker-images) **TODO readthrough**

## K8
```bash 
kubectl get [all/services/pods/...]
kubectl apply -f .
```
