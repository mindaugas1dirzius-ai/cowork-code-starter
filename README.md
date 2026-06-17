# cowork-code-starter

Paruoštas rinkinys **dviejų Claude pusių bendravimui per failus:** **Cowork** (aplinka, kuri planuoja/dizainuoja) ↔ **Claude Code** (programuoja).
Kad jos VISADA matytų vienas kito naujausią žinutę — be raginimo, be savininko tarpininkavimo.

> ⚠️ **Cowork ir Claude Code = DVI SKIRTINGOS aplinkos** (NE dvi tos pačios programos sesijos). Bendras tik **git repo**.

## Kas viduje
| Failas | Kam |
|---|---|
| `_cowork_check.js` | „UserPromptSubmit" hook'as — prieš kiekvieną prompt'ą parodo naujausią pašto įrašą |
| `settings.example.json` | ką įdėti į globalų `~/.claude/settings.json` (hook + `bypassPermissions`) |
| `COWORK_TO_CODE.md` | paštas cowork → Code (rašo cowork, skaito Code) |
| `CODE_TO_COWORK.md` | paštas Code → cowork (rašo Code, skaito cowork) |
| `CLAUDE.example.md` | projekto `CLAUDE.md` šablonas (cowork↔Code skyrius + vaidmenys) |
| `DARBO_PRINCIPAI.md` | universalūs darbo su Claude principai (perkeliami į bet kurį projektą) |
| `SETUP.md` | **žingsnis po žingsnio diegimas** |

## Greitas startas
Žiūrėk **[`SETUP.md`](SETUP.md)**. Esmė: 3 failus (`_cowork_check.js` + abu paštai) padedi KARTU viename
projekto kataloge → globaliame `~/.claude/settings.json` įjungi hook'ą ir `bypassPermissions` → dirbi tame
pačiame repo iš dviejų pusių: **Cowork** (planuoja) ir **Claude Code** (programuoja).

## Idėja
- **Kas yra kas:** **Cowork** = atskira Claude aplinka (planuoja); **Claude Code** = programuoja. Auto-pašto hook'as veikia **Claude Code** pusėje (skaito host `~/.claude`); Cowork žinutes mato per bendrą repo. *(Neturi Cowork programos? Planuotoju gali būti ir antra **Claude Code** sesija — tada hook'as veikia abiejose.)*
- **Vienas failas = vienas rašytojas** (niekada abu kartu) → jokių git/teksto konfliktų.
- **Naujausia VIRŠUJE**; hook'as rodo pirmą `## ` antraštę iš kiekvieno pašto.
- Turinys keliauja **per repo failus**, ne per žmogų. Savininkas nėra paštininkas.
