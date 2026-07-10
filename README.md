# Recipes Carbs Application

Поиск и просмотр рецептов. Выбирайте ингредиенты, находите подходящие блюда

## Технологии

- **Next.js 16** + Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Biome** (линтер / форматтер)

## Структура проекта

```
src/
├── app/              # Страницы (App Router)
│   ├── (public)/     # Публичные: рецепты, поиск, о сервисе
│   └── (user)/       # Личный кабинет, избранное
├── components/       # Компоненты
│   ├── largeBlocks/  # Большие блоки страниц
│   ├── smallBlocks/  # Маленькие блоки страниц
│   ├── layout/       # Хедер, навигация
│   └── ui/           # Кнопки, инпуты, табы
├── lib/              # Статические данные
├── hooks/            # useLocalStorage
├── actions/          # Server Actions
└── styles/           # Глобальные стили
```

## Команды

| Команда | Описание |
|---|---|
| `npm run dev` | Dev-сервер |
| `npm run build` | Production-сборка |
| `npm run lint` | Проверка кода |
| `npm run format` | Форматирование |
