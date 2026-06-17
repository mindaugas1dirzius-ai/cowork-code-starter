# CLAUDE.md (šablonas) — projektas „[PAVADINIMAS]"

> Claude Code šį failą skaito AUTOMATIŠKAI kiekvieną sesiją. Universalūs darbo principai —
> `DARBO_PRINCIPAI.md` (arba globaliame `~/.claude/CLAUDE.md`). Čia — TIK šio projekto specifika + vaidmenys.

## Kas aš (sesijos vaidmuo)
- Esu **[Code / Cowork]**. (Code = koduoja/stato; Cowork = planuoja/projektuoja.)
- Savininkas — [vardas]; kalbam [kalba], paprastai. Jokių leidimo popup'ų. Pilna autonomija aptartam darbui.

## 🔁 Cowork ↔ Code sistema (abi pusės auto-skaito per hook'ą)
Vienas failas = vienas rašytojas (niekada abu kartu):

| Info tipas | Failas | RAŠO | SKAITO |
|---|---|---|---|
| 📊 Būklė (kas tiesa dabar) | `BUKLE.md` (ar pan.) | Code | abu |
| 🗺️ Planas (ką daryti, sprendimai) | `PLANAS.md` (ar pan.) | cowork | abu |
| ✉️ Žinutės | `CODE_TO_COWORK.md` (Code→cowork) · `COWORK_TO_CODE.md` (cowork→Code); naujausia VIRŠUJE | savo failą | KITO failą |

**Protokolas:** prieš darbą `git pull` + skaityk gaunamą paštą/būklę/planą → po darbo atnaujink SAVO failą →
`commit` + `push`. Laukdamas atsako — pats periodiškai tikrink paštą (pvz. `/loop 5m`), nestovėk.

## 🔧 Projekto specifika (užpildyk)
- **Esmė:** …
- **Aplankas:** …  · **Repo (GitHub):** …
- **Stack:** …
- **Diegimas / deploy:** …  ⚠️ tikrink, kad eina į TEISINGĄ aplinką.
- **Po pakeitimų privaloma:** … (pvz. lint/tsc 0; įrenginyje — pilnas perdiegimas)
- **Tiesos šaltinis (ką skaityti pirma):** būklės failas → planas → paštai.
- **Ko NELIESTI:** …
