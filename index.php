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
function gutenpride_init() {
	wp_register_script(
		'gutenpride-script',
		plugins_url( 'gutenpride.js', __FILE__ ),
		array( 'wp-element', 'wp-blocks', 'wp-editor' )
	);

	wp_register_style(
		'gutenpride-style',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'mkaz/gutenpride', array(
		'editor_script' => 'gutenpride-script',
		'editor_style' => 'gutenpride-style',
		'style' => 'gutenpride-style'
	) );

}
add_action( 'init', 'gutenpride_init' );

