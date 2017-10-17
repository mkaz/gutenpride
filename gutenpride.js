
/**
 * Gutenpride
 * A gutenberg block that displays a powered by Gutenberg message
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const label = __( 'This post proudly created in' );

registerBlockType( 'mkaz/gutenpride', {
	title: 'Gutenpride',
	icon: 'heart',
	category: 'widgets',
	edit() {
		
		return (
			<div>
				❤️ { label } <a href="https://wordpress.org/plugins/gutenberg/">Gutenberg</a>
			</div>
		);
	},
	save() {
		return (
			<div>
				❤️ { label } <a href="https://wordpress.org/plugins/gutenberg/">Gutenberg</a>
			</div>
		);
	},
} );
