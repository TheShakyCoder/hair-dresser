<?php

return [
    'fullname' => env('SITE_FULLNAME', 'Acme Hairdressers'),
    'address' => env('SITE_ADDRESS', '24 High Street, Penwortham, Preston, PR1 0AB'),
    'telephone' => env('SITE_TELEPHONE', '01772 378 415'),
    'email' => env('SITE_EMAIL', 'hello@acmehairdressers.co.uk'),
    'established' => env('SITE_ESTABLISHED', '2014'),
    'opening_times' => "Tuesday - Friday: 9:00am - 7:00pm<br>Saturday: 9:00am - 5:00pm<br>Sunday - Monday: Closed",

    'social' => [
        'instagram' => 'https://www.instagram.com/acmehairdressers/',
        'facebook' => 'https://www.facebook.com/acmehairdressers',
        'tiktok' => 'https://www.tiktok.com/@acmehairdressers',
    ],

    'nav_links' => [
        ['label' => 'Services', 'href' => '#services'],
        ['label' => 'Our Salon', 'href' => '#about'],
        ['label' => 'The Team', 'href' => '#team'],
        ['label' => 'Journal', 'href' => '/news-updates'],
        ['label' => 'Visit Us', 'href' => '#contact'],
    ],

    'robots_allowed' => env('ROBOTS_ALLOWED', false),
];
