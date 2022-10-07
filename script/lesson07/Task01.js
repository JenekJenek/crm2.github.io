const allStudents = ['Иванов', 'Петров', 'Сидоров','Кузнецов','Смирнов','Попов', 'Соколов'];
const failedStudents = ['Сидоров','Смирнов','Попов'];

const filter = function(a1, a2) {
    return a1.filter(i=>!a2.includes(i))
    .concat(a2.filter(i=>!a1.includes(i)))
}

console.log(filter(allStudents, failedStudents));