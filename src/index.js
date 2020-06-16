const express = require('express');
const request = require('request-promise-native');

const app = express();

app.set('view engine','ejs');
app.set('views','./src/views');

app.use(express.static('public'));

app.get('/servicos',async (req, res) => {
    const result = await request.get('https://hfacil.prodap.ap.gov.br/api/cms/servicos/')
        .auth(null,null,true, 'Api-Key u2MuhzZl.BfM4an4VDYhP0iGou6jyhlDaH9ZXM7ly');
    const services = JSON.parse(result).results;    
    res.render('services', { services});
});

app.listen(3001, () => {
    console.log('Servidor inicialinzando na porta 3001');
});