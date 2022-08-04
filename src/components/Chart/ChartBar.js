import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; // will inform how much the bar should be filled, i.e the percentage of the props.value in relation to the max value
    }


    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div 
                    className='chart-bar__fill' 
                    style={{height: barFillHeight}}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );    
};

export default ChartBar;