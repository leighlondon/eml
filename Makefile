.PHONY=lint

lint:
	prettier --write 'src/**' 'syntaxes/*.tmLanguage.json' '*.js' 'package.json'
