#!/bin/bash

get_latest_release() {
	curl --silent "https://api.github.com/repos/$1/releases/latest" |
		grep '"tag_name":' |
		sed -E 's/.*"([^"]+)".*/\1/'
}

echo "Installing Dart Sass Embedded…"
BIN_DIR=${pwd}/bin
SASS_VERSION=get_latest_release "sass/dart-sass-embedded"
mkdir -p $BIN_DIR
curl -LJO https://github.com/sass/dart-sass-embedded/releases/download/${SASS_VERSION}/sass_embedded-${SASS_VERSION}-linux-x64.tar.gz;
tar -xvf sass_embedded-${SASS_VERSION}-linux-x64.tar.gz;
mv sass_embedded/dart-sass-embedded $BIN_DIR
rm -rf sass_embedded*
echo "Installed ${dart-sass-embedded --version}"
echo "Building…"
hugo --gc --minify
