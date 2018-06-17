
/**
 * Gutenpride
 * A gutenberg block that displays a powered by Gutenberg message
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PlainText } = wp.editor;

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

	edit( { attributes, setAttributes } ) {
		const { message } = attributes;
		const updateMessage = message => setAttributes( { message } );

		return (
			<div className="gutenpride">
				<PlainText
					value={message}
					onChange={updateMessage}
					placeholder="Be proud"
				/>
			</div>
		);
	},
	save( { attributes } ) {
		const { message } = attributes;
		return (
			<div className="gutenpride">
				{ message }
			</div>
		);
	},
} );
