import React, { Component, Fragment } from "react";

import { Button, ButtonIcon } from "@rmwc/button";
import { SimpleDataTable } from "@rmwc/data-table";
import { Textfit } from "react-textfit";

const columnas = [
  "Modulo",
  "Etiqueta",
  "Fecha",
  "C/C",
  "Causa",
  "Monto ($)",
  "Instancia",
  "Pagado",
  "Rendido",
  "Comentario"
];

class TableFaltantes extends Component {
  render() {
    return (
      <Fragment>
        <SimpleDataTable
          stickyRows
          getRowProps={row => {
            return row[1] > 100 ? { activated: true } : {};
          }}
          getCellProps={(cell, index, isHead) => {
            return !isHead && index === 5 ? { style: { color: "green" } } : {};
          }}
          headers={[columnas]}
          // const columnas = ['Modulo', 'Etiqueta', 'Fecha', 'Turno', 'C/C', 'Causa', 'Monto ($)', 'Instancia','Pagado','Rendido','Comentario']
          data={[
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
                <div className={"max-w-25"}>
              <Textfit mode="multi" min={16} style={{whiteSpace: 'normal'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                animi asperiores, aut beatae cum dolorum eius enim facilis in
                ipsum maiores numquam odit quod, repellendus, rerum similique
                soluta veritatis voluptate!
              </Textfit>
                </div>,
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
                <div className={"max-w-25"}>
                    <Textfit mode="multi" min={16} style={{whiteSpace: 'normal'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        animi asperiores, aut beatae cum dolorum eius enim facilis in
                        ipsum maiores numquam odit quod, repellendus, rerum similique
                        soluta veritatis voluptate!
                    </Textfit>
                </div>
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - NOC ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ],
            [
              "TREN MIXTO",
              "BA03",
              "08/07/2018 - DIA ",
              "7",
              "FALTANTE DE ENTREGA DE EFECTIVO",
              29,
              "CUARTA",
              "03/10/2018 - $29",
              "SI",
              "AASDSADASDASDASDASDASDASDASDSADASDASDASDASD"
            ]
          ]}
        />
      </Fragment>
    );
  }
}

export default TableFaltantes;
