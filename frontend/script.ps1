$file = './.eslintrc.json'

yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier -D

if (-not(Test-Path -Path $file -PathType Leaf)) {
    try{
        New-Item -Path $file -ItemType File
        Write-Host "The file [$file] has been created."
    }
    catch{
        throw $_.Exception.Message
    }
}
Add-Content -Path $file -Exclude help* -Value '{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier":["error",{"endOfLine":"auto"}],
        "react/react-in-jsx-scope":"off"
    }
}
'