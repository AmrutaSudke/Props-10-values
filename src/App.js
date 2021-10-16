import './App.css';
import Data from './Data';
import Card from './Card';
import Card1 from './Card1';
import Dt from './Dt';




function App() {

  return (
<>
<div className="container">
  <div className="row">
    <div className="col-md-6">
    <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        sname={Data[0].sname}
        link={Data[0].link}

        
      />



<Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        sname={Data[1].sname}
        link={Data[1].link}

       
      />
<Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        sname={Data[2].sname}
        link={Data[2].link}
      />

<Card
        imgsrc={Data[3].imgsrc}
        title={Data[3].title}
        sname={Data[3].sname}
        link={Data[3].link}
      />
<Card
        imgsrc={Data[4].imgsrc}
        title={Data[4].title}
        sname={Data[4].sname}
        link={Data[4].link}
      />

<Card
        imgsrc={Data[5].imgsrc}
        title={Data[5].title}
        sname={Data[5].sname}
        link={Data[5].link}
      />

<Card
        imgsrc={Data[6].imgsrc}
        title={Data[6].title}
        sname={Data[6].sname}
        link={Data[6].link}
      />

<Card
        imgsrc={Data[7].imgsrc}
        title={Data[7].title}
        sname={Data[7].sname}
        link={Data[7].link}
      />

<Card
        imgsrc={Data[8].imgsrc}
        title={Data[8].title}
        sname={Data[8].sname}
        link={Data[8].link}
      />
      <Card
        imgsrc={Data[9].imgsrc}
        title={Data[9].title}
        sname={Data[9].sname}
        link={Data[9].link}
      />




    </div>

    <div className="col-md-6">
    <Card1
        imgsrc1={Dt[0].imgsrc1}
        title1={Dt[0].title1}
        sname1={Dt[0].sname1}
        link1={Dt[0].link1}

        
      />

<Card1
        imgsrc1={Dt[1].imgsrc1}
        title1={Dt[1].title1}
        sname1={Dt[1].sname1}
        link1={Dt[1].link1}

        
      />
      <Card1
        imgsrc1={Dt[2].imgsrc1}
        title1={Dt[2].title1}
        sname1={Dt[2].sname1}
        link1={Dt[2].link1}

        
      />
      <Card1
        imgsrc1={Dt[3].imgsrc1}
        title1={Dt[3].title1}
        sname1={Dt[3].sname1}
        link1={Dt[3].link1}

        
      />
      <Card1
        imgsrc1={Dt[4].imgsrc1}
        title1={Dt[4].title1}
        sname1={Dt[4].sname1}
        link1={Dt[4].link1}

        
      />
      <Card1
        imgsrc1={Dt[5].imgsrc1}
        title1={Dt[5].title1}
        sname1={Dt[5].sname1}
        link1={Dt[5].link1}

        
      />
      <Card1
        imgsrc1={Dt[6].imgsrc1}
        title1={Dt[6].title1}
        sname1={Dt[6].sname1}
        link1={Dt[6].link1}

        
      />
      <Card1
        imgsrc1={Dt[7].imgsrc1}
        title1={Dt[7].title1}
        sname1={Dt[7].sname1}
        link1={Dt[7].link1}

        
      />
      <Card1
        imgsrc1={Dt[8].imgsrc1}
        title1={Dt[8].title1}
        sname1={Dt[8].sname1}
        link1={Dt[8].link1}

        
      />
      <Card1
        imgsrc1={Dt[9].imgsrc1}
        title1={Dt[9].title1}
        sname1={Dt[9].sname1}
        link1={Dt[9].link1}

        
      />

    </div>

  </div>

</div>

</>


       );
}

export default App;
