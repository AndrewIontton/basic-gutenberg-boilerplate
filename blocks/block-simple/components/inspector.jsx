const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	InspectorControls,
} = wp.blockEditor;
const {
	PanelBody,
} = wp.components;

export default class Inspector extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		return (
			<InspectorControls key="inspector">
					<PanelBody
						title={ __( 'General', 'luna' ) }
						initialOpen={ true }
						className="luna-panel"
            >
              <p>{ __( 'Add Gutenberg components that can alter the component', 'luna' ) }</p>
              <a href="https://developer.wordpress.org/block-editor/tutorials/block-tutorial/block-controls-toolbar-and-sidebar/">{ __( 'See here', 'luna' ) }</a>
					</PanelBody>
			</InspectorControls>
		);
	}
}
