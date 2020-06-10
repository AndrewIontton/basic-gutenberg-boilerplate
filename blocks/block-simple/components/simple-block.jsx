const { Component } = wp.element;

export default class SimpleBlock extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
    const { attributes } = this.props;

		return (
			<div className={ this.props.className }>
        { this.props.children }
      </div>
		);
	}
}
