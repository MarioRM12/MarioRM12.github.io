// Función para validar el formato del email

  function validacionCampos()
  {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var recontraseña = document.getElementById("recontraseña").value;
    var condiciones = document.getElementById("condiciones").checked;

    var Usuario = {Nombre:nombre, Apellidos:apellidos, Email:email, Contraseña:contraseña}
    var salida = JSON.stringify(Usuario);

    if (nombre === "" || apellidos === "" || email === "" || contraseña === "" || recontraseña === "") {
      alert("No puedes dejar ningún campo vacío");
    }else if (contraseña !== recontraseña) {
      alert("Las contraseñas no coinciden");
    }else if (condiciones === false) {
      alert("Debes aceptar las condiciones de uso");
    }else
    {
      alert("Registro completado con exito, los datos recogidos son: " + salida);
    }
  
  }