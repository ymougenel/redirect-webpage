[![License](https://img.shields.io/badge/License-Mozilla%202.0-blue.svg)]([https://opensource.org/licenses/Apache-2.0](https://opensource.org/license/mpl-2-0))
![Test & Linter CI](https://github.com/ymougenel/redirect-webpage/workflows/Test%20&%20Linter/badge.svg)
![Deploy Docker Image](https://github.com/ymougenel/redirect-webpage/workflows/Publish%20Docker%20Image/badge.svg)

# Redirect Page

This is my project Hub, gathering all the ideas among time.

# Development
## Local dev
```bash
npm install
npm run start
```

# Documentation
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
