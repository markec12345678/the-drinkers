$headers = @{
  'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  'Referer' = 'https://www.discogs.com/'
}

$urls = @{
  'album-zadnja-vecerja.jpg' = 'https://i.discogs.com/riT7gDKGqaCo37BPrfQdbKd6xxMkdE61x1-OLH5ISyo/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2Mjgw/ODI1LTE2MDY1MDIw/MDktODAwNy5qcGVn.jpeg'
  'album-de-best-of.jpg' = 'https://i.discogs.com/QsjGL5QYz_Qv1zNb61E5U_AdWK9q1hpM9oQQdRm_z_0/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzOTcz/OTMtMTMyODgyMDk4/OS5qcGVn.jpeg'
}

$outDir = Join-Path $PSScriptRoot '..\public'
foreach ($file in $urls.Keys) {
  $path = Join-Path $outDir $file
  try {
    Invoke-WebRequest -Uri $urls[$file] -Headers $headers -OutFile $path -UseBasicParsing
    Write-Host "OK: $file ($((Get-Item $path).Length) bytes)"
  } catch {
    Write-Host "FAIL: $file - $_"
  }
}
