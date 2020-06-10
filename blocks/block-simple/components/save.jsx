import SimpleBlock from './simple-block';

const { Component } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
	render() {    
		const { attributes } = this.props;

		return (
			<SimpleBlock { ...this.props }>
				<RichText.Content
					tagName="h2"
					value={ attributes.heading }
					className={ `${this.props.className}__heading` }
				/>
        <RichText.Content
          tagName="p"
          value={ attributes.introduction }
          className={ `${this.props.className}__introduction` }
        />
			</SimpleBlock>
		)
	}
}
