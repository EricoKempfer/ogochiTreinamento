import jwt from "jsonwebtoken";


export default async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const token2 = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).send({
                message: 'Token nulo!',
            });
        }
        

        const user = jwt.verify(token2, process.env.TOKEN_KEY);

        if (!user.id) {
            return res.status(401).send({
                message: 'Token incorreto!',
            });
        }

        if(user.cargo !== "admin"){
            return res.status(401).send({
                message: ' Você não é admin!',
            });
        }

        return next();
    } catch (error) {
        return res.status(500).send({
            message: 'Ops! Ocorreu um erro',
            error: error.message,
        });
    }
};