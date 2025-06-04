

interface Props {
    id: number;
    name: string;
    image: string;
    text: string;
    job: string;
}

export const Card = (props: Props) => {
    const { name, image, text, job } = props;
    return (<div className='review'>
        <div className='img-container'><img className='person-img' src={image} alt={name}/></div>
        <h2 className='author'>{name}</h2>
        <h3 className='job'>{job}</h3>
        <p className='info'>{text}</p>
    </div>)
}