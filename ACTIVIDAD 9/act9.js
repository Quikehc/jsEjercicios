function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;

}

Persona.prototype.ObtDetalles = function () {
    console.log(this.nombre, this.edad, this.genero)
}

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero)
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype)

Estudiante.prototype.registrar = function () {
    console.log(this.nombre, this.edad, this.genero, this.curso, this.grupo);
}

function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype)

Profesor.prototype.asignar = function () {
    console.log(this.nombre, this.edad, this.genero, this.asignatura, this.nivel);
}

function prueba() {
    var persona1 = new Persona("Pepe", 59, "Masculino");
    persona1.ObtDetalles();

    var estudiante1 = new Estudiante("Lio", 16, "Pete", "4°", "15°");
    estudiante1.registrar();

    var profesor1 = new Profesor("Jorge", 85, "Masculino", "Matemática", "Secundario");
    profesor1.asignar();
}
