``# Construção de um web server usando Express.js
## Projeto Simple Express Web Server

1. Construção de **3 APIs usando Express.js** recurando dados no formato JSON aonde se encontram documentos descritivos de uma coleção de cursos.

2. As APIs são 
    * GET para todos os cursos;
    * GET para um curso específico;
    * POST para a criação do uma instância de um curso em documento JSON;

3. O POST está mapeado através do Router do Express.js. A implementação da persistência no JSON não está feita. o controle desta API retorna o JSON que foi enviado no body no objeto "response".

4. Esta aplicação...
    * ... utiliza módulos do **Node.js** e **Javascript assíncrono** para atender aos requests.
    * ... gerencia as suas respectivas dependências com **npm**;
    * ... entrega **dados e arquivos estáticos** através do Express.js;
    * ... **instancia** o middleware **Express**;
    * ... configura o **Router do Express** para as 3 APIs;

## Configure o projeto localmente:

Para trazer o código para sua máquina local:

```bash
$ git clone https://github.com/KRonaldoK/webserver_expressjs.git
```

Entre no diretório que o comando git clone criou:

```bash
$ cd webserver_expressjs
```

Instale as dependênciass:

```bash
npm install
```
