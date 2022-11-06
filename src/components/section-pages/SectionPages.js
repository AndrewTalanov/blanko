import "./SectionPages.scss";

const SectionPages = (props) => {

    const { title, data } = props;

    return (

        <section className="section-pages container">
            <h2>{title}</h2>
            <div className="pages-items">
                {data.map((item, id) => {
                    return (
                        <div key={id} className="pages-item">
                            <img src={item.img} alt="template page" />
                            <h3>{item.title}</h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SectionPages;