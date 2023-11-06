import Sequelize from 'sequelize';
import usuario from '../models/usuario';

module.exports = {
    create(req, res) {
        return usuario.create({
            username: req.params.username,
            status: req.params.status
        })
        .then(usuario => res.status(200).json(usuario))
        .catch(error => res.status(400).json(error));
    },
    list(_, res){
        return usuario.findAll({})
        .then(usuario => res.status(200).json(usuario))
        .catch(error => res.status(400).json(error))
    },
    find (req, res) {
        return usuario.findAll({
            where: {
                username: req.params.username,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
     }
}