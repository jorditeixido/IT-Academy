

//FASE 1
var nom=['J', 'o', '4', '%', 'i','F','r','o','i','l','a','i','l','a','n','D','e','T','o','d','o','s','L','o','s','S','a','n','t','o','s'];
let missatge=label("FASE 1");
var guio="";
nom.forEach(lletra => 
{
    missatge+=guio+lletra;
    guio="-";
});
imprimir('fase1',missatge)

//FASE 2

/* 
LLISTES NO DISPONIBLES EN JAVASCRIPT
List<char> name = new List<char>() { 'J', 'o', 'r', 'd', 'i' };
*/
missatge=label("FASE 2");
for (i = 0; i < nom.length; i++)
{
    lletra=nom[i];
    if (esVocal(lletra))
    {
        missatge+=lletra+"="+linia("VOCAL");
    }
    else
    {
        if (esConsonant(lletra))
        {
            missatge+=lletra+"="+linia("CONSONANT");
        }
        else
        {
            if (esNombre(lletra))
            {
                missatge+=lletra+"="+linia("Els noms de persones no contenen números!");
            }
            else 
            {
                missatge+=lletra+"="+linia("Que collons has escrit? ;-)");
            }
        }
    }
}
imprimir('fase2',missatge);

function esVocal(lletra)
{
    lletra=lletra.toLowerCase();
    let vocal=false;
    if (lletra== 'a' || lletra == 'e' || lletra == 'i' || lletra == 'o' || lletra == 'u' || lletra == 'A' || lletra == 'E' || lletra == 'I' || lletra == 'O' || lletra == 'U' || lletra == 'á' || lletra == 'é' || lletra == 'í' || lletra == 'ó' || lletra == 'ú' || lletra == 'à' || lletra == 'è' || lletra == 'ò') 
    {
        vocal=true;
    }
    return vocal;
}
function esConsonant(lletra)
{
    lletra=lletra.toLowerCase();
    let consonant=false;
    if (lletra == 'b' || lletra == 'c' || lletra == 'd' || lletra == 'f' || lletra == 'g' || lletra == 'h' || lletra == 'j' || lletra == 'k' || lletra == 'l' || lletra == 'm' || lletra == 'n' || lletra == 'ñ' || lletra == 'p' || lletra == 'q' || lletra == 'r' || lletra == 's' || lletra == 't' || lletra == 'u' || lletra == 'v' || lletra == 'w' || lletra == 'x' || lletra == 'y' || lletra == 'z') 
    {
        consonant=true;
    }
    return consonant;
}
function esNombre(lletra)
{
    let nombre=false;
    if (lletra == '0' || lletra == '1' || lletra == '2' || lletra == '3' || lletra == '4' || lletra == '5' || lletra == '6' || lletra == '7' || lletra == '8' || lletra == '9') 
    {
        nombre=true;
    }
    return nombre;
}

//FASE 3

var lletres = new Map();
var valor=0;
nom.forEach(lletra => 
{
    if (lletres.has(lletra))
    {
        valor=lletres.get(lletra);
        lletres.set(lletra,valor+1);
    }
    else
    {
        lletres.set(lletra,1);
    }
});
missatge=label("FASE 3");
nom.forEach(lletra =>
{
    missatge+=lletra+" ("+lletres.get(lletra)+") ";
});
imprimir('fase3',missatge);

//FASE 4

var cognom=['T','e','i','x','i','d','ó'];
var nomCognom=new Array();
var i;
nom.forEach(lletra =>
{
    nomCognom[i]=lletra;
    i++;
});
//Afegim un espai
nomCognom[i]=' ';
i++;
cognom.forEach(lletra =>
{
    nomCognom[i]=lletra;
    i++;
});
//Ens desfem de les variables innecessaries (segons l'enunciat del exercici)
nom = null;
cognom = null;

mostrar('fase4','FASE 4',nomCognom);

function mostrar(id,titul,cadena){
    guio="";
    let missatge=label(titul);
    cadena.forEach(lletra => 
    {
        missatge+=guio+lletra;
        guio="-";
    });
    imprimir(id,missatge);    
}
