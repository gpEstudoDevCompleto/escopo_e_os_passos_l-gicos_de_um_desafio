```js
sala = [
  {
    id: 1,
    nome: "Sala 1",
  }
]

reservas = [{
  id: 1,
  sala_id: 1,
  horario_inicio: "10:00–11:00",
  horario_termino: "10:00–11:00",
  status: "reservada",

}]
```

- criar reservas:
  - receber dados sala_id, horario_inicio e horario_termino
  - verificar se a sala existe
  - busca pela sala em reservas
  - verificar se o horario de termino é posterior ao de inicio
  - fazer um loop dentre as reservas da sala e verificar se o  horario de inicio ou termino estao entre os horarios da reserva
  - se houver conflito
    - verificar se o status é cancelado, se não retorna mensagem de erro e não vamos criar a reserva, caso contrario criar a reserva e retorna mensagem de sucesso
  - se nao houver conflito, cria a reserva retorna menssagem de sucesso

- cancelar reservas:
  - receber id da reserva
  - verificar se a reserva existe
  - verificar se o status da reserva é "reservada"
  - se nao for, retorna mensagem de erro
  - reservas concluídas ñão podem ser canceladas


- encerrar reservas automaticamente:
  - criar um setInterval que verifica se um horario excedeu e altera o status para concluidop automaticamente
