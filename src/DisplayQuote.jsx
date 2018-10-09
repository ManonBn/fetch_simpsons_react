import  React  from  'react';

const  DisplayQuote = ({ citation }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={citation.image}  alt="picture"  />
            <ul>
                <li>Quote : {citation.quote}</li>
                <li>
                    Character : {citation.character.name}
                </li>
                <li>
                    Image : {citation.image}
                </li>
                <li>
                    characterDirection : {citation.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;