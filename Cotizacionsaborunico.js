function Mora(){
    var Mora =document.cotizar.Mora.value;
    var Mora1=document.cotizar.Mora1.value; 
   
    
    if(Mora=="1"){
    var MoraT=Mora1*1000; 
    }else;{if(Mora=="2"){
    MoraT=Mora1*2000
    }else{MoraT=Mora1*3000}}
    MoraFinal=MoraT
}

function Fresa(){
    var Fresa =document.cotizar.Fresa.value;
    var Fresa1=document.cotizar.Fresa1.value;
     
    if(Fresa=="1"){
    var FresaT=Fresa1*1000; 
    }else;{if(Fresa=="2"){
    var FresaT=Fresa1*2000
    }else{FresaT=Fresa1*3000}}
    FresaFinal=FresaT
    }

function Guanabana(){
    var Guanabana=document.cotizar.Guanabana.value;
    var Guanabana1=document.cotizar.Guanabana.value;
         
    if (Guanabana =="1"){
    var GuanabanaT=Guanabana1*1000; 
    }else;{if(Guanabana=="2"){
    var GuanabanaT=Guanabana1*2000
    }else{GuanabanaT=Guanabana1*3000}}
    GuanabanaFinal=GuanabanaT
    }

function Lulo(){
    var Lulo =document.cotizar.Lulo.value;
    var Lulo1=document.cotizar.Lulo1.value; 
        
    if(Lulo=="1"){
    var LuloT=Lulo1*1000; 
    }else;{if(Lulo=="2"){
    var LuloT=Lulo1*2000
    }else{LuloT=Lulo1*3000}}
    LuloFinal=LuloT
    }

function Mango(){
    var Mango =document.cotizar.Mango.value;
    var Mango1 =document.cotizar.Mango1.value; 
            
    if(Mango=="1"){
    var MangoT = Mango1*1000; 
    }else;{if(Mango=="2"){
    var MangoT=Mango1*2000
    }else{MangoT=Mango1*3000}}
    MangoFinal=MangoT
    }

function Pina(){
    var Pina =document.cotizar.Pina.value;
    var Pina1 =document.cotizar.Pina1.value; 
                
    if(Pina=="1"){
    var PinaT = Pina1*1000; 
    }else;{if(Pina=="2"){
    var PinaT=Pina1*2000
    }else{PinaT=Pina1*3000}}
    PinaFinal=PinaT
    }
function Curuba(){
    var Curuba =document.cotizar.Curuba.value;
    var Curuba1 =document.cotizar.Curuba1.value; 
                    
    if(Curuba=="1"){
    var CurubaT = Curuba1*1000; 
    }else;{if(Curuba=="2"){
    var CurubaT=Curuba1*2000
    }else{CurubaT=Curuba1*3000}}
    CurubaFinal=CurubaT
    }
function Freijoa(){
    var Freijoa =document.cotizar.Freijoa.value;
    var Freijoa1 =document.cotizar.Freijoa1.value; 
                        
    if(Freijoa=="1"){
    var FreijoaT = Freijoa1*1000; 
    }else;{if(Freijoa=="2"){
    var FreijoaT=Freijoa1*2000
    }else{FreijoaT=Freijoa1*3000}}
    FreijoaFinal=FreijoaT
    }
function final(){
    var final= MoraFinal+FresaFinal+LuloFinal+GuanabanaFinal+MangoFinal+PinaFinal+FreijoaFinal+CurubaFinal
    document.cotizar.Resultado.value=final
}

function calcula(){
    Mora();
    Fresa();
    Guanabana();
    Lulo()
    Mango()
    Pina()
    Curuba()
    Freijoa()
    final();
}