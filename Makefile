install: 
	npm ci

lint: 
	npx eslint .

gendiff:
	node bin/gendiff.js

gendiff -h:
	node gendiff -h
