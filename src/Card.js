function Card(props){
    return(
     
                <div className="card">
                  <img className="imgSize" src={props.imgsrc} alt="Card demos" width="300" height="250"/>
                <div className="card-body">
                <h2 class="card-title">{props.title}</h2>
                <p class="card-text">{props.sname}</p>
                <a href={props.link} class=" btn btn-dark stretched-link " style={{width:'150px'}}>
                    Watch Now
                </a>
                </div>
            </div>
        

    
    );
}

export default Card;