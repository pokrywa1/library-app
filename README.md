# Moduł 2 – Tworzenie i konfiguracja backendu

W drugim module przechodzimy do praktycznej części tworzenia aplikacji. Skupiamy się na backendzie, aby przygotować działające API i bazę danych, które będą podstawą dla warstwy frontendowej.

## Wymagania wstępne

* **Node.js** z zainstalowanym menedżerem pakietów (np. npm)
* **PostgreSQL** jako baza danych

## Kroki realizowane w module

1. **Inicjalizacja projektu NestJS**

   * Tworzenie szkieletu aplikacji (boilerplate) za pomocą CLI NestJS.
   * Uruchomienie projektu pod adresem `http://localhost:3000` z widocznym komunikatem *Hello World*.

2. **Konfiguracja Prisma ORM**

   * Instalacja i inicjalizacja Prisma.
   * Dodanie zmiennej środowiskowej `DATABASE_URL` w pliku `.env` z konfiguracją dostępu do bazy danych (np. `LibraryDB`).
   * Zmiana katalogu wyjściowego klienta Prisma.

3. **Modelowanie bazy danych**

   * Utworzenie modeli `Author` i `Book` z relacją jeden-do-wielu.
   * Przeprowadzenie migracji w celu stworzenia tabel w bazie danych.
   * Weryfikacja wyników w narzędziu typu PGAdmin.

4. **Integracja Prisma z NestJS**

   * Utworzenie modułu i serwisu Prisma.
   * Dziedziczenie po kliencie Prisma i eksport serwisu.
   * Rozwiązywanie problemów z typami w VS Code (reset TS server i ESLint).

5. **Konfiguracja aplikacji**

   * Edycja pliku `main.ts` i włączenie obsługi CORS.
   * Przygotowanie aplikacji do pracy z różnymi domenami.

6. **Tworzenie modułów dla zasobów**

   * Generowanie modułów REST API dla autorów i książek z pomocą CLI NestJS.
   * Dodanie operacji CRUD.
   * Dołączenie modułu Prisma do modułów zasobów.

7. **Instalacja dodatkowych bibliotek**

   * **Swagger** i **Swagger UI Express** – dokumentacja API.
   * **Biblioteka do walidacji** – sprawdzanie poprawności danych wejściowych.

## Efekt końcowy

Na zakończenie modułu posiadamy:

* działający backend z NestJS,
* skonfigurowane połączenie z bazą PostgreSQL,
* modele danych z relacjami,
* moduły API dla autorów i książek,
* wstępnie przygotowaną dokumentację API oraz walidację danych.
