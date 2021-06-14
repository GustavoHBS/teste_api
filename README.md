<h1>Instalação</h1>
<p>Olá, para utilizar está aplicação é muito facil, basta você ter o node instalado na maquina e então baixar esse projeto para dentro de alguma pasta, apos isso você deve criar um arquivo chamado .env na raiz do diretorio e dentro dele você precisara colocar 4 variaveis de ambiente, elas são: PORT, DATABASE_URL, AUTH_SECRET_KEY, EXPIRATION_SECONDS.<p>
<p>PORT => Representa a porta que o servidor ira receber as requisições.</p>
<p>DATABASE_URL => Url de acesso ao banco de dados mongo, para isso você deve ter ou criar um banco MongoDB e adicionar a url de acesso a ele nesta variavel.</p>
<p>AUTH_SECRET_KEY => Essa é a key que o JWT ira utilizar para criptografar e descriptografar os tokens gerados e recebidos por ele, então é bem importante não compartilhar essa key, se não alguem de fora conseguira acessar a sua apliação. Para gera ela pode ser qualquer coisa, sugiro gerar um uuid pois assim é mais dificil de alguem conseguir adivinhar sua key.</p>
<p>EXPIRATION_SECONDS => Essa variavel ira receber o tempo de expiração do token em segundos, sendo assim se você setar 60 para ela, o token ira expirar em 60 segundos./<p>

<p>Apos configurar esse .env, você deve rodar o comando
  <pre>yarn</pre> ou <pre>npm install</pre> use o gerenciador de pacotes de sua preferencia para instalar os pacotes da aplicação, e apos ele ter instalado todos os pacotes, você já está pronto para inicializar a aplicação, sendo assim rode o comando <pre>yarn start</pre> e pronto, sua aplicação ira rodar em alguns segundos, se tudo der certo aparecera uma mensagem no seu terminal informando em qual porta a aplicação está rodando.</p>

<br><h1>Rotas</h1>
<h3>Login</h3>
<p>Para poder utilizar a aplicação, você deve fazer o login utilizando o username e o password configurado na tabela users da sua base do mongo, e então enviar um POST para a rota <pre>url/auth/login</pre>
Enviando um JSON com os campos:
<pre>{
  "username": "",
  "password": ""
}</pre>
Apos isso se os dados estiverem certos, a aplicação retornara um JSON com acess_token e o expires_in, o acess_Token é o token que deve ser utilizado nas outras rotas da aplicação como forma de autenticar a requisição e o expires_in o tempo maximo que aquele token será valido.</p>
