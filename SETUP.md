# SETUP — diegimas žingsnis po žingsnio

> Veikia Windows / macOS / Linux. Reikia: įdiegto **Claude Code** ir **Node.js** (`node`).
> Dvi pusės: **Cowork** (atskira Claude aplinka — planuoja) + **Claude Code** (programuoja), bendras git repo. *(Neturi Cowork programos? Planuotoju gali būti antra **Claude Code** sesija.)*

## 1. Projektas (git repo)
- Susikurk projekto aplanką **paprastame kelyje** (NE OneDrive/Dropbox viduje — debesis užrakina `.git`).
- `git init` + (nebūtina) GitHub remote. GitHub = atsarginė kopija.

## 2. Įdėk 3 pašto/hook failus į projektą
Iš šio rinkinio nukopijuok **į vieną projekto katalogą** (pvz. `launch/` arba projekto šaknį) — visus tris KARTU:
- `_cowork_check.js`
- `COWORK_TO_CODE.md`
- `CODE_TO_COWORK.md`

⚠️ Jie PRIVALO gulėti tame pačiame kataloge (skriptas ieško paštų šalia savęs).

## 3. Įjunk hook'ą + bypass globaliame settings
Atsidaryk (arba sukurk) **globalų** `~/.claude/settings.json`:
- Windows: `C:\Users\TU\.claude\settings.json`
- macOS/Linux: `~/.claude/settings.json`

Įkelk turinį iš `settings.example.json`. Jei failas jau turi turinį — **sujunk** (pridėk tik trūkstamus
raktus: `hooks`, `permissions.defaultMode`, `skip*`). **Pakeisk kelią** prie `_cowork_check.js`:
- Windows (atkreipk dėmesį į dvigubus backslash JSON'e):
  `"command": "node \"C:\\Users\\TU\\Projects\\PROJEKTAS\\_cowork_check.js\""`
- macOS/Linux (absoliutus kelias, be `~`):
  `"command": "node \"/Users/tu/projects/projektas/_cowork_check.js\""`

`"defaultMode": "bypassPermissions"` = Claude nerašys „Allow?" popup'ų kiekvienam veiksmui.

## 4. (Nebūtina, bet rekomenduojama) projekto CLAUDE.md
Į projekto `CLAUDE.md` įkelk skyrių iš `CLAUDE.example.md` (cowork↔Code sistema + vaidmenys) ir
nuorodą į `DARBO_PRINCIPAI.md`. Claude `CLAUDE.md` skaito automatiškai kiekvieną sesiją.
Universalius principus gali įdėti ir į **globalų** `~/.claude/CLAUDE.md` → galios VISIEMS projektams.

## 5. Dirbk iš dviejų pusių tame pačiame repo
- **Cowork** (atskira Claude aplinka) — **planuoja/projektuoja**.
- **Claude Code** — **programuoja/stato**.
- Abi pusės dirba tame pačiame projekto repo (bendras „kambarys").
- ⚠️ Cowork ir Claude Code = **SKIRTINGOS aplinkos**, ne dvi tos pačios programos sesijos. Auto-pašto hook'as (§3) įsijungia **Claude Code** pusėje; Cowork žinutes pasiima skaitydama repo failus. *(Neturi Cowork programos? Planuotoju gali būti ir antra **Claude Code** sesija — tada hook'as veikia abiejose.)*

Kiekviena RAŠO savo siunčiamą paštą, SKAITO kito:
- cowork → rašo `COWORK_TO_CODE.md`
- Code   → rašo `CODE_TO_COWORK.md`

## 6. Patikra (10 sek.)
- „Cowork" sesijoje įrašyk naują `## ` įrašą `COWORK_TO_CODE.md` viršuje → commit.
- „Code" sesijoje parašyk bet ką → prieš atsakymą turi pasirodyti eilutė:
  `📬 Paštų naujausi įrašai — ... 📥 cowork→Code ...`
- Jei pasirodė — veikia. ✅

## Dažni „gotcha'os"
- **Popup'ai vis tiek šoka?** Net su `bypassPermissions` juos kelia PowerShell konstrukcijos
  `{…}` / `$kintamieji` / `if($?)` / `&&`. Sprendimas (elgesys): failams TIK Read/Edit/Write/Grep/Glob;
  komandos paprastos; `git -C "<kelias>"` be `cd`; komandas jungti `;`, ne `&&`.
- **„Path is outside allowed working directories"** → paleisk Claude iš projekto ŠAKNIES (arba pridėk
  visą repo šaknį į leistinas darbo zonas), ne iš pogalvio.
- **Hook nieko nerodo** → patikrink, ar `node` veikia (`node -v`), ar kelias settings.json'e teisingas,
  ar abu `.md` guli šalia skripto, ar jų viršuje yra `## ` antraštė.
- **Nedirbk dviejų sesijų tame PAČIAME faile** — vienas failas, vienas rašytojas.
