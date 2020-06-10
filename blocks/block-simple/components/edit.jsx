import Inspector from './inspector';
import SimpleBlock from './simple-block';

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Component } = wp.element;
const {
	RichText,
	withColors,
} = wp.blockEditor;

class Edit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const { attributes, setAttributes } = this.props;   

		return [
      // Include the inspector sidebar.
      <Inspector { ...this.props } key="inspector" />,

      // Include our SimpleBlock component that wraps our content.
			<SimpleBlock
			key="simple-block"
			{ ...this.props }
			>
				<RichText
					tagName="h2"
					multiline={ false }
					placeholder={ __( 'Heading...' ) }
					keepPlaceholderOnFocus={ true }
					value={ attributes.heading }
					className={ `${this.props.className}__heading` }
					onChange={ ( heading ) => setAttributes( { heading } ) }
				/>	
			</SimpleBlock>
		];
	}
}

// Exports the Edit component with Gutenberg built in color options.
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
