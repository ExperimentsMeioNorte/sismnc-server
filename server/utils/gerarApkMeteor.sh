#!/bin/bash

$pathapp : '';
$app : '';
$urlserver : '';
$chave : '';

path_aplicativo(){
        read -p "Entre com o caminho completo onde se encontra o app: " pathapp
        if [[ $pathapp = "" ]]; then
                echo "Obrigatório digitar o caminhdo do app!"
                path_aplicativo
	fi

	if [ ! -d "$pathapp" ]; then
		echo "Pasta do aplicativo não encontrada!"
		start_build
        fi
}

nome_aplicativo() {
	read -p "Entre com o nome do aplicativo: " app
	if [[ $app = "" ]]; then
        	echo "Obrigatório digitar um nome do aplicativo/site!"
        	nome_aplicativo
	fi
}

url_server(){
	read -p "Entre com a url do servidor: (sem o http) " urlserver
        if [[ $urlserver = '' ]]; then
                echo "Obrigatório digitar uma url!"
                url_server
       	fi
}

gerar_keygen(){
    read -p "gerar uma nova chave? (sim/nao) * sim, apaga a chave atual e gera uma nova: " chave
        if [[ $chave = 'sim' ]]; then
                rm my-release-key.keystore
                keytool -genkey -v -keystore my-release-key.keystore -alias $app -keyalg RSA -keysize 2048 -validity 10000
                cp my-release-key.keystore ~/build-output-$app/android/

                echo "Chave gerada com sucesso!"
        else
            cp my-release-key.keystore ~/build-output-$app/android/
        fi
}

start_build(){
    cd ~
	sudo rm ~/.keystore

	nome_aplicativo
	path_aplicativo
	cd $pathapp

	url_server

	#cria a pasta da compilacao
	meteor build ~/build-output-$app \--server=$urlserver

	#cria a chave do aplicativo
    gerar_keygen

	#adiciona a chave a compilacao
	cd ~/build-output-$app/android/
    #jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore release-unsigned.apk $app #novo
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore unaligned.apk $app #antigo

	#cria o app com a chave compilada
	#~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 \release-unsigned.apk $app.apk #novo
    ~/.meteor/android_bundle/android-sdk/build-tools/21.0.0/zipalign 4 \unaligned.apk $app.apk #antigo

	echo "<<<<<<<<<< Aplicativo compilado com sucesso! >>>>>>>>>>>>>>"
}

start_build