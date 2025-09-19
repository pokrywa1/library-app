# Moduł 1 – Wprowadzenie do budowy aplikacji webowych

W tym module pokazuję, jak rozpocząć tworzenie aplikacji internetowych w oparciu o nowoczesne technologie. Pracujemy zarówno z **backendem**, jak i **frontendem**, budując krok po kroku mini–system ewidencji autorów i książek (mała biblioteka).

## Technologie użyte w projekcie
- **Backend**:  
  - [NestJS](https://nestjs.com/) – framework do budowy API  
  - **PostgreSQL** – relacyjna baza danych  

- **Frontend**:  
  - [React](https://react.dev/) w połączeniu z [Vite](https://vitejs.dev/)  

- **Języki**:  
  - JavaScript  
  - TypeScript  

## Model danych
Projekt oparty jest o prosty diagram ERD:
- **Autor**  
  - `id`  
  - `name`  
  - `email`  

- **Książka**  
  - `id`  
  - `authorId` (relacja do autora)  
  - `title`  
  - `genre`  

Relacje:  
- jeden autor może mieć wiele książek,  
- jedna książka przypisana jest tylko do jednego autora.  

## Dobre praktyki
W module omawiam także:
- znaczenie poprawnej **struktury projektu**,  
- stosowanie **samomówiącego nazewnictwa** plików, folderów, funkcji i komponentów,  
- zasady, które ułatwiają innym programistom poruszanie się po kodzie.  

## Plan kolejnego modułu
1. Omówienie architektury backendowej.  
2. Stworzenie podstawowego szkieletu aplikacji (**boilerplate**) przy pomocy CLI NestJS.  
3. Przygotowanie API, które będzie wykorzystane w kolejnych etapach przy budowie frontendu.  