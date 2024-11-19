# Сайт LAF

## Данный мини проект

- Что ж, здесь нет ничего сложного, просто простенький сайт для команда LAF
- Мы используем React для создания клиентской части и Nest для серверной (Nest для обучения).

### Client (Frontend) > Зависимсти

Читайте в папке `client`. [Клик!](./client/README.md)

### Server (Backend) > Зависимсти

- Для работы...

1. `@nestjs/ (common, core, platform-express)`
2. `reflect-metadata`
3. `rxjs`

- Что там по разработке...

1. `@nestjs/ (cli, schematics, testing)`
2. `@types/ (express, jest, node, supertest)`
3. `@typescript-eslint/ (eslint-plugin, parser)`
4. `eslint, eslint-config-prettier, eslint-plugin-prettier`
5. `jest`
6. `prettier`
7. `source-map-support`
8. `supertest`
9. `ts-jest, ts-loader, ts-node`
10. `tsconfig-paths`
11. `typescript`

### Хотите скачать проект ?

1. Тогда запускайте ваш любимый терминал и переходите в вашу папку с проектами:

   ```bash
   # В повершел это делается так
   cd путь_до_папки

   # Пример
   cd C:/Users/user/Desktop/my_projects
   ```

2. Скачайте проект:

   ```bash
   git clone https://github.com/FOCKUSTY/laf-info-site.git
   ```

3. После закачки репозитория впишите: `cd laf-info-site`, а затем: `pnpm install` в клиентском и серверном терминалах по отдельности (в двух директориях). Или можете скопировать этот скрипт, который установит все зависимости по очереди:

   ```bash
   cd ./client # ~/client
   pnpm install

   cd ../server # ~/server
   pnpm install
   ```

4. Для клиента команды расписаны в `client`, для сервера используйте: `pnpm run build` и `pnpm run start`
5. Готово! Можно переходить по адресу в консоли!
