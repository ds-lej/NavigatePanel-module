const mix = require('laravel-mix');

mix.setPublicPath('../../public/assets');

mix.js(__dirname + '/Resources/assets-dev/js/app.js', 'modules/navigatepanel/navigatepanel.js')
   .sass( __dirname + '/Resources/assets-dev/sass/app.scss', 'modules/navigatepanel/navigatepanel.css');

if (mix.inProduction())
{
    mix.copy('../../public/assets/modules/navigatepanel/navigatepanel.js', 'Resources/assets/navigatepanel.js');
    mix.copy('../../public/assets/modules/navigatepanel/navigatepanel.css', 'Resources/assets/navigatepanel.css');
}