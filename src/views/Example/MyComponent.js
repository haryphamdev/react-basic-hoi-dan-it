import React from 'react';

class MyComponent extends React.Component {


    //key:value
    state = {
        name: '',
        channel: 'Hoi Dan IT',
    }

    /* 
    JSX => return block
    fragment
    */


    handleOnChangeName = (event) => {

        // this.state.name = event.target.value;  //bad code
        //merge
        this.setState({
            name: event.target.value,
        })
    }

    handleClickButton = () => {
        alert('click me')
    }

    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state['name']}
                </div>
                <div className="second">
                    My youtube channel : {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )

    }
}

export default MyComponent;
