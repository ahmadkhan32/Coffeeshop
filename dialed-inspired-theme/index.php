<?php
/**
 * Main Template File
 */
get_header(); ?>
<main id="primary" class="site-main py-16 max-w-7xl mx-auto px-4">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            the_content();
        endwhile;
    endif;
    ?>
</main>
<?php get_footer();
