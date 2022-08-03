import React, {useState, useEffect}  from 'react'


function Formulario (){
    
    const obtenerRegistro = () =>{
        var datos = localStorage.getItem("registro");
        if(datos){
            return JSON.parse(datos)
        }else{
            return [];
        }
    }


    //inicializar la app con los datos guardados
    const [registro, setRegistro] = useState(obtenerRegistro())
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [Contrasena, setContrasena] = useState('')

    const validar = (e) => {
        e.preventDefault()
       if(Contrasena !== "" & nombre !== "" & correo !== ""){
           document.getElementById('btn').disabled = false



            // guardar los datos que se toman de los campos en el localstorage

      
       var miUsuario = {nombre, correo, Contrasena};
       setRegistro([...registro, miUsuario]);



        //limpiar los campos del formulario al junto con los states

        setNombre("");
        setCorreo("");
        setContrasena("");
        document.getElementById("formulario").reset();
        console.log("datos guardados correctamente")




        }else{
            document.getElementById('btn').disabled = true
        }

      
    }


    useEffect (() => {
        localStorage.setItem("registros", JSON.stringify(registro));
    });

    //area de retorno y confeccion del formulario
    return (
        <div className='container'>
              <form action="#" onBlur={validar} id='formulario' >
                    <br />
                    <br />
                    <h1 className='text-center'> FORMULARIO </h1>
                    
                    <div className='form-floating'>
                        <input type="text" 
                        id='nombre'
                        maxLength={20}
                        required
                        className='form-control'
                        onChange={(e) => {setNombre(e.target.value)}}
                         />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>

                    <div className='form-floating'>
                        <input type="email" 
                        id='correo'
                        className='form-control' 
                        maxLength={32}
                        required
                        onChange={(e) => {setCorreo(e.target.value)}}
                        />
                        <label htmlFor="floatingInput">Correo</label>
                    </div>

                    <div className='form-floating'>
                        <input type="password" 
                        id='contrasena'
                        maxLength={8}
                        required
                        className='form-control' 
                        onChange={(e) => {setContrasena(e.target.value)}}
                                            
                        />
                        <label htmlFor="floatingInput">Contraseña</label>
                    </div>
                        <br />
                    <button class="w-100 btn btn-lg btn-primary" id='btn' disabled type="submit">Enviar</button>
                </form>
              
        </div>
    )
}




export default Formulario