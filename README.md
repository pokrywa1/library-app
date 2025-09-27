# Moduł 8 – Mutacje: dodawanie, edycja i usuwanie danych

W ósmym module rozszerzamy frontend o obsługę mutacji, czyli możliwość dodawania, edytowania i usuwania rekordów (autorów i książek). Używamy do tego React Hook Form, React Query oraz Mantine.

## Kroki realizowane w module

1. **Przygotowanie komponentów formularzy**

   - Utworzenie folderu `inputs` w komponentach współdzielonych.
   - Stworzenie własnych pól formularza (`InputText`, `InputTextController`) opartych na Mantine.
   - Dodanie walidacji przy użyciu **Zod** i `@hookform/resolvers/zod`.

2. **Dodawanie autora**

   - Stworzenie komponentu `AuthorAddButtonWithModal`.
   - Formularz do wprowadzania `name` i `email`.
   - Obsługa mutacji z użyciem `useMutation` i API `addAuthor`.
   - Reset formularza po sukcesie, wyświetlenie błędów przy pomocy **React Hot Toast**.
   - Odświeżanie listy autorów za pomocą `queryClient.invalidateQueries`.

3. **Usuwanie autora**

   - Dodanie przycisku akcji w tabeli (`AuthorDataTableActions`).
   - Obsługa usuwania z potwierdzeniem w modalu.
   - Mutacja `deleteAuthor` z obsługą błędów (np. próba usunięcia autora powiązanego z książką).

4. **Edycja autora**

   - Utworzenie komponentu `AuthorEditButtonWithModal`.
   - Formularz z wartościami domyślnymi pobranymi z API.
   - Mutacja `editAuthor` z obsługą błędów i odświeżaniem danych.

5. **Mutacje dla książek**

   - Analogiczne implementacje jak dla autorów (`BookAddButtonWithModal`, `BookEditButtonWithModal`, `BookDeleteButton`).
   - Dodatkowe pole `authorId` z kontrolowanym selectem (lista autorów pobierana z API).
   - Optymalizacja pobierania listy autorów – dane ładowane dopiero po otwarciu modala.

6. **Obsługa rerenderów**

   - Refaktoryzacja komponentów, aby unikać zbędnych zapytań do API.
   - Logika formularza renderowana dopiero przy otwarciu modala.

## Efekt końcowy

Po zakończeniu modułu posiadamy:

- pełną obsługę mutacji (dodawanie, edycja, usuwanie) dla autorów i książek,
- walidację danych w formularzach z wykorzystaniem **Zod**,
- komponenty reużywalne dla pól formularzy i przycisków akcji,
- optymalizację zapytań i obsługę błędów,
- spójny i gotowy do rozbudowy frontend.

## Zapowiedź kolejnego modułu

W kolejnym materiale pokażę, jak przetestować aplikację – backend (testy wydajności API oraz inicjalizacja dużym zbiorem danych).
