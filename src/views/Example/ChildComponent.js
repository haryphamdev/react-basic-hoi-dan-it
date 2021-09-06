import React from 'react';

class ChildComponent extends React.Component {


    //key:value
    state = {
        firstName: '',
        lastName: ''
    }

    /* 
    JSX => return block
    fragment
    */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }
    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <div>child component: {this.props.name}</div>
            </>
        )

    }
}

export default ChildComponent;
