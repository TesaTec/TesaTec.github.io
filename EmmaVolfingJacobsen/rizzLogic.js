function genereteRizz() {
    const rizz = [
        "jeg er ikke nogen pirat, men jeg var heldig nok at finde en skat som dig", "Må jeg spørge dig om noget? Hvis du er her hvem styrer så himmelen?", "Are you a door? Because you are A-door-able",
        "Matematik er forvirrende. Man taler altid om x og y, men aldrig om dig og mig.", "Jeg tror der er noget galt med mine øjne jeg kan simpelthen ikke få dem af dig", "Er du en tryllekunstner? Fordi hver gang jeg kigger på dig, forsvinder alle andre",
        "De siger intet vare for evigt, så vil du være mit intet?", "Er du et kamera? Fordi hver gang jeg kigger på dig for jeg lyst til at smile", "Er du en seng? Fordi jeg vil bare gerne sove med dig for evigt",
        "Hey kunne ikke falde i søvn, så faldt for dig i stedet", "Hvis du var et rum var du en kælder, fordi jeg vil gerne putte børn i dig", "Dine øjne minder mig om Ikea: De er så lette at fare vildt i",
        "Jeg slog dig lige op i ordbogen og du betyder alt for mig", "Mit love language er at ødelægge min døgnrytme, bare for at kunne tale med dig en smule mere😘", "Min internet connection er ikke så god lige nu, men den connection vi har, er out of this world",
        "Du er ligesom min fars bælte, jeg ser dig komme og mit hjerte begynder at banke hurtigt", "Jeg er en kuglepen, du er en highlighter.<br>Jeg skriver vores fremtid og du gør den lysere", "Må jeg følge dig hjem? Mine forældre har nemlig altid sagt jeg skulle følge mine drømme",
        "Er du en toaster? Fordi et bad med dig ville sende mig direkte til himmelen", "Du burde lave din egen Spotify, fordi jeg har lyst til at hører dig hele dagen lang.", "Du skal huske, hver dag er ikke smuk, men du er smuk hver dag ❤️",
        "Ville vise dig noget smukt her til morges, men går ud fra du allerede har set dig selv i et spejl", "Er lidt jaloux på din pude. Du cuddler med den hver nat i stedet for mig...", "I thought happiness starts with H, but mine starts with U",
        "You can't spell autism without U + I", "Er du morgenmad? Fordi du er den vigtigeste del af min dag", "Hey er du Nord Korea? Fordi jeg kan ikke forlade dig",
        "Er du kobber og tellur? Fordi du er CuTe", "Den her sætning er usynlig, hvis du kan se den, så er det fordi jeg er dybt forelsket i dig", "Hvad alarm skal jeg slå til for at vågne op ved siden af dig?",
        "Hvad er forskellen på dig og snot? Jeg kan få snot ud af hovedet", "Hug without U is dangerous", "Hvis stjernene skinnede hver gang jeg tænkte på dig, ville natten aldrig blive mørk",
        "If i could rewrite the alphabet, I would for sure put U and I together", "Var det et jordskælv, eller rystede du bare hele min verden?", "Har du et navn, eller kan jeg bare kalde dig min?",
        "Jeg troede ikke på kærlighed ved første blik, men det var før jeg så dig", "Jeg er ikke nogen spåmand, men kan helt klart se en fremtid med dig", "Hvis jeg var en kat, ville jeg tilbringe alle mine ni liv sammen med dig",
        "Er du en lommelygte? Fordi du har helt klart lyst min dag op", "Hver gang du smiler, føles det som om at sommeren har valgt at blive her lidt længere", "Jeg var ikke sikker på, hvad perfektion var, før jeg mødte dig",
        "Dit navn må være Google, fordi du har alt hvad jeg leder efter", "Jeg er ikke sikker på hvad magi du udfører på mig, men hver gang jeg ser på dig, kan jeg ikke lade vær med at smile", "Er du en bølge? Fordi du har skyllet benene væk under mig",
        "Jeg er måske ikke en superhelt, men jeg vil altid være der for dig, når du har brug for det", "Er der varmt herinde, eller er det bare din skønhed der varmer rummet op?", "Du må være en tyv, fordi du har stjålet mint hjerte",
        "Dine forældre må være tyve, fordi de har stjålet nattehimmelens smukkeste stjerner og lavet dem om til dine øjne", "Jeg er måske ikke et geni, men jeg kan komme med en million grunde til, at vi skulle være sammen", "Hvis du er en film, ville du være en blockbuster. Fordi jeg ville se på dig om og om igen",
        "Du er ikke bare en drøm, du er min favoritdrøm", "Jeg behøver ikke at ønske når jeg ser et stjerneskud, jeg har jo allerede dig", "Er du en blomst? Fordi du har lige gjort min dag smukkere",
        "Hvis kærlighed var en forbrydelse, så vil jeg gerne være din medskyldige", "Du må da være træt, efter sådan at have faret rundt i mine tanker hele dagen", "Dit smil er som en underskrift, jeg kan genkende det over alt",
        "Er du en magnet? Fordi jeg føler mig ekstrem tiltrukket af dig", "Jeg er ikke nogen astrolog, men er ret så sikker på stjernerne har ført os to sammen", "Dit smil burde være ulovligt, fordi det stjæler alles opmærksomhed",
        "Hvis jeg havde en øre for hver gang jeg tænkte på dig, ville jeg være verdens rigeste person", "Jeg ville ønske jeg var din skygge, så jeg altid kunne følge med dig", "Jeg er ikke noget kompas, men mine tanker peger altid på dig",
        "Du er som en sang, jeg ikke kan få ud af hovedet", "Hvis vi var på et kunstmuseum, ville du være hovedværket", "Er du en ildflue? Du lyser ihvertfald op i mit liv",
        "Er du lava? Du får ihvertfald mit hjerte til at smelte", "Du er ikke bare en snack, du er hele måltidet", "Hvis du var en dessert, ville du være uimodståelig",
        "Du må være en lækker ingrediens, fordi du gør ihvertfald mit liv mere smagfuldt", "Hvis kærlighed og lykke var et puslespil, ville du være den sidste brik som fuldendte det", "Er du et ødelagt ur? Fordi tiden går i stå når jeg ser på dig",
        "Er du et eventyr? Fordi jeg vil gerne udforske hver en side af dig", "Hvis der var en konkurrence for at være bedårende, ville du vinde førstepræmien hver gang.", "Hvis smil var en valuta, ville du gøre mig til verdens rigeste person",
        "Er du en regnbue? Fordi du bringer altid farve ind i mine grå dage", "Hvis du var en bog, ville jeg læse alle sider", "Er du en tidsrejser? Fordi hver gang jeg kigger på dig, føles alt andet som fortiden",
        "Er du en detektiv? Fordi du har lige løst mysteriet om hvor mit hjerte var forsvundet hen", "Hvis jeg havde en stjerne for hver gang du fik mig til at føle mig lykkelig, så ville jeg eje en hel galakse", "Er du en trommeslager? Fordi du ved hvordan du får mit hjerte til at slå hurtigt",
        "Hvis øjne kun er lavet til at kigge med, så er mine øjne kun lavet for at kigge på dig", "Er du et maleri? Fordi jeg kunne stå og kigge på din skønhed for evigt", "Hvis kærlighed var tid, ville jeg give dig evigheden",
        "Du må være en arkitekt, fordi du har designet en speciel plads til dig selv i mit hjerte", "Er di et kompas? Fordi jeg vil altid finde vejen hjem til dig", "Du er ikke bare en dråbe i havet, du er hele havet i en dråbe",
        "Er du en magisk bønne? Fordi du har fået mit hjerte til at vokse på måder jeg ikke troede var muligt", "Du er ikke bare en desination i mit liv, du er hele rejsen", "Hvis du var et dyr ville du være en enhjørning, fordi du er virkelig unik",
        "Du er som en kop varm kakao på en iskold dag - Helt uimodståelig og veltrængt", "Er du en kalender? Fordi mine bedste dage er altid med dig", "Hvis vi var stjerner ville vi være et dobbeltstjernesystem, fordi vi ville altid være bundet til hinanden",
        "Er du en flamme? Fordi mit hjerte tænder hver gang jeg ser på dig", "Er du en solopgang? Fordi du gør altid starten på min dag smuk", "Hvis du var et sprog, vill jeg bruge hele livet på at lære dig at kende",
        "Hvis du var en by, ville jeg bruge lang tid på at udforske dine gader", "Du er som den første sne - magisk, fortryllende og utrolig smuk", "Hvis du var et eventyr, ville du være den slags eventyr, der slutter med: Og de levede lykkeligt til deres dages ende",
        "Ikke et rizz, bare en lille reminder, JEG ELSKER DIG"

    ];
    var number = Math.random() * rizz.length;
    number = Math.floor(number);
    document.getElementById("rizz").innerHTML = rizz[number];
}