# Moduł 3 – Implementacja CRUD dla autorów i książek

W trzecim module przechodzimy do praktycznej implementacji operacji CRUD dla zasobów **autorów** oraz **książek**. Udoskonalamy backend zbudowany w poprzednich etapach, korzystając z Prisma ORM, NestJS oraz walidacji.

## Zakres modułu

1. **Weryfikacja konfiguracji**

   * Uruchomienie serwera i sprawdzenie dokumentacji Swagger.
   * Upewnienie się, że endpointy dla autorów i książek są dostępne.

2. **Tworzenie autora**

   * Implementacja DTO z dekoratorami `ApiProperty` i walidacją (`@IsString`, `@IsEmail`, limity długości, przykłady).
   * Dodanie kontrolera z metodą `@Post()`.
   * Implementacja logiki w serwisie z wykorzystaniem Prisma (`author.create`).
   * Testowanie dodawania autora w Swaggerze i weryfikacja w bazie danych.

3. **Edycja autora**

   * Zmiana metody `@Patch` na `@Put` (pełna aktualizacja obiektu).
   * Aktualizacja danych w serwisie za pomocą `author.update`.
   * Testowanie aktualizacji danych autora.

4. **Pobieranie autorów**

   * Implementacja `findAll` i `findOne` w serwisie.
   * Dodanie zwracania listy autorów oraz pojedynczego autora po ID.
   * Uzupełnienie odpowiedzi o listę książek (`include: { books: true }`).

5. **Usuwanie autora**

   * Dodanie metody `remove` w kontrolerze i serwisie (`author.delete`).
   * Testowanie usuwania rekordów i weryfikacja w bazie danych.

6. **CRUD dla książek**

   * Utworzenie DTO oraz kontrolera dla książek.
   * Implementacja metod `create`, `update`, `findAll`, `findOne`, `remove` w serwisie.
   * Dodanie powiązania książki z autorem (relacja `authorId`).
   * Zwracanie szczegółowych informacji o książce wraz z jej autorem.
   * Testowanie wszystkich operacji w Swaggerze.

## Efekt końcowy

Po zakończeniu modułu posiadamy:

* w pełni działające endpointy CRUD dla autorów i książek,
* walidację danych wejściowych,
* automatycznie generowaną dokumentację Swagger,
* działającą integrację Prisma z bazą PostgreSQL.

## Zapowiedź kolejnego modułu

W następnym etapie skupimy się na:

* obsłudze błędów w API,
* paginacji wyników,
