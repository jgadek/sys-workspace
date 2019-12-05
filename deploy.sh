ng build ngx-sys-common
cd dist/ngx-sys-common && npm pack
npm run build_lib && npm run npm_pack


cd ../../dist_publish/ngx-sys-common
cp -R ../../dist/ngx-sys-common/ ./
