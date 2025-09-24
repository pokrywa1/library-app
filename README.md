# Moduł 6 – Struktura frontendu i integracja z API

W szóstym module tworzymy strukturę projektu frontendowego oraz implementujemy integrację z API dla autorów i książek. Skupiamy się na pobieraniu, dodawaniu, edycji i usuwaniu danych.

## Kroki realizowane w module

1. **Struktura projektu**

   - Utworzenie folderów w `src`:

     - `app` – miejsce na współdzielone pliki między modułami,
     - `api` – logika związana z zapytaniami do API,
     - `lib` – konfiguracja bibliotek (np. Axios),
     - `types` – współdzielone typy,
     - `components` – komponenty wielokrotnego użytku,
     - `views` – widoki aplikacji (np. `Home`).

2. **Integracja z API**

   - Utworzenie zapytań HTTP dla autorów (`getAuthorById`, `getAuthors`, `addAuthor`, `editAuthor`, `deleteAuthor`).
   - Utworzenie analogicznych zapytań dla książek.
   - Konfiguracja **Axios** w `lib/api.ts` z wykorzystaniem zmiennych środowiskowych (`VITE_API_URL`).

3. **React Query**

   - Implementacja custom hooków (`useGetAuthor`, `useGetAuthors`, itd.).
   - Konfiguracja obiektów `queries` z kluczami (`authorQueries`, `bookQueries`).
   - Obsługa cache, stanów ładowania, błędów i ponownych zapytań.

4. **Typy i DTO**

   - Utworzenie typów dla pojedynczych obiektów (`Author`, `Book`).
   - Utworzenie generycznego typu `PaginatedResponse<T>` dla list z paginacją.
   - Zdefiniowanie `PaginationParams` (`page`, `limit`).

5. **Mutacje (CRUD)**

   - Dodanie zapytań `addAuthor`, `editAuthor`, `deleteAuthor`.
   - Analogiczne implementacje dla książek.
   - Wykorzystanie walidacji przy pomocy **Zod**.

6. **Testowanie**

   - Pobranie pojedynczego autora i wyświetlenie jego danych.
   - Pobranie listy autorów i książek z paginacją.
   - Testowanie dodawania, edycji i usuwania rekordów.

## Efekt końcowy

Po zakończeniu modułu posiadamy:

- przejrzystą strukturę projektu frontendowego,
- pełną integrację z API (CRUD dla autorów i książek),
- obsługę cache i stanów w **React Query**,
- typowanie danych i paginację,
- wstępne przygotowanie do budowy UI (tabelki, formularze).

## Zapowiedź kolejnego modułu

W kolejnym materiale pokażę, jak stworzyć tabelki do wyświetlania danych oraz jak dodać obsługę dodawania, edycji i usuwania rekordów bezpośrednio z poziomu UI.
