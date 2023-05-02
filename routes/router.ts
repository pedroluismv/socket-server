import {Router, Request, Response} from 'express';

const router = Router();

    router.get('/messages', (req:Request, res:Response)=>{

        res.json({
            ok:true,
            message:'todo esta fine'
        })
    });


    router.post('/messages', (req:Request, res:Response)=>{

        const cuerpo = req.body.cuerpo;
        const de = req.body.de;

        res.json({
            ok:true,
            message:'todo esta fine desde el post',
            cuerpo,
            de
        })
    });


export default router;