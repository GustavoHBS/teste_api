<h1>Instalação</h1>
<p>Olá, para utilizar está aplicação é muito facil, basta você ter o node instalado na maquina e então baixar esse projeto para dentro de alguma pasta, apos isso você deve criar um arquivo chamado .env na raiz do diretorio e dentro dele você precisara colocar 4 variaveis de ambiente, elas são: PORT, DATABASE_URL, AUTH_SECRET_KEY, EXPIRATION_SECONDS.<p>
<p>PORT => Representa a porta que o servidor ira receber as requisições.</p>
<p>DATABASE_URL => Url de acesso ao banco de dados mongo, para isso você deve ter ou criar um banco MongoDB e adicionar a url de acesso a ele nesta variavel.</p>
<p>AUTH_SECRET_KEY => Essa é a key que o JWT ira utilizar para criptografar e descriptografar os tokens gerados e recebidos por ele, então é bem importante não compartilhar essa key, se não alguem de fora conseguira acessar a sua apliação. Para gera ela pode ser qualquer coisa, sugiro gerar um uuid pois assim é mais dificil de alguem conseguir adivinhar sua key.</p>
<p>EXPIRATION_SECONDS => Essa variavel ira receber o tempo de expiração do token em segundos, sendo assim se você setar 60 para ela, o token ira expirar em 60 segundos./<p>

<p>Apos configurar esse .env, você deve rodar o comando
  <pre>yarn</pre> ou <pre>npm install</pre> use o gerenciador de pacotes de sua preferencia para instalar os pacotes da aplicação, e apos ele ter instalado todos os pacotes, você já está pronto para inicializar a aplicação, sendo assim rode o comando <pre>yarn start</pre> e pronto, sua aplicação ira rodar em alguns segundos, se tudo der certo aparecera uma mensagem no seu terminal informando em qual porta a aplicação está rodando.</p>

<br><h1>Rotas</h1>
<h2>Autenticação</h2>
<h3>Login</h3>
<p>Para poder utilizar a aplicação, você deve fazer o login utilizando o username e o password configurado na tabela users da sua base do mongo, e então enviar um POST para a rota <pre>url/auth/login</pre>
Enviando um JSON com os campos:
<pre>{
  "username": "",
  "password": ""
}</pre>
Apos isso se os dados estiverem certos, a aplicação retornara um JSON com acess_token e o expires_in, o acess_Token é o token que deve ser utilizado nas outras rotas da aplicação como forma de autenticar a requisição e o expires_in o tempo maximo que aquele token será valido.</p>
<br><h3>Criação de usuários</h3>
<p>Nessa rota é possivel criar outros usuários para fazer o acesso a api, nela é enviada um post para a rota <pre>url/users/crate</pre> junto de um json no corpo da requisição com as propriedades:
<pre>{
  "username": "",
  "password": ""
}</pre>
E dentro do header um authorization do tipo Bearer com o acess_token retornado na requisição de login.</p>
<h2>Execução/Busca</h2>
Todas as rotas dessa seção devem receber um Bearer token no header com o token recebido na requisição de login.
<br><h3>Realizar exam toxigologico</h3>
<p>Essa rota é responsável por fazer o processo em que ira receber um exame com os dados e ela ira processar para saber se foi encontrado algum tipo de droga de acordo com esses dados, a requisição é um POST para a url: <pre>url/exame/toxicological</pre> e ira receber um json com os seguintes valores:
 <pre>
 {
  codigo_amostra: string;
  Cocaína: number;
  Anfetamina: number;
  Metanfetamina: number;
  MDA: number;
  MDMA: number;
  THC: number;
  Morfina: number;
  Codeína: number;
  Heroína: number;
  Benzoilecgonina: number;
  Cocaetileno: number;
  Norcocaína: number;
}
</pre> 
 E com isso ela ira salvar esses valores no banco apos o processamento e retornara o codigo da amostra que foi enviado junto com uma propriedade informado se a amostra deu positivo ou negativo para o exame</p>
 <br><h3>Buscar todos os exames</h3>
<p>Essa rota é responsável por buscar todos os exames ja feitos, ela é uma requisição que deve ser feita pelo metodo GET para a url:<pre>url/exame/toxicological</pre>E nela será retornado um array de objetos com os dados da amostra, junto do codigo e se ela deu positvo ou negativo para o teste</p>
<br><h3>Buscar um unico exame</h3>
<p>Essa rota é responsável por buscar apenas um unico exame, ela é uma requisição que deve ser feita pelo metodo GET para a url:<pre>url/exame/toxicological/{codigo_amostra}</pre>Em que você ira substituir o {codigo_amostra} pelo valor do codigo da amostra que você está buscando, ela retornara um objeto com os dados da amostra, junto do codigo e se ela deu positvo ou negativo para o teste</p>
