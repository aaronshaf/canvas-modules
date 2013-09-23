echo "exporting to ../canvas/app/coffeescripts/ember/context_modules2/"

rm -r ../canvas/app/coffeescripts/ember/context_modules2/

mkdir ../canvas/app/coffeescripts/ember/context_modules2

cp -R components ../canvas/app/coffeescripts/ember/context_modules2/
cp -R config ../canvas/app/coffeescripts/ember/context_modules2/
cp -R controllers ../canvas/app/coffeescripts/ember/context_modules2/
cp -R helpers ../canvas/app/coffeescripts/ember/context_modules2/
cp -R lib ../canvas/app/coffeescripts/ember/context_modules2/
cp -R helpers ../canvas/app/coffeescripts/ember/context_modules2/
cp -R models ../canvas/app/coffeescripts/ember/context_modules2/
cp -R routes ../canvas/app/coffeescripts/ember/context_modules2/
cp -R templates ../canvas/app/coffeescripts/ember/context_modules2/
cp -R views ../canvas/app/coffeescripts/ember/context_modules2/

# sass
cp stylesheets/context_modules2.scss ../canvas/app/stylesheets/

# tests

# vendor?

# img?
