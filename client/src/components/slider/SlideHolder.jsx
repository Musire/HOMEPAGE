const SlideHolder = ({ children }) => {
    return ( 
        <div className="relative w-full p-8 bg-blue-200 xs:h-[28rem] md:h-full pt-28">
            { children }
        </div>
     );
}
 
export default SlideHolder;