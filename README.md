# Moduł 5 – Konfiguracja projektu frontendowego

W piątym module rozpoczynamy pracę nad frontendem aplikacji. Tworzymy projekt w React z Vite, instalujemy bibliotekę komponentów Mantine oraz konfigurujemy środowisko do dalszej implementacji.

## Kroki realizowane w module

1. **Inicjalizacja projektu React**

   - Utworzenie projektu za pomocą Vite (`react + typescript`).
   - Instalacja zależności (`npm install`).
   - Uruchomienie serwera deweloperskiego (`npm run dev`) pod adresem `http://localhost:5183`.

2. **Instalacja biblioteki komponentów Mantine**

   - Dodanie paczek: `@mantine/core`, `@mantine/hooks`.
   - Instalacja PostCSS i konfiguracja pliku `postcss.config.js`.
   - Dodanie stylów Mantine w pliku głównym (`main.tsx`).
   - Owrapowanie aplikacji w `MantineProvider`.

3. **Pierwszy komponent**

   - Utworzenie prostego przycisku z Mantine (`<Button>Hello</Button>`).
   - Weryfikacja poprawności działania komponentów i stylów.

4. **Konfiguracja formatowania kodu**

   - Włączenie automatycznego formatowania przy zapisie (`Prettier`).
   - Instalacja i konfiguracja wtyczki Prettier w VS Code.

5. **Czyszczenie projektu**

   - Usunięcie zbędnych plików i stylów (np. `App.css`).
   - Grupowanie importów i usunięcie nieużywanych elementów.

6. **Instalacja dodatkowych bibliotek**

   - `axios` – komunikacja z API.
   - `react-hook-form` – obsługa formularzy.
   - `react-query` – zarządzanie stanem danych, cache, obsługa błędów i ładowania.
   - Konfiguracja `QueryClientProvider` w pliku głównym aplikacji.

7. **Konfiguracja ESLint**

   - Instalacja ESLint i dodanie reguł dostarczonych przez Mantine oraz React Query.
   - Aktualizacja konfiguracji parsera TypeScript i ustawień projektu.
   - Ignorowanie plików konfiguracyjnych (`*.config.js`, `*.cjs`).
   - Restart serwera ESLint i weryfikacja działania.

## Efekt końcowy

Po zakończeniu modułu posiadamy:

- działającą aplikację React z Vite,
- skonfigurowaną bibliotekę komponentów Mantine,
- dodatkowe narzędzia wspierające integrację z API i walidację formularzy,
- czyste i ujednolicone środowisko deweloperskie.

## Zapowiedź kolejnego modułu

W kolejnym etapie zajmiemy się tworzeniem struktury frontendowej aplikacji oraz implementacją komponentów do obsługi danych z API.
