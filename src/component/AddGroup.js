import * as React from "react";

class AddGroup extends React.Component {

    emptyGroup = {
        name: '',
        dateOfCreation: ''
    };

    constructor(props) {
        super(props);

        this.state = {
           group: this.emptyGroup
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();

        const group = this.state.group;

        console.log(group);
        alert('d');

        await fetch(`http://localhost:8080/groups/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        });

        window.location.href = `/groups`;

    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        let group = {...this.state.group};
        group[name] = value;
        this.setState({
            group: group
        });
    }

    render() {

        const group = this.state.group;

        return (
             <form onSubmit={this.handleSubmit}>
                 <div>
                     <input type={'text'} name={'name'} defaultValue={group.name} placeholder={'Name...'} onChange={this.handleChange}/>
                     <input type={'date'} name={'dateOfCreation'} defaultValue={group.dateOfCreation} onChange={this.handleChange}/>
                     <button type={'submit'}>Add Group</button>
                 </div>
             </form>
        );
    }
}

export default AddGroup;
