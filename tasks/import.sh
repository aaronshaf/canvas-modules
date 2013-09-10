echo "importing from ../canvas-lms/app/coffeescripts/ember/context_modules2/"

rm -r components
rm -r config
rm -r controllers
rm -r helpers
rm -r lib
rm -r models
rm -r routes
rm -r templates
rm -r views

cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/components .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/config .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/controllers .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/helpers .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/lib .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/models .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/routes .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/templates .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/views .
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/main.coffee .

# sass
cp ../canvas-lms/app/stylesheets/context_modules2.scss stylesheets/

# tests

# vendor?

# img?
