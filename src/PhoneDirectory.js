import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Anjali Ram",
                    phone: "6666666666"
                },
                {
                    id: 2,
                    name: "Alisha P",
                    phone: "8787878787"
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    render() {
        return (
            
    
            <Router>
            <Routes>
                
                <Route exact path='/' element={<ShowSubscribers subscribersList={this.state.subscribersList} />} />
                <Route  exact path='/add' element={<AddSubscriber
                  addSubscriberHandler={this.addSubscriberHandler}
                />} />
                
         </Routes> 
         </Router>

                
            
        
        );
    }
}

export default PhoneDirectory;