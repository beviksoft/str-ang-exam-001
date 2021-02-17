# Str-Ang-Exam-001

# 3. Részvizsga - Gyakorlat

A vizsga a következő feladatok megoldását tartalmazza.

# Beállítások

    Hozz létre egy új Github tárolót "str-ang-exam-001" néven. Ne készíts sem README.md sem más állományt a létrehozáskor. Ekkor ki fog adni egy segédletet, hogy hogyan tudod összekötni egy már meglévő mappával.
    Hozz létre azonos néven egy új Angular projektet a saját gépeden. Legyen benne Routing és SCSS -t használj a stílusokhoz.
    Kösd össze a kettőt az instrukciók alapján.

# Feladatok

A következő pontok meglétét és működését fogjuk pontozni.

    Kösd be a Bootstrap és Font-Awesome könyvtárakat a projektbe a tanult módon.
    KészÍts egy navigation nevű komponenst, amiben egy alapértelmezett Bootstrap stílusú navbar jelenjen meg.
    A navbar a következő linkeket tartalmazza: Home, Heroes. Kattintásra a kapcsolódó komponens jelenjen meg az alkalmazásban.
    Hozd létre a home és a horeos komponenseket és állítsd be a routing -ban, hogy a '' és 'heroes' útvonalak esetén jelenjenek meg.
    AppComponent: az oldal tetején a navigation jelnjen meg. Alatta legyen az a rész, ahol az oldalak töltődnek be, egy container oszályú divben.
    HomeComponent: jelenjen meg benne egy Jumbotron Bootstrap elem, "Heroes" címmel. A nagy kék gomb, ha rákattintanak, akkor a "/heroes" url-re vigyen, fontos, hogy az Angular routing használatával.
    Készíts egy Hero osztályt, az alábbi tulajdonságokkal (a típusok értelemszerűek legyenek): id, name, superPower, address.
    HeroService: készíts egy service -t, a neve hero legyen. Legyen egy getAll metódusa, ami Hero[] típussal tér vissza, és legalább 5 Hero -t szolgáltat azoknak akik meghívják.
    HeroesComponent: használja a HeroService -t a Hero példányok lekéréséhez. Jelenítse meg a Hero[] elemeit, egy táblázatban egymás alatt.
    Extra pont: legyen egy pipe -al készített szűrő, ami szöveg beírására szűri a táblázatot a name tulajdonság szerint.
    Extra pont: a fejléc sorokra kattintva lehessen a táblázat adatait növekvő sorrendbe rendezni szintén egy pipe használatával.

# Beadás

Határidő: 2021-02-16 12:00