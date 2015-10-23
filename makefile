default:
	@make build-webpack
	@make build-jspm
	@echo "\nWebpack files (gzipped):" && find webpack/build -name *.js -exec sh -c "echo '{} - \c' && ./node_modules/.bin/gzip-size {} | ./node_modules/.bin/pretty-bytes" \;
	@echo "\nJSPM files (gzipped):" && find jspm/build -name *.js -exec sh -c "echo '{} - \c' && ./node_modules/.bin/gzip-size {} | ./node_modules/.bin/pretty-bytes" \;

build-webpack:
	@cd webpack \
		&& cp -R ../src .\
		&& rm -rf build \
		&& ./node_modules/.bin/webpack --progress --colors \
		&& rm -rf src \

build-jspm:
	@cd jspm \
		&& cp -R ../src .\
		&& rm -rf build \
		&& ./node_modules/.bin/jspm bundle-sfx src/universal build/universal.js --minify --skip-source-maps \
		&& ./node_modules/.bin/jspm bundle src/snowflakes build/snowflakes.js --minify --skip-source-maps \
		&& ./node_modules/.bin/jspm bundle src/bootstraps/app - src/snowflakes build/bootstraps/app.js --minify --skip-source-maps \
		&& ./node_modules/.bin/jspm bundle src/modules/box/index build/modules/box.js --minify --skip-source-maps \
		&& cp node_modules/systemjs/dist/system-register-only.js build \
		&& rm -rf src \

install:
	@npm i && npm prune
	@cd jspm && npm prune && npm i && jspm clean && jspm install
	@cd webpack && npm prune && npm i