export class UserModel{
    id?= String;
    correo:String;
    password?:String;
    fechaNacimiento:String;
    perfilId?:String;
    rol?:Number;
    token?: String;
    isLogged: Boolean=false;
}
