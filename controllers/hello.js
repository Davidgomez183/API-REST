
function getHello(req, res){
        res.status(200).send({
            msg: "¡Hola mundo desde el controller getHello()!"
        });
}

   
module.exports = {
    getHello,
};