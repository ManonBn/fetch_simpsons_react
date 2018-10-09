import  React  from  'react';

const  GenerateQuote = ({ selectCitation}) => {
    return (
        <div  className="GenerateCitation">
        <button  onClick={selectCitation}>Get quote</button>
        </div>
    );
};

export  default  GenerateQuote;