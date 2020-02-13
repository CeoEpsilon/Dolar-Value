
import React, { useState, useEffect } from "react";
import "./Dolar.css";
import { Table } from "react-bootstrap";


function Dolar() {
    const [valor, setValor] = useState({
        timestamp: "",
        quotes: {
            USDARS: "",
            USDCLP: "",
            USDCOP: "",
            USDMXN: "",
            USDPYG: ""
        }
    })
    function fecha() {
        let dateObj = new Date(valor.timestamp * 1000);
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth() + 1;
        let day = dateObj.getDate();
        
        if (month < 10) {
            return `Fecha : ${day}/0${month}/${year}`;
        } else {
            return `Fecha : ${day}/${month}/${year}`;
        }
    }
    function getValor() {
        fetch("http://api.currencylayer.com/live?access_key=5a155e26bba31e6a84bdd459167edf79")
            .then(response => {
                let respjson = response.json()
                console.log(respjson)
                return respjson
            })
            .then(json => {
                setValor(json);
            })
    }

    useEffect(() => {
        getValor();
    }, []);

    return (
        <div className="container">
            <div id="idHora">
               <p id="hora">{fecha()}</p> 
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Moneda</th>
                        <th scope="col">Valor Ref: 1 Dólar</th>
                        <th scope="col">Simbolo</th>
                        <th scope="col">País</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="monedaTextStyle" scope="row">Peso Argentino</th>
                        <td className="valorDolar">{valor.quotes.USDARS}</td>
                        <td>ARS</td>
                        <td classname="tdFlag"><div><img className="flagStyle" src="../img/Argentina.jpg" alt="Argentina" /></div>Argentina</td>
                    </tr>
                    <tr>
                        <th className="monedaTextStyle" scope="row">Peso Chileno</th>
                        <td className="valorDolar">{valor.quotes.USDCLP}</td>
                        <td>CLP</td>
                        <td classname="tdFlag"><div><img className="flagStyle" src="../img/chile.png" alt="chile" /></div>Chile</td>
                    </tr>
                    <tr>
                        <th className="monedaTextStyle" scope="row">Peso Colombiano</th>
                        <td className="valorDolar">{valor.quotes.USDCOP}</td>
                        <td>COP</td>
                        <td classname="tdFlag"><div><img className="flagStyle" src="../img/colombia.png" alt="colombia" /></div>Colombia</td>
                    </tr>
                    <tr>
                        <th className="monedaTextStyle" scope="row">Peso Mexicano</th>
                        <td className="valorDolar">{valor.quotes.USDMXN}</td>
                        <td>MXN</td>
                        <td classname="tdFlag"><div><img className="flagStyle" src="../img/Mexico.jpg" alt="Mexico" /></div>Mexico</td>
                    </tr>
                    <tr>
                        <th className="monedaTextStyle" scope="row">Guaraní Paraguayo</th>
                        <td className="valorDolar">{valor.quotes.USDPYG}</td>
                        <td>PYG</td>
                        <td classname="tdFlag"><div><img className="flagStyle" src="../img/Paraguay.jpg" alt="Paraguay" /></div>Paraguay</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Dolar;