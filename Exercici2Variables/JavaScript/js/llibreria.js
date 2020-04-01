const BR="<br/>";
const BRR="<br/><br/>";

function llegirInput(input){
    return document.getElementById(input).value;
}
function imprimir(id,html){
    document.getElementById(id).innerHTML=html;
}
function label(text){
    let label=`<label><b>${text}:</b></label>${BR}`;
    return label;
}
function linia(text){
    return text+BR;
}
function liniaR(text){
    return linia(text)+BR;
}