"use-client"
const Marquee = ({ children }) => {
    return (
        <div className="relative overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex">
                {children}
                {children}
            </div>
        </div>
    );
};

export default Marquee;
