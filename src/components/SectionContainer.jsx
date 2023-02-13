
export const SectionContainer = (props) => {
    return (
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="row fragment">
                    {props.children}
                </div>
            </div>
        </div>
    );
}