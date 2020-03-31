//FASE 1
/*
Creeu una variable int per cada un dels bitllets que existeixen des de 5€ a 500€, 
haureu de crear un altre variable per guardar el preu total del menjar. (1 punt)
Creeu dos arrays, un on guardarem el menú(5 plats) i un altre on guardarem el preu de cada plat. (1 punt)
*/
var billet5 = 5;
var billet10 = 10;
var billet20 = 20;
var billet50 = 50;
var billet100 = 100;
var billet200 = 200;
var billet500 = 500;
var preu = 0;
var plats = new Array(5);
var preus = new Array(5);
var comanda = [0,0,0,0,0];
var opcio = "";
const FI = "fi";


function Main()
{
    //FASE 2
    /*
    Amb un bucle for haurem d’omplir els dos arrays anteriorment creats.
    Afegirem el nom del plat i després el preu. (1 punt)
    Un cop plens els dos arrays haurem de mostrar - los i preguntar que es vol per menjar, 
    guardarem la informació en una List fent servir un bucle while. (1 punt)
    Haurem de preguntar si es vol seguir demanant menjar.Podeu fer servir el sistema(1:Si / 0:No)
    per tant haureu de crear un altre variable int per guardar la informació. (1 punt)
    */
    
    Fase2();
}

function Fase2()
{  
    opcio = "";
    while (opcio != FI)
    {
        imprimir("menu",Menu());
        opcio = prompt("Introdueix una opció ('fi' per finalitzar):");
        opcio = opcio.toLowerCase();
        if (opcio != FI)
        {
            AfegirPlat(opcio);
            imprimir("comanda",Comanda());
        }
        
    }
}

function OmplirMenu()
{
    var test=true; //variable activa durant la fase de test

    if (!test) 
    {
        //FRAGMENT DE CODI PER FER TEST I NO TENIR DE FICAR ELS PLATS CONTINUAMENT
        plats[0] = "Macarrons";
        preus[0] = 10;
        plats[1] = "Paella";
        preus[1] = 15;
        plats[2] = "Hamburguesa";
        preus[2] = 8;
        plats[3] = "Sardinada";
        preus[3] = 12;
        plats[4] = "Amanida";
        preus[4] = 9;
    }
    else 
    {
        for (i = 0; i < 5; i++)
        {
            plats[i]=prompt(("Introdueix el nom del plat d'index " + i + ":"));
            // Aquesta instrucció no contempla l'opcio de que l'usuari introdueixi un valor alfanuméric per no surtirnos del enunciat del exerccii
            preus[i]=parseInt(prompt(("Introdueix el preu del plat d'index " + i + ":")));
        }
    }
}

function AfegirPlat(opcio)
{
    var error = false; 
    var absolut=0;
    absolut = Math.abs(opcio);
    if (isNaN(absolut)) 
    {
        error=true;
    } 
    else
    {
        if (absolut==0 && opcio!="0") 
        {
            error=true;
        }    
        else 
        {
            if (absolut>4) 
            {
                error=true;
            }
        }
    }
    if (!error) 
    {
        comanda[absolut]++;
    } 
    else 
    {
        alert("L'opció introduida no és correcta, torna a intentar-ho");
    }
}

function Comanda()
{
    var html="<b>LA TEVA COMANDA ACTUAL:</b></br>";
    var i = 0;
    var subtotal;
    var total = 0;
    for (i=0;i<5;i++)
    {
        if (comanda[i] > 0) 
        {
            subtotal = comanda[i] * preus[i];
            html+=plats[i] + "(" + comanda[i] + ") * " + preus[i] + " Euros = " + (subtotal) + " Euros</br>";
            total += subtotal;
        }
    }
    html+="<b>TOTAL COMANDA=" + total + " Euros</b></br>";
    return html;
}

function Menu()
{
    var html="<b>EL NOSTRE MENU</b><br/>";
    for (i = 0; i < plats.length; i++)
    {
        html+=i + "- " + plats[i] + "..." + preus[i] + " Euros</br>";
    }
    return html;
}  
function Reset() 
{
    for (i=0;i<comanda.length;i++) 
    {
        comanda[i]=0;
    }
    imprimir('comanda',Comanda());
}

