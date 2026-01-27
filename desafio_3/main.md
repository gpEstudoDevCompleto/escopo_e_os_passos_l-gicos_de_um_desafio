# 🔴 Desafio Avançado — Sistema de Reserva de Salas (conceitual)

## 📌 Contexto
Uma empresa ou escola precisa de um sistema para gerenciar a reserva de salas ao longo do dia.  
Várias pessoas podem solicitar reservas, mas **uma sala não pode ter conflitos de horário**.

O desafio é definir claramente as **regras** e o **fluxo lógico** para garantir reservas consistentes.

---

## 🎯 Objetivo do desafio
Construir o raciocínio completo para:
- Criar reservas  
- Evitar conflitos de horário  
- Cancelar reservas  
- Encerrar reservas automaticamente  
- Manter o estado correto do sistema  

> Sem código — apenas lógica, regras e estrutura mental.

---

## 📦 Entidades envolvidas (modelagem conceitual)

### Sala
- Identificador  
- Nome ou número  

### Reserva
- Sala associada  
- Horário de início  
- Horário de término  
- Estado da reserva  

---

## 📥 Ações possíveis no sistema
- Criar uma reserva  
- Cancelar uma reserva  
- Listar reservas de uma sala  
- Verificar disponibilidade de uma sala  

---

## 📤 Saídas esperadas
- Confirmação de reserva criada  
- Mensagem de conflito de horário  
- Confirmação de cancelamento  
- Lista de reservas com seus respectivos estados  

---

## 📏 Regras de Negócio

### 1️⃣ Intervalos de tempo
- Toda reserva deve possuir:
  - Horário de início  
  - Horário de término  
- O horário de término **deve ser maior** que o horário de início  
- Reservas são sempre realizadas dentro do **mesmo dia** (simplificação)

---

### 2️⃣ Conflito de horários
Uma nova reserva **não pode ser criada** se existir outra reserva da mesma sala que:
- Esteja no estado **reservada**
- Possua **qualquer sobreposição de horário**

A sobreposição ocorre quando:
- Um intervalo começa **antes** do outro terminar  
- **E** termina **depois** do outro começar  

---

### 3️⃣ Estados da reserva
Uma reserva pode estar em apenas um dos seguintes estados:
- **Reservada** → reserva ativa, futura ou em andamento  
- **Cancelada** → reserva inválida, não deve bloquear horários  
- **Concluída** → reserva já finalizada  

Regras de estado:
- Apenas reservas **reservadas** bloqueiam horário  
- Reservas **canceladas** não participam da verificação de conflito  
- Reservas **concluídas** são apenas registros históricos  

---

### 4️⃣ Cancelamento
- Uma reserva só pode ser cancelada se estiver no estado **reservada**
- Reservas **concluídas** não podem ser canceladas
- Ao cancelar uma reserva, o horário volta a ficar disponível  

---

### 5️⃣ Conclusão automática
- Se o horário atual for **maior que o horário de término** da reserva:
  - O estado deve ser alterado para **concluída**
- Essa mudança ocorre **independentemente de ação do usuário**

---

## 🔍 Validações importantes para discussão
- Reservas com horário igual (início = término)  
- Reservas “encostadas”  
  - Exemplo: 10:00–11:00 e 11:00–12:00  
- Cancelamento de reserva em andamento  
- Criação de reservas no passado  
- Múltiplas salas com horários iguais  
