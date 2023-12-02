class matematica{
encuentra(){
    let num1=3, mun2=7,resp
    resp = 2*num1+num2-num1 % 3
    console.log (`la respuesta de 2*${num1}+${num2}"-"${num1}%3=${resp}`)

}

calcula(){
    let num1=10, mun2=4,resp
    resp= num1 * num2 + 3
	resp =resp % num1 + num2
    console.log (`la respuesta de ${num1} * ${num2} +3 % ${num1} + ${num2} = ${resp}`)
}

determina(){
    let num1=6, mun2=2,resp
    resp = num1 - num2 + 2 * num1 % num2
    console.log(`la respuesta de ${num1} - ${num2 }+2 * ${num1} % ${num2} = ${resp}`)
}


encuentra2(){
    let num1=8, mun2=5,resp
    resp=2*num2+num1/2+4*num2 % num1
    console.log(`el resultado de 2* ${num2} + ${num1} /2+4* ${num2} % ${num1} = ${resp}`)
}


calcula2(){
    let num1=12, mun2=9,resp
    resp = num2-num1+3*num1 % num2
    console.log(`el resultado de ${num2} - ${num1} +3* ${num1} % ${num2} = ${resp}`)
}

ejercicio(){
    let resp=(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
	console.log(`(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3= ${resp}`)
}

ejercicio2(){
    let resp = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)
	console.log( `El resultado de la expresión 2 *(4 - 10 + 8)/2* 36 *(1/2) es: ${resp}`)
}

ejercicio3(){
    let resp = 260 / 12 + 54 % 3 - 85 % 7
	console.log(`El resultado de la expresión 260 / 12 + 54 % 3 - 85 % 7 es: ${resp}`)
}

ejercicio4(){
   let resp = ((8 > 2) |  (932 < 23) ) && 4 == 2
   console.log(`((8 > 2) | | (932 < 23) ) && 4 == 2 = ${resp}`)

}

ejercicio5(){


}

SumaDeNumeros(){
    let num1,num2,resp
    num1 = parseint(prompt("escriba un numero"))
    num2 = parseint(prompt("escriba otro numero"))
    resp= num1+ num2
    console.log( `suma de ${num1} + ${num2} = ${resp}`)
}

triangulo(){
    let num1,num2,resp
    num1 = parseint(prompt("ingrese la base"))
    num2 = parseint(prompt("ingrese la altura"))
    resp= num1*num2/2
    console.log(`la base es ${num1} y la altura es ${num2}`)
}


ParoImpar(){
   let num1, num2
   num1 = parseint(prompt("ingrese un numero"))
   num2=num % 2
   if (num2 ==0) {
    console.log(`el numero ${num1} es par`)

   }
   else{
    console.log(`el numero ${num1} no es par`)
   }
}

calcutadora(){
    let dig, num,num2,resp
    console.log(`1) suma `)
    console.log(`2) resta`)
    console.log(`3) multiplicacion `)
    console.log(`4) divicion `)
    dig = parseint(prompt( "imprese una opcion"))
    switch (dig) {
        case "1":
            let n,m,a
            n  = parseint(prompt("ingrese un numero"))
            m  = parseint(prompt("ingrese otro numero"))
            a = n + m
            console.log(`la suma de ${n} + ${m} = ${a}`)
            break;
        case "2": 
       
        num  = parseint(prompt("ingrese un numero"))
        num2  = parseint(prompt("ingrese otro numero"))
        resp = num - num2
        console.log(`la resta de ${num} - ${num2} = ${resp}`)

        break;
        case "3":
           
            num  = parseint(prompt("ingrese un numero"))
            num2  = parseint(prompt("ingrese otro numero"))
            resp = num * num2
            console.log(`la multiplicacion de ${num} * ${num2} = ${resp}`)
        
        break;
        case "4":
           
            num  = parseint(prompt("ingrese un numero"))
            num2  = parseint(prompt("ingrese otro numero"))
            resp = num / num2
            console.log(`la divicion de ${num} / ${num2} = ${resp}`)
            break;

        default:
            console.log(`esta opcion no es correcta`)
            break;
    }
}


TablaMultiplicar(){
    let  num1,n=1, resp 
    num1 = parseInt(prompt("ingrese un numero de la tabla de multiplicar"))
    while (n<=10) {
        resp=n*num;
        console.log (`${num} * ${n} = ${resp}`);
        n++;
    }

}

LeerPalabra(){
    let  pal1,pal2, resp
    pal1 = parseInt(prompt("ingrese una palabra"))
    pal2 = parseInt(prompt("ingrese otra palabra "))
    resp = pal1+" "+ pal2
    console.log(` La concatenación de las dos palabras es: ${resp}`)
}

MayorDeTres(){
    let num1,num2,num3,resp
    num1 = parseint(prompt("ingrese un numero"))
    num2 = parseint(prompt("ingrese otro numero"))
    num3 = parseint(prompt("ingrese otro numero"))
    if (num1> num2){
        resp = num1
    }
    else{
        resp = num2
    }
    if (resp > num3){
        console.log(`el numero mayor es : ${resp}`)
    }
    else {
        console.log(`el numero mayor es : ${num3}`)
    }
}

EdadMinima(){
    let edad
    edad = parseint(prompt("ingrese su edad"))
    if (edad >= 18){
        console.log(`la edad de ${edad} es acta para votar `)

    }
    else {
        console.log(`la edad de ${edad} no es acta para votar`)
    }
}

CalculadoraBMI(){
    let peso,altura,bmi
    console.log(`Calculadora de BMI (Índice de Masa Corporal)`)
    peso = parseInt(prompt(`Ingrese su peso en kilogramos:`))
    altura = parseInt(prompt(`Ingrese su altura en metros:`))
    bmi = peso / (altura * altura)
    if (bmi < 18.5){
        console.log(`bajo en pso `)
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log(`peso saludable `)

    }else if ( bmi >= 25.0 && bmi < 29.9){
        console.log(`sobre peso `)

    }
    else if ( bmi >= 30.0){
        console.log(`peso sobre obesidad `)
    }
}

positivoOnegativo(){
    let num,resp
    num = parseint(prompt(`digite un numero`))
    if (num> 0 ){
        console.log(`el numero ${num} es positivo`)

    }
    else {
        console.log(`el numero ${num} es negativo`)
    }
}

AñoBisiesto(){
    let num
    num = parseInt(prompt(`ingrese su año de nacimiento`))
    if ( (num % 4 == 0) && ((num % 100 !== 0) || (num % 400 == 0))){
        console.log(`el año ${num} es bisiesto`)

    }
    else {
        console.log (`el año ${num} no es bisiesto`)
    }
}

signozodiacal(){
    let mes,dia 
    let signo
    mes = parseint(prompt(`iprese su mes de nacimiento (1-12)`))
    dia = parseint(prompt(`ingrese su dia de naciomineto `))

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)){
        signo = "ARIES";
    }
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)){
        signo = "TAURO";
    }
    else if ( (mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)){
        signo = "GENESIS";
    }
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)){
        singo = "CANCER";
    }
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)){
        singo = "LEO";
    }
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)){
        signo = "VIRGO";
    }
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)){
        signo = "LIBRA";
    
    }
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)){
        signo = "ESCORPIO";
    }
    else if ( (mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)){
        signo = "SAGITARIO";
    }
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)){
        signo = "CAPRICORNIO";
    }
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)){
        signo = "ACUARIO";

    }
    else{
        signo = "PISCIS";
    }
    console.log (`Su mes ${mes} y dia ${dia} le corresponde al signo sodiacal de ${signo}`);

}

Quicena(){
    let num
    num= parseint(prompt(`ingrese un dia del mes`))
    if ( num >= 1 && num <= 15){
        console.log(`el dia ${num} pertenece a la primera quincena`)
    }
    else if(num >= 16 && num <= 31){
        console.log(`el dia ${num} pertenece a la segunda quincena`)
    }
    else{
        console.log(`el dia ${num} este dia no pertenece a ni un mes`)
    }
}

 DiaDeLaSemana(){
    let num
    num = parseInt(prompt(`ingrese del 1 al 7 segun los dias de la semana`))
    switch (num) {
        case 1:
            console.log(`este numero ${num} es el dia domingo`);
         break;
         case 2:
            console.log(`este numero ${num} es el dia lunes`);
         break;
         case 3:
            console.log(`este numero ${num} es el dia martes `);
         break;
        case 4:
            console.log(`este numero ${num} es el dia miercoles`);
         break;
        case 5:
            console.log(`este numero ${num} es el dia jueves`);
         break;
        case 6:
            console.log(`este numero ${num} es el dia viernes `);
         break;
        case 7:
            console.log(`este numero ${num} es el dia sabado`);
         break;
           
        default:
            console.log(`este dia no pertenese a la semana `);
            break;
    }
 }


frasesiguales(){
    let frase,frase2;
    frase = parseInt(prompt(`ingrese una frase`))
    frase2 = parseInt(prompt(`ingreseotra frase`))
    if (frase === frase2){
        console.log(`esta frase ${frase} se lee igual`)

    }
    else {
        console.log(`esta frase ${frase} no se lee igual a ${frase2}`)
    }
}

CalculadoraDescuento(){
    let precio,descuento,total;
    precio = parseint(prompt(`ingrese el precio del producto`))
    descuento = parseint(prompt(`ingrese el porcentaje de descuento`))
    if (descuento >= 0 && descuento <= 100){
        total = precio - (precio * (descuento / 100))
        console.log(`el precio total con descuento es: ${total}`)
    }
    else {
        console.log(`el procentaje del descuento no es valido`)
    }
}

CalculadoraImpuesto(){
    let total, porcentaje,impuestos,pagar;
    total = parseint(prompt(`ingrese el total de la factura `))
    porcentaje = parseint(prompt(`ingrese el porcentaje de impuesto aplicado`))
    impuestos = (total * porcentaje) / 100
    pagar = total + impuestos
    console.log(`El monto total a pagar, incluyendo impuestos, es: ${pagar}`)
}
calculadoraSueldo(){
    let salario, porcentaje, nuevo;
    salarios = parseint(prompt(`ingrese su salario actual`))
    percentaje = parseint(prompt(`ingrese el porcentaje de aumento`))
    aumento <- salario * (porcentaje / 100)
    nuevo <- salario + aumento
    console.log(`Tu nuevo salario después del aumento será: ${nuevo}`)

}

calculadoramulti(){
    let precio,descuento,x,total,subtotal,cantidad
    producto = parseint(prompt(`ingrese el precio del producto`))
    cantidad = parseint(prompt(`ingrese cantidad del producto`))
    descuento = 0
    x = producto * cantidad
    if (x >100){
        descuento= 0.10
        total = x * descuento
    }
    console.log(`el precio es:${x}`)
    console.log(`el descuento es:${descuento}`)
    console.log(`el total es:${x-descuento}`)


}


impuestoCalculadora(){
    let salario,impuesto
    salario = parseint(prompt(`ingrese su salario anual`))
    if (salario<= 15000){
        impuesto = salario * 0.10
    }
    else if(salario<=30000){
        impuesto = 15000 * 0.10 + (salario - 15000) * 0.15

    }
    else if ( salario <= 45000){
        impuesto = 15000 * 0.10 + 15000 * 0.15 + (salario - 30000) * 0.20
    }
    else {
        impuesto = 15000 * 0.10 + 15000 * 0.15 + 15000 * 0.20 + (salario - 45000) * 0.25
    }
    console.log(`el impuesto sobre la renta es: ${impuesto}`)
}

escuentoAntiguedad(){
   let años, salario, bono
   años = parseInt(prompt(`ingrese cuantos años a trabajado en la empresa `))
   salario = parseInt(prompt(`ingrese su salario acutual`))
   if (años >5){
    bono = salario * 0.05
   }
   else{
    bono =0
   }
   console.log(`su bono de antiguedad es: ${bono}`)
}
calculadoraenvio(){
    let d
    d = parseint(prompt(`ingrese la distacion de su domicilio en km`))
    if (d <50 ){
        console.log(`el costo del envio es de 10$`)

    }
    else {
        console.log(`el precio del envioes de 20$`)

    }

}
elcuentoporcliento(){
    let total_compras_anuales, descuento
    total_compras_anuales= parseint(prompt(`ingrese el total de sus compras mensuales durante un año:`))
    if (total_compras_anuales>500){
        descuento = total_compras_anuales *0.10
    
    }
    else {
    descuento =0
    }
    console.log(`el descuento aplicable en su proxima compra es de $${descuento}`)
}


volumendecompra(){

    let producto, precio, descuento, x, z;
    producto = parseFloat(prompt("Ingrese cantidad de producto:"));

    precio = parseFloat(prompt("Ingrese precio del producto:"));
   
    if (producto >= 10 && producto <= 50) {
       descuento = 0.5;
    } else if (producto >= 51 && producto <= 100) {
    descuento = 0.1;
    } else if (producto > 100) {
    descuento = 0.15;
    }

    x = producto * precio;
    z = x - (x * descuento);


    console.log("Costo total: " + x);
    console.log("Costo con descuento: " + z);

}

costodeservicio(){

    let horas, precio, descuento, x, z;
    
    horas = parseInt(prompt("Ingrese horas trabajadas:"));
    descuento = 0;
    precio = parseFloat(prompt("Ingrese precio del servicio por horas:"));
    if (horas > 10) {
        descuento = 0.20;
    }

    x = horas * precio;
    z = x - (x * descuento);


    console.log("El subtotal es: " + x);
    console.log("El descuento es: " + descuento * 100 + "%");
    console.log("El total es: " + z);

}

numerospares(){
    let n;
    n = 1
    for (let n ; n < 50 ; 0++) {
        console.log(n)
       n = n + 2
        
    }
}

41(){
    let suma = 0;
    
    for (let i = 2; i <= 50; i += 2) {
        suma += i;
    }
    
    console.log(`La suma de los números pares del 1 al 50 es:  ${suma}`);
    }
    42(){
    // Solicitar al usuario que ingrese un número
    let numero = parseInt(prompt(`Ingrese un número para ver su tabla de multiplicar:`));
    
    // Verificar si se ingresó un número válido
    if (!isNaN(numero)) {
        // Utilizar un bucle for para imprimir la tabla de multiplicar
        for (let i = 1; i <= 12; i++) {
            let resultado = numero * i;
            console.log(numero + " x " + i + " = " + resultado);
        }
    } else {
        console.log(`Por favor, ingrese un número válido.`);
    }
    }
    43(){
    
    // Solicitar al usuario que ingrese una palabra
    let palabra = prompt(`Ingrese una palabra para contar el número de vocales`).toLowerCase();
    
    // Inicializar el contador de vocales
    let contadorVocales = 0;
    
    // Índice para recorrer la palabra
    let indice = 0;
    
    // Bucle while para contar las vocales
    while (indice < palabra.length) {
        let letra = palabra[indice];
    
        // Verificar si la letra es una vocal
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contadorVocales++;
        }
    
        // Incrementar el índice
        indice++;
    }
    
    // Mostrar el resultado
    console.log(`El número de vocales en la palabra es:  ${contadorVocales}`);
    }
    44(){
    
    // Solicitar al usuario que ingrese una palabra
    let palabra = prompt("Ingrese una palabra para contar el número de dígitos:");
    
    // Inicializar el contador de dígitos
    let contadorDigitos = 0;
    
    // Bucle for para contar los dígitos
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i];
    
        // Verificar si el caracter es un dígito
        if (!isNaN(caracter)) {
            contadorDigitos++;
        }
    }
    
    // Mostrar el resultado
    console.log("El número de dígitos en la palabra es: ${contadorDigitos}");
    }
    45(){
    
    // Generar un número aleatorio entre 1 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    // Inicializar el número de intentos
    let intentos = 0;
    
    // Bucle while para adivinar el número
    let adivinanzaCorrecta = false;
    
    while (!adivinanzaCorrecta) {
        // Solicitar al usuario que ingrese un número
        let intentoUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    
        // Verificar si el intento es válido
        if (!isNaN(intentoUsuario));
    }
    }
    46(){
    
    // Solicitar al usuario que ingrese una palabra
    let palabra = prompt("Ingrese una palabra para contar el número de letras del alfabeto (a..z):").toLowerCase();
    
    // Inicializar el contador de letras del alfabeto
    let contadorLetras = 0;
    
    // Bucle for para contar las letras del alfabeto
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i];
    
        // Verificar si el caracter es una letra del alfabeto
        if (caracter >= 'a' && caracter <= 'z') {
            contadorLetras++;
        }
    }
    
    // Mostrar el resultado
    console.log(`El número de letras del alfabeto en la palabra es: ${contadorLetras}`);
    }


    47(){

    // Inicializar la suma y el número actual
    let sumaImpares = 0;
    let numeroActual = 1;
    
    // Bucle while para calcular la suma de los números impares
    while (numeroActual <= 100) {
        sumaImpares += numeroActual;
        numeroActual += 2; // Avanzar al siguiente número impar
    }
    
    // Mostrar el resultado
    console.log(`La suma de los números impares del 1 al 100 es: ${sumaImpares}`);
}
    48(){
    
    // Solicitar al usuario que ingrese una palabra
    let palabra = prompt("Ingrese una palabra:");
    
    // Calcular la longitud (cantidad de caracteres) de la palabra
    let cantidadCaracteres = palabra.length;
    
    // Mostrar el resultado
    console.log(`La palabra  ${palabra} tiene ${cantidadCaracteres} caracteres.`);
    }
    49(){
    
    // Inicializar la suma
    let suma = 0;
    
    // Solicitar al usuario que ingrese números
    let numero = parseInt(prompt("Ingrese un número entero positivo (ingrese un número negativo para finalizar):"));
    
    // Bucle while para calcular la suma
    while (numero >= 0) {
        suma += numero;
        numero = parseInt(prompt("Ingrese otro número entero positivo (ingrese un número negativo para finalizar):"));
    }
    
    // Mostrar el resultado
    console.log("La suma de los números ingresados es: " + suma);
}
    50(){
    
    // Solicitar al usuario que ingrese un número entero positivo
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));
    
    // Verificar si el número ingresado es válido
    if (!isNaN(numero) && numero > 0) {
        // Inicializar el contador
        let contador = numero;
    
        // Bucle while para mostrar la cuenta regresiva
        while (contador >= 1) {
            console.log(contador);
            contador--;
        }
    } else {
        console.log("Por favor, ingrese un número entero positivo válido.");
    }
}
    51(){
    
    // Crear un arreglo de números enteros
    let numeros = [2, 5, 8, 10, 15];
    
    // Inicializar la suma
    let suma = 0;
    
    // Bucle for para sumar los elementos del arreglo
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    // Mostrar el resultado
    console.log(`La suma de los elementos del arreglo es:  ${suma}`);
    
    }

    52(){

    // Crear un arreglo de calificaciones
    let calificaciones = [85.5, 90.0, 92.5, 88.0, 95.5];
    
    // Inicializar la suma
    let suma = 0;
    
    // Bucle for para sumar las calificaciones
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    
    // Calcular el promedio
    let promedio = suma / calificaciones.length;
    
    // Mostrar el resultado
    console.log("El promedio de las calificaciones es: " + promedio.toFixed(2));
}
    53(){
    
    // Crear un arreglo de números enteros
    let numeros = [15, 8, 22, 10, 5, 18];
    
    // Inicializar las variables para el valor máximo y mínimo
    let maximo = numeros[0];
    let minimo = numeros[0];
    
    // Bucle for para encontrar el valor máximo y mínimo
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    
    // Mostrar los resultados
    console.log("El valor máximo en el arreglo es: " + maximo);
    console.log("El valor mínimo en el arreglo es: " + minimo);
}
    54(){
    
    // Crear un arreglo de números enteros
    let numeros = [15, 8, 22, 10, 5, 18];
    
    // Solicitar al usuario que ingrese un número
    let numeroBuscado = parseInt(prompt("Ingrese un número para verificar si está en el arreglo:"));
    
    // Verificar si el número está presente en el arreglo
    let encontrado = false;
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeroBuscado) {
            encontrado = true;
            break;
        }
    }

    // Mostrar el resultado
    if (encontrado) {
        console.log("El número " + numeroBuscado + " está presente en el arreglo.");
    } else {
        console.log("El número " + numeroBuscado + " no está presente en el arreglo.");
    }
}
    55(){
    
    // Crear un arreglo de números enteros
    let numeros = [15, 8, 22, 10, 5, 18];
    
    // Filtrar elementos pares
    let numerosPares = numeros.filter(numero => numero % 2 === 0);
    
    // Obtener la cantidad de números pares
    let cantidadPares = numerosPares.length;
    
    // Mostrar el resultado
    console.log("El número de elementos pares en el arreglo es: " + cantidadPares);
    }
    56(){
    
    let arreglo = [1, 2, 3];
    let copiaArreglo = [...arreglo]; // Crear una copia del arreglo
    let arregloInvertido = copiaArreglo.reverse();
    
    console.log("Arreglo original: " + arreglo);
    console.log("Arreglo invertido: " + arregloInvertido);
    
    }
    57(){
    
    // Crear un arreglo
    let arreglo = [5, 8, 10, 8, 15, 8, 20];
    
    // Solicitar al usuario que ingrese un valor
    let valorBuscado = parseInt(prompt("Ingrese un valor para encontrar su índice en el arreglo:"));
    
    // Encontrar los índices del valor
    let indices = [];
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorBuscado) {
            indices.push(i);
        }
    }
    
    // Mostrar el resultado
    if (indices.length > 0) {
        console.log("El valor " + valorBuscado + " aparece en el/los índice(s): " + indices.join(", "));
    } else {
        console.log("El valor " + valorBuscado + " no se encuentra en el arreglo.");
    }
}
    58(){
    
    // Definir una función de saludo sin parámetros
    function saludar() {
        console.log("¡Hola! Bienvenido/a.");
    }
    
    // Llamar a la función
    saludar();
    
    59()
    
    // Definir una función para sumar dos números
    function sumarDosNumeros(numero1, numero2) {
        let suma = numero1 + numero2;
        console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
    }
    
    // Llamar a la función con argumentos
    sumarDosNumeros(5, 7);
    sumarDosNumeros(10, 20);
}
    60(){
    
    // Definir una función para multiplicar dos números
    function multiplicarDosNumeros(numero1, numero2) {
        let producto = numero1 * numero2;
        return producto;
    }
    
    // Llamar a la función con argumentos y almacenar el resultado
    let resultado = multiplicarDosNumeros(5, 7);
    
    // Mostrar el resultado
    console.log(`El resultado de la multiplicación es:  ${resultado}`);
}
    61(){
    
    // Definir una función para verificar si un número es par o impar
    function esParOImpar(numero) {
        if (numero % 2 === 0) {
            console.log(`${numero} es un número par.`);
        } else {
            console.log(`${numero}  es un número impar.`);
        }
    }
    
    // Llamar a la función con argumentos
    esParOImpar(4);
    esParOImpar(7);
}
    62(){
    
    // Definir una función para calcular el área de un rectángulo
    function calcularAreaRectangulo(base, altura) {
        let area = base * altura;
        return area;
    }
    
    // Llamar a la función con argumentos y almacenar el resultado
    let areaRectangulo = calcularAreaRectangulo(5, 10);
    
    // Mostrar el resultado
    console.log(`El área del rectángulo es:  ${areaRectangulo}`);
}
    63(){
    
    // Definir una función para imprimir tu nombre
    function imprimirNombre() {
        console.log("Tu Nombre"); // Reemplaza "Tu Nombre" con tu nombre real
    }
    
    // Llamar a la función
    imprimirNombre();
}
    64(){
    
    // Definir una función para convertir grados Celsius a Fahrenheit
    function celsiusToFahrenheit(celsius) {
        let fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }
    
    // Llamar a la función con un valor en grados Celsius y almacenar el resultado
    let temperaturaEnCelsius = 25;
    let temperaturaEnFahrenheit = celsiusToFahrenheit(temperaturaEnCelsius);
    
    // Mostrar el resultado
    console.log(temperaturaEnCelsius + " grados Celsius son " + temperaturaEnFahrenheit + " grados Fahrenheit.");
}
    65(){
    
    // Definir una función para contar un carácter en una frase
    function contarCaracter(frase, caracter) {
        let contador = 0;
    
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] === caracter) {
                contador++;
            }
        }
    
        return contador;
    }
    
    // Llamar a la función con argumentos y almacenar el resultado
    let fraseEjemplo = "Hola, ¿cómo estás?";
    let caracterEjemplo = "o";
    let cantidadDeVeces = contarCaracter(fraseEjemplo, caracterEjemplo);
    
    // Mostrar el resultado
    console.log("El carácter '" + caracterEjemplo + "' aparece " + cantidadDeVeces + " veces en la frase.");
}
    66(){
    
    // Definir una función para imprimir números del 1 al 10
    function imprimirNumeros() {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }
    
    // Llamar a la función
    imprimirNumeros();
}
    67(){
    
    // Definir una función para sumar una lista de números
    function sumarListaNumeros(numeros) {
        let suma = 0;
    
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
    
        return suma;
    }
    
    // Llamar a la función con una lista de números y almacenar el resultado
    let listaEjemplo = [2, 4, 6, 8, 10];
    let resultadoSuma = sumarListaNumeros(listaEjemplo);
    
    // Mostrar el resultado
    console.log("La suma de la lista de números es: " + resultadoSuma);
    }






}
const tareasdedeberes = new matematica();
