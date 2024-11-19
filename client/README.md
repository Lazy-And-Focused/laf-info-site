# Сайт LAF – FRONTEND

## Стек

1. TypeScript
2. React
3. Vite
4. Tailwind CSS
5. daisyUI
6. ESLint
7. Prettier
8. React Router DOM
9. clsx

## Сборка и запуск

Этот проект, как Вы заметили, использует Vite с плагином для него SWC. Это означает, что сборка в режиме разработки будет куда быстрее, чем когда-либо.

Запуск выполняется по следующим командам:

```bash
# В режиме разработки
pnpm run dev

# В режиме продакшн
pnpm run build # Сборка
pnpm run start # Запуск

# Дополнительно
pnpm run lint   # Линтинг
pnpm run format # Форматирование
```

## Для разработчиков LAF

Установите рекомендуемые расширения для VS Code:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

После чего убедитесь, что они подхватили необходимые файлы конфигурации.

Теперь Вы можете не беспокоиться о стиле кодирования. Только не забывайте запускать линтер (`pnpm run lint`) и форматировщик (`pnpm run format`), чтобы следовать рекомендуемым соглашениям.
