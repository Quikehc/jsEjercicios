function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.ObtDetalles() = function () {
    console.log(nombre, edad, genero)
}

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero)
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype.registrar() = function () {
    console.log(this.nombre, this.edad, this.genero, this.curso, this.grupo);
}

function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype.asignar() = function(){
    console.log(this.nombre, this.edad, this.genero, this.asignatura, this.nivel);
}


