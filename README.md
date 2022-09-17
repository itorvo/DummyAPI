# DummyAPI
Test Docker
#AXSXA Hola mundo
## Create Images Docker
`docker build -t "apitest" -f DummyAPI\Dockerfile .`

## Run Container
`docker run -it -p 8000:80 -e Nombre=RaulDocker apitest:latest`

## Assign tag to image
`docker tag apitest [NumberAccountAWS].dkr.ecr.us-east-1.amazonaws.com/testapi:latest`

## Login Docker with AWS
`Invoke-Expression (aws ecr get-login --no-include-email)`

## Push images in ECR
`docker push [NumberAccountAWS].dkr.ecr.us-east-1.amazonaws.com/testapi:latest`
