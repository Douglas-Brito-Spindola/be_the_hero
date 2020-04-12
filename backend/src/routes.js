const routes = require('express');

const routes = express.Router();

routes.post('/users',(request, response) =>{
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana Omnistack 11',
    aluno: 'Douglas Spíndola'
  });
});


module.exports = routes;