import './Button.css';

const Button = (props) => {
    return(
        <div className='button'>
            <input type='button' className='btn' value={props.title} />
        </div>
    )
}
export default Button;