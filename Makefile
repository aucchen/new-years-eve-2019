all:
	dendry make-html --pretty
	cp out/html/* ./
	zip game.zip *.js index.html *.css backgrounds/* art/*
	html-inline index.html > nye2019.html
	zip nye2019.zip *.js nye2019.html *.css backgrounds/* art/*
deploy:
	butler push game.zip red-autumn/nye2019:win-mac-linux
deploy-zip:
	butler push game.zip red-autumn/nye2019:download
