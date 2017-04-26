# comandos Docker

## docker ps
este comando listaba los contenedores que estan **corriendo**
```
>> docker ps
```
## docker ps -a
este comando listaba **todos** los contenedores que estan **instalados**
```
>> docker ps -a
```
## docker stop 'id' o 'nombre'
este comando detiene  los contenedores que esten corriendo
```
>> docker stop 12easdsa micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```
## docker start 'id' o 'nombre'
este comando levanta los contenedores que esten detenidos
```
>> docker start 12easdsa micontenedor
>> docker start 12
>> docker start m
>> docker start 12 mi
```
## docker rm
este comando elimina  los contenedores que esten detenidos
```
>> docker rm 12easdsa micontenedor
>> docker rm 12
>> docker rm m
>> docker rm 12 mi
```
##MySql
   
Para utilizar docker con mysql vamos a utilizar el siguiente comando
```
   >> docker run --name daniel -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=daniel -e MYSQL_USER=daniel -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
##Postgres
   
   Para utilizar docker con postgres vamos a utilizar el siguiente comando
```
   >> docker run --name andres -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=andres -e POSTGRES_DB=Politecnica -p 5432:5432 -d postgres
```