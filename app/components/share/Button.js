const Button = ({title,className,  ...rest})=>{
    return(
        <button className={`bg-primary font-bold px-5  rounded ${className}`} {...rest}>{title}</button>
    )
}
export default Button;