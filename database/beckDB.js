const beckMovies = [
    {
        number: 1,
        title: "Beck 1 - Lockpojken",
        year: 1997,
        description: "En anställd på en förbränningsanläggning utanför Stockholm ser till sin fasa en kropp bli dumpad i en av ugnarna. Ett brutalt mord har begåtts men de enda spåren är ett par tänder och en kodad e-postadress.",
        imdbUrl: "https://www.imdb.com/title/tt0118693",
        tv4playUrl: "https://www.tv4play.se/program/2d50e488dae9ce6ad32f/beck-lockpojken-1",
        runtime: "1h 30m",
        imdbRating: "6.2"
    },
    {
        number: 2,
        title: "Beck 2 - Mannen med ikonerna",
        year: 1997,
        description: "Kommissarie Beck får i uppdrag att lösa ett fall där en rysk kvinna mördats - en utredning där spåren leder till ryska ambassaden.",
        imdbUrl: "https://www.imdb.com/title/tt0139058",
        tv4playUrl: "https://www.tv4play.se/program/0eda9f5a27df3529d1f5/beck-mannen-med-ikonerna-2",
        runtime: "1h 30m",
        imdbRating: "5.6"
    },
    {
        number: 3,
        title: "Beck 3 - Vita nätter",
        year: 1998,
        description: "Ett fall med narkotikasmuggling som kopplas till rave-fester kommer att få personliga konsekvenser för Martin Beck.",
        imdbUrl: "https://www.imdb.com/title/tt0139059",
        tv4playUrl: "https://www.tv4play.se/program/82f126fa93409b1cdd8e/beck-vita-natter-3",
        runtime: "1h 24m",
        imdbRating: "5.9"
    },
    {
        number: 4,
        title: "Beck 4 - Öga för öga",
        year: 1998,
        description: "En rad mord upptäcks runt om i landet, till synes helt utan samband, men alla med samma nämnare: alla offren har fått ögonen utskurna efter de blivit dödade.",
        imdbUrl: "https://www.imdb.com/title/tt0144786",
        tv4playUrl: "https://www.tv4play.se/program/5dba9c994bea72583814/beck-oga-for-oga-4",
        runtime: "1h 29m",
        imdbRating: "6.2"
    },
    {
        number: 5,
        title: "Beck 5 - Pensionat Pärlan",
        year: 1998,
        description: "En liten flickas tragiska död verkar ha ett samband med smuggling av illegala sprängämnen.",
        imdbUrl: "https://www.imdb.com/title/tt0147878",
        tv4playUrl: "https://www.tv4play.se/program/0b798328c892de746314/beck-pensionat-parlan-5",
        runtime: "1h 25m",
        imdbRating: "5.8"
    },
    {
        number: 6,
        title: "Beck 6 - Monstret",
        year: 1998,
        description: "Ett bombhot mot Stockholmspolisen verkar först vara falskt, men snart görs en chockerande upptäckt i den misstänkta väskan.",
        imdbUrl: "https://www.imdb.com/title/tt0155535",
        tv4playUrl: "https://www.tv4play.se/program/19918f7ebb8129a63005/beck-monstret-6",
        runtime: "1h 26m",
        imdbRating: "6.1"
    },
    {
        number: 7,
        title: "Beck 7 - The Money Man",
        year: 1997,
        description: "När Martin Beck utreder en kollegas självmord leder det till en slutgiltig uppgörelse med hans ärkefiende Gavling.",
        imdbUrl: "https://www.imdb.com/title/tt0155536",
        tv4playUrl: "https://www.tv4play.se/program/0d0c61b3202e4852c49d/beck-the-money-man-7",
        runtime: "1h 26m",
        imdbRating: "6.5"
    },
    {
        number: 8,
        title: "Beck 8 - Spår i mörker",
        year: 1997,
        description: "Martin Beck och Gunvald Larsson utreder en rad brutala mord som alla begåtts i Stockholms tunnelbana.",
        imdbUrl: "https://www.imdb.com/title/tt0122394",
        tv4playUrl: "https://www.tv4play.se/program/8e5c1225eeba21cb4aa1/beck-spar-i-morker-8",
        runtime: "1h 25m",
        imdbRating: "6.2"
    },
    {
        number: 9,
        title: "Beck 9 - Hämndens pris",
        year: 2001,
        description: "Två poliser mördas när de ertappar tre brottslingar med stora mängder sprängämnen.",
        imdbUrl: "https://www.imdb.com/title/tt0276808",
        tv4playUrl: "https://www.tv4play.se/program/ef489b998713d100a507/beck-hamndens-pris-9",
        runtime: "1h 31m",
        imdbRating: "6.5"
    },
    {
        number: 10,
        title: "Beck 10 - Mannen utan ansikte",
        year: 2001,
        description: "En hundägare blir brutalt mördad när han tar en kvällspromenad med hunden. Liket hittas med ansiktet bortskuret.",
        imdbUrl: "https://www.imdb.com/title/tt0300983",
        tv4playUrl: "https://www.tv4play.se/program/8e84aebba5b124113bad/beck-mannen-utan-ansikte-10",
        runtime: "1h 30m",
        imdbRating: "6.2"
    },
    {
        number: 11,
        title: "Beck 11 - Kartellen",
        year: 2002,
        description: "Beck får ett fall där en grekisk man hittats mördad i sin restaurang. Spåren leder till en liga i Stockholms krogvärld.",
        imdbUrl: "https://www.imdb.com/title/tt0298753",
        tv4playUrl: "https://www.tv4play.se/program/ea2bcb2ef955d120b8d6/beck-kartellen-11",
        runtime: "1h 28m",
        imdbRating: "5.8"
    },
    {
        number: 12,
        title: "Beck 12 - Enslingen",
        year: 2002,
        description: "Morden på en ung asiatisk kvinna i Stockholm och en äldre man i skärgården visar sig hänga samman.",
        imdbUrl: "https://www.imdb.com/title/tt0303726",
        tv4playUrl: "https://www.tv4play.se/program/10b236c1250b52d22900/beck-enslingen-12",
        runtime: "1h 28m",
        imdbRating: "6.1"
    },
    {
        number: 13,
        title: "Beck 13 - Okänd avsändare",
        year: 2002,
        description: "Beck får ett fall där en revisor hittas mördad på Arlandas parkering, utan biljett och bagage men helt tömda konton.",
        imdbUrl: "https://www.imdb.com/title/tt0306531",
        tv4playUrl: "https://www.tv4play.se/program/49653461d62a8a8a1ae7/beck-okand-avsandare-13",
        runtime: "1h 27m",
        imdbRating: "6.0"
    },
    {
        number: 14,
        title: "Beck 14 - Annonsmannen",
        year: 2002,
        description: "Två brutala fall där kvinnor överfallits i en skog verkar ha en gemensam nämnare i en tidningsannons.",
        imdbUrl: "https://www.imdb.com/title/tt0306530",
        tv4playUrl: "https://www.tv4play.se/program/777d40eba6ce31e23184/beck-annonsmannen-14",
        runtime: "1h 28m",
        imdbRating: "6.2"
    },
    {
        number: 15,
        title: "Beck 15 - Pojken i glaskulan",
        year: 2002,
        description: "Beck får ett fall där modern till en autistisk pojke mördas i sitt hem, och sonen hittas med mordvapnet i handen.",
        imdbUrl: "https://www.imdb.com/title/tt0309348",
        tv4playUrl: "https://www.tv4play.se/program/e6e180358b5419f47f30/beck-pojken-i-glaskulan-15",
        runtime: "1h 28m",
        imdbRating: "6.1"
    },
    {
        number: 16,
        title: "Beck 16 - Sista vittnet",
        year: 2002,
        description: "Beck och hans kollegor får ett fall med tre mördade kvinnor som inte går att identifiera.",
        imdbUrl: "https://www.imdb.com/title/tt0303727",
        tv4playUrl: "https://www.tv4play.se/program/a8c7e8aaef612245cade/beck-sista-vittnet-16",
        runtime: "1h 40m",
        imdbRating: "6.3"
    },
    {
        number: 17,
        title: "Beck 17 - Skarpt läge",
        year: 2006,
        description: "Beck-gruppen får ett fall där en misshandlad kvinna som gått under jorden kan vara nyckeln till ett mord.",
        imdbUrl: "https://www.imdb.com/title/tt0831900",
        tv4playUrl: "https://www.tv4play.se/program/61856228526be78e921a/beck-skarpt-lage-17",
        runtime: "1h 30m",
        imdbRating: "6.4"
    },
    {
        number: 18,
        title: "Beck 18 - Flickan i jordkällaren",
        year: 2006,
        description: "Beck och Gunvald får ett makabert fall där en död flicka hittats i en övergiven jordkällare.",
        imdbUrl: "https://www.imdb.com/title/tt0889575",
        tv4playUrl: "https://www.tv4play.se/program/a5ee028905e50a16990c/beck-flickan-i-jordkallaren-18",
        runtime: "1h 32m",
        imdbRating: "5.9"
    },
    {
        number: 19,
        title: "Beck 19 - Gamen",
        year: 2007,
        description: "Beck får ett fall där Sveriges före detta idrottsminister försvinner, och spåren leder till en illegal spelvärld.",
        imdbUrl: "https://www.imdb.com/title/tt0889576",
        tv4playUrl: "https://www.tv4play.se/program/c9671ad336bfa49959c4/beck-gamen-19",
        runtime: "1h 27m",
        imdbRating: "5.5"
    },
    {
        number: 20,
        title: "Beck 20 - Advokaten",
        year: 2007,
        description: "När en stjärnadvokat hittas mördad verkar det kunna kopplas till hans aktuella fall, men Beck hittar snart andra ledtrådar.",
        imdbUrl: "https://www.imdb.com/title/tt0889574",
        tv4playUrl: "https://www.tv4play.se/program/9f949d3d2357d5877495/beck-advokaten-20",
        runtime: "1h 29m",
        imdbRating: "6.0"
    },
    {
        number: 21,
        title: "Beck 21 - Den japanska shungamålningen",
        year: 2007,
        description: "Martin Beck hans tyske kollega Hans Sperling får ett fall som leder till en kriminell konstvärld.",
        imdbUrl: "https://www.imdb.com/title/tt0963215",
        tv4playUrl: "https://www.tv4play.se/program/9219165906748a5d44ff/beck-den-japanska-shungamalningen-21",
        runtime: "1h 29m",
        imdbRating: "5.8"
    },
    {
        number: 22,
        title: "Beck 22 - Den svaga länken",
        year: 2007,
        description: "Martin Beck och hans kollegor utreder ett fall med en kvinna som blivit våldtagen och mördad i en park.",
        imdbUrl: "https://www.imdb.com/title/tt0958902",
        tv4playUrl: "https://www.tv4play.se/program/72f2f7e3f09546df956b/beck-den-svaga-lanken-22",
        runtime: "1h 32m",
        imdbRating: "6.2"
    },
    {
        number: 23,
        title: "Beck 23 - Det tysta skriket",
        year: 2007,
        description: "Martin Beck och hans kollegor utreder ett fall där två flickor blivit påkörda av ett tåg.",
        imdbUrl: "https://www.imdb.com/title/tt0977307",
        tv4playUrl: "https://www.tv4play.se/program/feabfdc23803e07a5d27/beck-det-tysta-skriket-23",
        runtime: "1h 28m",
        imdbRating: "6.1"
    },
    {
        number: 24,
        title: "Beck 24 - I Guds namn",
        year: 2007,
        description: "Beck och hans kollegor utreder ett mord på en paparazzifotograf.",
        imdbUrl: "https://www.imdb.com/title/tt0919160",
        tv4playUrl: "https://www.tv4play.se/program/f85dfd06fcef0acfed5b/beck-i-guds-namn-24",
        runtime: "1h 27m",
        imdbRating: "6.4"
    },
    {
        number: 25,
        title: "Beck 25 - I stormens öga",
        year: 2009,
        description: "Gunvald misstänks för mord och får Säpo efter sig. Samtidigt jagar Beck en grupp miljökämpar som använder terrormetoder.",
        imdbUrl: "https://www.imdb.com/title/tt1373497",
        tv4playUrl: "https://www.tv4play.se/program/328b3d2a927f8d10a83e/beck-i-stormens-oga-25",
        runtime: "1h 27m",
        imdbRating: "5.9"
    },
    {
        number: 26,
        title: "Beck 26 - Levande begravd",
        year: 2010,
        description: "Beck som tar sig an ett fall där en kvinna hittas levande begravd, men utredningen kompliceras när flera kistor upptäcks.",
        imdbUrl: "https://www.imdb.com/title/tt1373498",
        tv4playUrl: "https://www.tv4play.se/program/db3a7e84259d9495a69b/beck-levande-begravd-26",
        runtime: "1h 26m",
        imdbRating: "6.6"
    },
    {
        number: 27,
        title: "Beck 27 - Rum 302",
        year: 2015,
        description: "Martin Beck och Gunvald Larsson tar sig an ett fall där en ung kvinna hittats mördad på ett hotellrum i centrala Stockholm.",
        imdbUrl: "https://www.imdb.com/title/tt4186386",
        tv4playUrl: "https://www.tv4play.se/program/4faf9b39c585fe6be68e/beck-rum-302-27",
        runtime: "1h 28m",
        imdbRating: "6.3"
    },
    {
        number: 28,
        title: "Beck 28 - Familjen",
        year: 2015,
        description: "En ökänd gangsterboss blir mördad i sitt hem. Beck-gruppen kartlägger alla hans fiender, vilket visar sig vara större delen av Stockholms undre värld.",
        imdbUrl: "https://www.imdb.com/title/tt4186390",
        tv4playUrl: "https://www.tv4play.se/program/c2a752d7733cb5dcaeff/beck-familjen-28",
        runtime: "1h 30m",
        imdbRating: "5.9"
    },
    {
        number: 29,
        title: "Beck 29 - Invasionen",
        year: 2015,
        description: "En död man hittas nergrävd utanför Stockholm. Beck-gruppen tror att mannen kan vara offer för en konflikt inom en islamistisk terrorgrupp. Spåren leder mot ett företag vilket verkar erbjuda svart arbetskraft åt Stockholms mindre nogräknade byggföretag.",
        imdbUrl: "https://www.imdb.com/title/tt4186542",
        tv4playUrl: "https://www.tv4play.se/program/0db9c4f44ded2e1bf12e/beck-invasionen-29",
        runtime: "1h 29m",
        imdbRating: "5.7"
    },
    {
        number: 30,
        title: "Beck 30 - Sjukhusmorden",
        year: 2015,
        description: "Martin Beck och Gunvald Larsson utreder ett fall där en läkare anklagas för mord på en patient.",
        imdbUrl: "https://www.imdb.com/title/tt4186548",
        tv4playUrl: "https://www.tv4play.se/program/8d72f4efe7df76b6fa91/beck-sjukhusmorden-30",
        runtime: "1h 23m",
        imdbRating: "5.8"
    },
    {
        number: 31,
        title: "Beck 31 - Gunvald",
        year: 2016,
        description: "En undersökande journalist hittas mördad. Arbetet med en bok väcker polisens intresse. Men plötsligt står betydligt mer på spel än att hitta mördaren.",
        imdbUrl: "https://www.imdb.com/title/tt5246126",
        tv4playUrl: "https://www.tv4play.se/program/e4630850ed44950b71a5/beck-gunvald-31",
        runtime: "1h 30m",
        imdbRating: "5.9"
    },
    {
        number: 32,
        title: "Beck 32 - Steinar",
        year: 2016,
        description: "Polisen utreder ett dödsfall på en camping. Samtidigt rekryterar polischefen en norsk mordutredare, Steinar Hovland.",
        imdbUrl: "https://www.imdb.com/title/tt5246132",
        tv4playUrl: "https://www.tv4play.se/program/3d83a6c610ea7bb73f01/beck-steinar-32",
        runtime: "1h 31m",
        imdbRating: "6.4"
    },
    {
        number: 33,
        title: "Beck 33 - Vägs ände",
        year: 2016,
        description: "En före detta polis och hans familj mördas brutalt i sitt hem. I villan påträffas stulna vapen som kan kopplas till en kallblodig rånare och mördare.",
        imdbUrl: "https://www.imdb.com/title/tt5246134",
        tv4playUrl: "https://www.tv4play.se/program/2ce5a41b91bb83845063/beck-vags-ande-33",
        runtime: "1h 30m",
        imdbRating: "6.4"
    },
    {
        number: 34,
        title: "Beck 34 - Sista dagen",
        year: 2016,
        description: "Två trafikpoliser blir beskjutna och Beck-gruppen jagar en gärningsman som visar sig ha fler offer på sin lista.",
        imdbUrl: "https://www.imdb.com/title/tt5246142",
        tv4playUrl: "https://www.tv4play.se/program/04de663a72f393b9ae5e/beck-sista-dagen-34",
        runtime: "1h 28m",
        imdbRating: "6.4"
    },
    {
        number: 35,
        title: "Beck 35 - Ditt eget blod",
        year: 2018,
        description: "Beck och Steinar är tillbaka i en thriller där det finns en länk mellan ett mord i Mellanöstern och en försvunnen kvinna i Stockholm.",
        imdbUrl: "https://www.imdb.com/title/tt7067324",
        tv4playUrl: "https://www.tv4play.se/program/fa80f754ccf7fc8a8a5a/beck-ditt-eget-blod-35",
        runtime: "1h 34m",
        imdbRating: "5.9"
    },
    {
        number: 36,
        title: "Beck 36 - Den tunna isen",
        year: 2018,
        description: "Martin Beck är tillbaka i en ny befattning när polisen får ett fall med en omtyckt hockeytränare som hittats knivmördad.",
        imdbUrl: "https://www.imdb.com/title/tt7696124",
        tv4playUrl: "https://www.tv4play.se/program/af47308db130e2ab4a6a/beck-den-tunna-isen-36",
        runtime: "1h 37m",
        imdbRating: "5.8"
    },
    {
        number: 37,
        title: "Beck 37 - Utan uppsåt",
        year: 2018,
        description: "Beck-gruppen får ett fall där en ensamstående mamma, som levt med skyddad identitet, hittats död i sitt hem.",
        imdbUrl: "https://www.imdb.com/title/tt7718830",
        tv4playUrl: "https://www.tv4play.se/program/ebc1b9a238138f5978ff/beck-utan-uppsat-37",
        runtime: "1h 30m",
        imdbRating: "6.1"
    },
    {
        number: 38,
        title: "Beck 38 - Djävulens advokat",
        year: 2018,
        description: "När en restaurangägare blir skjuten får Beck-gruppen ett snårigt mordfall som kommer att bli särskilt känsligt för en av poliserna.",
        imdbUrl: "https://www.imdb.com/title/tt7718840",
        tv4playUrl: "https://www.tv4play.se/program/58edc6973118b516087e/beck-djavulens-advokat-38",
        runtime: "1h 28m",
        imdbRating: "6.1"
    },
    {
        number: 39,
        title: "Beck 39 - Undercover",
        year: 2020,
        description: "När en ung gängmedlem hittas mördad leder Beck-gruppens utredning till ett knarknätverk som redan står under bevakning av Klas Fredén.",
        imdbUrl: "https://www.imdb.com/title/tt11653552",
        tv4playUrl: "https://www.tv4play.se/program/0dec4ece2da45c70ee75/beck-undercover-39",
        runtime: "1h 28m",
        imdbRating: "6.1"
    },
    {
        number: 40,
        title: "Beck 40 - Utom rimligt tvivel",
        year: 2020,
        description: "Under ett ingripande görs ett makabert fynd i bakluckan på en bil, vilket ska leda till en utredning som sätter Beck-gruppen under hård press.",
        imdbUrl: "https://www.imdb.com/title/tt13403370",
        tv4playUrl: "https://www.tv4play.se/program/7c9ca75c34860773c24e/beck-utom-rimligt-tvivel-40",
        runtime: "1h 29m",
        imdbRating: "6.3"
    },
    {
        number: 41,
        title: "Beck 41 - Döden i Samarra",
        year: 2021,
        description: "När en av kandidaterna till Nobels fredspris blir brutalt mördad i centrala Stockholm misstänker Beck-gruppen att det rör sig om ett politiskt mord.",
        imdbUrl: "https://www.imdb.com/title/tt13585338",
        tv4playUrl: "https://www.tv4play.se/program/6e76c083056e97fc4930/beck-doden-i-samarra-41",
        runtime: "1h 29m",
        imdbRating: "5.6"
    },
    {
        number: 42,
        title: "Beck 42 - Den förlorade sonen",
        year: 2021,
        description: "I en skog hittas liket av en man som anmälts saknad fem år tidigare. Det var Martin Beck som en gång hade hand om utredningen av försvinnandet.",
        imdbUrl: "https://www.imdb.com/title/tt13585368",
        tv4playUrl: "https://www.tv4play.se/program/513450d7946cc9b68a40/beck-den-forlorade-sonen-42",
        runtime: "1h 30m",
        imdbRating: "6.3"
    },
    {
        number: 43,
        title: "Beck 43 - Ett nytt liv",
        year: 2021,
        description: "Martin Beck är tillbaka på jobbet efter sin sjukskrivning. Beck-gruppen får ett mordfall där en medlem av en dansk knarkliga hittats död i Stockholm.",
        imdbUrl: "https://www.imdb.com/title/tt16913260",
        tv4playUrl: "https://www.tv4play.se/program/732e9a92b8bbfe666f3d/beck-ett-nytt-liv-43",
        runtime: "1h 28m",
        imdbRating: "6.1"
    },
    {
        number: 44,
        title: "Beck 44 - Rage Room",
        year: 2022,
        description: "En man har hittats brutalt mördad i skogen precis vid ett löpspår. Alex, Steinar och Martin är på plats och börjar planera utredningen.",
        imdbUrl: "https://www.imdb.com/title/tt16913264",
        tv4playUrl: "https://www.tv4play.se/program/ef9b165a4584550fa0c9/beck-rage-room-44",
        runtime: "1h 29m",
        imdbRating: "6.0"
    },
    {
        number: 45,
        title: "Beck 45 - 58 minuter",
        year: 2022,
        description: "När Alex ska medverka i morgon-tv hamnar hon plötsligt mitt i ett gisslandrama. För Beck-gruppen börjar nu en kamp mot klockan för att frita gisslan.",
        imdbUrl: "https://www.imdb.com/title/tt16951950",
        tv4playUrl: "https://www.tv4play.se/program/d10f1a3dda8392237b8c/beck-58-minuter-45",
        runtime: "1h 28m",
        imdbRating: "5.1"
    },
    {
        number: 46,
        title: "Beck 46 - Den gråtande polisen",
        year: 2022,
        description: "Polisen får massiv kritik efter en dödsskjutning av en 14-åring. Snart sker ett attentat mot en buss som har ett av sina stopp vid Polishögskolan.",
        imdbUrl: "https://www.imdb.com/title/tt16952010",
        tv4playUrl: "https://www.tv4play.se/program/2fe2182cf4b0ac15ef33/beck-den-gratande-polisen-46",
        runtime: "1h 28m",
        imdbRating: "6.3"
    },
    {
        number: 47,
        title: "Beck 47 - Dödsfällan",
        year: 2022,
        description: "Polisaspirant Vilhelm Beck är ute på praktik med sin handledare när han vid ett rutinmässigt inbrottsfall hittar en död 17-årig pojke på brottsplatsen. Det blir direkt ett fall för Alex, Martin och de andra i Beck-gruppen.",
        imdbUrl: "https://www.imdb.com/title/tt23805828",
        tv4playUrl: "https://www.tv4play.se/program/692a2ec3ed64b51d4f2c/beck-dodsfallan-47",
        runtime: "1h 28m",
        imdbRating: "6.3"
    },
    {
        number: 48,
        title: "Beck 48 - Quid Pro Quo",
        year: 2023,
        description: "Beck-gruppen får ett tillsynes rutinmässigt mordfall som tar en oväntad vändning när Säpo intresserar sig för utredningen.",
        imdbUrl: "https://www.imdb.com/title/tt25405622",
        tv4playUrl: "https://www.tv4play.se/program/d4a87d9044f42db6f9fb/beck-quid-pro-quo-48",
        runtime: "1h 29m",
        imdbRating: "6.0"
    },
    {
        number: 49,
        title: "Beck 49 - Inferno",
        year: 2023,
        description: "Beck-gruppen får ett fall där en tvåbarnspappa mördats på en bensinstation. Samtidigt är Josef avstängd efter en incident med en säkerhetspolis.",
        imdbUrl: "https://www.imdb.com/title/tt26492115",
        tv4playUrl: "https://www.tv4play.se/program/d6ee02d5cdc8baf84174/beck-inferno-49",
        runtime: "1h 33m",
        imdbRating: "6.9"
    },
    {
        number: 50,
        title: "Beck 50 - Dödläge",
        year: 2024,
        description: "Beck-gruppen utreder mordet på en känd kriminell man som tidigare deltagit i ett stort rån. Men fallet ska snart ta en dramatisk vändning för polisen.",
        imdbUrl: "https://www.imdb.com/title/tt26492116",
        tv4playUrl: "https://www.tv4play.se/program/397859805c2f370250b7/beck-dodlage-50",
        runtime: "1h 28m",
        imdbRating: "6.2"
    },
    {
        number: 51,
        title: "Beck 51 - Vilhelm",
        year: 2024,
        description: "Ett rån i en lyxvåning slutar i ett mord som liknar en avrättning. En av de första poliserna på plats är Vilhelm som snart startar en egen utredning.",
        imdbUrl: "https://www.imdb.com/title/tt31170265",
        tv4playUrl: "https://www.tv4play.se/program/7e4f84f9836421086dc2/beck-vilhelm-51",
        runtime: "1h 29m",
        imdbRating: "5.9"
    },
    {
        number: 52,
        title: "Beck 52 - Den osynlige mannen",
        year: 2025,
        description: "Beck-gruppen får ett mordfall med koppling till en ny typ av manlighetsideal online. Det visar sig också ha spår till en av Martin Becks utredningar.",
        imdbUrl: "https://www.imdb.com/title/tt31170273",
        tv4playUrl: "https://www.tv4play.se/program/8e21ad7debd368a25066/beck-den-osynlige-mannen-52",
        runtime: "1h 25m",
        imdbRating: "5.8"
    },
    {
        number: 53,
        title: "Beck 53 - Ur askan",
        year: 2025,
        description: "En pastor har omkommit i en mordbrand på en församlingsgård. När Alex och Josef kommer dit upptäcker hon en person från sitt förflutna.",
        imdbUrl: "https://www.imdb.com/title/tt37828316",
        tv4playUrl: "https://www.tv4play.se/program/77a79c143f8abbde3284/beck-ur-askan-53",
        runtime: "1h 24m",
        imdbRating: "5.1"
    }
];
