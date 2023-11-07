vscode로 flutter 확장자를 설치했는데 SDK설치하라는 안내문구 나올 때

1. vscode를 관리자 권한으로 실행

2. Terminal(Ctrl + `) 실행 후, 아래 명령어 입력

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

3. 설치 완료되면 아래 명령어 입력
    choco install dart-sdk