# Описание
Тестовое задание Кошелек.ру. Полное описание ниже

gh-pages: https://nijoelite.github.io/test-binance-api

# Как запустить
  1. `npm ci` - установить зависимости
  2. `npm run dev` - dev-сервер, `localhost:8080`
 
 `npm run build` - production-сборка в `/dist`
 
 # Задание
Разработать SPA приложение. Фреймоворк на выбор - Vue.js, React, Angular.
Желательно в качество сборщика использовать Webpack.

## Приложение и ядро
Разработать родительское приложение, которое послужит контейнером для подключения дочерних блоков с бизнес-логикой.
В состав контейнера должны войти header с меню из двух страниц и область для загрузки контента под каждую страницу (блоков).
Контент дочерних блоков должен подгружаться динамически с отложенной загрузкой. 

Далее необходимо разработать мини-ядро, которое будет грузиться вместе с родительским приложенияем и иметь API для загрузки дополнительных плагинов. Ядро должно быть доступно из кода каждой страницы родительского приложения.

## Плагины
### Шина данных
Первым плагином ядра является плагин, реализующий паттерн шина данных. Он реализует в себе глобальную на уровне приложения шину данных. Каждый компонент системы может писать в нее события или читать их из нее (посредством подписки).

### Binance SDK
Вторым плагином ядра будет плагин, реализующий SDK для взимодействия с биржей binance (только 2 метода: получить биржевой стакан по определенному символу по REST и подписаться на обновления стакана по WS). (См. раздел Diff. Depth Stream в документации: https://github.com/binance-exchange/binance-official-api-docs/blob/master/web-socket-streams.md).


## GUI компоненты 
### Landing + Table (1 страница)
В приложении на первой странице расположить компонент, который при помощи плагина ядра "SDK" забирает состояние стакана по определенному символу с биржи binance (можно применить limit=500, чтобы не тянуть стакан на всю глубину), подключается на обновления данных по ws для этого символа (по умолчанию берется по BTCUSDT) и отрисовывает стакан в подобном формате

| Amount | Price | Total | Total | Price | Amount |
|:------:|:-----:|:-----:|:-----:|:-----:|:------:|
|   ...  |  ...  |  ...  |  ...  |  ...  |   ...  |
|   ...  |  ...  |  ...  |  ...  |  ...  |   ...  |

Где левые три колонки относятся к ордерам тиба Bid, правые к ордерам типа Ask. 
Price и Amount (Quantity) получаются из binance. Total рассчитывается на клиенте как Price * Amount.

Верстка должа быть резиновая и адаптивная для мобилки и десктопа. В мобильной версии отображать только колонки с Price и Amount.

Таблица должна помещаться по вертикали на странице (без скрола на страница) и должна содержать свой скрол-бар.
Скролл в таблице должен появляться по ховеру на таблицу, сама таблица и ее контент должны оставаться на месте при этом.
Внешний вид скроллбара не принципиален. Таблица скроллится внутри, шапка остаётся на месте.
Полоса скролл бара начинается под шапкой. При скролле значения в таблице не должны наезжать на шапку.

Компонент должен уметь: 
* читать сообщение об изменении читаемого символа из плагина "шина данных". При изменении символа компонент должен очищать свое содержимое по предыдущему символу и загрузить данные по новому.  
* транслировать в шину данных в виде сообщений все примененные diff-изменения.

### Diff-Viewer (2 страница)
На второй странице расположить компонент, сожержащий в себе:
* DropDown  перечнем символов. Их можно зашить статически BTCUSDT, BNBBTC и ETHBTC
* Cписочный элемент

DropDown при изменении выбранного элемента отправляет в шину данных событие об изменении активного символа.
Cписочный элемент читает шину данных и отображает информацию о каждом diff-изменении в новой строке.
