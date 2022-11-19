# DummyAPI
Test Docker

## Create Images Docker
`docker build --build-arg PORT=9000 -t "{AccountId}.dkr.ecr.us-east-1.amazonaws.com/ito-dev-dummy:latest" .`

## Run Container
`docker run -it -p 8000:80 -e Nombre=RaulDocker {AccountId}.dkr.ecr.us-east-1.amazonaws.com/ito-dev-dummy:latest`

## Login Docker with AWS
`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin {AccountId}.dkr.ecr.us-east-1.amazonaws.com`

## Push images in ECR
`docker push {AccountId}.dkr.ecr.us-east-1.amazonaws.com/ito-dev-dummy:latest`
