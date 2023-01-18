import Cookies from "universal-cookie";                                                     // Importar universal cookies

const cookies = new Cookies();                                                              // Cookie de inicio de sesión

const nombreCookie      = "profile_AristeoPerezMartinez_dark_theme";

const cookieIdUsuario   = cookies.get( nombreCookie );

const estadoInicial = ( cookieIdUsuario && cookieIdUsuario == "true")? true : false;

const darkThemeRedux = ( state = estadoInicial, action : { type : string, payload? : any } ) => {

    switch ( action.type ) {

        case "CHANGE_THEME":{

            cookies.remove( nombreCookie, { path: "/"} );                                       // Remover cookie (Por si existen)

            cookies.set( nombreCookie,  action.payload, { path: "/"} );                         // Asignar cookie

            return action.payload;                                                              // Nuevo state

        }break;
    
        default:
            break;
    }

    return state;
}

export default darkThemeRedux; 