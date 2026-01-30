const sala = [
  {
    id: 1,
    nome: "Sala 1",
  }
]

const reservas = []

function timeToTodayDate(time) {
  const [h, m, s] = time.split(':').map(Number);
  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    h,
    m,
    s
  );
}

function horaAtualMais5Segundos(){
  const agora = new Date();
  const daqui5s = new Date(agora.getTime() + 5 * 1000);

  const timeStr = daqui5s.toLocaleTimeString('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
  });

  return timeStr
}


function criar_reservas(sala_id,h_inicio,h_termino) {
  const salaExiste = sala.find(sala => sala.id === sala_id)
  if(!salaExiste) {
    return "Sala não encontrada"
  }

  const reservasDaSala = reservas.filter(reserva => reserva.sala_id === sala_id)
  const d_inicio = timeToTodayDate(h_inicio)
  const d_termino = timeToTodayDate(h_termino)

  if(d_termino < d_inicio) {
    return "Horário de termino deve ser posterior ao de inicio"
  }

  const conflito = reservasDaSala.some(reserva =>{
    if(reserva.horario_inicio < d_termino && reserva.horario_termino > d_inicio ){
      if (reserva.status !== "cancelada") {
        return true
      }
    }
    return False
  });

  if (conflito) {
    return "Conflito de horário"
  }

  reservas.push({
    id: reservas.length + 1,
    sala_id: sala_id,
    horario_inicio: d_inicio,
    horario_termino: d_termino,
    status: "reservada",
  });
  return "Reserva criada com sucesso"


}

function cancelarReserva(reserva_id) {
  const reserva = reservas.find(reserva => reserva.id === reserva_id)
  if(!reserva) {
    return "Reserva nao encontrada"
  }
  if(reserva.status === "cancelada") {
    return "Reserva ja cancelada"
  }
  if (reserva.status === "concluida") {
    return "Reserva ja concluida"
  }

  reserva.status = "cancelada"
  return "Reserva cancelada com sucesso"
}

function concluirReserva() {
  setInterval(() => {
    now = new Date()    
    reservas.map(reserva => {
      console.log(reserva);
      console.log(now);
      
      
      
      if(reserva.horario_termino > now && reserva.status === "reservada") {
        reserva.status = "concluida"
      }
    })
  },1000)
}

const hMais5S = horaAtualMais5Segundos()
console.log(hMais5S);

console.log(criar_reservas(1,"10:00:00",hMais5S))
console.log(reservas);

// console.log(cancelarReserva(1))
// console.log(reservas);

// console.log(cancelarReserva(1))
// console.log(reservas);

concluirReserva()
