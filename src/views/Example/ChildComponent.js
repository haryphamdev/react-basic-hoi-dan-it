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
        console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        //key:value

        let { name, age, address, arrJobs } = this.props;

        return (
            <>
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })

                    }

                </div>
            </>
        )

    }
}

export default ChildComponent;
