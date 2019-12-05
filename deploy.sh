ng build ngx-sys-common
cd dist/ngx-sys-common && npm pack

cd ../../dist_publish/ngx-sys-common && rm -rf * && cp -R ../../dist/ngx-sys-common/ ./

cd ../../dist_publish/ngx-sys-common && git add .
cd ../../dist_publish/ngx-sys-common && git commit -m "$1"
cd ../../dist_publish/ngx-sys-common && git push origin master
