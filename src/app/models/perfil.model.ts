import { UserModel } from "./security/user.model";
import { CiudadModel } from './parameters/ciudad.model';
import { PaisModel } from './parameters/pais.model';
import { PaisService } from '../services/parameters/pais.service';

export class PerfilModel{
    id?:String;
    nombre: String;
    correo:String;
    phone: String;
    sexo:String;
    fechaNacimiento: String;
    nivelEscolaridad?:String;
    estadoCivil:String;
    orientacionSexual:String;
    ocupacion?:String;
    ciudadId: String;
    ciudad:CiudadModel;
    pais:PaisModel;
    paisId: String;
    hijos?:Boolean;
    fumador?:Boolean;
    bebedor?:Boolean;
    estado?:boolean;
    user: UserModel;
}
