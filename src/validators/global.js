function validarExistencia(valor){
    console.log(valor)
    if(valor){
        return valor
    }else{
        return " "
    }
}

module.exports = {validarExistencia}