all:

.npmignore: .gitignore
	sort -ru .gitignore > .npmignore
	echo '.gitignore .npmignore Makefile' | tr ' ' '\n' >> .npmignore

publish: .npmignore
	npm publish

clean:
	rm -rf .npmignore

.PHONY: clean publish

