/* 

 a realizar : 
-capturar valores
 -almacenas valores de alguna forma
 - desenvolver funcionesque realizen los cálculos
 -actualizar segun cambios 
 
 */
const controlGastos = {
    presupuesto: 0,
    gasto:0,
    saldo:0
}

const entradaPresupuesto = document.querySelector('.ingresoDatos__presupuesto input');
const btnPresupuesto = document.querySelector('.ingresoDatos__presupuesto button');

btnPresupuesto.addEventListener('click',capturarValorPresupuesto)

function capturarValorPresupuesto(){
    let valorPresupuesto= Number(entradaPresupuesto.value);
    controlGastos.presupuesto=valorPresupuesto;
    controlGastos.saldo=valorPresupuesto;
    console.log(valorPresupuesto);//ok!

    actualizarMontos();
    revisarSaldo(controlGastos.saldo);
    limpiarPresupuesto();

}

function limpiarPresupuesto(){
    entradaPresupuesto.value=""

}

const entradaNombregasto = document.querySelector('.ingresoDatos__gastos_nombre');
const entradaValorgasto = document.querySelector('.ingresoDatos__gastos_valor');
const btnGastos = document.querySelector('.ingresoDatos__gastos button');


btnGastos.addEventListener('click', capturarValorGastos);

function capturarValorGastos(){
    let nombreGasto= entradaNombregasto.value;
    let valorGasto = Number(entradaValorgasto.value);
    
    controlGastos.gasto += valorGasto;
    controlGastos.saldo -=valorGasto;

    actualizarMontos();
    actualizarGastosInterfaz(nombreGasto,valorGasto);
    console.log(nombreGasto, valorGasto);
   limpiarGastos();
revisarSaldo(controlGastos.saldo);
}

function limpiarGastos(){
    entradaNombregasto.value = '';
    entradaValorgasto.value = '';
}


const presupuestoIngresado = document.querySelector('.caja__presupuesto p');
const gastoIngresado = document.querySelector('.caja__gasto p');
const saldoCaja= document.querySelector('.caja__saldo p')

function actualizarMontos(){
    presupuestoIngresado.innerText = `$ ${controlGastos.presupuesto}`

    gastoIngresado.innerText = `$ ${controlGastos.gasto}`

    saldoCaja.innerText = `$ ${controlGastos.saldo}`
}

const listaGastos = document.querySelector('.salidaDatos__lista');

function actualizarGastosInterfaz(nombreGasto,valorGasto){
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const boton = document.createElement('button');


    h3.innerHTML = nombreGasto
    p.innerText= ` $ ${valorGasto}`
    boton.innerText = 'borrar'
 
  //revisarSaldo(controlGastos.saldo);




        
    //darle funcion borra elemento al clickear boton 

    boton.addEventListener('click',borrarGasto);
    li.dataset.valor = valorGasto;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(boton);

    listaGastos.appendChild(li);
   
}

// funcion para borrar elemento d ela lista 

function borrarGasto(event){
    //console.log("borrar");
    const gastoSeleccionado= event.target.parentNode
    const valorgastoSeleccionado=Number(gastoSeleccionado.dataset.valor)
    controlGastos.gasto-=valorgastoSeleccionado;
     controlGastos.saldo+=valorgastoSeleccionado;


    //eliminar gasto node
    gastoSeleccionado.remove()

    revisarSaldo(controlGastos.saldo)
    actualizarMontos()
}   


const textoparrafo = document.querySelector('.texto-alerta')
function revisarSaldo(saldoDisponible){
    if(saldoDisponible===0){
        //alert ("tu saldo actual es 0 ")
        textoparrafo.innerText='tu saldo actual es 0'
        textoparrafo.style.color='red'
        return false;
    }else if (saldoDisponible<0){
        //alert("no cuentas con saldo a favor ")
        textoparrafo.innerText='Insuficiente'
        textoparrafo.style.color='red'
        return false;
    }else{
        //alert("si posees saldo")
        textoparrafo.innerText=' disponible'
        textoparrafo.style.color='green'
        return true;
    }

}

