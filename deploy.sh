ng build ngx-sys-common
cd dist/ngx-sys-common && npm pack

cd ../../dist_publish/ngx-sys-common
cp -R ../../dist/ngx-sys-common/ ./

git add .
git commit -m $1
git push origin master
