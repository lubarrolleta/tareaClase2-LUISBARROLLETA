// import { data } from './data'
const data = require("./data");
// console.log(data);
// 1. Imprime el salario promedio de todos los empleados que trabajan en Amazon
const averageSalary = (employees, company) => {
    //TODO
    const average = employees.filter((emp) => emp.company === company);
    // const totalEmpleado = average.length
    // console.log(totalEmpleado)
    const promedio = average.reduce(
        (accum, ele) => accum + ele.salary / average.length,
        0
    );
    return promedio.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
console.log(
    `Salario promedio de los empleados de Amazon: `,
    averageSalary(data, "Amazon")
);

// 2. Imprime la lista de empleados que trabajan en el departamento de Ventas (Sales) de Facebook
const getEmployeesFrom = (employees, company, department) => {
    //TODO
    // 👉 funciona igual un filter de un filter , incluso seguir usando metodos uno tras otro
    // const empleadosVentas = employees.filter(emp => emp.company === company).filter(ele => ele.department === department)

    const empleadosVentas = employees
        .filter((emp) => emp.company === company && emp.department === department)
        .map((name) => ({ first: name.name.first, last: name.name.last }));
    return empleadosVentas;
};
console.log("Empleados que trabajan en el departamento de Ventas de Facebook:");
console.log(getEmployeesFrom(data, "Facebook", "Sales"));

// 3. Imprime un valor booleano indicando si existe o no algún empleado de Google que gane más de USD10k
const existEmployeesFrom = (employees, company, salary) => {
    //TODO
    const existe = employees
        .filter((emp) => emp.company === company)
        .some((gana) => gana.salary > salary);
    return existe;
};
console.log(existEmployeesFrom(data, "Google", 10000));

// 4. Imprime la lista de los empleados (nombre, email y fecha de nacimiento) que trabajen en Datagen
const printEmployeesFrom = (employees, company) => {
    //TODO
    const empleadosDatagen = employees
        .filter((emp) => emp.company === company)
        .map((dat) => ({
            nombre: dat.name.first,
            email: dat.email,
            fecha_nacimiento: dat.dob,
        }));
    console.log(empleadosDatagen);
};
printEmployeesFrom(data, "Datagen"); // son 11

// 5. Imprime la lista de empleados nacidos antes de 1990 y que trabajan en Google o Amazon
// Ordena la lista mostrando primero aquellos que ganan más
const getOlderEmployeesFrom = (employees, company1, company2) => {
    //TODO
    const empleados = employees
        .filter(
            (emp) =>
            (emp.company === company1 || emp.company === company2) &&
            new Date(emp.dob).getFullYear() < 1990
        )
        .sort((a, b) => {
            if (a.salary > b.salary) return -1; // si devuelve menor a 0 a esta primero q b
            if (a.salary < b.salary) return 1; // si devuelve mayor a 0 b esta primero q a
            return 0; // si devuelve 0 lo deja sin efecto
        });
    // const getfecha = new Date(empleados[0].dob).getFullYear()

    console.log(empleados.length);
    return empleados;
};
console.log(
    "Empleados nacidos antes de 1990 y que trabajan en Google o Amazon, ordenados en forma descendente bajo el criterio del salario:"
);
console.log(getOlderEmployeesFrom(data, "Google", "Amazon")); // son 9