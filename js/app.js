class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = this.generaDNI();
    this.sexo = sexo.toUpperCase() === "H" ? "Hombre" : "Mujer";
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
}


const enviarMostrarDatos = () => {
    const formulario = document.querySelector("form");
    const nombre = formulario.querySelector("#inputNombre").value;
    const edad = formulario.querySelector("#inputEdad").value;
    const nac = formulario.querySelector("#inputNac").value;
    const peso = formulario.querySelector("#inputPeso").value;
    const altura = formulario.querySelector("#inputEstatura").value;
    const sex = formulario.querySelector("#inputSexo").value;
    if(nombre != "" && edad != "" && nac != "" && peso != "" && altura != "" && sex != "")
      mostrar();
    }

const mostrar = () => {
  const contenedor = document.querySelector("#cont1");
  const contenedor2 = document.querySelector("#cont2");
  const texto123 = document.createElement('p');
  texto123.type = "hidden";
  contenedor2.appendChild(texto123);
  let btnEnviar = document.getElementById("btnEnviar");
  btnEnviar.disabled = true;
  const titulo = document.createElement("h4");
  titulo.innerHTML = "Selecciona una opción";
  const boton1 = document.createElement("button");
  boton1.innerHTML = "Mostrar Generación";
  boton1.id = "btn1";
  const boton2 = document.createElement("button");
  boton2.innerHTML = "Es Mayor de edad";
  boton2.id = "btn2";
  const boton3 = document.createElement("button");
  boton3.innerHTML = "Mostrar Datos";
  boton3.id = "btn3";
  const div= document.createElement('div');
  div.className="text-center";
  div.appendChild(titulo);
  div.appendChild(boton1);
  div.appendChild(boton2);
  div.appendChild(boton3);
  contenedor.appendChild(div);
  boton1.addEventListener("click", () => {
    mostrarGeneracion();
  });
  boton2.addEventListener("click", () => {
    mayorEdad();
  });
  boton3.addEventListener("click", () => {
    mostrarDatosIngresados();
  });

};
const mostrarDatosIngresados = () => {
    const formulario = document.querySelector("form");
    const contenedor2 = document.querySelector("#cont2");
    const datosIngresados = document.createElement("div");
    const nombre = formulario.querySelector("#inputNombre").value;
    const dni = Math.floor(Math.random() * 90000000) + 10000000;
    const edad = formulario.querySelector("#inputEdad").value;
    const nac = formulario.querySelector("#inputNac").value;
    const peso = formulario.querySelector("#inputPeso").value;
    const altura = formulario.querySelector("#inputEstatura").value;
    const sex = formulario.querySelector("#inputSexo").value;
    datosIngresados.innerHTML = `
      <p>Nombre: ${nombre}</p>
      <p>DNI: ${dni}</p>
      <p>Edad: ${edad}</p>
      <p>Fecha de Nacimiento: ${nac}</p>
      <p>Peso: ${peso}</p>
      <p>Altura: ${altura}</p>
      <p>Sexo: ${sex}</p>
    `;
    const ultimoChild = contenedor2.lastElementChild;
    contenedor2.removeChild(ultimoChild);
    contenedor2.appendChild(datosIngresados);
    let btn1 = document.getElementById("btn1");
    btn1.disabled = false;
    let btn2 = document.getElementById("btn2");
    btn2.disabled = false;
    let btn3 = document.getElementById("btn3");
    btn3.disabled = true;


  };
const mayorEdad = () => {
  const contenedor2 = document.querySelector("#cont2");
    let btn1 = document.getElementById("btn1");
    btn1.disabled = false;
    let btn2 = document.getElementById("btn2");
    btn2.disabled = true;
    let btn3 = document.getElementById("btn3");
    btn3.disabled = false;
    
    const ultimoChild = contenedor2.lastElementChild;
    contenedor2.removeChild(ultimoChild);

    const edad = document.querySelector("#inputEdad").value;
   
    if (parseInt(edad) >= 18) { 
      const mayoria = document.createElement("p");
      mayoria.innerHTML = "Es mayor de edad";
      contenedor2.appendChild(mayoria);
    } else {
      const minoria = document.createElement("p");
      minoria.innerHTML = "Es menor de edad";
      contenedor2.appendChild(minoria);
    }
  };

  const generacionCorrespondiente = () => {
    const generacion = parseInt(document.querySelector("#inputNac").value);
    if (generacion >= 1930 && generacion <= 1948) {
      return "Pertenece a la generación Silent Generation. Rasgo característico: Austeridad.";
    } else if (generacion >= 1949 && generacion <= 1968) {
      return "Pertenece a la generación Baby Boom. Rasgo característico: Ambición.";
    } else if (generacion >= 1969 && generacion <= 1980) {
      return "Pertenece a la Generación X. Rasgo característico: Obsesión por el éxito.";
    } else if (generacion >= 1981 && generacion <= 1993) {
      return "Pertenece a la generación Y Millennials. Rasgo característico: Frustración.";
    } else if (generacion >= 1994 && generacion <= 2010) {
      return "Pertenece a la Generación Z. Rasgo característico: Irreverencia.";
    } else if (generacion >= 2013) {
      return "Generación Alpha: La primera generación completamente digital";
    } else {
      return "No se pudo determinar la generación";
    }
  };
  const mostrarGeneracion = () => {
    const contenedor2 = document.querySelector("#cont2");
    const generacionTexto = generacionCorrespondiente();
   console.log("elemento: " + generacionTexto);
    const generacionParrafo = document.createElement("p");
    generacionParrafo.textContent = generacionTexto;
    let btn1 = document.getElementById("btn1");
    btn1.disabled = true;
    let btn2 = document.getElementById("btn2");
    btn2.disabled = false;
    let btn3 = document.getElementById("btn3");
    btn3.disabled = false;
    const ultimoChild = contenedor2.lastElementChild;
    contenedor2.removeChild(ultimoChild);
    contenedor2.appendChild(generacionParrafo);
  };
