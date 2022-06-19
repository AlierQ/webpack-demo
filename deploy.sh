yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.CSS *.png *.json assets &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -
