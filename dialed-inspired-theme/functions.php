<?php
/**
 * Dialed Inspired Theme Functions and Definitions
 *
 * @package Dialed_Inspired_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function dialed_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );

    register_nav_menus( array(
        'primary' => __( 'Primary Navigation', 'dialed-theme' ),
        'footer'  => __( 'Footer Navigation', 'dialed-theme' ),
    ) );
}
add_action( 'after_setup_theme', 'dialed_theme_setup' );

function dialed_theme_scripts() {
    wp_enqueue_style( 'dialed-style', get_stylesheet_uri(), array(), '1.0.0' );
    wp_enqueue_style( 'dialed-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap', array(), null );
}
add_action( 'wp_enqueue_scripts', 'dialed_theme_scripts' );

// REST API Endpoints for Headless React Integration
require_once get_template_directory() . '/inc/api.php';
