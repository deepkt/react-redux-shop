import React from 'react';


class NumericStepper extends React.Component {
    update = count=> {
        this.props.onChange(count);
    }
    
    render() {
        const {count} = this.props;
        return(
            <div className='numeric-stepper'>
                <p className='stepper-btn' onClick={e => {if(count > 0) this.update(count-1)}}>-</p>
                <input className="stepper-input" type='number' step={1} value={count}/>
                <p className='stepper-btn' onClick={e => this.update(count + 1)}>+</p>
            </div>
        )
    }
}

export default NumericStepper;