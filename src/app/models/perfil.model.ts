import { UserModel } from "./security/user.model";

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
    hijos?:Boolean;
    fumador?:Boolean;
    bebedor?:Boolean;
    estado?:boolean;
    user: UserModel;
}
