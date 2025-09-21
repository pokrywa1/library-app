# Moduł 4 – Obsługa błędów i paginacja

W czwartym module porządkujemy projekt, dodajemy obsługę błędów oraz implementujemy paginację wyników. Dzięki temu aplikacja staje się bardziej stabilna, przewidywalna i przygotowana na obsługę dużych zbiorów danych.

## Kroki realizowane w module

1. **Porządkowanie projektu**

   * Rozdzielenie modeli Prisma na osobne pliki (`author.prisma`, `book.prisma`).
   * Konfiguracja klienta Prisma z podejściem folderowym.
   * Usunięcie zbędnych plików testowych (`*.spec.ts`, foldery `test`).

2. **Obsługa błędów globalnych**

   * Dodanie filtra wyjątków (`PrismaClientExceptionFilter`).
   * Mapowanie błędów Prisma na bardziej czytelne odpowiedzi HTTP.
   * Integracja globalnego filtra w pliku `main.ts`.

3. **Custom exceptions**

   * Utworzenie wyjątków specyficznych dla aplikacji:

     * `BookNotFoundException`,
     * `AuthorNotFoundException`,
     * inne błędy biznesowe (np. zbyt długie wartości pól).
   * Obsługa błędów w serwisach (`update`, `remove`, `create`).

4. **Paginacja**

   * Utworzenie generycznej klasy odpowiedzi `PaginatedResponse<T>`.
   * Dodanie metadanych: `totalItems`, `itemsPerPage`, `totalPages`, `currentPage`, `hasNextPage`, `hasPrevPage`.
   * Implementacja DTO do obsługi parametrów paginacji (`page`, `limit`).
   * Stworzenie serwisu `paginate()` z obsługą `skip` i `take`.
   * Integracja paginacji w endpointach `findAll` dla autorów i książek.

5. **Testowanie**

   * Sprawdzenie działania obsługi błędów (np. edycja książki z nieistniejącym autorem).
   * Weryfikacja poprawności paginacji w Swaggerze (nawigacja po stronach wyników).

## Efekt końcowy

Po zakończeniu modułu posiadamy:

* uporządkowaną strukturę projektu,
* globalną obsługę błędów z filtrami i wyjątkami,
* paginację wyników dla autorów i książek,
* backend gotowy do integracji z frontendem.

## Zapowiedź kolejnego modułu

W kolejnym etapie zajmiemy się podłączeniem aplikacji frontendowej oraz dalszą integracją z API.