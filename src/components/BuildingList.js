import React from 'react';
import { Button } from 'react-bootstrap';
import { updateTypeAliasDeclaration } from 'typescript';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, bList, removeBuilding } = this.props;



		const buildingList = bList
		.filter(name => {
			return name.code.toLowerCase().indexOf(filterText.toLowerCase()) >=0
		})
		.map(directory => {
			return (
				<tr key={directory.id}
					onClick={() => selectedUpdate(directory)}
				>
					<td className="code">{directory.code} </td>
					<td className="name"> {directory.name} </td>
					<td
					onClick={() => removeBuilding(directory)}
					>
						<RemoveBuilding className="remove">

						</RemoveBuilding>
					</td>
					
				</tr>
				
			);
		});


		return <tbody>{buildingList}</tbody>;
	}
}
export default BuilingList;

