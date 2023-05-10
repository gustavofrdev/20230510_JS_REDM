internal = {}

function addInternal(vari, value){
    internal[vari] = value
}

const ConfigFile = _Framework.GroupsConfig().push();
const waitTolerance = 500;
var API = {};
const exec = _Framework.mysqlExecJs();

decode = json.decode

function userGroups(userId){
    toleraVal =0
    grupos = MySQL.SQLExecute('SELECT grupos FROM xframework_personagens WHERE id = @id', {['@id'] = user_id})
    while(grupos == 0){
        toleraVal+=1
        if(toleraVal >= waitTolerance){
            break;
        }
    }
    if(toleraVal >= waitTolerance){
        print("we can't continue with this code. Is it broken?")
    }

    return decode(grupos)
}
