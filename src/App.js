import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      bList: [],
      removeIndex: -1,
      inText: '',
      newCode: '',
      newName: '',
      newAdd: '',
      newLat: '',
      newLong: ''
    };
  }
  componentWillMount() {
    this.setState ({
      ...this.state,
      bList : this.props.data,
    })
  }

  updateShown(id) {
    var list = this.state.bList
    if (list.indexOf(id) == -1 ) {
      this.setState({
        inList: false
      })
    }
  }

  filterUpdate(value) {
    console.log(value)
    this.setState({
      filterText: value
    })
  }

  codeUpdate(value) {
    console.log(value)
    this.setState({
      newCode : value
    })
  }
  nameUpdate(value) {
    console.log(value)
    this.setState({
      newName : value
    })
  }
  addUpdate(value) {
    console.log(value)
    this.setState({
      newAdd : value
    })
  }
  latUpdate(value) {
    console.log(value)
    this.setState({
      newLat : value
    })
  }
  longUpdate(value) {
    console.log(value)
    this.setState({
      newLong : value
    })
  }

  selectedUpdate(id) {
    console.log('update',id)
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding() {
    var builList = this.state.bList;
    var building = Object.assign({}, builList[0]);
    building.id = builList.length + 1;
    building.code = this.state.newCode;
    building.name = this.state.newName;
    building.address = this.state.newAdd;
    building.coordinates.latitude = this.state.newLat;
    building.coordinates.longitude = this.state.newLong;
    builList = this.state.bList.concat(building);
    this.setState({
      bList: builList
    })
  }

  removeBuilding(id) {
    console.log('remove id', id)
    var list = this.state.bList
    var index = list.indexOf(id)
    console.log('index',index)
    list.splice(index,1)
    this.setState({
      bList : list
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
  
        <Search
        filterText={this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b className="c">Code</b>
                    </td>
                    <th className="b">Building</th>
                  </tr>
                  <BuildingList className="bl"
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedBuilding={this.state.selectedBuilding}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                    updateShown={this.removeBuilding.bind(this)}
                    bList={this.state.bList}

                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <div className="view">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              />
              </div>
              <div className="add">
              <AddBuilding
              data={this.props.data}
              bList={this.state.bList}
              codeUpdate={this.codeUpdate.bind(this)}
              nameUpdate={this.nameUpdate.bind(this)}
              addUpdate={this.addUpdate.bind(this)}
              latUpdate={this.latUpdate.bind(this)}
              longUpdate={this.longUpdate.bind(this)}
              addBuilding={this.addBuilding.bind(this)}
              />
              </div>
              
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
