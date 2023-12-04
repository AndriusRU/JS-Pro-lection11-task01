# Символы & итераторы

## Легенда
Для поддержки логики необходимо сделать объекты класса `Team` (команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

## Описание
Реализуйте итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Character`).

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```JS
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```