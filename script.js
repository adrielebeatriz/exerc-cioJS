
function verificar() { 
    var data = new Date() 
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano') 
    var res = window.document.getElementById('res') 
 
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique e tente novamente.') 
    } else { 
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value) 
        var genero = '' 
        if (fsex[0].checked) { 
            genero = 'homem' 
            if(idade >= 0 && idade < 10) { 
                    //Criança. 
            } else if( idade < 21) { 
                //Jovem 
            } else if( idade < 50) { 
                //Adulto
            } else { 
                //Idoso 
            } 
        } else if(fsex[1].checked) { 
            genero = 'mulher' 
            if(idade >= 0 && idade  < 10) { 
                    //Criança. 
            } else if ( idade< 21) { 
                    //Jovem 
            } else if( idade < 50) { 
                    //Adulto              
            } else { 
                    //Idoso                 
            }                      
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero}  com ${idade} anos` 
        res.appendChild(img)  
    } 
}

