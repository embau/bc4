import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props;
		//const { name, code, address, coordinates } = data[selectedBuilding]
		//console.log(selectedBuilding)
		if (selectedBuilding.name && selectedBuilding.code && selectedBuilding.address && selectedBuilding.coordinates) {
		return (
			<div className="viewcol">
				<div className="vt">
					<p className="viewtext">
					{' '}
					<i>Click on a name/code to view more information</i>
					</p>
				</div>
				<div className= "vc">
				<ul 
				id="name">
					<li> 
					{selectedBuilding.name}
					</li>
				</ul>
				<ul
				id="code">
					<li> 
					{selectedBuilding.code}
					</li>
				</ul>
				<ul
				id="address">
					<li> 
					{selectedBuilding.address}
					</li>
				</ul>
				<ul
				id="lat">
					<li> 
					{selectedBuilding.coordinates.latitude}
					</li>
				</ul>
				<ul
				id="long">
					<li> 
					{selectedBuilding.coordinates.longitude}
					</li>
				</ul>
				</div>
			</div>
			
		);
		}
		else if (selectedBuilding.address) {
			return (
			<div className="viewcol">
			<p>
				{' '}
				<i>Click on a name/code to view more information</i>
			</p>
			<ul
			id="name">
				<li> 
				{selectedBuilding.name}
				</li>
			</ul>
			<ul
			id="code">
				<li> 
				{selectedBuilding.code}
				</li>
			</ul>
			<ul
			id="address">
				<li> 
				{selectedBuilding.address}
				</li>
			</ul>	
		</div>
			);
		}
		else if (!selectedBuilding.name && !selectedBuilding.code && !selectedBuilding.address && !selectedBuilding.coordinates) {
			return (
				<div className="viewcol">
					<p>
				{' '}
				<i>Click on a name/code to view more information</i>
			</p>
				</div>
			);
		}
		else {
			return (
				<div className="viewcol">
					<p>
						{' '}
						<i>Click on a name/code to view more information</i>
					</p>
					<ul
					id="name">
						<li> 
						{selectedBuilding.name}
						</li>
					</ul>
					<ul
					id="code">
						<li> 
						{selectedBuilding.code}
						</li>
					</ul>
				</div>
				
			);
		}
	}
}
export default ViewBuilding;
