function validartexto(control){

    let txt = document.getElementById(control)
    
    if( /^[a-zA-Z\s]+$/.test(txt.value) == false || /^[1-9]/.test(txt.value) == true){
        return false
    }
    
    return true
}
function validarnum (control){
    let nro=document.getElementById(control)
        return !isNaN(nro.value)



}
function validarmail (control){
    let mail=document.getElementById(control)
        if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail.value)==false)
            return false
        else{
            return true
        }
}