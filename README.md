Deploy da aplicação no ubuntu utilizando nginx.


1° Parar o serviço do nginx e frontEnd-start;

2° Primeiro faça o clone do projeto no servidor2;

3° Execute o comando "npm install npm -g" para atualizar o npm;

4° Exlua a pasta do node_modules caso tenha;

5° Execute o comando "chmod -R a+x ./" para conceder permissão para buildar a aplicação;

6° Execute o comando "npm install --save react-typical --legacy-peer-deps" para instalar as dependências do package-json;

7° Execute o comando npm run build para buildar o projeto;

8° Inicializar o serviço do nginx e frontend-start.