function CreaPerro(apod, col, ed)
{
    let ojbectoP= new Object();
    ojbectoP.Apodo=apod;
    ojbectoP.Color=col;
    ojbectoP.Edad=ed;
    ojbectoP.ladrar= function()
    {
        return "Gua Gua Gua GRRR"
    }
    ojbectoP.MostrarDatos = function()
    {
        return ojbectoP.Apodo + "<--->" + ojbectoP.Color + "<--->" + ojbectoP.Edad;
    }
    return ojbectoP;
}


/*mensajes*/

function mensaje(cadena)
{
    var t = document.getElementById("texto1");
    t.value=cadena;
}

function men(cadena)
{
    var l = document.getElementById("contenido");
    l.value=cadena;
}

function mens(cadena)
{
    var p = document.getElementById("contenido1");
    p.value=cadena;
}

/*agregar arreglo*/

function Agragararreglo(apod, col, ed)
{
    if (posi <= limite)
    {
        arreglo[posi] = CreaPerro(apod,col,ed);
        posi++;
        mensaje("se inserto objeto al arreglo");
    }
    else
    {
        mensaje("ya no caben mas datos")
    }
}


function clicAgregarArreglo()
{
    let refta;
    let reftc;
    let refte;

    refta = document.getElementById("apodo");
    reftc = document.getElementById("color");
    refte = document.getElementById("edad");
    Agragararreglo(refta.value,reftc.value,refte.value);
    refta.value="";
    reftc.value="";
    refte.value="";
}
//mostar arreglo

function mostrarPerros(selectlista)
{
    hLimpiarselect(selectlista);
    let c = 0;
    for (c=0; c<= posi -1; c++)
    {
        {
            let opt = document.createElement("option");
            opt.text = arreglo[c].MostrarDatos();
            selectlista.appendChild(opt);
        }
    }
}


function clicmostarPerros()
{
    let reflista = document.getElementById("lista");
    mostrarPerros(reflista);
}


function hLimpiarselect(lista)
{
    while(lista.options.length > 0)
    {
    lista.options.remove(0);
    }
}


//buscar arreglo por Apodo

function buscarPerro(apodobuscar)
{
    let piedra=-10;
    let c=0;
    for(c=0; c<=posi -1; c++)
    {
        if(apodobuscar==arreglo[c].Apodo)
        {
            piedra=c;
        }
    }
    return piedra;
}



function clicBuscarA()
{
    let refta = document.getElementById("apodo");
    let posicionencontrado;
    let v=0;
    posicionencontrado= buscarPerro(refta.value);
    if(posicionencontrado>=0)
    {
        men("se encontro en la posicion " + posicionencontrado);
        for(v=posicionencontrado+1; v<= posi-1; v++)
        {
            arreglo[v].edad+=1;
        }
    }
    else
    {
        men("no existe el elemento "+ refta.value);
    }
}
////buscar para ingresar despues de
/*function buscarPerro3(apodobuscar1)
{
    let pie=-10;
    let c=0;
    for(c=0; c<=posi -1; c++)
    {
        if(apodobuscar1==arreglo[c].Apodo)
        {
            pie=c;
        }
    }
    return pie;
}
function clicBuscarA1()
{
    let refta = document.getElementById("agregarO");
    let posicionencontrado;
    let v=0;
    posicionencontrado= buscarPerro3(refta.value);
    if(posicionencontrado>=0)
    {
        men("se encontro en la posicion " + posicionencontrado);
        for(v=posicionencontrado+1; v<= posi-1; v++)
        {
            arreglo[v].edad+=1;
        }
    }
    else
    {
        men("no existe el elemento "+ refta.value);
    }
}*/
//buscar por color

function buscarPerro1(colbuscar)
{
    let piedrita=-11;
    let z=0;
    for(z=0; z<=posi -1; z++)
    {
        if(colbuscar==arreglo[z].Color)
        {
            piedrita=z;
        }
        if(piedrita>=0)
        {
            mens("se encontro en la posicion " + piedrita);
        }
        else
        {
            mens("no existe el elemento "+ colbuscar);
        }
    }
}


function clicBuscarC()
{
    let reftc = document.getElementById("color");
    buscarPerro1(reftc.value);
}

//eliminar por apodo
function EliminarApodo(apod)
{
    let  piedra = 0;
    piedra = buscarPerro(apod)
    let c=0;
    if (piedra>=0)
    {
        for(c=piedra+1; c<=posi-1;c++)
        {
            arreglo[c-1]= arreglo[c];
        }
        posi--;
        mensaje("se ha eliminado el perro:" + apod);
        let lista = document.getElementById("lista")
        lista.options.remove(0)
    }
    else
    {
        mensaje("No existe ese perro");
    }
}

function clicEliminar()
{
   // let refta = document.getElementById("apodo");
    //EliminarApodo(refta.value);
    let refta;
    let reftc;
    let refte;

    refta = document.getElementById("apodo");
    reftc = document.getElementById("color");
    refte = document.getElementById("edad");

    
    EliminarApodo(refta.value,reftc.value,refte.value);
    
}

//insertar al inicio

function AgregarInicio(apod,col,ed)
{
    let p=0;
    let dulce=0;
    if (posi<=limite)
    {
        dulce=arreglo[0];
        for (p=posi; p>=0 ; p--)
        {
            arreglo[p] = arreglo[p-1];
        }
        arreglo[0]=CreaPerro(apod,col,ed);
        posi++;
        mensaje("el perro se ha insertado al inicio");
    }
    else
    {   
        Mensajes("no se inserto arreglo");
    }
}

function clicAgregarInicio()
{   
    var refta= document.getElementById("apodo");
    var reftc= document.getElementById("color");
    var refte= document.getElementById("edad");
    AgregarInicio(refta.value, reftc.value, refte.value);

    refta.value ="";
    reftc.value ="";
    refte.value ="";


}
//insertar nuevo arreglo

function AgregarOtro(apod,col,ed)
{
    let  punto = 0;
    punto = buscarPerro(apod)
    let c=0;
    //var fre = document.getElementById("apodo");
    //fre.value="agregarO";
    if (punto>=0)
    {
        //punto=arreglo[apod];
        for(c=posi-1; c>=punto+1;c--)
        {
            arreglo[c+1]= arreglo[c];
        }
        arreglo[punto+1]=CreaPerro(apod,col,ed);
        posi++;
        mensaje("se ha insertado nuevo perro"); 
    }
    else
    {
        mensaje("No se inserto nada");
    }
}

function clicAgregarOtro()
{
    var refta= document.getElementById("apodo");
    var reftc= document.getElementById("color");
    var refte= document.getElementById("edad");
    AgregarOtro(refta.value, reftc.value, refte.value);

    refta.value ="";
    reftc.value ="";
    refte.value ="";
}


/*mail*/
//var ob1;

var arreglo = new Array();
let posi=0;
let limite=9;