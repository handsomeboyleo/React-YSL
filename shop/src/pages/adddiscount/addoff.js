import React from 'react'
import 'whatwg-fetch'
import 'es6-promise'
import {fetchpost} from '../../tools/myfetch'

class AddOff extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyvalue = this.handleKeyvalue.bind(this);
        this.handleOfffee = this.handleOfffee.bind(this);
        this.subOff= this.subOff.bind(this)
        this.state = {
            keyvalue: '',
            offfee: ''
        };
    }
    handleKeyvalue(e) {
        this.setState({
            keyvalue: e.target.value,
        })
    }
    handleOfffee(e) {
        this.setState({
            offfee: e.target.value,
        })
    }
    subOff(){
        let formData={
            keyvalue:this.state.keyvalue,
            offfee:this.state.offfee
        }
        console.log(formData)
        fetchpost('/api/addOff', formData)
    }

    render() {
        return (
        <div className='maincontent'>
            <div className="addoff">
                <label>key值:</label>
                <input type='text' name='keyvalue' value={this.state.keyvalue} onChange={this.handleKeyvalue}/>
                <label>抵扣值:</label>
                <input type='text' name='offfee' value={this.state.offfee} onChange={this.handleOfffee}/>
                <button onClick={this.subOff}>新增优惠券</button>
            </div>
        </div>
        )
    }  
}

export default AddOff