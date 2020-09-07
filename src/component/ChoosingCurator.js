import * as React from "react";
import '../css/choosingCurator.css'

class ChoosingCurator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notCurators: [],
            selectedCuratorId: '',
            isLoading: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:8080/teachers/notCurator`);
        const notCurators = await response.json();

        this.setState({
            notCurators: notCurators,
            isLoading: false,
            selectedCuratorId: notCurators[0].id
        });
    }

    async handleSubmit() {
        const curatorId = this.state.selectedCuratorId;
        const groupId = this.props.groupId;

        await fetch(`http://localhost:8080/groups/${groupId}/curator/${curatorId}`);

        window.location.href = `/groups/${groupId}`;
    }

    handleChange(event) {
        event.preventDefault();
        const curatorId = event.target.value;

        this.setState({
           selectedCuratorId: curatorId
        });
    }

    render() {

        if(this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        return (
            <div id={'main__div'}>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        {
                            this.state.notCurators.map((curator) => {
                                return <option key={curator.id} value={curator.id}>{curator.firstName + ' ' + curator.lastName}</option>
                            })
                        }
                    </select>
                    <button id={'addCuratorButton'} type={'submit'}>Add Curator</button>
                </form>
            </div>
        );
    }
}

export default ChoosingCurator;
