# Entrepresenteur (entrepreneur + presenter)

![GitHub issues by-label](https://img.shields.io/github/issues/m3tro1d/entrepresenteur/task?color=%230B4FAD&label=current%20issues)
![GitHub issues by-label](https://img.shields.io/github/issues/m3tro1d/entrepresenteur/backlog?color=%23fef2c0&label=backlog%20issues)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/m3tro1d/entrepresenteur?color=%2369ff70)

Модель: https://drive.google.com/file/d/1D2B2oH6q4FZ222T_QfXJKvFrzsW43vOf/view

<p align="center">
  <img src=".github/Model.jpg" alt="Model">
</p>

## Деплой приложения

Чтобы задеплоить приложение на Heroku, необходимо:

1. Переключиться на бранч master
2. Подмержить изменения из фичеветок, которые должны попасть в релиз
3. Переключиться на бранч deployment
4. Подмержить изменения из master
5. Запустить билд: `yarn build`
6. Застейджить изменения в билде: `git add build -f`
7. Запушить изменения в удаленный бранч heroku:master, дождаться завершения билда
