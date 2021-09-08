import React from 'react';

// class ChildComponent extends React.Component {
//     //re-render
//     render() {
//         console.log('>>> check props: ', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         //key:value

//         let { name, age, address, arrJobs } = this.props;

//         return (
//             <>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })

//                     }

//                 </div>
//             </>
//         )

//     }
// }

const ChildComponent = (props) => {

    let { arrJobs } = props;

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
export default ChildComponent;
