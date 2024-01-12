Get-Content .env | ForEach-Object {
    $keyValue = $_.Split('=')
    [System.Environment]::SetEnvironmentVariable($keyValue[0], $keyValue[1], [System.EnvironmentVariableTarget]::Process)
}
