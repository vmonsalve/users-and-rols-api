import usuarioController  from '../controllers/usuariosController';

module.exports = (app) =>{
    app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
    app.get('/api/usuario/list', usuarioController.list);
    app.get('/api/usuario/find/username/:username', usuarioController.find);
}