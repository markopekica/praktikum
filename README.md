## v_8 <span style="font-size:11px">(26.5.2021)</span>

### zadatak - pretraživač

<br>

- uzeti [ovaj](https://drive.google.com/file/d/1yGKHPlwjuHCwOBfa9pkGyVhl1UcOYdRj/view) tekst
- napisati "sugestion tool" slično kao na google-u
  - nakon svake riječi ponuditi odabit top 5 sljedećih riječi bez da korisnik mora tipkati

<br>

- Nadograditi trigram/bigram generator sa „Suggest“ funkcionalnosti, te napraviti demo. Program treba funkcionirati na slijedeći način:
    - Kada se unos sastoji od jedne riječi, vratiti max 5 riječi koje idu nakon navedenog unosa, poredane po vjerovatnosti pojavljivanja iz „bigram“ seta
    - Kada se unos sastoji od 2 riječi, napraviti isto kao u prethodnoj točci, samo iz trigram seta
- Napraviti generator „random text-a“ baziran na trigramu i bigramu. Kao predložak uzeti te isparsati u trigrame ovaj text. https://drive.google.com/drive/folders/1QCLCHy_mjgCMoJujDdxPHsJAzvWPTAqr . Generator random teksta treba raditi na način da mu definirate broj riječi koji željeni tekst treba imati. Nakon toga, program uzme prvu random riječ iz ključeva bigrama, te od nje počinje generirati izlazni tekst.  Nakon prve riječi, iz bigram tablice se odabere slijedeća riječ „random“ postupkom. Nakon toga se prelazi u trigram tablicu iz koje se za svake dvije riječi nalazi slijedeća slučajnim odabirom. Napomena: generirani tekst mora završiti točkom, dakle riječju iza koje se pojavljuje točka (ne treba čekati da se točka pojavi random, nego kad je tekst dovoljno dug odaberemo je prvom prilikom). Isto tako, tekst mora početi riječju koja se nalazi iza točke (prvom riječju u rečenici).

<br>

- [pravila cistog koda](https://docs.google.com/document/d/1HvL0J0TgMjmFN6b71NbaZeoXvbecKSDhG2i7_Svfwes/edit)
  - Descriptive long names 
  - Single responsibility principle 
  - Short methods (functions, classes)
  - No code duplication 
  - Avoid (or no) conditionals (actually no flags) 
  - Avoid (or no) loops (breaks, continue, conditions)
    - loop_switch anti pattern (higly dependent on language)
    - the goal is to use map, reduce, filter, times - standard array functions
  - “No null” pattern & “No primitives obsession”
  + Data over logic
