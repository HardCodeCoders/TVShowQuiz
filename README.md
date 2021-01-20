# CodersCamp 2020 - Projekt JavaScript

Implementacja projektu w ramach kursu programowania CodersCamp. Wszystkie materiały związane z projektem można znaleźć w folderze [docs](docs).

## Temat projektu

Quizu sprawdzający znajomość uniwersum trzech popularnych seriali: "Game of Throne", "Rick & Morty", "Breaking Bad". Każdy z seriali będzie stanowił osobną kategorię quizu.

### Założenia projektowe

1. Pobranie danych z API
2. Wyświetlenie strony, pokazanie losowego zdjęcia postaci, panel z opisem zasad gry (dostosowany opis, jeśli np. imię osoby ze zdjęcia jest w opisie zasad).
3. Rozpoczęcie quizu

- losowanie pytań
- losowanie odpowiedzi dla komputera (gracz konkuruje także z komputerem! Komputer tak samo jak gracz próbuje rozpoznać co jest na grafice).

4. Sprawdzenie poprawności odpowiedzi
5. Obsługa _zegara_ wskazującego upływ czasu
6. Wyświetlenie wyniku po zakończeniu quizu (zapisanie wyniku do local storage)
7. Lista najlepszych wyników
8. Ustawienia strony

### Projekt strony

Prototypowa wersja strony dostępna jest na [Figmie](https://www.figma.com/file/ixMw4amlPClGe2GIBJIuJB/Untitled?node-id=0%3A1)

## Tablica z zadaniami

Wszystkie taski dotyczące projektu można znaleźć na tablicy [Trello](https://trello.com/b/qMtg04W4/project-js).

## Praca z projektem

### Commit Message

Przyjmujemy poniższy format commit message

```
<type>: <commit_message>
```

#### Commit Message Type

- **build**: Zmiana która afektuje budowanie projektu lub zależności zewnętrzne
- **docs**: Zmiana w dokumentacji bądź dodatkowych materiałach
- **feature**: Wprowadzenie nowej funkcjonalności
- **bugfix**: Naprawienie błędu
- **refactor**: Zmiana w projekcie, która nic nie naprawia, ani nie dodaje

#### Zasady Commit Message

- używaj imperatywnej formy czasu teraźniejszego: "change", nie "changed" lub "changes"
- nie zaczynaj wielką literą
- nie dodawaj kropki na końcu zdania
- używaj języka angielskiego

### Pull Request

Pracujemy na `forkach` więc każdy ma swoją własną wersję repozytorium. Staramy się tworzyć małe PR. W opisie PR powinno być dokładnie opisane co on zmienia. Każdy PR musi być zaakceptowany przez przynajmniej jedną inną osobę.

## Development

### Uruchomienie:

```
1. Sklonować repo na dysk i otworzyć w konsoli
2. npm install
3. npm start (projekt uruchomi się na localhost:8080)
```

### Pobranie najnowszej wersji kodu z głównego projektu
```
git remote add upstream [http address] -> TYLKO ZA PIERWSZYM RAZEM!!! Podać adres głównego projektu, nie swojego forka!
git fetch upstream
git merge upstream/main
```

### Praca z Web Pack
```
npm start       -> uruchamia serwer, strona widoczna pod adresem localhost:8080
npm run build   -> buduje projekt, tworzy plik index.js
```
