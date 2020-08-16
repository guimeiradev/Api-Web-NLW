const Database = require('./db')
const createProffy =  require('./createProffy')

Database.then(async (db) => {
    // Inserir Dados

    proffyValue = {
        name: 'Guilherme Meira',
        avatar: 'https://avatars0.githubusercontent.com/u/69088421?s=460&u=35e4d2b4054cf90f9cd5a8cadc9277cef0a48ac6&v=4',
        whatsapp: '23892833',
        bio: 'Sou Foda !',
    }

    classValue = {
        subject: 1,
        cost: "20",

        // O proffy_id vira pelo banco de dados
    }

    classScheduleValues = [
        // class_id vira pelo banco de dados , após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

//   await createProffy(db, { proffyValue,classValue,classScheduleValues })

// Consultar dados inseridos

// Todos

const selectedProffys = await db.all("SELECT * FROM proffys")
// console.log(selectedProffys)

// Consultar as classes de um determinado professor
// e trazer  junto os dados  do professor

const selectedClassesAndProffys = await db.all(`
    SELECT classes.*,proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id )
    WHERE classes.proffy_id = 1;
`)
// console.log(selectedClassesAndProffys)

// o horario que a pessoa trabalha , por exemplo , é das 8h - 18h
// o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
// o time_to precisa ser acima

const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = 0
    AND class_schedule.time_from <= 620
    AND class_schedule.time_to > 520



`)
    console.log(selectClassesSchedules)

})
