<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-[#0D0D0D] text-white' ); ?>>
<header class="site-header">
    <div class="top-announcement-bar bg-[#E58A2B] text-black text-xs font-bold text-center py-2">
        FREE SHIPPING ON ORDERS OVER $60 • CODE: DIALED10
    </div>
    <div class="header-container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo text-2xl font-black tracking-widest text-white">
            DIALED
        </a>
        <nav class="main-navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-menu flex space-x-6 text-sm font-bold uppercase',
            ) );
            ?>
        </nav>
        <div class="header-cart-icon">
            <a href="<?php echo wc_get_cart_url(); ?>" class="cart-link text-white font-bold">
                Cart (<?php echo WC()->cart->get_cart_contents_count(); ?>)
            </a>
        </div>
    </div>
</header>
