default: clean
	@./node_modules/.bin/webpack --progress --colors

compile: clean
	@NODE_ENV=production ./node_modules/.bin/webpack --progress --colors -p
	@make sizes

sizes:
	@echo "\nWebpack files (gzipped):" && find webpack_build -name "*.js" -exec sh -c "echo '{} - \c' && ./node_modules/.bin/gzip-size {} | ./node_modules/.bin/pretty-bytes" \;

install:
	@npm i && npm prune

clean:
	@rm -rf webpack_build