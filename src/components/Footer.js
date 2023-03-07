import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Style.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <p>
            lorem lorem  punto di riferimento per tutte le novità della moda, ASOS offre abbigliamento e 
            accessori donna imperdibili, per sentirti al massimo ovunque. ASOS DESIGN, una vera icona
             di stile, ha collezioni per ogni occasione e per tutti i gusti, dallo smart casual per uscire agli
             lorem lorem  punto di riferimento per tutte le novità della moda, ASOS offre abbigliamento e 
            accessori donna imperdibili, per sentirti al massimo ovunque. ASOS DESIGN, una vera icona
             di stile, ha collezioni per ogni occasione e per tutti i gusti, dallo smart casual per
            </p>
         </div>
         <ul style={{display:"inline-flex", margin:"10px "  ,listStyle:"none",width:"100%",justifyContent:"space-around",
        }} >
                <li style={{ overflow:"hidden", borderRadius:"10px" }}> <a href='##'><img src="./imgs/visa-electron-png.webp" alt=''/></a> </li>
                <li style={{ overflow:"hidden", borderRadius:"10px" }}> <a href='##'><img src='./imgs/mastercard-png.webp'alt=''/></a> </li>
                <li style={{ overflow:"hidden", borderRadius:"10px" }}> <a href='##'><img src='./imgs/visa-png.webp'alt=''/></a></li>
                <li style={{ overflow:"hidden", borderRadius:"10px" }}> <a href='##'><img src='./imgs/pay-pal-png.webp'alt=''/></a></li>
                <li style={{ overflow:"hidden", borderRadius:"10px" }}><a href='##'><img src='./imgs/nexi-png.webp'alt=''/></a></li>
               
            </ul>
            <Container >
            <Row md={3} xs={1} lg={4}style={{color:"white" }} >
              <Col >
                <h5 > Per conoscerci meglio</h5> 
                <small>  Opportunità di lavoro
                 Informazioni su nebra
                 Sostenibilità
                AGCM - Impegni Nebra Procedimento PS 11716
                 nebra Science</small>
              </Col>
              <Col >
                <h5> Guadagna con Nebra</h5> 
                <small>  Opportunità di lavoro
                 Informazioni su Nebra
                 Sostenibilità
                AGCM - Impegni Nebra Procedimento PS 11716
                 nebra Science</small>
              </Col>
              <Col >
                <h5>Metodi di pagamento Nebra </h5> 
                <small> Metodi di pagamento
                  Convertitore di Valuta Amazon
                    Buoni Regalo
                    Ricarica online
                    Ricarica in cassa</small>
              </Col>
              <Col >
                <h5>Bisogno di aiuto? </h5> 
                <a href='##'>  Opportunità di lavoro
                 Informazioni su Nebra
                 Sostenibilità
                AGCM - Impegni Nebra Procedimento PS 11716
                 Nebra Science</a>
              </Col>
            </Row>
            </Container>
            
    </div>
  )
}

export default Footer