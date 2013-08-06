rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/config/
rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/controllers/
rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/models/
rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/routes/
rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/templates/
rm -r ../canvas-lms/app/coffeescripts/ember/context_modules2/views/

cp -R app/config ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R app/controllers ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R app/models ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R app/routes ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R app/templates ../canvas-lms/app/coffeescripts/ember/context_modules2/
cp -R app/views ../canvas-lms/app/coffeescripts/ember/context_modules2/

cp stylesheets/context_modules2.scss ../canvas-lms/app/stylesheets/

# sass

# vendor?

# img?