all:
	dendry make-html --pretty
	cp out/html/* ./
	zip game.zip *.js index.html *.css backgrounds/*
	html-inline index.html > nye2019.html
deploy:
	butler push game.zip red-autumn/nye2019:win-mac-linux
