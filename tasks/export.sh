echo "exporting to ../canvas-lms/app/coffeescripts/ember/context_modules2/"

rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/

mkdir ../canvas-lms/app/coffeescripts/ember/context_modules2

cp -R components ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R config ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R controllers ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R lib ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R helpers ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R models ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R routes ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R templates ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R views ../canvas-lms/app/coffeescripts/ember/context_modules2/

# sass
cp stylesheets/context_modules2.scss ../canvas-lms/app/stylesheets/

# tests

# vendor?

# img?
