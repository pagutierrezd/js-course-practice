let biblioteca = [
    { titulo: "Cien años de soledad", 
      autor: "Gabriel Garcia Marquez",
      anoPublicacion: 1967,
      genero: "Novela",
      prestado: false
    },
    
    { titulo: "La casa de los espíritus",  
      autor: "Ildefonso Falconio",
      anoPublicacion: 1843,
      genero: "Narrativa",
      prestado: true
    },
      
    { titulo: "El Quijote de la Mancha",
      autor: "Miguel de Cervantes Saavedra",
      anoPublicacion: 1605,
      genero: "Novelas Históricas",
      prestado: false
    }
];

function agregarLibro(titulo, autor, anoPublicacion, genero, prestado){
    const nuevoLibro ={
        titulo,
        autor,
        anoPublicacion,
        genero,
        prestado
    };
    biblioteca.push(nuevoLibro);
}

function buscarLibro(titulo){
    for(let libro of  biblioteca) {
        if (libro.titulo.toLowerCase() === titulo.toLowerCase()) return libro;
    }
    return null;
}

function prestarLibro(titulo){
    let libro  = buscarLibro(titulo);
    if (!libro) return 'No se encontró el libro';
    else if (libro.prestado) return 'Este libro ya está prestado';
    else {
        libro.prestado=true;
        return 'Se ha prestado correctamente';
    }
}

agregarLibro("En busca del tiempo perdido", "Marcel Proust",1913, "Fantasia", false);
console.log(buscarLibro( "En busca del tiempo perdido")); //devuelve todo el objeto con ese 
console.log(buscarLibro("Cien años de soledad"));
console.log(prestarLibro("Don Quixote"));
console.log(prestarLibro("En busca del tiempo perdido"));//devuelve que se ha prestado correctamente

console.log(biblioteca);