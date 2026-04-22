import { Router, type Request, type Response, json } from "express";
import z, { ZodError } from "zod";

const router = Router()

const bodySchema = z.object({
    num1: z.number(),
    num2: z.number()
})

router.get('/sum', (request: Request, response: Response)=>{
    try{
        const parsed = bodySchema.parse(request.body)

        const {num1, num2} = parsed

        const result = num1 + num2;

        return response.json({result})
    }catch(e){
        if(e instanceof ZodError){
            const pretty = z.prettifyError(e);
            
            return response.status(400).json({error: pretty})
        }
        return response.status(400)
    }

    
})

export {router as calcRouter}
