function calcula (operacion){
    var Nacimiento= document.calculadora.Nacimiento.value
    var Numero2= 2021
    var final= eval(Numero2+operacion+Nacimiento)
    document.calculadora.Resultado.value=final
}