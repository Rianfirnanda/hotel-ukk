const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

/*mix.alias({
    "va": 'vue2-admin-lte/src',
    "va-static": 'vue2-admin-lte/static'
})
*/
/*mix.webpackConfig({
    resolve: {
        alias: {
            "va": 'vue2-admin-lte/src',
        }
    }
});

*/
