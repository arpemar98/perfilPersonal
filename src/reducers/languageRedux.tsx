import Cookies from "universal-cookie";                                                     // Importar universal cookies

const cookies = new Cookies();                                                              // Cookie de inicio de sesión

const nombreCookie      = "profile_AristeoPerezMartinez_language";

const cookieLanguage   = cookies.get( nombreCookie );

const estadoInicial     = ( cookieLanguage? ( cookieLanguage == "EN"? "EN" : "ES" ) : "EN" );       // ES|EN (default EN)

const languageRedux = ( state = estadoInicial, action : { type : string, payload? : any } ) => {

    switch ( action.type ) {

        case "CHANGE_LANGUAGE":{

            cookies.remove( nombreCookie, { path: "/"} );                                       // Remover cookie (Por si existen)

            cookies.set( nombreCookie,  action.payload, { path: "/"} );                         // Asignar cookie

            return action.payload;                                                              // Nuevo state

        }break;
    
        default:
            break;
    }

    return state;
}

export default languageRedux; 