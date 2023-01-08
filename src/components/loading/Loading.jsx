import './style/component.css';

const Loading = () => {
    return (
        <div className='ring-container'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div >
    )
}

export default Loading;