rm -r app/components
rm -r app/config
rm -r app/controllers
rm -r app/lib
rm -r app/models
rm -r app/routes
rm -r app/templates
rm -r app/views

cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/components app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/config app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/controllers app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/lib app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/models app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/routes app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/templates app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/views app/
cp -R ../canvas-lms/app/coffeescripts/ember/context_modules2/main.coffee app/

# sass
cp ../canvas-lms/app/stylesheets/context_modules2.scss stylesheets/

# tests

# vendor?

# img?
