/**
 * BLOCK: Simple.
 */

import Edit from './components/edit';
import Save from './components/save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'luna/simple-block', {
	title: __( 'Simple Block', 'luna' ),
	description: __( 'Simple block', 'luna' ),
	icon: 'screenoptions',
	category: 'luna-blocks',
	keywords: [
		__( 'luna', 'luna' ),
		__( 'simple', 'luna' ),
		__( 'block', 'luna' ),
	],
	attributes: {
    heading: {
			type: 'string',
			source: 'html',
			selector: 'h2',
    },
    introduction: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	
	edit: ( props ) => {
		return <Edit { ...props } />;
	},

	save: ( props ) => {
		return <Save { ...props } />;
	},
} );
