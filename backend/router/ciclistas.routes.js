import { check } from "express-validator";
import { getCiclista, postCiclista } from "../controllers/ciclista.controller.js";
import { validateDocuments} from "../midlewares/validate.document.js";
import Router from "express";

const router = Router();

router.get("/", getCiclista);

router.post("/", [
    check('nombre', 'nombre no es valido').not().isEmpty(),
    check('password', 'password debe tener minimo 2 letras').isLength({min:6}),
    check('email' , 'el correo no es valido').isEmail(),
    validateDocuments
], postCiclista);

export default router;