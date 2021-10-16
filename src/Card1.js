function Card1(props){
    return(
       
            <div class="card">
                      <img className="imgSize" src={props.imgsrc1} alt="Card demos" width="300" height="250"/>
                   <div class="card-body">
                        <h2 class="card-title">{props.title1}</h2>
                        <p class="card-text">{props.sname1}</p>
                        <a href={props.link1} class="btn btn-dark stretched-link" style={{width:'150px'}}>
                            Watch Now </a>
                         </div>


        </div>
    );
}

export default Card1;