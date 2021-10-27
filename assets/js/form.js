var cambioColor = document.getElementById("inputBox")

cambioColor.className = "inputBox"

function validar(){
    var nombre, email, usuarios, expresiones;
    nombre = document.getElementById("nombre").value;       //El valor que esta en ese campo se va a aguardar en la variable nombre
    email = document.getElementById("email").value;
    empresa = document.getElementById("empresa").value;
    soporte = document.getElementById("soporte").value;
    usuarios = document.getElementById("usuarios").value;
    expresiones = /\w+@+\w+\.+[a-z]/;       //https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet


    if (nombre === "" ||email === "" ||usuarios === ""){
        cambioColor.className = "inputBox-incorrecto"
        alert("POR FAVOR, COMPLETE LOS CAMPOS OBLIGATORIOS");
        return false;        
    }
    else if (nombre.lengyh > 35){  //Si la cantidad de caracteres es menos a 35...
        cambioColor.className = "inputBox-incorrecto"
        alert("NOMBRE DEMASIADO LARGO");
        return false;     
    }
    else if (!expresiones.test(email)){  
        cambioColor.className = "inputBox-incorrecto"
        alert("EL CORREO DEBE ESTAR COMPLETO");
        return false;     
    }
    else if (usuarios.lengyh > 1 || isNaN(usuarios)){
        cambioColor.className = "inputBox-incorrecto"
        alert("COMO MINIMO DEBE TENER 1 USUARIO");
        return false;
    }
    else {
        cambioColor.className = "inputBox"
        return true;
    }
}