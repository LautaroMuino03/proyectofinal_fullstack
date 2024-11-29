// el proyecto lo realice con nodejs, base de datos en MongoDB compass, express y el front utilice el mismo proyecto que realice para la primer parte del proyecto con react.

// realice un llamado a las imagenes de las cards que anteriormente las pasaba desde el front con la carpeta assets, ahora son mostradas desde la base de datos a traves de un post y son distinguidas por su categoria correspondiente.

// Luego, realice un "panel de administrador" donde realice un formulario para poder agregar un producto (metodo POST), el formulario tiene para colocar nombre del producto, categoria, para poder saber hacia que seccion debe ir, el precio y si tiene descuento y por ultimo una descripcion, tambien realice un metodo PUT para poder editar la informacion del producto que se requiera y por ultimo el metodo DELETE para eliminar el producto si se requiere.

// Por último, para el manejo de sesiones, hice un formulario para iniciar sesion hacia el panel de administracion (en la barra de direcciones si se pone /adminPanel, no se redirige automaticamente debido a que esta protegida para que no se acceda automaticamente), sino que a través de un "acceso secreto" poniendo en la barra de direcciones /login te redirige hacia un formulario, donde se deben colocar las credenciales correctas y asi te permite acceder hacia el panel de administracion, para este escenario y poder conectarlo con la base de datos tuve que utilizar bcrypt para poder hashear la contraseña y que sea validada.

// esto seria resumidamente el proyecto desde el lado del backend, el frontend tiene la misma funcionalidad que en la primer entrega, con las redirecciones a todas sus secciones, agregar el producto al carrito y poder eliminarlo desde el carrito.


// Opinion del proyecto
sinceramente me entusiasmo mucho poder realizar este trabajo, la parte del backend eran cosas que nunca habia realizado y para este proyecto fue mi primera vez, la parte sin dudas que mas me costo fue el manejo de sesiones, validar la contraseña a través del hash!