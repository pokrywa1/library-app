# Moduł 7 – Wyświetlanie list i wzorzec Render Props

W siódmym module implementujemy wyświetlanie list autorów i książek w tabelkach. Uczymy się korzystać z paginacji, obsługi błędów oraz ładowania. Dodatkowo wprowadzamy wzorzec projektowy **Render Props**, który pozwala uprościć logikę i zwiększyć reużywalność komponentów.

## Kroki realizowane w module

1. **Lista autorów**

   - Utworzenie komponentu `AuthorsDataTable` wewnątrz widoku `Home`.
   - Pobranie danych z API przy pomocy hooka `useGetAuthors`.
   - Obsługa stanów `isLoading`, `isError`, `error`.
   - Wyświetlenie tabelki Mantine z kolumnami: _nazwa_, _adres e-mail_.
   - Dodanie nagłówka i informacji o liczbie rekordów.

2. **Paginacja**

   - Dodanie stanu `page` oraz limitu (np. 10).
   - Wykorzystanie komponentu `Pagination` z Mantine.
   - Obsługa zmiany strony i dynamiczne odświeżanie danych.

3. **Obsługa błędów**

   - Wyświetlanie komunikatu o błędzie w przypadku problemu z API.
   - Testowanie poprzez wyłączenie backendu (sprawdzenie komunikatu _Network error_).

4. **Tabela książek**

   - Implementacja analogiczna jak dla autorów.
   - Pobieranie listy książek z paginacją i wyświetlanie w tabelce.

5. **Wzorzec Render Props**

   - Utworzenie generycznego komponentu `PaginatedQuery`.
   - Parametry: `query`, `render`, `currentPage`, `onPageChange`.
   - Obsługa logiki: ładowanie, błąd, brak danych, paginacja.
   - Zwracanie danych do funkcji `render` w postaci listy elementów.

6. **Refaktoryzacja kodu**

   - Usunięcie powielonej logiki z komponentów autorów i książek.
   - Przeniesienie wspólnych fragmentów do `PaginatedQuery`.
   - Utworzenie komponentu `CardWithTitle` (karta z nagłówkiem) w folderze `components/shared`.

7. **Konfiguracja paginacji**

   - Utworzenie pliku konfiguracyjnego `config/api.ts`.
   - Definicja `PAGE_SIZE` i `DEFAULT_PAGINATION`.
   - Zastosowanie wartości konfiguracyjnych w widokach.

## Efekt końcowy

Po zakończeniu modułu posiadamy:

- tabelki z autorami i książkami,
- działającą paginację i obsługę błędów,
- uproszczoną logikę dzięki wzorcowi **Render Props**,
- reużywalne komponenty (`PaginatedQuery`, `CardWithTitle`).

## Zapowiedź kolejnego modułu

W następnym materiale zajmiemy się mutacjami: dodawaniem, edycją i usuwaniem rekordów w tabelkach autorów i książek.
