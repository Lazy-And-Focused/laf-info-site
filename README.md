# Привет!
## Данный мини проект

- Что ж, здесь нет ничего сложного, просто простенький сайт для команда LAF
- Мы используем React для создания клиентской части сервера и Nest для серверной (Nest для обучения)

### Client > Какие зависимости используются ?

- Для работы...
1. `react`
2. `react-dom`
3. `react-scripts`
5. `react-router-dom`
4. `@testing-library/ (jest-dom, react, user-event)`

- Что там по разработке...
1. `typescript`
2. `web-vitals`
3. `@types/ (react, react-dom, react-scripts & jest)`

### Server > Какие зависимости используются ?

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

1. Тогда запускайте консоль/терминал/powershell
2. Откройте папку, куда хотите загрузить проект
3. Впишите: `git clone https://github.com/FOCKUSTY/laf-info-site.git`
4. После того, как всё установится, Вам нужно два терминала, один для клиента, другой для сервера
6. В клиентском терминале впишите: `npm install`, после установки: `npm run start` или `npm run build`
7. В серверном терминале впишите: `npm install`, после установки: `npm run start:dev` или `npm run start`
8. Готово! Переходить по адресу `localhost:3000` для сервера, а для клиента он будет в терминале!

### Как забилдить проект ?

- Для клиента просто впишите: `npm run deploy`
- Для сервера в разработке...