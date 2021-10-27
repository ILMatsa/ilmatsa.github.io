function validar(){
    var nombre, email, usuarios, expresiones;
    nombre = document.getElementById("nombre").value;       //El valor que esta en ese campo se va a aguardar en la variable nombre
    email = document.getElementById("email").value;
    empresa = document.getElementById("empresa").value;
    soporte = document.getElementById("soporte").value;
    usuarios = document.getElementById("usuarios").value;
    expresionesEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    expresionesNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;       //https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet


    if (nombre === "" ||email === "" ||usuarios === ""){
        alert("POR FAVOR, COMPLETE LOS CAMPOS OBLIGATORIOS");
        return false;        
    }
    else if (!expresionesNombre.test(nombre)){  //Si la cantidad de caracteres es menos a 35...
        alert("NOMBRE INCORRECTO O MUY LARGO");
        return false;     
    }
    else if (!expresionesEmail.test(email)){  
        alert("EL CORREO DEBE ESTAR COMPLETO");
        return false;     
    }
    else if (usuarios.lengyh < 1 || isNaN(usuarios)){
        alert("COMO MINIMO DEBE TENER 1 USUARIO");
        return false;
    }
    else {

        return true;
    }
}