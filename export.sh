rm -r ../canvas-lms/app/coffeescripts/ember/config/
rm -r ../canvas-lms/app/coffeescripts/ember/controllers/
rm -r ../canvas-lms/app/coffeescripts/ember/models/
rm -r ../canvas-lms/app/coffeescripts/ember/routes/
rm -r ../canvas-lms/app/coffeescripts/ember/templates/
rm -r ../canvas-lms/app/coffeescripts/ember/views/

cp -R app/config ../canvas-lms/app/coffeescripts/ember/
cp -R app/controllers ../canvas-lms/app/coffeescripts/ember/
cp -R app/models ../canvas-lms/app/coffeescripts/ember/
cp -R app/routes ../canvas-lms/app/coffeescripts/ember/
cp -R app/templates ../canvas-lms/app/coffeescripts/ember/
cp -R app/views ../canvas-lms/app/coffeescripts/ember/

# sass
cp stylesheets/context_modules2.scss ../canvas-lms/app/stylesheets/

# tests

# vendor?

# img?
