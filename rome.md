>pnpm add rome -D
>pnpm rome init

- disable eslint prettier ext enable rome ext

rome.json
{
	"$schema": "./node_modules/rome/configuration_schema.json",
	"organizeImports": {
		"enabled": true
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true
		}
	},
	"formatter":{
		"enabled": true	
	}
}

.vscode/settings.json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.rome": true,
        "source.organizeImports": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "rome.rome"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "rome.rome"
    },
    "[typescript]": {
        "editor.defaultFormatter": "rome.rome"
    },
}
