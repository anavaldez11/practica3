function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if (  name== "cecy" &&  password== "12345" ) {
       //alert("usuario y contrasena validos")
       window.open('content.html');
     }   else {
       alert("Error");
     }

 };