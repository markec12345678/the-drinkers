# ============================================================
# GitHub avtentikacija – nastavitev za The Drinkers (in druge projekte)
# Zaženi enkrat po namestitvi ali ko se prijavljaš na novem računalniku
# ============================================================

Write-Host "=== GitHub Auth Setup ===" -ForegroundColor Cyan

# 1. Preveri ali je gh nameščen
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "Napaka: GitHub CLI (gh) ni nameščen." -ForegroundColor Red
    Write-Host "Namesti: winget install GitHub.cli" -ForegroundColor Yellow
    exit 1
}

# 2. Nastavi Git za uporabo gh tokena (avtomatski git push/pull brez gesla)
Write-Host "Nastavljam Git za avtomatsko uporabo gh tokena..." -ForegroundColor Green
gh auth setup-git

# 3. Preveri status
Write-Host "`nStatus:" -ForegroundColor Cyan
gh auth status

Write-Host "`n✓ Nastavitev končana. Git push/pull bo zdaj uporabljal shranjeni token." -ForegroundColor Green
Write-Host "  Če token poteče: gh auth refresh" -ForegroundColor Gray
