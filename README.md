# Moduł 9 – Testowanie wydajności i obciążenia

W dziewiątym module testujemy aplikację pod kątem wydajności i odporności na obciążenie. Uzupełniamy bazę danymi testowymi, a następnie symulujemy setki użytkowników wykonujących zapytania jednocześnie.

## Kroki realizowane w module

1. **Seedowanie bazy danych**

   - Utworzenie folderu `seeder` z plikiem `index.js`.
   - Instalacja paczki **faker** do generowania losowych danych (np. polskie imiona i e-maile).
   - Skrypt wysyłający zapytania `POST /authors` z wykorzystaniem `fetch`.
   - Dodanie opóźnień (`setTimeout`, `await sleep`) w celu uniknięcia przeciążenia.
   - Wygenerowanie najpierw kilku rekordów, a następnie nawet kilku tysięcy autorów.

2. **Weryfikacja w aplikacji**

   - Sprawdzenie działania paginacji na froncie (większa liczba stron).
   - Podgląd danych w **pgAdmin** i weryfikacja poprawności.

3. **Testy obciążeniowe z K6**

   - Instalacja i konfiguracja narzędzia **K6**.
   - Utworzenie katalogu `k6` oraz pliku `api_test.js`.
   - Konfiguracja symulacji: np. 300 wirtualnych użytkowników, czas trwania 30s.
   - Test endpointu GET `/authors`.
   - Analiza raportu: średni czas odpowiedzi, mediana, liczba zapytań, procent sukcesów.

4. **Porównanie wyników – z paginacją i bez**

   - Test zapytania zwracającego wszystkich autorów bez paginacji.
   - Sprawdzenie, jak rośnie średni czas odpowiedzi (np. z 14ms do 73ms).
   - Analiza wpływu ilości rekordów w bazie na wydajność zapytań.

5. **Wnioski**

   - Paginacja znacząco poprawia wydajność i zmniejsza obciążenie bazy danych.
   - Nawet przy kilku tysiącach rekordów aplikacja działa sprawnie dzięki limitowaniu zwracanych danych.

## Efekt końcowy

Po zakończeniu modułu posiadamy:

- skrypt seedujący bazę danymi testowymi,
- skonfigurowane testy obciążeniowe w K6,
- wyniki pokazujące różnicę pomiędzy zapytaniami z paginacją i bez niej,
- świadomość, jak planować skalowalność aplikacji.

## Kolejne kroki

Na tym etapie kończymy podstawową część kursu. Możesz rozbudować aplikację o dodatkowe funkcjonalności, np.:

- wyświetlanie szczegółów autora i jego książek,
- zliczanie książek przypisanych do autora,
- zaawansowaną obsługę błędów i wyjątków.
