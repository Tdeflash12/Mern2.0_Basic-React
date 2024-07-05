import PropTypes from "prop-types"

const Button =({buttonVitrakoContent,arkocontent}) =>{
    const array=["Abhesh"]
    return(
        <>
        <button>{buttonVitrakoContent}</button>
        <button>{arkocontent}</button>
        
</>
    )
}
// button.defaultProps={
//     buttonVitrakoContent :"abheshmandal249@gmail.com",
// arkoContent:99
// }
button.propTypes={
    arkoContent : PropTypes.stringisRequired
}
export default Button