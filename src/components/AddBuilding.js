import React from 'react';
import { Button } from 'react-bootstrap';

class AddBuilding extends React.Component {
	codeUpdate() {
		const v = this.codeText.value
        this.props.codeUpdate(v)
	}
	nameUpdate() {
		const v = this.nameText.value
        this.props.nameUpdate(v)
	}
	addUpdate() {
		const v = this.addText.value
        this.props.addUpdate(v)
	}
	latUpdate() {
		const v = this.latText.value
        this.props.latUpdate(v)
	}
	longUpdate() {
		const v = this.longText.value
        this.props.longUpdate(v)
	}
	render() {
		const {addBuilding} = this.props;
		return (
			<div className="addcol">
				<p>
					Input info to add a building to the directory!
				</p>
				<form>
					<input 
					type="text" 
					placeholder="Code" 
					ref={ (input) => this.codeText = input }
					onChange={this.codeUpdate.bind(this)}
					
					/>
					<input 
					type="text" 
					placeholder="Name" 
					ref={ (input) => this.nameText = input }
					onChange={this.nameUpdate.bind(this)}
					
					/>
					<input 
					type="text" 
					placeholder="Address" 
					ref={ (input) => this.addText = input }
					onChange={this.addUpdate.bind(this)}
					
					/>
					<input 
					type="text" 
					placeholder="Latitude" 
					ref={ (input) => this.latText = input }
					onChange={this.latUpdate.bind(this)}
					
					/>
					<input 
					type="text" 
					placeholder="Longitude" 
					ref={ (input) => this.longText = input }
					onChange={this.longUpdate.bind(this)}
					
					/>
					<Button className="submit"
					onClick={() => addBuilding()}
					color="primary" 
					size="sm">Submit</Button>{' '}
				</form>
			</div>
			
		);
	}
}
export default AddBuilding;
