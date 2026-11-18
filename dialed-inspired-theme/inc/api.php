<?php
/**
 * Custom REST API Endpoints for Dialed Coffee Headless Frontend
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'dialed/v1', '/products', array(
        'methods'  => 'GET',
        'callback' => 'dialed_get_products_endpoint',
        'permission_callback' => '__return_true'
    ) );
} );

function dialed_get_products_endpoint() {
    $products = array(
        array(
            'id' => 'dialed-original-black',
            'name' => 'Original Black',
            'listing_price' => 45.99,
            'detail_price' => 44.99,
            'currency' => 'USD',
            'rating' => 4.8,
            'pack_size' => '12 Pack',
            'volume' => '355 ml',
            'caffeine' => '200 mg'
        ),
        array(
            'id' => 'dialed-toasted-vanilla',
            'name' => 'Toasted Vanilla',
            'listing_price' => 45.99,
            'detail_price' => 44.99,
            'currency' => 'USD',
            'rating' => 4.9,
            'pack_size' => '12 Pack',
            'volume' => '355 ml',
            'caffeine' => '180 mg'
        ),
        array(
            'id' => 'smooth-mocha',
            'name' => 'Smooth Mocha',
            'listing_price' => 45.99,
            'detail_price' => 44.99,
            'currency' => 'USD',
            'rating' => 4.8,
            'pack_size' => '12 Pack',
            'volume' => '355 ml',
            'caffeine' => '180 mg'
        ),
        array(
            'id' => 'dialed-variety-pack',
            'name' => 'Variety Pack',
            'listing_price' => 47.99,
            'detail_price' => 47.99,
            'currency' => 'USD',
            'rating' => 4.9,
            'pack_size' => '12 Pack',
            'volume' => '355 ml',
            'caffeine' => '180 - 200 mg'
        )
    );

    return rest_ensure_response( $products );
}
