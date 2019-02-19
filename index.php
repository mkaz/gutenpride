<?php
/*
Plugin Name:  Gutenpride
Plugin URI:   https://github.com/mkaz/gutenpride
Description:  A simple example block displaying Gutenberg pride
Author:       Marcus Kazmierczak
Author URI:   https://mkaz.blog/
*/


/**
 * Enqueue assets for editor portion of Gutenberg
 */
function mkaz_gutenpride_editor_assets() {
	wp_enqueue_script(
		'mkaz-gutenpride',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-editor' )
	);

}
add_action( 'enqueue_block_editor_assets', 'mkaz_gutenpride_editor_assets' );

function mkaz_gutenpride_view_assets() {
	wp_enqueue_style(
		'mkaz-gutenpride-style',
		plugins_url( 'style.css', __FILE__ )
	);
}
add_action( 'wp_enqueue_scripts', 'mkaz_gutenpride_view_assets' );
add_action( 'admin_enqueue_scripts', 'mkaz_gutenpride_view_assets' );
