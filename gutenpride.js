
/**
 * Gutenpride
 * A gutenberg block that displays a powered by Gutenberg message
 */

( function( wp ) {
	const el = wp.element.createElement;
	const registerBlockType = wp.blocks.registerBlockType;
	const PlainText = wp.editor.PlainText;

	registerBlockType( 'mkaz/gutenpride', {
		title: 'Gutenpride',
		icon: 'heart',
		category: 'widgets',
		attributes: {
			message: {
				type: 'string',
				default: '❤️  Gutenberg',
			}
		},

		edit: function( props ) {
			const { message } = props.attributes;
			const updateMessage = message => props.setAttributes( { message: message } );

			return el( 'div', { className: 'gutenpride' },
				el( PlainText, {
						value: message,
						onChange: updateMessage,
						placeholder: 'Be proud',
					}
				)
			);
		},

		save: function( props ) {
			const { message } = props.attributes;
			return el( 'div', { className: 'gutenpride' }, message );
		},
	} );
} )( window.wp );
