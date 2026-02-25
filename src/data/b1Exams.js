/**
 * B1 German Exam Data
 *
 * Schema designed for easy extension:
 * - Add more exams by appending to B1_EXAMS array
 * - Each exam is self-contained with source, metadata, and sections
 * - Question types: trueFalse, multipleChoice, matching, opinion, cloze, wordBankCloze
 *
 * Sources:
 * - Goethe-Zertifikat B1 Modellsatz Erwachsene (2015)
 * - telc Deutsch B1 Übungstest 1 (2020)
 */

export const B1_EXAMS = [
  // ─── EXAM 1: GOETHE B1 MODELLSATZ ───
  {
    id: "goethe-b1-modellsatz",
    source: "goethe",
    title: "Goethe-Zertifikat B1 Modellsatz",
    subtitle: "Modellsatz Erwachsene",
    year: 2015,
    totalItems: 30,
    timeMinutes: 65,
    sections: [
      // ── LESEN TEIL 1: Richtig/Falsch ──
      {
        id: "lesen-1",
        title: "Lesen Teil 1 – Korrespondenz lesen",
        type: "trueFalse",
        timeMinutes: 10,
        instructions: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
        passage: `SusannesAlltagsBlog.at — Mein Alltag, meine Gedanken, mein Leben ...

Donnerstag, den 23. Juni

Was mir heute passiert ist, das glaubt mir keiner: Als ich zu Mittag nichts ahnend in der Küche beim Kochen stand, läutete mein Handy. Eine Frauenstimme erklärte mir, dass meine Brieftasche in der Bankfiliale abgegeben worden war und ich sie dort abholen könnte. Mir wurde ganz heiß – mir war noch gar nicht aufgefallen, dass sie fehlte. Und ich hatte ja auch noch relativ viel Bargeld eingesteckt! Schnell holte ich meine Handtasche hervor und suchte nach der Brieftasche. Es stimmte! Auch nach längerem Kramen in der Tasche konnte ich sie nicht finden. Mein Geld war tatsächlich verschwunden!

Ich machte mich also auf den Weg zur Bank und überlegte, wo ich meine Brieftasche liegen gelassen hatte: Sicherlich im Supermarkt an der Kasse. Jedenfalls kam ich bei der Bank an und war schon gespannt darauf zu erfahren, wo meine Brieftasche gefunden worden war und natürlich, ob etwas fehlte. Die Bankangestellte teilte mir mit, dass ein junger Mann die Brieftasche abgegeben hatte. Er hatte sie auf dem Parkplatz vor dem Supermarkt gefunden und wollte sie eigentlich ins Fundbüro bringen – wie man es in so einem Fall eben macht. Der Weg dorthin war für ihn zu weit und so suchte er nach einer anderen Möglichkeit, mir die Brieftasche zurückzugeben. Das muss man sich einmal vorstellen: Er war so clever, dass er auf der Bankomatkarte nach meinem und dem Namen meiner Bank suchte … Die Bank würde ja die Kontaktdaten zu meinem Namen haben und könnte mich so anrufen. Er fuhr in die nächste Filiale meiner Bank und dank der Computervernetzung der Filialen konnte meine Telefonnummer schnell herausgefunden werden. Da stand ich nun mit meiner Brieftasche, die mir beim Verlassen des Supermarktes aus der Handtasche gerutscht sein muss. Zum Glück war alles noch da! Ich bin sooo froh, dass diese Episode so gut ausgegangen ist.

Nun weiß ich leider gar nicht, wie ich dem ehrlichen Finder danken kann. Vielleicht liest er ja diesen Blogeintrag oder es liest ihn jemand, dem er die Geschichte erzählt hat: „Vielen, vielen Dank, lieber Finder!\u0022

Bis bald
eure Susanne`,
        questions: [
          { id: 1, text: "Erst durch den Anruf bemerkte Susanne das Fehlen ihrer Brieftasche.", answer: "richtig" },
          { id: 2, text: "Susanne glaubte, die Brieftasche beim Bezahlen vergessen zu haben.", answer: "richtig" },
          { id: 3, text: "Der Finder hatte die Brieftasche ins Fundbüro gebracht.", answer: "falsch" },
          { id: 4, text: "Die Telefonnummer der Bank war in der Brieftasche.", answer: "falsch" },
          { id: 5, text: "In Susannes Brieftasche fehlte nichts.", answer: "richtig" },
          { id: 6, text: "Susanne konnte dem Finder persönlich für seine Ehrlichkeit danken.", answer: "falsch" },
        ],
      },

      // ── LESEN TEIL 2: Multiple Choice ──
      {
        id: "lesen-2",
        title: "Lesen Teil 2 – Information und Argumentation verstehen",
        type: "multipleChoice",
        timeMinutes: 20,
        instructions: "Lesen Sie den Text aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        articles: [
          {
            passage: `Ein Dorf für grüne Energie

Das Dorf Feldheim in Brandenburg macht sich unabhängig von Öl und Kohle. Seit Kurzem deckt das Dorf seinen kompletten Strombedarf und drei Viertel des Wärmebedarfs durch moderne Energien. „Das funktioniert mithilfe einer modernen Anlage für Bio-Gas\u0022, erklärt der Diplom-Physiker Eckhard Meier. „Da kommen Abfall von den Tieren, Getreide und Holz rein und werden erwärmt. Ein Motor verbrennt das Gas und erzeugt dabei Wärme. Der Motor treibt dann einen Generator an, der Strom produziert.\u0022

Entstanden ist die Idee des „Bio-Energiedorfs\u0022 an der Universität Göttingen. Ziel der Wissenschaftler war es zu zeigen, dass es möglich ist, ein Dorf komplett mit erneuerbaren Energien zu versorgen und damit einen Beitrag zum Klimaschutz zu leisten. Tatsächlich: Die Bio-Gasanlage erzeugt jährlich doppelt so viel Strom wie die Gemeinde verbraucht. Der Rest wird in das Stromnetz abgegeben und kostenlos anderen Dörfern zur Verfügung gestellt. Passt das Konzept auch für andere Dörfer? „Im Prinzip schon\u0022, meint Eckhard Meier. Die technischen Anlagen könnten an anderen Orten genauso aufgebaut werden – der Raumbedarf ist gering. Man benötigt allerdings vor allem eines: aktive und begeisterte Einwohner!`,
            source: "aus einer deutschen Zeitung",
            questions: [
              {
                id: 7,
                text: "In diesem Text geht es um ...",
                options: [
                  { label: "a", text: "die neue Technologie von Eckhard Meier." },
                  { label: "b", text: "die umweltfreundliche Stromproduktion in Feldheim." },
                  { label: "c", text: "einen Studiengang an der Universität Göttingen." },
                ],
                answer: "b",
              },
              {
                id: 8,
                text: "Die Wissenschaftler wollten zeigen, dass ...",
                options: [
                  { label: "a", text: "ein ganzes Dorf von modernen Energien leben kann." },
                  { label: "b", text: "eine Bio-Gasanlage mehr Strom produziert, als ein Dorf braucht." },
                  { label: "c", text: "man größere Mengen Strom sparen kann." },
                ],
                answer: "a",
              },
              {
                id: 9,
                text: "Damit die Idee auch in anderen Dörfern funktioniert, ...",
                options: [
                  { label: "a", text: "benötigt man viel Geld." },
                  { label: "b", text: "braucht man genug Platz für die Technik." },
                  { label: "c", text: "muss die Bevölkerung dafür sein." },
                ],
                answer: "c",
              },
            ],
          },
          {
            passage: `Tour durch Murtens Geschichte

Mit der Rundfahrt „Zeitreise per Velo\u0022 können Touristen das Städtchen Murten und seine Geschichte sportlich neu entdecken. Die Tour startet am Bahnhof von Murten, wo die sportlichen Teilnehmer auf das eigene oder ein gemietetes Velo steigen. Die weniger sportlichen und jene, die es schon immer ausprobieren wollten, steigen aufs Elektro-Velo. Dieses kann ebenfalls am Bahnhof gemietet werden.

Vom Bahnhof führt der Weg auf den historischen Hügel, wo Karl der Kühne sein Hauptquartier aufbaute, bevor sein Heer im Jahr 1476 besiegt wurde. Die Sportlichen kommen bei der Fahrt auf den Hügel ins Schwitzen, während die E-Biker ganz einfach den Elektromotor nutzen. Oben angekommen kann man die wunderbare Aussicht auf den Murtensee genießen. Nach einer kurzen Pause geht es weiter nach Merlach. Dort steht ein Denkmal für Soldaten, die in der Schlacht bei Murten 1476 umgekommen sind. Danach geht die Fahrt zum Hafen und in die Altstadt. Unterwegs erfahren die Velofahrer vieles über die Region.

„Mit der Velorundfahrt für Gruppen wollen wir unser Angebot für aktive Radfahrer erweitern\u0022, sagt der Geschäftsführer von Murten Tourismus. Damit soll sowohl das Gebiet für Velo-Touristen interessant gemacht als auch der Trend zum E-Bike unterstützt werden.

(Velo = Schweizer Standard für „Fahrrad\u0022)`,
            source: "aus einer Schweizer Broschüre",
            questions: [
              {
                id: 10,
                text: "In diesem Text geht es darum, dass …",
                options: [
                  { label: "a", text: "die Geschichte von Murten neu erzählt wird." },
                  { label: "b", text: "es ein neues Tourismus-Angebot gibt." },
                  { label: "c", text: "man in Murten neue Velo-Wege bauen will." },
                ],
                answer: "b",
              },
              {
                id: 11,
                text: "Für die Rundfahrt ...",
                options: [
                  { label: "a", text: "braucht man ein eigenes Velo." },
                  { label: "b", text: "muss man nicht sportlich sein." },
                  { label: "c", text: "sollte man mit der Bahn anreisen." },
                ],
                answer: "b",
              },
              {
                id: 12,
                text: "Der Geschäftsführer von Murten Tourismus will, dass ...",
                options: [
                  { label: "a", text: "es in Murten mehr Stadtführungen für Gruppen gibt." },
                  { label: "b", text: "die Leute normale Velos statt Elektro-Velos benutzen." },
                  { label: "c", text: "mehr Velo-Touristen in die Region kommen." },
                ],
                answer: "c",
              },
            ],
          },
        ],
      },

      // ── LESEN TEIL 3: Matching ──
      {
        id: "lesen-3",
        title: "Lesen Teil 3 – Zur Orientierung lesen",
        type: "matching",
        timeMinutes: 10,
        instructions: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen A bis J. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
        context: "Nach dem Ende Ihres gemeinsamen Deutschkurses möchten einige Ihrer Kolleginnen und Kollegen weiter Deutsch lernen und suchen dafür passende Möglichkeiten.",
        options: [
          { label: "a", text: "Schweizer Autoren, leicht gemacht – Vereinfachte Originalversionen literarischer Kurzgeschichten, Romane und Gedichte für Deutschlerner. www.schweizer-leseverlag.ch" },
          { label: "b", text: "Trainingsprogramm Deutsch – Lernportal im Internet: 10 Kurslektionen für Anfänger und Fortgeschrittene, Grammatikerklärungen, alle Übungen online. www.sprachenlernen.de" },
          { label: "c", text: "Deutsch in der Schweiz – Intensivkurse 20-30 Wochenstunden, Schreibkurse (auch als Fernstudium!), Sommerkurse für Jugendliche und Erwachsene, Kurs: Deutsch im Hotel. Nur Tageskurse." },
          { label: "d", text: "Job & Sprache-Net – Jobs für Deutschlernende in Deutschland, Österreich und der Schweiz. Arbeitsbereiche Hotel und Restaurant. Dauer: bis zu 3 Monate (Juni–August). Unterkunft und Verpflegung werden übernommen." },
          { label: "e", text: "Sprachschule ORION sucht engagierte Trainer/Trainerinnen (Vollzeit). Kurszeiten 8:00–17:00 h, Niveaus A1–C1, allgemeine und berufsbezogene Sprachkurse." },
          { label: "f", text: "Deutsch erLesen – Magazin für Deutschinteressierte im In- und Ausland. Erscheint einmal im Monat, enthält aktuelle Originalartikel aus der deutschen Presse." },
          { label: "g", text: "Verlag für deutsche Literatur sucht Lektor/Lektorin für junge deutsche Autoren. Verlagsprogramm: Romane, Gedichtbände und Hörbücher." },
          { label: "h", text: "Deutsch in Linz – Deutsch-Intensivkurse Mo–Fr 9:30–13h und 14:00–17h. Kurse für Berufstätige mit flexiblen Kurszeiten (Termine nach Wunsch). Online-Einstufungstest." },
          { label: "i", text: "Sprache und Kultur in Wien – Deutschkurse ganzjährig! Spezialangebote für den Sommer." },
          { label: "j", text: "Neues Computerprogramm von DIGITAL LEARNING – Für Büromanagement und Buchhaltung in englischer und deutscher Sprache." },
        ],
        questions: [
          { id: 13, text: "Leon möchte im Sommer im Tourismus-Bereich arbeiten, um sein Deutsch zu verbessern.", answer: "d" },
          { id: 14, text: "Giovanna sucht deutsche Hörbücher, damit sie unterwegs Deutsch lernen kann.", answer: "0" },
          { id: 15, text: "Mirjeta hat keine Zeit für einen Kurs, möchte sich aber regelmäßig über Neuigkeiten aus Deutschland informieren.", answer: "f" },
          { id: 16, text: "Maria möchte am Computer Deutsch lernen.", answer: "b" },
          { id: 17, text: "Susan liest am liebsten Literatur, wenn die Texte nicht zu schwierig sind.", answer: "a" },
          { id: 18, text: "Miroslav will den schriftlichen Ausdruck verbessern, weil er im Studium viel schreiben muss.", answer: "c" },
          { id: 19, text: "Juan kann nur am Abend einen Kurs besuchen.", answer: "h" },
        ],
      },

      // ── LESEN TEIL 4: Ja/Nein Opinion ──
      {
        id: "lesen-4",
        title: "Lesen Teil 4 – Information und Argumentation verstehen",
        type: "opinion",
        timeMinutes: 15,
        instructions: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
        topic: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über das Verbot von Videospielen, in denen viel Gewalt vorkommt (sogenannte „Killerspiele\u0022).",
        opinions: [
          {
            id: 20,
            person: "Stefan, 19, Graz",
            text: "Ich könnte mir vorstellen, dass ein Verbot die gegenteilige Wirkung hätte, denn ein verbotenes Spiel ist doch noch interessanter als ein nicht verbotenes! Außerdem ist es gar nicht möglich, alle Killerspiele abzuschaffen, weil es davon schon viel zu viele gibt. Mein Fazit: Warum „Killerspiele\u0022 verbieten, wenn es im Endeffekt sowieso alle spielen und das Ganze gerade durch ein Verbot noch interessanter wird?",
            answer: "nein",
          },
          {
            id: 21,
            person: "Dagmar, 23, Leipzig",
            text: "Wer entscheidet letztlich darüber, welche Spiele man nicht braucht? Dürfen diese Menschen dann auch darüber entscheiden, welche Bücher, Filme oder Musik wir nicht brauchen? Viel wichtiger ist es doch, dass Kinder und Jugendliche lernen, selbst zwischen virtueller und realer Gewalt zu unterscheiden!",
            answer: "nein",
          },
          {
            id: 22,
            person: "Kathleen, 49, Cuxhaven",
            text: "„Töten auf Probe\u0022 soll erlaubt sein? Das bedeutet: Mal schnell zu üben, wie man jemanden umbringt, ist eine Freizeitbeschäftigung. Wie zynisch kann man sein? Nicht jeder wird zum Glück zum Monster, der sich mit so viel Gewalt und Zerstörung beschäftigt. Die Einstellung dahinter ist aber Ausdruck einer unglaublichen Gleichgültigkeit. Das muss man stoppen, und zwar schnell.",
            answer: "ja",
          },
          {
            id: 23,
            person: "Marius, 34, St. Gallen",
            text: "Ich spiele sogenannte Killerspiele wie CaDu seit bald drei Jahren regelmässig. Ich habe eine kleine Tochter, eine Frau und einen Job und spiele für den Ausgleich. Nur weil es mal dazu kommt, dass einer auf dieser Welt das Spiel als Realität sieht und durchdreht, müssen dann all die anderen ein Verbot hinnehmen? Es wäre besser, die Altersbeschränkung auf 18 Jahre festzulegen und sie auch strikt einzuhalten.",
            answer: "nein",
          },
          {
            id: 24,
            person: "Jonny, 21, Berlin",
            text: "„Killerspiele\u0022 machen schnell aggressiv und man wird davon abhängig. Außerdem besteht die Gefahr, dass jemand nicht mit solchen Spielen umgehen kann und zum Nachahmungstäter wird. Das sind nur zwei Gründe, warum man gegen diese Spiele endlich etwas tun sollte.",
            answer: "ja",
          },
          {
            id: 25,
            person: "Robert, 18, Winterthur",
            text: "In dieser Diskussion fehlt immer die genaue Kenntnis! Meistens ist es bei sogenannten „Killerspielen\u0022 nämlich so, dass man in einem Team spielt. Ein solches Spiel stärkt also den Teamgeist. Außerdem steht die Taktik im Vordergrund und nicht eine bestimmte Methode, jemanden umzubringen. So wird das taktische bzw. logische Denken gefördert!",
            answer: "nein",
          },
          {
            id: 26,
            person: "Marinette, 38, Frankfurt",
            text: "Ich denke, dass gewisse Situationen oder Dinge einen Menschen dazu bringen können, etwas zu tun, das er sonst nicht tun würde. Das kann gerade bei sogenannten „Killerspielen\u0022 der Fall sein. Deshalb scheint mir ein Verbot sinnvoll zu sein, auch wenn so ein Verbot allein wahrscheinlich nicht viel nützt, denn Killerspiele sind ja nur eine ‚Inspirationsquelle' für Gewalt.",
            answer: "ja",
          },
        ],
      },

      // ── LESEN TEIL 5: Multiple Choice ──
      {
        id: "lesen-5",
        title: "Lesen Teil 5 – Schriftliche Anweisung verstehen",
        type: "multipleChoice",
        timeMinutes: 10,
        instructions: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        context: "Sie informieren sich über die Hausordnung des Dresdner Berufsbildungszentrums BZW, in dem Sie einen Kurs gebucht haben.",
        articles: [
          {
            passage: `HAUSORDNUNG

Unterrichtszeiten: Die vereinbarten Unterrichtszeiten sind verbindlich. Ist die Lehrperson zehn Minuten nach Unterrichtsbeginn nicht da, informiert die Klassenvertretung das Sekretariat.

Ordnung: In sämtlichen Räumen und Anlagen unserer Schule ist auf Ordnung und Sauberkeit zu achten. Schulräume, Einrichtungen und Anlagen sind sorgfältig zu benützen. Außerhalb der Unterrichtszeiten dürfen sich Lernende nicht in den Klassenräumen aufhalten. Es ist untersagt, in den Klassenräumen etwas an die Wände zu kleben oder zu schreiben und Schulmöbel in andere Räume zu bringen. Mitarbeitende und Lernende, die Schäden feststellen, melden diese dem Sekretariat.

Störungen: Mitarbeitende und Lernende sorgen dafür, dass der Schulbetrieb nicht gestört wird.

Alkohol- und Drogenkonsum: Der Konsum von Alkohol, illegalen Drogen sowie anderen psychoaktiven Substanzen ist auf dem gesamten Schulareal und während schulischer Veranstaltungen (einschließlich aller Pausen) verboten. In Ausnahmefällen kann die Schulleitung den Konsum von Alkohol erlauben.

Rauchen: Rauchen ist nur im Freien beziehungsweise in den dafür vorgesehenen Zonen gestattet. Wir bitten darum, die aufgestellten Aschenbecher zu benutzen.

Diebstahl: Es empfiehlt sich, Wertsachen und Bargeld sorgfältig aufzubewahren. Die Schule stellt den Lernenden und Mitarbeitenden kostenlos Schließfächer zur Verfügung. Für verlorene Schlüssel wird eine Gebühr von Euro 50,- erhoben. Die Schule übernimmt für Diebstähle keine Haftung.

Fundgegenstände: Fundgegenstände bitte im Sekretariat abgeben.

Parkplätze: Auf dem Schulareal stehen keine Gratis-Autoparkplätze zur Verfügung. Fahrräder müssen in den dafür vorgesehenen Fahrradkeller gebracht und abgeschlossen werden. Mopeds und Motorräder sind auf dem Schulareal nicht erlaubt.`,
            questions: [
              {
                id: 27,
                text: "Schüler …",
                options: [
                  { label: "a", text: "dürfen keine Fahrräder mit zur Schule bringen." },
                  { label: "b", text: "dürfen ihre Fahrräder auf den Schulhof stellen." },
                  { label: "c", text: "müssen ihre Fahrräder in einen speziellen Raum stellen." },
                ],
                answer: "c",
              },
              {
                id: 28,
                text: "Für die Klassenräume des BZW gilt:",
                options: [
                  { label: "a", text: "Schüler dürfen keine Poster aufhängen." },
                  { label: "b", text: "Schüler müssen dort selber aufräumen." },
                  { label: "c", text: "Schüler können dort nach dem Unterricht lernen." },
                ],
                answer: "a",
              },
              {
                id: 29,
                text: "Um die verschließbaren Fächer benutzen zu können, muss man …",
                options: [
                  { label: "a", text: "einen Schlüssel im Sekretariat verlangen." },
                  { label: "b", text: "einmalig 50,- Euro zahlen." },
                  { label: "c", text: "Schüler sein oder im BZW arbeiten." },
                ],
                answer: "c",
              },
              {
                id: 30,
                text: "Das Trinken von Alkohol …",
                options: [
                  { label: "a", text: "kann von der Schulleitung genehmigt werden." },
                  { label: "b", text: "muss der Lehrperson gemeldet werden." },
                  { label: "c", text: "ist ohne Ausnahme verboten." },
                ],
                answer: "a",
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── EXAM 2: TELC B1 ÜBUNGSTEST 1 ───
  {
    id: "telc-b1-uebungstest-1",
    source: "telc",
    title: "telc Deutsch B1 Übungstest 1",
    subtitle: "Zertifikat Deutsch",
    year: 2020,
    totalItems: 40,
    timeMinutes: 90,
    sections: [
      // ── LESEN TEIL 1: Heading Matching ──
      {
        id: "lesen-1",
        title: "Leseverstehen Teil 1 – Globalverstehen",
        type: "matching",
        timeMinutes: null,
        instructions: "Lesen Sie die Überschriften a–j und die Texte 1–5. Finden Sie für jeden Text die passende Überschrift. Sie können jede Überschrift nur einmal benutzen.",
        options: [
          { label: "a", text: "Immer mehr deutsche Familien reisen mit der Bahn" },
          { label: "b", text: "Buchtipp: Hilfe bei Schlafproblemen" },
          { label: "c", text: "Der Computer: Liebstes Hobby von Deutschlands Frauen" },
          { label: "d", text: "Neu bei der Bahn: Spezielle Informationen und Angebote für Radfahrer" },
          { label: "e", text: "Neu am Markt: Billige Schlaftabletten" },
          { label: "f", text: "Familien reisen billiger" },
          { label: "g", text: "Urlaub mit dem Fahrrad in Deutschland immer beliebter" },
          { label: "h", text: "Kultur im Urlaub: Interessen je nach Alter unterschiedlich" },
          { label: "i", text: "Umfrage: Wer verwendet den Computer am häufigsten?" },
          { label: "j", text: "Deutschland: Immer mehr Touristen reisen in den Westen" },
        ],
        questions: [
          {
            id: 1,
            text: "Wer ist der typische Computerfan? Das B.A.T. Freizeitforschungsinstitut Hamburg ermittelte einige Eigenschaften: Er ist männlich, jung und hat einen höheren Schulabschluss. Bei der Beschäftigung am heimischen Computer stehen Textverarbeitung und Spiele ganz oben, es folgen private Buchhaltung, Grafikprogramme und Tabellenkalkulation.",
            answer: "i",
          },
          {
            id: 2,
            text: "„Bahn&Bike\u0022 heißt ein 222-seitiger Prospekt, den die Deutsche Bahn AG in Zusammenarbeit mit der Deutschen Zentrale für Tourismus herausgebracht hat und der wichtige Informationen für jene bereitstellt, die ihren Radurlaub mit Bahnfahren verbinden wollen. Das Motto lautet: Hin mit der Bahn – das Rad vor Ort mieten. Der Prospekt enthält Angaben zur Streckenlänge und Wegbeschaffenheit, Adressen von Verleihstationen, verweist auf Sehenswürdigkeiten sowie Unterkünfte und wird durch Karten ergänzt. Die Broschüre kostet 5 Euro und ist im Buchhandel beziehungsweise an Fahrkartenschaltern zu beziehen.",
            answer: "d",
          },
          {
            id: 3,
            text: "Ausführliche Informationen zum Thema „Schlafstörungen\u0022 finden Sie im gleichnamigen Patientenratgeber von Dr. med. Fritz Hohagen. Sie erfahren, was den Schlaf stört und was Sie dagegen unternehmen können. Für 9,95 Euro erhalten Sie das Buch in Apotheken oder direkt beim Wort&Bild Verlag, 82065 Baierbrunn.",
            answer: "b",
          },
          {
            id: 4,
            text: "Jetzt wird für Familien Reisen mit der Bahn zwischen Österreich und Deutschland noch ein gutes Stück günstiger. Denn ab 6. Oktober gibt es den Familien-Super-Sparpreis. Ein echter Traumpreis für die ganze Familie – vom Baby bis zum Großpapa – da kann man wirklich sparen. Der Familien-Super-Sparpreis gilt für Familien, bestehend aus ein oder zwei Erwachsenen (Eltern, auch Großeltern) und deren Kindern/Enkelkindern bis zum vollendeten 17. Lebensjahr, wobei mindestens ein Kind/Enkelkind an der Reise teilnehmen muss.",
            answer: "f",
          },
          {
            id: 5,
            text: "Touristen zwischen 14 und 29 Jahren sowie zwischen 40 und 49 Jahren haben ein besonders großes Interesse an der Kultur des jeweiligen Reiselandes, während die Gruppe der 30- bis 39-jährigen im Urlaub „eine Kulturpause einlegt\u0022. Dies geht aus der neuesten Analyse der Forschungsgemeinschaft Urlaub und Reisen e. V. hervor. Urlauber aus Ostdeutschland, so die Studie, zeigen wiederum mehr Kulturinteresse als Reisende aus dem Westen. Grundsätzlich gelte: Je höher das Einkommen und die Schulbildung sind, umso mehr besteht im Urlaub der Wunsch, Land und Leute kennenzulernen.",
            answer: "h",
          },
        ],
      },

      // ── LESEN TEIL 2: Multiple Choice ──
      {
        id: "lesen-2",
        title: "Leseverstehen Teil 2 – Detailverstehen",
        type: "multipleChoice",
        timeMinutes: null,
        instructions: "Lesen Sie den Text und die Aufgaben 6–10. Welche Lösung (a, b oder c) ist jeweils richtig?",
        articles: [
          {
            title: "Büro-Werkstatt: Chance für behinderte Menschen",
            subtitle: "Computerarbeit im Auftrag privater Firmen – jeder Dritte findet nach einem fünfmonatigen Kurs einen Job.",
            passage: `Margit, die junge Frau im Rollstuhl, erledigt die Lohnverrechnung für einen Verlag. Reinhard, seit der Geburt gehbehindert, tippt für die Direktion von Hewlett Packard Protokolle und Preislisten. Martin, seine Unterarme sind verkürzt, layoutet die Speisekarte eines Wiener Restaurants.

Drei junge körperbehinderte Menschen am Computer – alle drei können auf eine abgeschlossene kaufmännische Ausbildung verweisen. Dennoch hat man sie auf dem Arbeitsamt als „schwer vermittelbar\u0022 eingestuft – was de facto nicht vermittelbar bedeutet. Zurzeit arbeiten Margit, Reinhard und Martin – gemeinsam mit sieben anderen behinderten Menschen – in der „Büro-Werkstatt\u0022 in Wien-Stadlau. Hier werden körperbehinderte Schulabgänger auf das Berufsleben vorbereitet. In einem fünfmonatigen Kurs lernen sie, das in der Schule Gelernte in die Praxis umzusetzen. Ihre Dienste werden von Privatfirmen (darunter auch die OMV und zwei Banken) zugekauft.

Gleichzeitig wird ihnen bei der Jobsuche geholfen. „Leicht ist das nicht\u0022, sagt Betreuer Günther Hos. „Es gibt so viele Arbeitslose, die nicht behindert sind. Wer nimmt schon einen Mitarbeiter mit Handicap?\u0022 Zwar wären die Firmen gesetzlich verpflichtet, pro 25 Beschäftigte einen Behinderten einzustellen. Die meisten Firmen nutzen jedoch die Möglichkeit, sich „freizukaufen\u0022 (die sogenannte „Ausgleichstaxe\u0022 beträgt rund 150 Euro monatlich).

Trotz der Rahmenbedingungen kann Hos mit einer durchaus positiven Bilanz aufwarten: „Immerhin haben wir seit der Vereinsgründung vor drei Jahren ein Drittel unserer Leute untergebracht.\u0022 Auch ein Dienst an der Allgemeinheit, denn jede Vermittlung bedeutet: ein Arbeitsloser weniger, ein Steuerzahler mehr.

Gegründet wurde die Büro-Werkstatt von einer Lehrerin: Heide Hanisch, die in einer Wiener berufsbildenden Schule Geografie und Geschichte unterrichtet, wollte nicht länger hinnehmen, dass ihre behinderten Schüler erst ausgebildet werden, um dann als Arbeitnehmer nicht gebraucht zu werden.`,
            questions: [
              {
                id: 6,
                text: "In einem fünfmonatigen Kurs können die Teilnehmer",
                options: [
                  { label: "a", text: "eine berufliche Ausbildung abschließen." },
                  { label: "b", text: "lernen, was sie in der Schule verpasst haben." },
                  { label: "c", text: "praktische Erfahrungen mit der Büroarbeit sammeln." },
                ],
                answer: "c",
              },
              {
                id: 7,
                text: "Die Büro-Werkstatt versucht außerdem,",
                options: [
                  { label: "a", text: "auch jenen Arbeitslosen zu helfen, die nicht behindert sind." },
                  { label: "b", text: "Behinderte auf die Abschlussprüfungen vorzubereiten." },
                  { label: "c", text: "für die behinderten Menschen eine Arbeit zu finden." },
                ],
                answer: "c",
              },
              {
                id: 8,
                text: "Laut Gesetz müssen österreichische Firmen pro 25 Beschäftigte",
                options: [
                  { label: "a", text: "eine besondere Steuer zahlen." },
                  { label: "b", text: "einen Behinderten einstellen oder eine monatliche Gebühr bezahlen." },
                  { label: "c", text: "für jeden Behinderten monatlich 150 Euro bezahlen." },
                ],
                answer: "b",
              },
              {
                id: 9,
                text: "Seit der Vereinsgründung",
                options: [
                  { label: "a", text: "konnte für ein Drittel der behinderten Kursteilnehmer eine Arbeit gefunden werden." },
                  { label: "b", text: "konnte Günther Hos für den Verein schon viel Geld sparen." },
                  { label: "c", text: "zahlen Arbeitslose um ein Drittel weniger Steuern." },
                ],
                answer: "a",
              },
              {
                id: 10,
                text: "Die Lehrerin, die die Büro-Werkstatt gegründet hat,",
                options: [
                  { label: "a", text: "wollte etwas tun, damit Behinderte einen Arbeitsplatz erhalten." },
                  { label: "b", text: "wollte nicht länger Geografie und Geschichte unterrichten." },
                  { label: "c", text: "wird nach der Ausbildung der Behinderten nicht mehr gebraucht." },
                ],
                answer: "a",
              },
            ],
          },
        ],
      },

      // ── LESEN TEIL 3: Situation-to-Ad Matching ──
      {
        id: "lesen-3",
        title: "Leseverstehen Teil 3 – Selektives Verstehen",
        type: "matching",
        timeMinutes: null,
        instructions: "Lesen Sie die Situationen 11–20 und die Anzeigen a–l. Finden Sie für jede Situation die passende Anzeige. Sie können jede Anzeige nur einmal benutzen. Wenn Sie zu einer Situation keine Anzeige finden, markieren Sie ein x.",
        noMatchLabel: "x",
        options: [
          { label: "a", text: "Thai-China-Vietnam Asiatisches Spezialitäten-Restaurant „Bong-Hong\u0022 – Alle Gerichte auch zum Mitnehmen und Heimservice. Täglich 11.30–14.30 und 17.30–23.00 Uhr, kein Ruhetag." },
          { label: "b", text: "Ristorante OLINDO – Italienisches Restaurant. Hausgemachte Nudeln, Fischspezialitäten, Mittagsmenüs ab 7.50 Euro. Bei schönem Wetter Gartenbetrieb." },
          { label: "c", text: "Versicherung Helmut Schwabe – „Sind Sie für den Urlaub auch gut versichert?\u0022" },
          { label: "d", text: "SEATOP Reisen – Der Flug- und Hotelspezialist. WELTWEIT REISEN, Mietwagen, Hotelvermittlung, Rundreisen. Sommertermine nach USA noch Plätze frei." },
          { label: "e", text: "COUNCIL TRAVEL – Für Studenten/Jugendliche: New York/Boston 329,–, Los Angeles 429,–, Miami/Chicago 349,–. Sprachreisen & Abenteuerreisen. Spezialpreise auch für JEDERMANN!" },
          { label: "f", text: "Kreittmayr – Kneipe mit Biergarten. Billard und Kegelbahnen. Jeden Fr. oder Sa. live Bundesliga-Topspiele." },
          { label: "g", text: "Internationaler Stammtisch – Deutsche und ausländische Jugendliche in München. Diskussion am Montag, 4. September, 19.30 Uhr im Ratskeller „Moriskengewölbe\u0022 (Marienplatz)." },
          { label: "h", text: "Nachprüfung – Lernen heißt intensiv vorbereiten: in Latein, Englisch, Französisch, Deutsch. Tel. 308 51 17" },
          { label: "i", text: "Unterricht – Nachhilfe in Mathe-Physik von Gymnasiallehrer. Mathe/Physik/Chemie für alle Klassen, Gymnasium, Realschule, FOS, Abi-Vorbereitung." },
          { label: "j", text: "City-Reisebüro – Campmobile USA/CANADA, z.B. San Francisco/Los Angeles ab 35,– pro Tag. Früh buchen lohnt!" },
          { label: "k", text: "Kurse für Erwachsene und Kinder mit (Sprach-)Schwierigkeiten – Gisela Geiger, Leopoldstraße 83, München." },
          { label: "l", text: "SPRACHBÖRSE – Deutsch als Fremdsprache, Fremdsprachen, Kindersprachkurse. Prüfungskurse, Geschäftsdeutsch, muttersprachliche Lehrkräfte, Minigruppen und Einzelunterricht, ab 4 Jahren." },
        ],
        questions: [
          { id: 11, text: "Sie möchten mit Freunden in einem Restaurant essen. Da das Wetter schön ist, möchten Sie gerne draußen sitzen.", answer: "b" },
          { id: 12, text: "Sie möchten heute nicht selbst kochen, sondern lieber ein warmes Essen kaufen und mit nach Hause nehmen.", answer: "a" },
          { id: 13, text: "In den Sommerferien möchten Sie gerne in die USA fliegen. Sie brauchen dort auch eine Unterkunft.", answer: "d" },
          { id: 14, text: "Reisebüros bieten billigere Flüge an, wenn man in letzter Minute bucht. Sie suchen so einen Flug.", answer: "x" },
          { id: 15, text: "Ihre Tochter, die studiert, möchte in die USA fliegen. Sie suchen einen billigen Flug für sie.", answer: "e" },
          { id: 16, text: "Ihr Sohn ist schlecht in Mathematik und braucht deshalb noch Unterricht außerhalb der Schule.", answer: "i" },
          { id: 17, text: "Das Kind Ihrer Freunde hat Probleme beim Sprechen und braucht deshalb Hilfe.", answer: "k" },
          { id: 18, text: "Sie haben einen jungen Franzosen zu Besuch. Sie möchten, dass er in einen Deutschkurs geht.", answer: "l" },
          { id: 19, text: "Sie möchten, dass Ihr Sohn in einen Jugendclub geht.", answer: "x" },
          { id: 20, text: "Sie interessieren sich für die Probleme ausländischer Jugendlicher in Deutschland.", answer: "g" },
        ],
      },

      // ── SPRACHBAUSTEINE TEIL 1: Grammar Cloze ──
      {
        id: "sprachbausteine-1",
        title: "Sprachbausteine Teil 1 – Grammatik",
        type: "cloze",
        timeMinutes: null,
        instructions: "Lesen Sie den Text und schließen Sie die Lücken 21–30. Welche Lösung (a, b oder c) ist jeweils richtig?",
        passage: `Liebe Karin,

nach meinem Praktikum in Frankreich bin ich jetzt wieder zu Hause. Wie du ja weißt, wollte ich eigentlich nach Paris, [21] das hat dann leider nicht geklappt. Doch dann habe ich eine Stelle als Praktikant bei [22] Firma in Straßburg gefunden.

Dort [23] ich drei Monate geblieben. Die Arbeit war sehr [24] – ich musste schon um 8.00 Uhr im Büro sein –, hat mir aber [25] sehr gut gefallen. Ich habe [26] dieser Zeit in verschiedenen Abteilungen gearbeitet und so nicht nur etwas über die Herstellung von Fernsehgeräten [27], sondern auch über den Verkauf. Und die Kollegen, mit [28] ich am meisten zu tun hatte, waren wirklich sehr nett.

Nach dem Praktikum habe ich noch zwei Wochen Urlaub bei [29] Freunden gemacht. Darüber erzähle ich [30] bald mehr – für heute muss ich Schluss machen.

Liebe Grüße
Fritz`,
        questions: [
          { id: 21, options: [{ label: "a", text: "aber" }, { label: "b", text: "denn" }, { label: "c", text: "sondern" }], answer: "a" },
          { id: 22, options: [{ label: "a", text: "eine" }, { label: "b", text: "einen" }, { label: "c", text: "einer" }], answer: "c" },
          { id: 23, options: [{ label: "a", text: "bin" }, { label: "b", text: "habe" }, { label: "c", text: "wurde" }], answer: "a" },
          { id: 24, options: [{ label: "a", text: "anstrengend" }, { label: "b", text: "anstrengende" }, { label: "c", text: "anstrengendes" }], answer: "a" },
          { id: 25, options: [{ label: "a", text: "trotzdem" }, { label: "b", text: "wegen" }, { label: "c", text: "weshalb" }], answer: "a" },
          { id: 26, options: [{ label: "a", text: "bis" }, { label: "b", text: "in" }, { label: "c", text: "nach" }], answer: "b" },
          { id: 27, options: [{ label: "a", text: "gelernt" }, { label: "b", text: "lernen" }, { label: "c", text: "lernte" }], answer: "a" },
          { id: 28, options: [{ label: "a", text: "dem" }, { label: "b", text: "denen" }, { label: "c", text: "die" }], answer: "b" },
          { id: 29, options: [{ label: "a", text: "meine" }, { label: "b", text: "meinen" }, { label: "c", text: "meiner" }], answer: "b" },
          { id: 30, options: [{ label: "a", text: "dir" }, { label: "b", text: "Ihnen" }, { label: "c", text: "uns" }], answer: "a" },
        ],
      },

      // ── SPRACHBAUSTEINE TEIL 2: Word Bank Cloze ──
      {
        id: "sprachbausteine-2",
        title: "Sprachbausteine Teil 2 – Lexik",
        type: "wordBankCloze",
        timeMinutes: null,
        instructions: "Lesen Sie den Text und schließen Sie die Lücken 31–40. Benutzen Sie die Wörter a–o. Jedes Wort passt nur einmal.",
        passage: `Sehr geehrter Herr Janosch,

ich habe Ihre Anzeige gelesen und interessiere mich sehr [31] Ihr Angebot. Ich möchte mit meiner Familie vom 10.–24. August in Österreich Urlaub machen und hätte deshalb [32] noch nähere Informationen.

Meine Frau und mich interessiert ganz [33] das Freizeitprogramm für Kinder, [34] wir zwei Kinder (3 und 8 Jahre) haben. Gibt es Schwimm- und Tenniskurse für Kinder und [35] ja, was kosten sie? In Ihrer Anzeige steht auch, dass Sie für die Unterkunft günstige Angebote für Kinder haben. Wie viel [36] wir pro Woche für unsere Kinder bezahlen?

Und [37] noch eine letzte Frage: Wir haben einen kleinen Hund, von dem sich meine Kinder nicht trennen können und den wir [38] auch mitnehmen müssten. Wäre das möglich?

Bitte schreiben Sie uns so bald wie möglich, [39] wir uns bald entscheiden können. Außerdem wären wir Ihnen sehr [40], wenn Sie uns einige Prospekte oder Bilder Ihrer Pension sowie der Umgebung zusenden würden.

Mit freundlichen Grüßen
Ihr Anton Müller`,
        wordBank: [
          { label: "a", word: "BESONDERS" },
          { label: "b", word: "DA" },
          { label: "c", word: "DAFÜR" },
          { label: "d", word: "DAMALS" },
          { label: "e", word: "DAMIT" },
          { label: "f", word: "DANKBAR" },
          { label: "g", word: "DESHALB" },
          { label: "h", word: "FÜR" },
          { label: "i", word: "GERNE" },
          { label: "j", word: "KÖNNTEN" },
          { label: "k", word: "MIT" },
          { label: "l", word: "MÜSSTEN" },
          { label: "m", word: "SCHLIESSLICH" },
          { label: "n", word: "WANN" },
          { label: "o", word: "WENN" },
        ],
        questions: [
          { id: 31, answer: "h" },
          { id: 32, answer: "i" },
          { id: 33, answer: "a" },
          { id: 34, answer: "b" },
          { id: 35, answer: "o" },
          { id: 36, answer: "l" },
          { id: 37, answer: "m" },
          { id: 38, answer: "g" },
          { id: 39, answer: "e" },
          { id: 40, answer: "f" },
        ],
      },
    ],
  },
];

/**
 * Helper: Get exam by ID
 */
export function getExamById(id) {
  return B1_EXAMS.find((e) => e.id === id);
}

/**
 * Helper: Get all exams for a given source
 */
export function getExamsBySource(source) {
  return B1_EXAMS.filter((e) => e.source === source);
}

/**
 * Helper: Flatten all questions from an exam into a single array
 * Each item includes the section context for rendering
 */
export function flattenExamQuestions(exam) {
  const result = [];
  for (const section of exam.sections) {
    if (section.type === "opinion") {
      for (const op of section.opinions) {
        result.push({ ...op, sectionId: section.id, sectionTitle: section.title, type: section.type, topic: section.topic });
      }
    } else if (section.articles) {
      for (const article of section.articles) {
        for (const q of article.questions) {
          result.push({ ...q, sectionId: section.id, sectionTitle: section.title, type: section.type, passage: article.passage });
        }
      }
    } else if (section.questions) {
      for (const q of section.questions) {
        result.push({ ...q, sectionId: section.id, sectionTitle: section.title, type: section.type });
      }
    }
  }
  return result;
}
