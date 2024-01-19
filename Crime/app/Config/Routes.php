<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::Home');
$routes->get('/Register_Fir', 'Register_Fir::Register_Fir');
$routes->get('/User_Login', 'User_Login::User_Login');
$routes->get('/Misiing_Person', 'Missing_Person::Missing_Person');
$routes->get('/Police_Login', 'Police_Login::Police_Login');
$routes->get('/Crime', 'Crime::Crime');
$routes->get('/contact_us','contact_us::contact_us');

$routes->post('/adduser','User_Login::adduser');
$routes->get('view_user','User_Login::view_user');
$routes->get('crime','CrimeController::index');
$routes->get('create-crime','CrimeController::create');
$routes->post('add-crime','CrimeController::save');

$routes->post('/addpolice','Police_Login::addpolice');
$routes->get('view_police','Police_Login::view_police');
$routes->get('crime','CrimeController::index');
$routes->get('create-crime','CrimeController::create');
$routes->post('add-crime','CrimeController::save');


$routes->post('/addfir','Register_Fir::addfir');
$routes->get('view_fir','Register_Fir::view_fir');
$routes->get('crime','CrimeController::index');
$routes->get('create-crime','CrimeController::create');
$routes->post('add-crime','CrimeController::save');

$routes->get('view_missing','view_missing::view_missing');
$routes->get('view_contact','view_contact::view_contact');
$routes->get('view_crime','view_crime::view_crime');

$routes->get('edit-crime/(:num)', 'CrimeController::edit/$1');
$routes->post('update-crime', 'CrimeController::update');

$routes->get('delete-crime/(:num)', 'CrimeController::delete/$1');
/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
use App\Controllers\Pages;

$routes->get('pages', [Pages::class, 'login']);
$routes->get('(:segment)', [Pages::class, 'view']);

$routes->get('pages', [Pages::class, 'Register-Fir']);
$routes->get('(:segment)', [Pages::class, 'view']);



if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
