# React Sneakers Shop

Небольшое приложение-магазин, написанное на React с использованием MongoDB.

## Возможности

- Просмотр списка товаров
- Добавление в избранное
- Корзина
- Страница заказов

## Установка и запуск

1. Установите зависимости:

```bash
npm install
```

2. Импортируйте базу данных из папки `sneakersDB`:

```bash
mongorestore --db sneakersDB ./sneakersDB
```

3. Запустите сервер:

```bash
npm run start-server
```

4. Запустите клиент:

```bash
npm run start
```

## Технологии

- React
- MongoDB
- Axios
- SCSS
